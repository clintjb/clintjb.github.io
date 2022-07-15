---
layout: post
tags_color: '#666e76'
title: 'Software Automation Isnt About Efficiency'
date: 2021-03-31
description: The real reasons behind the push to increase automation in software development.
tags: [digitalization, transformation, data, devops, organisation, improvement, speed]
categories: [digitalization]
comments: true
image: '/images/posts/2021/software.jpg'
---
![](/images/posts/2021/software.jpg)

Having a background in industrial operations and process efficiency - automation is something I've been involved in one way or the other for almost 20 years now. My current role takes me more and more into the realm of DevOps, so quite enjoyed this interesting article from [Gregor Hohpe](https://architectelevator.com/) on the history and evolution of some of these tools / principles. If you're anything like me you'll appreciate the strong lean "vibe" running through the final value explanations of why we do all this. 

---

IT has pretty much been born out of the business of automation: IT took something that was done by pen and paper and automated it, initially mostly in a spreadsheet (VisiCalc is turning 40 next year!) and later in all sorts of complex systems. Automation saved manual labor, which justified the IT investment.

#### Automating Software Delivery
Because software development is also a costly, manual process, IT management has long attempted to automate and streamline itself. Interestingly, much of the effort focussed on the design of software, i.e. the translation from ideas into code. Many frameworks and methodologies looking to industrialize this aspect of software development, such as CASE tools and 4GL, came and disappeared over the 1990s and 2000s.

Collectively, we could have saved a lot of effort had they taken Jack Reeves' article What is Software Design to heart. Published in 1992, Jack elaborated that coding is the design of software and compiling and deploying software is the manufacturing. So, if you are looking to industrialize software manufacturing, you should focus on test, compile, and deployment, not coding.

#### Rise Of DevOps
Ironically, while IT grew big automating the business, it didn't pay much attention to automating itself. Software builds and deployments were more art than science: a last minute pull from over here, a few file copies, ah, and the often forgotten change in the configuration. The results were predictable: every software deployment became a gamble and those who were so inclined, said a little prayer each time. On a more mundane level, e-mail circulations congratulating the team on a software release might be well intended, but underline the awfully low success rate.

A slew of recent software innovations has set out to change this: Continuous Integration (CI) automated software test and build, Continuous Delivery (CD) automated deployment, and DevOps automates the whole thing including operational aspects such as infrastructure configuration, scaling, resilience, etc. In combination, these tools and techniques take the friction out of software delivery. It also allowed teams to embrace a new way of working.

Occasionally, IT members, especially in operations, fear that this means it's now their turn to be made redundant through IT automation. While there may be a tad bit of Schadenfreude creeping up, after all they have been doing it to workers for decades, reducing manual labor isn't the main driver behind this automation.

#### The New Value of Automation
Automation in software delivery has different goals:

Speed | Speed is the currency of the digital economy. Automation makes you faster and, if you use that speed to iterate and innovate more quickly, it provides significant value for the organization.
Resilience | It's often forgotten that a new feature release isn't the only time you deploy software. In case of a hardware failure, you need to deploy software quickly to a new set of machines. With highly automated software delivery, this is a matter of seconds or minutes - it's done before the first incident call can be setup. Speed aids resilience.
Repeatability Brings Confidence | Automation takes the error margin out of a process and makes it repeatable. That's why you shouldn't send a human to do a machine's work. And repeatability breeds confidence. You don't want your development teams to be afraid of the next software release: fear bring hesitation and hesitation slows you down.
Insight & Governance | Automated processes (in IT deployment or otherwise) give you much better insight into what happened when for what reasons and how long it took. Doing so allows you to go fast and be more compliant than with manual control processes. It also allows you to find bottlenecks and improve the system.
Continuous Improvement / Refinement | Having a repeatable and transparent process is the base condition for continuous improvement: you can see what works well and what doesn't and improve it without having to re-train people and suffering from quality issues do to re-learning.

Today's drive to automate IT infrastructure is not driven by the desire to eliminate jobs and increase efficiency. It's much more about speed, uptime, repeatability, and insight. This means that operations teams should embrace, not fear automation of software delivery.