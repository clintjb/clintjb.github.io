---
layout: post
tags_color: '#666e76'
title: 'A350 Flights With GH Actions'
date: 2021-11-16
description: Utilising GitHubs automated actions feature to track A350 flight locations.
tags: [digitalization, airbus, data, devops, API, A350, actions, automation, github, opensky, cicd]
categories: [digitalization]
comments: true
image: '/images/posts/2021/a350.jpg'
---
![Aeroplane](/images/posts/2021/a350.jpg)

<div class="warning">

**NOTE:**
Find the docs [here](http://example.com/).

</div>

> :warning: **If you are using mobile browser**: Be very careful here!

_⚠️ **IF USING MOBILE BROWSER**: I never designed this experiment / POC for mobile devices (was tricky enough to embed dynamically updated charts & data into a static site so didn't bother with responsive as well) I would highly recommend checking this out on a desktop to ensure everything renders correctly._

Some time ago I come across an article on GitHub Actions functionality and was really curious to come up with a little project to use as an excuse to dive deeper into what they could do. 
In a nutshell, actions enable you to create custom software workflows directly in your Github repository - these workflows basically allow you to run container setups by adding support for docker and docker-compose files to your workflows (in my case a Python 3.9 environment)
Also super cool is that actions are free for every open-source repo and include 2000 free build minutes per month - definitely more than enough for my tiny little project.

So with that my first idea was to come up with a little workflow that would be well suited as a python script being run continuously on a schedule. Having worked for so many years on the A350, I thought this could be something of interest to integrate - so come up with the idea to track and map A350s around the world via an API, my high-level plan was as follows:

* Call an API and get current in operation aircraft data
* Filter down this list to A350s only
* Enrich the list with additional metadata (e.g. MSN number etc)
* Plot Lat / Lon locations of each aircraft
* Extract table of data / details

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

From here we now have a clean list of A350s including their longitudinal, latitudinal, altitude, etc. We're now ready to start plotting the data with Plotly onto a geo scatter chart - just to ensure the scatter points remained relevant I created an additional column joining some of the relevant data to act as a label for each point:

```python
# Create Column Containing Relevant A/C Info For The Labels
flight_data_a350['text'] = flight_data_a350['callsign'] + '(' + flight_data_a350['model'] + ') - ' + flight_data_a350['operatorcallsign']

# Plot Locations Of Each A/C
fig = go.Figure(data=go.Scattergeo(
        lon = flight_data_a350['long'],
        lat = flight_data_a350['lat'],
        text = flight_data_a350['text'],
        mode = 'markers',
        marker = dict(
            size = 8,
            opacity = 0.8,
            reversescale = True,
            symbol = 'circle',
            line = dict(
                width=1,
                color='rgba(102, 102, 102)'
            ),
            colorscale = 'Aggrnyl',
            cmin = 0,
            color = flight_data_a350['baro_altitude'],
            cmax = flight_data_a350['baro_altitude'].max(),
            colorbar_title="Alititude"
        )))

fig.update_layout(
    geo_scope = 'world',
)
```

Here you can see the outcome of this chart

{% include a350_map.html %}

Next, I would also like to keep the high-level details and output these directly into a table. To do this I decided to clean the columns, and extract the data as a CSV (you can find that [here][] at the same time also extracting the map as a [static image][] and the map as a [self-contained HTML][]):

[here]: https://raw.githubusercontent.com/clintjb/clintjb.github.io/master/_data/flight_data_a350.csv
[static image]: https://github.com/clintjb/A350-Tracking/blob/main/flight_data_a350.png
[self-contained HTML]: https://htmlpreview.github.io/?https://raw.githubusercontent.com/clintjb/clintjb.github.io/master/_data/flight_data_a350.html

```python
# Prepare Dataset For Export
data_export = flight_data_a350[['callsign', 'model', 'serialnumber', 'baro_altitude', 'on_ground']]
data_export['serialnumber'] = data_export['serialnumber'].astype(str).apply(lambda x: x.replace('.0',''))

data_export['Export'] = datetime.today().strftime('%d/%m/%Y - %H:%M')

columns = {'callsign': 'A/C', 'model': 'Type', 'baro_altitude': 'Altitude', 
           'on_ground': 'Grounded', 'serialnumber': 'MSN'}
data_export.rename(columns=columns, inplace=True)

# Export Data
data_export.to_csv('_data/flight_data_a350.csv', index=False)
fig.write_html("_data/flight_data_a350.html")
fig.write_image("flight_data_a350.png", width=1280, height=720)
```

Finally, I wanted to be able to dynamically load this CSV as a table via JS in Jekyll itself - the final solution was actually based on a Tabulate function which you can find [here](https://jekyllrb.com/tutorials/csv-to-table/)

{% include a350_csv.html %}

### Part 2 - GitHub Actions & Automation

So with my scripts now running locally, it was time to set up my actions in GitHub to have them executed automatically on a CRON schedule every 8 hours - before we get further in the details, you can check the repo out [here](https://github.com/clintjb/A350-Tracking) to see how everything was set up.

First was to commit our script (in this case script.py) and a file called _requirments.txt_ to the root of the repo - this requirements file basically defines what packages will be imported into the VM when spinning it up. In our case, we had the following required packages for my script:

```yaml
datetime
plotly
requests
pandas
kaleido
```

Now we are ready to define the action and configuration of the VM for our python environment. Here we create a directory called _workflows_ located as `/.github/workflows/` - within this directory we create the action file with a YAML extension - in this case `auto_update.yml`:

```yaml
name: Automatic A350 Data Trigger

on:
  schedule:
    - cron: "0 */8 * * *"

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: ~/.cache/pip
          key: ${{ runner.os }}-pip-${{ hashFiles('**/requirements.txt') }}
          restore-keys: |
            ${{ runner.os }}-pip-
            
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: "3.9"
          architecture: "x64"

      - name: Install packages
        run: pip install -r requirements.txt
        
      - name: Run script
        run: python script.py       

      - name: Commit and push changes
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add .
          git commit -m "Updated A350"
          git push
```

Here you can see your basically defining the CRON schedule, what build the VM should have / what Python version / scripts to run etc.

Genuinely a little bit of googling or snooping through the [Actions Marketplace](https://github.com/marketplace?type=actions) will get you on the right track. Couldn't be easier to build a relatively robust pipeline in no time at all.

### Part 3 - Lessons & Future Fixes

~~I don't have too many additional lessons other than what was walked through, nevertheless a few little "buggy" things that would likely be nice to fix up. Firstly my site has a 3rd party cache on it to increase page load performance - this causes all kinds of troubles with the dynamic charts not being refreshed for returning visitors. I don't have a solution in mind yet for this but it's clearly far from ideal.~~
This has also been fixed via a setting up a specific page rule on my Cloudflare account:
```
http://*clintbird.com/blog/ghactions-a350-flights-post
Rocket Loader: Off, Cache Level: Bypass
```

Lastly, the Plotly chart would be nicer via utilizing Mapbox - here though would require securing integration of the access tokens in a public site which I couldn't be bothered with for a quick & dirty proof of concept. Nevertheless was super interesting for a quick project and enormously impressed by what GitHub actions bring to the average joe!
