---
layout: post
tags_color: '#666e76'
title: 'Airbus Test Flight Tracker'
date: 2026-24-10
description: An automated timelapse visualisatiton of Airbus test and operational flights from Hamburg and Toulouse.
tags: [digitalization, stuff, Airbus, finkenwerder, tracking, toulouse, flight, automation, timelapse, beluga]
categories: [digitalization, stuff]
comments: true
image: '/images/posts/2026/test_flights.jpg'
---
![Airbus Test Flights](/images/posts/2026/test_flights.jpg)
Probably like many others I spend way too much time scrolling through Reddit - one of my fav subreddits is MapPorn - maybe its simply being a bit of a data nerd, but I love looking through what people build in there - super useless stuff half the time - but recently I stumbled across a post showing a 24 hour time lapse of [train movements across Germany](https://chillchamp1.github.io/github.io/#eu), turned into a fully animated map. The author had put a crazy amount of thought into the engineering details to keep an enormous dataset feeling (at least visually) quite lightweight - his work really is technically (and visually!) awesome. He'd open sourced his approach so first thing I thought of was how can I steal this base concept and also do something cool with it...

{% include airbus_test_flights.html %}

Airbus has some pretty big facilities across Europe and their test, delivery and Beluga flights I thought could create a cool little ecosystem that looks nothing like standard commercial aviation. Building on what I learned from my previous [A350 tracking project](https://clintbird.com/blog/ghactions-a350-flights-post), I wondered could I build something similar for Airbus test flights?

Here I was thinking to create an automated pipeline to fetch the actual flight paths and publish a rolling 14 day timelapse - as its a Jekyll site it should come out as a standalone HTML widget (a big chunk based on the work from [chillchamp1](https://github.com/chillchamp1)) - with that in mind the high level plan was basically as follows:

- Grab daily flights departing from or arriving at the two major Airbus sites (Toulouse TLS / LFBO & Hamburg XFW / EDHI)
- Filter for the relevant aircraft using callsigns (AIB & BGA) and provisional registrations (F-W & D-A)
- Grab the granular flight path data (lat/lon, altitude, timestamps etc) - this is fundamentally called [ADS-B (Automatic Dependent Surveillance–Broadcast)](https://en.wikipedia.org/wiki/Automatic_Dependent_Surveillance%E2%80%93Broadcast) its where real time flight and position data is automatically broadcast to ground stations and other nearby aircraft.
- Store the data locally / in git (as a poor mans resumable cache) without using an actual database
- Render the animation in the widget via GH Actions

## Identifying The Test Flights

Having previously built that A350 tracker, I decided to jump straight back to the OpenSky Network API I used in that solution - this time round though its slightly trickier as there's no single API endpoint that neatly hands over "all test flights from today" So to get a starting list I decided to query geographically around those main sites (again, focusing on Toulouse LFBO and Finkenwerder EDHI)

To isolate the Airbus operations (from random other commercial flights in the same airspace) I decided to first check for both arrivals and departures at Toulouse (LFBO) and Finkenwerder (EDHI) followed by:

- Callsign checks for AIB (Airbus) and BGA / BCO (Beluga)
- Registration checks for French temporary F-W* / German temporary D-A* (these are used prior to final customer deliveries) and lastly the Beluga fleet (F-GST, F-GXL etc) Basically, OpenSky's API only returns the `icao24` transponder hex code (something also learnt last time round with the A350s) so getting a registration match means cross referencing each flight against OpenSky's `aircraftDatabase.csv` metadata registry.

```
import requests

def get_airport_flights(airport_icao, start_time, end_time):
    flights = []
    for endpoint in ["arrival", "departure"]:
        url = f"https://opensky-network.org/api/flights/{endpoint}?airport={airport_icao}&begin={start_time}&end={end_time}"
        response = requests.get(url)
        if response.status_code == 200:
            flights.extend(response.json())
    return flights
```

For a typical daily window the raw data call was returning roughly 180 flights for Toulouse & Hamburg. With this a simple function filters the raw payload against the known callsigns / metadata to find the likely Airbus relevant aircraft:

```
matched_candidates = [
    {"origin": "TLS", "icao24": "39687b", "callsign": "AIB02XC"},
    {"origin": "TLS", "icao24": "383eba", "callsign": "AIB01SC"},
    {"origin": "XFW", "icao24": "3c1277", "callsign": "AIB477A"},
    {"origin": "XFW", "icao24": "3c1274", "callsign": "AIB907A"}
]
```

## The HTTP 429 Problem & OpenSky Budgets

Finding the candidate list is pretty fast and really not rocket science - pulling the granular track data though (the actual events of timestamp, lat/lon etc) which is needed to animate the actual routes is where the headaches actually started.

My initial approach was a bit hacky / a brute force loop - grab the aircraft, loop through each, request the historical track and save. This worked like magic for about two and a half calls before OpenSky decided to throw back a HTTP 429... Too many requests
![Computer Says No](/images/posts/2026/says_no.gif)

To solve this, I decide to split the pipeline into stages with a simple local JSON setup:

```
{
  "date": "2026-08-17",
  "candidates_discovered": true,
  "flights": {
    "39687b": { "callsign": "AIB02XC", "track_fetched": true },
    "383eba": { "callsign": "AIB01SC", "track_fetched": true },
    "3c1277": { "callsign": "AIB477A", "track_fetched": false },
    "3c1274": { "callsign": "AIB907A", "track_fetched": false }
  }
}
```

From here, tracking could be executed into incremental batches to not hammer the API too hard:

```
import time
import json

def fetch_tracks_incrementally(state_file, max_tracks_per_run=2):
    with open(state_file, 'r') as f:
        state = json.load(f)

    fetched_count = 0
    for icao, details in state['flights'].items():
        if not details['track_fetched']:
            print(f"Fetching track for {details['callsign']}...")
            
            # Request historical track from API
            track_data = get_historical_track(icao)
            
            if track_data:
                save_track_locally(icao, track_data)
                details['track_fetched'] = True
                fetched_count += 1
            
            if fetched_count >= max_tracks_per_run:
                print("Batch limit reached for this execution cycle.")
                break

    with open(state_file, 'w') as f:
        json.dump(state, f, indent=4)
```

Long story short, but it basically meant decoupling the aircraft discovery from the route retrieval and adding some execution limits e.g. (`python3 fetch_day.py --max-tracks 2`). This now allowed the GH Action runner / script to pick up exactly where it left off after an API cool down without having to duplicate or rerun work. A GitHub Actions workflow automates the pipeline, running once a day to grab yesterday's UTC traffic, prune data older than 14 days and rebuilds the map accordingly.

And that's about it - what started as spotting something interesting on Reddit and thinking "wonder how that works" led to me staring at a 429 response for way too long before in the end redesigning the pipelines (not for efficiency or elegance) but simply to dodge API quotas...