---
draft: true
layout: post
tags_color: '#666e76'
title: 'Movie Recommendations Overview For The Family'
date: 2024-08-17
description: A Fortnite API combined with GitHub actions & secrets to generate a player profile card.
tags: [digitalization, stuff, data, devops, API, fortnite, actions, automation, stats, games, cicd, secrets]
categories: [digitalization, stuff]
comments: true
image: '/images/posts/2024/recommendations.jpg'
---
![Recommendations](/images/posts/2024/recommendations.jpg)

My son recently got his first PC and we were discussing over breakfast that there's more you can use PCs for than just playing games! 🤯

This led us to have a think about what interesting projects we could do together over the weekend and hence the idea of creating a profile card of his Fortnite account and all the top stats would be something cool - you can see the final results below:

{% include movies.html %}

Our thought process was here was to utilize GitHub actions to automate the pipeline and probably build a variant of the [A350 tracking project](https://clintbird.com/blog/ghactions-a350-flights-post) I created some time ago. So our plan was to come up with a simple workflow running in a Python script, continuously updating via a schedule. The high-level plan was as follows:

* Call an API and get current account data
* Filter & aggregate payload down to the stats that interested us
* Embed the results into the profile card / HTML template (with skin/profile pic) and extract them for use in my static Jekyll website

### Part 1 - API Call

So firstly we did a quick search and found [FortniteAPI.io](https://fortniteapi.io/) which provided quite a number of endpoints - investigating a little more the v1/stats looked exactly like what we were after. We signed up for an account to get the API key, looked up his account ID, and set up a config/function for a simple call:

```python
SECRET = os.environ['ENV_SECRET']

def get_fortnite_data(api_key):
    url = "https://fortniteapi.io/v1/stats?account=5afc257cdbf8408ebebcf241a681a1e9"
    headers = {
        "Authorization": api_key,
        "Content-Type": "application/json"
    }

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        print("Cant connect to the API:", e)
        return None
```

Locally this was all running fine, the biggest challenge here was working out how to store the API key as a secret and call it within GitHub Actions. Storing the variable is the simple part - this was done by setting up an environment (in this case called ENV_SECRET) and an environment secret, called FORTNITE_SECRET (this is done in the secrets & variables section in the security settings for the repo)

To ensure this secret is available and cascaded down into the environment for the script to utilize though was slightly trickier. This was achieved in the end by setting up the YAML workflow config - the main points was to specify the environment within the build and the secret itself during the call of the script - you can see the setup below: 

```yaml
name: Manual Fortnite API Trigger

on: workflow_dispatch

jobs:
  build:
    environment: ENV_SECRET
    runs-on: ubuntu-latest

    steps:
      
      - uses: actions/checkout@v2

      - uses: actions/cache@v2
        with:
          path: ~/.cache/pip
          key: ${{ runner.os }}-pip-${{ hashFiles('**/requirements.txt') }}
          restore-keys: |
            ${{ runner.os }}-pip-

      - name: Setting up Python
        uses: actions/setup-python@v2
        with:
          python-version: "3.9"
          architecture: "x64"

      - name: Running Scripts
        env:
          ENV_SECRET: ${{ secrets.FORTNITE_SECRET }} 
        run: |
          pip install -r requirements.txt
          python script.py
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add .
          git commit -m "Updated Fortnite"
          git push
```

### Part 2 - Stats & Variables

Now that the secret was accessible and being cascaded correctly we could continue with the Python script which was now calling the API, consolidate some of the stats based on the payload, and in general just prepare the results as variables for the HTML template in the later steps.

Here you will see the API usually splits the values per game style (e.g. solo/duos/teams etc) we decided in this case we wanted to take the overall values and aggregate them as totals/averages. In addition to this, we also knew we wanted a profile picture for the summary card, here we were thinking of also making this update randomly with his favorite skins. The approach here would be just to have 20 images stored and randomly assign one in the HTML template. You can see the setup below:

```python
def main():
    api_key = SECRET

    # Fetch Fortnite data
    api_response = get_fortnite_data(api_key)

    if api_response:
        # Calculate & store top level stats for processing in HTML
        level = api_response["account"]["level"]
        top1_sum = sum([mode_stats["placetop1"] for mode_stats in api_response["global_stats"].values()])
        kd_average = round(sum([mode_stats["kd"] for mode_stats in api_response["global_stats"].values()]) / len(api_response["global_stats"]), 2)
        winrate_average = round((sum([mode_stats["winrate"] for mode_stats in api_response["global_stats"].values()]) / len(api_response["global_stats"])) * 100, 2)
        kills_sum = sum([mode_stats["kills"] for mode_stats in api_response["global_stats"].values()])

        # Additional processing with api_response

        # Return all variables
        return level, top1_sum, kd_average, winrate_average, kills_sum

    else:
        print("Failed to fetch Fortnite data.")
        return None, None, None, None, None

if __name__ == "__main__":
    level, top1_sum, kd_average, winrate_average, kills_sum = main()

    if level is not None:
        print("Level value:", level)
        print("Sum of all 'placetop1':", top1_sum)
        print("Average of all 'kd':", kd_average)
        print("Average of all 'winrate':", winrate_average)
        print("Sum of all 'kills':", kills_sum)
    else:
        print("Failed to retrieve Fortnite data.")

skin = (random.randint(1, 20))

# Get todays date & format as string
today = datetime.today()
date = today.strftime("%A %d %B %Y")
```

### Part 3 - HTML Profile Creation

The profile at the end of the day we just developed something locally and kept it as simple as humanly possible. We went onto [Codepen](https://codepen.io/) to search around for some ideas/inspiration and came across a basic layout that we thought looked interesting as a starting point. From here we customized it to our needs, added some little CSS trickery for the profile background and skin overlays, and were about done.

What you'll notice here is we ended up creating a variable named HTML and wrapping the complete HTML code in a multi-line string. The reason for this was so that we could parse the variables easily inside before extracting/writing it to an HTML file - it's certainly not the "sexiest" of approaches, but felt it was quite pragmatic and worked.

```python
html = """\
<html>
<head>
<link rel="stylesheet" href="fortnite.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>
<div class="card">
  <div class="layered-image">
    <img class="image-base" src="images/background.avif" alt="" style="width:100%"/>
    <img class="image-overlay" src="images/{skin}.png" alt="IronVogel" style="width:100%"/>
  </div>
  <h1>IronVogel</h1>
  <p class="title"><i class="fab fa-playstation"  ></i> Current Level - {level}</p>
  <div style="margin: 24px 0;  color: lightslategrey;">
    <p><i class="fas fa-trophy"></i> {top1_sum} Victories</p>
    <p><i class="fas fa-star-half-alt"></i> {winrate_average} % Win Ratio</p>
    <p><i class="fas fa-tachometer-alt"></i> {kd_average} K/D Ratio</p>
    <p><i class="fas fa-skull-crossbones"></i> {kills_sum} Kills</p>
  </div>
  <p><small><small><small>Updated {date}<small><small><small></p>
  <p><button onclick="document.location='https://fortnitetracker.com/profile/all/IronVogel'">Detailed Stats</button></p>
</div>
</body>
</html>
""".format(**locals())
# Output to HTML file
with open("fortnite.html", "w") as file:
    file.write(html)
```

And that's about it, nothing too much to add and think based on a quick weekend job pretty cool outcome, and an interesting project to maybe at least show my son what's possible with the world of programming...
