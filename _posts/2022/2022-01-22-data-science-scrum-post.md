---
layout: post
tags_color: '#666e76'
title: 'Data Science & Scrum'
date: 2022-01-22
description: Dont make data science teams do scrum - it just doesnt work.
tags: [digitalization, business, scrum, data, agile, science, analytics, lessons]
categories: [digitalization, business]
comments: true
image: '/images/posts/2022/scrum.jpg'
---
![](/images/posts/2022/scrum.jpg)

I really enjoyed reading this article (and actually shared it with my team for a bit of a chuckle) as it really reconfirms all the lessons the team and I have gone through. At the advice of a sister organization from IT we attended a one-day training on Agile / Scrum and applied basically all the points the article touches on (planning poker was one of my personal favorite disasters!)

Although we have a mix of data engineering / infrastructure and data science activities we've basically come to the exact same point - that what's actually critical are processes and ways of workings to support the following:

* Regular status / demo meetings for alignment and visibility
* Strong documentation for transparency
* Timeboxing activities to give regular points to reflect if approaches are working or not


It reminds me very much of an article found [here](https://clintbird.com/blog/digital-cargo-cults-post) on the cargo cult phenomenon - really about people falling into the trap of copying superficial tools without it necessarily matching the culture or needs of the organization. I can say we certainly fell victim to this ourselves, but thankfully pulled ourselves back to reality. Anyway, an interesting read which was found originally here on [Towards Data Science](https://towardsdatascience.com/dont-make-data-scientists-do-scrum-de87bc921a6b)

---

> Scrum Guide: “Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.”

Scrum has been super popular for many years. I’m amazed by its success in marketing. It’s like the Kardashians of the software development management framework world. I feel the same way about Scrum as one of the [Agile Manifesto](http://agilemanifesto.org/) authors wrote about Agile in his [Agile is Dead](https://pragdave.me/blog/2014/03/04/time-to-kill-agile.html) article: “Once the Manifesto became popular, the word agile became a magnet for anyone with points to espouse, hours to bill, or products to sell.”

To me, Scrum seemed process-heavy, which would violate the very first value of the [Agile Manifesto](http://agilemanifesto.org/) — Individuals and Interactions over Processes and Tools. But maybe I didn’t know enough about Scrum? So I decided to learn more about Scrum and even became a certified Scrum Master. Now I understand better why I don’t like it and why it is not ideal for data scientists.


## 1. Scrum is immutable

> Scrum Guide: “The Scrum framework, as outlined herein, is immutable. While implementing only parts of Scrum is possible, the result is not Scrum. Scrum exists only in its entirety and functions well as a container for other techniques, methodologies, and practices.”
>
> *“Each element of the framework serves a specific purpose that is essential to the overall value and results realized with Scrum. Changing the core design or ideas of Scrum, leaving out elements, or not following the rules of Scrum, covers up problems and limits the benefits of Scrum, potentially even rendering it useless.”*

Scrum is a framework consisting of a small team of a Scrum Master, a Product Owner, and one or more Developers. Scrum is organized into Sprints, with four Sprint-related events: Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. According to the Scrum Guide, Scrum is immutable. How can an Agile framework be not Agile at all? Many people say they like just using Jira tickets and daily standups, which according to the Scrum Guide, are not Scrum.


## 2. Data Scientists do not work on a single “product” and oftentimes our work is not an increment

> Scrum Guide: “The heart of Scrum is a Sprint, which is one month or less during which a done, usable, valuable product Increment is created. This applies to every Sprint. The purpose of a Sprint is to produce a valuable and useful Increment of working product.”

Data scientists often work solely on various projects with each project tied to different stakeholders. Data scientists on the same team often do not work on the same “product” and have a shared “product goal”. The work data scientists do is often not an increment and not designed towards a single “product goal” or a “sprint goal”.


## 3. Data scientists do not always need a product owner

> Scrum Guide: “The Product Owner represents the needs of many stakeholders in the Product Backlog. The Product Owner represents the stakeholders to the Scrum Team, which includes representing their desired requirements in the Product Backlog.”

Relying on product owners to represent stakeholders to the Scrum team for doing data science is a terrible idea. As I mentioned earlier, data scientists often work with many different stakeholders and different projects. To get the context from the product owner is simply not enough, not motivating, and not necessary. It’s more effective for data scientists to directly interact with stakeholders, understand the context of the problem, dive into discussions with stakeholders, and make a plan themselves.

Also, in Scrum, it is the product owner’s responsibility to break down complex problems into items in a backlog. This does not work for data scientists either. Much of the work data scientists do is research rather than product development. Given the problem and the context of the problem, we design our *own* project roadmap and analytical framework. Because the tasks required are not yet clear to *anyone*, it is not reasonable to take these tasks away from data scientists, whose job it is to make them clear.

It’s also unreasonable for the product owner to set priorities for projects. Other stakeholders often give us timelines for our projects. Because of these requirements coming from different sources, data scientists need to be able to prioritize their own time based on the timeline and urgency of all the different projects. If needed, a data science manager, not a product owner, should be able to help.


## 4. Scrum takes ownership away

> Srum.org: “When does a Developer become the sole owner of an item on the Sprint Backlog?
>
> *Never. All Sprint Backlog items are “owned” by the Developers on the Scrum Team. The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint, and the set of Product Backlog items selected for the Sprint are collectively owned by the Developers. No individual Developer can claim ownership over an item as this would block communication and collaboration. The Sprint Backlog is updated by the Developers throughout the Sprint as more is learned.”*

It’s fairly common for data scientists to own their projects. Having this sense of ownership intrinsically motivates data scientists to do well in projects. Frankly, data scientists might not even want to own other data scientists’ projects. For example, a data scientist who is working on the news feed should not feel like he/she should own an ads project another data scientist is working on. The knowledge and expertise involved simply do not transfer evenly between people, in part because each person is on a voyage of discovery about that particular topic. Even if two data scientists are working on the same project, in my opinion, each one should still own different parts of the project.


## 5. The definition of “Done” varies across projects

> Scrum Guide: The Developers are required to conform to the Definition of Done. If there are multiple Scrum Teams working together on a product, they must mutually define and comply with the same Definition of Done.
>
> *Understanding and Applying the Scrum Framework allows teams and organizations to iteratively and incrementally deliver valuable products of “Done” working releasable software in 30 days or less.*

Different projects are very different, it is not likely to use the same definition of Done for all of our projects.


## 6. Sprint Review does not work

> Scrum Guide: “The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations. The Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed.“

A team of data scientists may have many different key stakeholders. Which stakeholders do we invite to the sprint review? It is often more effective for data scientists to present results to their various project stakeholders directly in a weekly project meeting.


## More Thoughts

If Scrum doesn’t work, what *would* work for a data scientist team? I like a friend’s suggestion to overlook the formality of Scrum and think about what parts of Scrum are valuable in the context of data science rather than software development. I do think the three pillars of scum (transparency, inspection, adaptation) make sense. I think all these three values can be achieved simply through weekly project meetings with stakeholders, weekly team meetings for project demos, and good documentation. Specifically:

### 1. How to make people have a shared understanding of what they are working on?

**Weekly project meetings with stakeholders** and **weekly team meetings for project demos** give everyone a chance to be transparent on what they are doing, their progress, and their plan. I’d like to learn about the thought processes, research framework, detailed learnings in other people’s projects and I don’t care what people are working on on a daily/hourly basis. That’s why I like project demos way more than meaninglessly going through each ticket/task without going into the context and details of projects. For mentoring and learning new technical skills, diving into the technical details in the project demo meetings or a **pair-programming** session can be helpful as well.

**Documentation** also facilitates transparency. A shared project document including all the meeting notes, decisions, analysis, results, and others is often valuable. Have trouble finding all the docs? Use a wiki page to list all the project docs. For teams that like Jira tickets, Jira can be a good logging tool so that there will be a history of what’s being done. What documentation tool to use depends on teams’ own preferences.

### 2. How to establish a shared agreement about what would constitute success at it?

Since data scientist projects do not often have a clear definition of “Done”, how do we inspect and measure success? Weekly project meetings with stakeholders, weekly team meetings for project demos, and documentation allow stakeholders and team members to inspect, dive deep, and give meaningful feedback. To achieve success on a project, there could be two scenarios: a) Stakeholder or data scientist himself/herself has a clear vision and expectation of the project. In this case, data scientists finish a project when it meets the stakeholder’s expectations. b) It’s often the case where the stakeholder or data scientist has only a vague initial idea and the project expectation is an ongoing conversation. In this case, meeting and communicating with the stakeholders to lay out a potential plan and next steps is important. Every week there could be new steps decided on the project and the project could be done when stakeholder and data scientist feels ready to share the insights with others.

### 3. When to decide that an approach has not worked and that a new approach is needed?

In terms of the actual work, data scientists receive context and feedback in meetings and document reviews, which help them improve and even pivot to a new analytical framework if needed. Given the research nature of data science work, trial and error are unavoidable. So it’s okay to try out something and find out it might not work later.

In terms of the structure and management approaches, Scrum calls for a Sprint Retrospective meeting to discuss what has worked and not worked. I think that’s a great idea, but it can be integrated into other means. Everyone should feel encouraged to voice their concerns on Slack and in meetings. I think it’s a good practice to give some time and space for people to do so in their weekly meetings and 1-on-1 meetings with managers. And if the concern is valuable and needs a separate space to discuss, we can set up a meeting to discuss this concern.