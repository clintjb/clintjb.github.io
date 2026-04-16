---
layout: post
tags_color: '#666e76'
title: 'Daily Commute Tracking'
date: 2026-04-09
description: Automated tracking of my daily public transport commute integrated into a performance dashboard and automated Twitter notifications.
tags: [digitalization, stuff, HVV, Hamburg, Train, bahn, public transport, automation, stats, verspätet]
categories: [digitalization, stuff]
comments: true
image: '/images/posts/2026/commute.jpg'
---
![HVV](/images/posts/2026/commute.jpg)

I've been taking public transport every day I go to the office for as long as I've been living here in Germany. Perhaps I'm simply getting old and impatient, or perhaps the reliability of the HVV / Hochbahn really has been deteriorating, but after a number of weeks of continual delays, I decided it was time to treat this like any other performance issue - put some data to the concerns and measure the problem. Directly below is the RAG status and my last commute time:
{% include commute_kpi.html %}

So, as with any KPI definition, it's important to be transparent about where the data is captured and how it's measured and calculated - so first and foremost, lets explain how all this is working.

I've created two geofences (one at my train station and one at my office bus stop) when entering and leaving these, my mobile phone automatically detects the event and triggers a webhook, capturing a timestamp in real time. From here I'm calculating the overall time it took and measuring it against my red / amber / green performance criteria.

Here I've tried to be quite pragmatic - below you’ll see an overview from my HVV app showing the different routes between these two locations, most of which come in at ~60 minutes. Let’s give HVV the benefit of the doubt - I may mistime when I arrive at the departure geofence, so I’ve added an additional 10 minute buffer. Concretely that means the following logic is applied:

```
function classifyRAG(minutes) {
if (minutes <= 70) return "Green";
if (minutes <= 80) return "Amber";
return "Red";
}
```

![HVV App](/images/posts/2026/commute-app.jpg)

If I have a trip that lands in the red zone then the system will automatically trigger a notification to [Hochbahn](https://x.com/hochbahn) via Twitter / X with the trips performance metric as well as a hyperlink to this page. The main reason for the hyperlink isn’t just to explain what the hell this is, but also to share the performance dashboard below. It gives a more detailed overview of what my week to week experience is on their service:

{% include commute_dashboard.html %}

It will be interesting to see this dashboard expand overtime as more data is captured. I'm curious to see whether my recent frustrations were genuinely valid, or just me entering my grumpy old man phase - as [Deming once said](https://clintbird.com/blog/deming-post) "without data you’re just another person with an opinion"
