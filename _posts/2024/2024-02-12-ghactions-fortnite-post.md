---
layout: post
tags_color: '#666e76'
title: 'Fortnite Stat Tracking'
date: 2024-02-12
description: Utilising GitHubs automated actions feature to track A350 flight locations.
tags: [digitalization, stuff, data, devops, API, fortnite, actions, automation, stats, game, cicd]
categories: [digitalization]
comments: true
image: '/images/posts/2024/fortnite.jpg'
---
![Fortnite](/images/posts/2024/fortnite.jpg)

_⚠️ **IF USING MOBILE BROWSER**: I never designed this experiment / POC for mobile devices (was tricky enough to embed dynamically updated charts & data into a static site so didn't bother with responsive as well) I would highly recommend checking this out on a desktop to ensure everything renders correctly._

{% include fortnite.html %}


Some time ago I come across an article on GitHub Actions functionality and was really curious to come up with a little project to use as an excuse to dive deeper into what they could do. 
In a nutshell, actions enable you to create custom software workflows directly in your Github repository - these workflows basically allow you to run container setups by adding support for docker and docker-compose files to your workflows (in my case a Python 3.9 environment)
Also super cool is that actions are free for every open-source repo and include 2000 free build minutes per month - definitely more than enough for my tiny little project.

### Part 1 - Python Script

So firstly I searched around for a while and stumbled across [Opensky-Network](https://opensky-network.org/datasets/metadata/) which provided quite a comprehensive list of aircraft. From here I created a slimmed-down "master list" of the unique [transponder HEX](https://en.wikipedia.org/wiki/Aviation_transponder_interrogation_modes) codes relevant to each A350:

```python
# Import A350 Dataset & Create List Of Unique A350 HEX Codes
a350_data = pd.read_csv("a350_data.csv")
a350 = a350_data['icao24'].tolist()
```

Next up was to query the OpenSky API and load the response into a pandas data frame, then join in the A350 dataset to basically limit it to A350s and bring in the additional metadata:

```python
# Query OpenSky Network Via Rest API
user_name = ''
password = ''
url_data = 'https://'+user_name+':'+password+'@opensky-network.org/api/states/all?'
response = requests.get(url_data).json()

# Load Response Into DataFrame
column_names = [
    'icao24', 'callsign', 'origin_country', 'time_position' 'last_contact',
    'long', 'lat', 'baro_altitude', 'on_ground', 'velocity', 'true_track',
    'vertical_rate', 'sensors', 'geo_altitude', 'squawk', 'spi',
    'position_source', 'dummy'
]
flight_data = pd.DataFrame(response['states'],columns = column_names)

# Join Datasets To Identify A350s & Tail Details
flight_data_a350 = pd.merge(flight_data, a350_data, on='icao24')
```
