---
layout: post
tags_color: '#666e76'
title: 'The Truth About Why RPA Fails To Scale'
date: 2021-08-20
description: Some reflections on the limitations and blockers for scaling RPA.
tags: [digitalization, transformation, data, devops, organisation, improvement, speed, automation, rpa, uipath, api]
categories: [digitalization]
comments: true
image: '/images/posts/2021/rpa.jpg'
---
![](/images/posts/2021/rpa.jpg)

RPA is a bit of a funny topic for me - it has an enormous level of hype around it with those not necessarily deep in the technicalities of digital transformation (which is a great thing for building interest!) so for me, it's really about trying to find the right balance between responsible flexibility and sustainability. 

As part of my current role, we've utilized the technology in a couple of use cases and deeply investigated the pros and cons for our company and the corresponding tech stack. At the moment my thinking is largely supportive of RPA & UiPath _BUT_ we have to be exceptionally mindful of how and where we use it. If uncontrolled it can quickly become an unsustainable house of cards - my thinking is today it could act as a very good interface / API for applications where these don't exist. I think today the sweet spot is to use the technology to allow teams to explore and experiment quickly but then transition the solutions to something more robust (e.g. APIs + Airflow?) if the business wishes to rely on these improvements for the mid - long term. 

So while doing some of my early research and reading up on other companies experiences; I stumbled across this article from [Forbes](https://www.forbes.com/sites/forbestechcouncil/2020/05/15/the-truth-about-why-rpa-fails-to-scale/?sh=453c59091c2b) - so as stated my views are slightly different to this based on our current experience, but I think it certainly hits some very interesting and relevant points when assessing the real potential of RPA in an organization.

---

Robotic process automation (RPA) has been one of the hottest tech trends of the past 24 months, with good reason: It fuels digital transformation initiatives by automating specific tasks that otherwise remain stubbornly manual and analog. It’s the reason analyst firms like Gartner recently pegged RPA as the fastest-growing segment of the enterprise software market and pure-play RPA providers such as UIPath achieved $7 billion dollar valuations. Yet there has been a consistent undercurrent of reports intimating that companies frequently get stuck after deploying just a few bots, with up to 50% of RPA deployments initially failing. 

#### Why The Disconnect?

To understand this, it’s critical to recognize what RPA does well, and thus where it succeeds. RPA automates manual, human processes that are highly repetitive (i.e., “robotic”). The most common example is data entry or management in one form or another. In these scenarios, RPA dramatically accelerates throughput while eliminating errors and reducing costs. Moreover, RPA is generally easy to implement and patently obvious in its transition from the analog to the digital, allowing organizations to score quick, visible wins in their transformation journey.

Yet it’s those same strengths that contribute to struggles with RPA, and the reasons are subtle but inherent to the technology. The result has been stalled deployments and, even where successful, organizations with only a handful of bots in actual use. In short, it’s entirely possible for RPA to successfully automate a particular task but still fail to meet larger organizational expectations and requirements.

It’s in this larger corporate context that it’s time for an RPA reality check.

#### You’re Doing It Wrong

RPA is not a silver bullet when it comes to digital transformation — in fact, if its limitations are not adequately understood (and at the risk of mixing metaphors), it can quickly become a dead end. RPA initiatives that struggle often fall into two camps:

#### 1. Too Much Complexity:
RPA is powerful — to a point. At this stage in its maturation, many available tools do not handle complexity well. That complexity often comes in the form of too many steps or decision points in the larger process. Craig LeClair, a Forrester analyst, cites a “rule of five,” noting that if you get beyond five decision points or applications, you probably need another technology, such as digital process automation (DPA).

Organizations should thus assess current and planned RPA deployments — if they are at or past five process steps, they’re at the complexity limit. That complexity limit can also result from a lack of structure. RPA’s “robotic” nature means that it is geared toward well-defined data formats, steps and outcomes. Throw in unstructured data or process variation, and RPA struggles at best or breaks at worst. This again requires organizations to carefully evaluate the processes that are being automated — if the data formats and process steps aren’t rigid and structured, then plan to either select a more appropriate tool for DPA or spend considerable time upfront tagging and preparing data or tweaking the process rules.

#### 2. Fail To Scale: 
The other inherent RPA limitation is that it automates specific tasks — in other words, mimicking human behavior at the level of individual work. This has a significant impact at that micro level, but leads to isolated improvement for the macro organization. Research firm IDC refers to this scenario as “islands of innovation” — it’s not bad per se, and can actually make sense as a start on a digital transformation journey, but until you connect those islands, you aren’t going anywhere.

Organizations should consider stepping back and questioning what they meant to achieve in terms of process automation (and if those goals were met). If it was the automation of a specific task, then, by all means, proceed with RPA. If, however, it was a broader goal of digital transformation, then RPA used in isolation will not get you there.

The term “scale” also has its own difficulties in regard to RPA. Vendors use the term in regard to the robustness of their platform — in other words, how many bots it can support. From a customer perspective, however, this is only half the equation. The larger business question is whether RPA scales in terms of impacting organizational processes. The short answer here is no.

An example of both of these stumbling blocks — too much complexity and scale beyond the level of individual work — can be found in most larger organizational processes. Take loan origination in financial services, for example. RPA can excel in automating specific steps, such as data uptake from the initial loan application. But loan approval and processing require numerous steps that take the application through myriad different departments and systems, pulling data from many different sources along the way. Expecting RPA alone to digitally transform the overall loan process is a recipe for failure.

#### Orchestrating RPA

The larger point is that RPA is a powerful tool for digitally transforming key processes within a larger organization, but it won’t remake the organization on its own. And in their enthusiasm regarding the value it brings, both customers and vendors risk overhyping the technology to its long-term detriment.

In sum, RPA’s rapid growth is well earned, and a positive sign of the success organizations are experiencing in digitally transforming their businesses. But it’s also an indication that the industry is only at the initial stages of a much larger and longer journey.