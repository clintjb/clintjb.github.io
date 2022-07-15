---
layout: post
tags_color: '#666e76'
title: 'The Biggest Challenges Of Data-Driven Manufacturing'
date: 2016-05-20
description: A refreshing look at Industry 4.0.
tags: [digitalization, development, industry, 4.0, industrial, iot]
categories: digitalization
comments: true
image: '/images/posts/2016/industry.jpg'
---
![](/images/posts/2016/industry.jpg)

At the moment in Germany, the new flavour of the month seems to be Industry 4.0 - Everywhere I read/work, I'm being presented on the huge promises of cost savings to come. 

During my time as a consultant I was deeply involved in the potential of linking PLM and MES systems for cost savings reasons (You can find an article I was featured in regarding this topic 
<a class="external" target="_blank" rel="noopener noreferrer" href="https://www.clintbird.com/images/posts/2016/telegraph.jpg">here</a>

The major issue I see today though, is that many of the barriers we had 5-8 years ago still exist today. I have concerns that the real cost savings still wont be seen for some time.

Nevertheless it certainly has some strong merit and no one can deny its place in the future of manufacturing.  This is a simple little overview on the topic in general, as well as a refreshing look at some of the pitfalls that most fail to mention - [HBR](https://hbr.org/2016/05/the-biggest-challenges-of-data-driven-manufacturing)

---

The widespread deployment of low-cost sensors and their connection to the internet has generated a great deal of excitement (and hype) about the future of manufacturing. The internet of things (IoT) and industrial internet in the United States, Industrie 4.0 in Germany, and 物联网 (wù lián wăng) in China are all centered on the application of big data and analytics to creating the next generation of manufacturing: using data to reduce costs through next generation sales and operations planning, dramatically improved productivity, supply chain and distribution optimization, and new types of after-sales services. In fact, IoT is at the peak of Gartner’s 2015 hype cycle, which suggests the next phase will be disillusionment, and it will be years before we see real productivity gains.

We believe data-driven manufacturing is indeed the next wave that will drive efficient and responsive production systems. But to get beyond the hype, managers need to understand some underlying challenges and paradigm shifts. While there are a multitude of challenges on the road to successful implementation, we think there are four especially important ones.

#### From Time-Triggered to Event-Triggered Control Systems

Today’s production systems are planned. We plan production runs based on demand signals and feed these into our enterprise resource planning (ERP) systems, which, if we are lucky, will tie to our manufacturing execution system (MES), which drives the factory to pull on the supply chain and produce finished product for delivery to customers through our distribution channels. It is all deterministic — there is no randomness, and the system will always produce the same outputs given the same starting-point inputs. Events, such as moving a part down the production line, are based on time triggers. While control systems deployed across the supply chain and factory might collect lots of different measurements at many locations, sampling of data is triggered at predetermined times. The deterministic behavior means everything is predictable, and more importantly, the system can be designed to be stable, a fundamental goal of control systems engineering (think of the supply-chain bullwhip effect as an example of instability).

In the future vision where the factory only produces a product when there is customer demand or an operation is only performed when there is a “data” signal, we shift to a different paradigm: event-triggered control. In this model, the factory responds to events as and when they occur. One example is an order for a product configured in a specific way. Another is when a machine that was planned to perform the next manufacturing step goes into (unplanned) maintenance mode, triggering the part carrier, which has an RFID tag with information about the right sequence of production steps, to “negotiate” with different machines to find the best way through the factory floor. In theory, the whole system therefore becomes more efficient, minimizing wasted materials and activities.

The implications of this paradigm shift are significant. System responses may be substantially slower as there is a lot of data collection and communication that needs to support each action. This has implications for capacity utilization and capital efficiency. But more importantly, our manufacturing engineers will have to grapple with new methods and tools to insure system stability, especially when coping with time delays in sensing that might arise from communications congestion or other causes. This is often overlooked by managers, but it is a big deal.

The reality is that most production systems will employ a combination of time-triggered and event-triggered control mechanisms, and managers need to ask how they will design and operate these hybrid systems effectively. This is a key step to getting past Garner’s trough of disillusionment and realizing the promise of internet connected systems on the shop floor.

#### A Unified Data Model: Data Sharing, Not Just Data Exchange

Most product design and manufacturing operations have benefited extensively from computerization: from ERP systems and computer-aided design, to engineering analysis and simulation programs that enable virtual prototyping, to manufacturing execution systems and automation design, all the way down to robotic automation systems on the factory floor and in materials handling. Most investments over the last three decades have gone into point solutions for design and manufacturing, and the integration of the “transaction oriented” ERP systems. Once a design was finalized, manufacturing used the engineering bill of materials and manually added relevant manufacturing (manufacturing bill of materials) and process data (process bill of materials). But a major challenge arises from the fact that because these systems were designed independently, they weren’t designed originally to talk to each other.

Of course, software developers have long since figured out how to export data from one application to another. But changes to the original engineering bill of materials were often not moved back upstream. If the goal is to tie together all the pieces in the production process so that for example quality defects can immediately feed back to the design, enabling quick changes to everything including the bill of materials and the automation design, one needs to share data so that every participant in the design, production, distribution, and selling process is operating off one integrated data model, what product life-cycle management (PLM) professionals call a “single source of truth.” Companies in the vanguard of this approach are using integrated PLM tools to accomplish this. A change made anywhere in the process becomes visible and accessible to everyone.

#### The Integration of Legacy Systems

Industrial automation is an evolutionary process. Introducing new technologies is exciting, but it is crucial to find a way to make them work alongside well-established and proven systems. Inside a modern factory, you will find multiple levels of systems: At the machine level there are programmable logic controllers, distributed control systems, and supervisory control and data acquisition systems. Information is passed to manufacturing execution systems and production planning and ERP systems.

This is a special challenge when the original developer of the often homegrown legacy systems doesn’t have well-defined interfaces, documentation is scarce, and the software engineers are not available anymore. In this regard, talking about a “fourth industrial revolution” can be misleading. It’s not about starting from a clean sheet of paper but integrating efficiently within the existing design and manufacturing environment.

#### Security Challenges

Distributed control systems connected via the internet hold great promise for rapidly responding to changing conditions. But, of course, it exposes the systems to unauthorized access by attackers who could sabotage the system or cause system outages. IoT devices are increasingly connected via gateways, which will enable control and access from anywhere.

The traditional cloud IT services network infrastructure that we all use for e-mail is quite mature, with systems to maintain accounts and credentials, and enforced authentication policies and rules. This is not yet the case for industrial control systems, which often have unique protocols and limited computing power. Many of these systems were designed and installed at a time when industrial security was not a prime concern. They are connected via gateways that bridge the internet and the controlled device.

But these gateways have yet to go through the hardening against security challenges that IT services have. That will mean these gateways will need sufficient computing power to handle networking and security tasks, and that they will cost a little more than what many proponents think.