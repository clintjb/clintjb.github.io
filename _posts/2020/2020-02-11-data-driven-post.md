---
layout: post
tags_color: '#666e76'
title: 'Creating A Data Driven Culture'
date: 2020-02-11
description: 10 Steps to creating a data driven culture.
tags: [digitalization, business, transformation, data, culture, organisation, driven, improvement]
categories: [digitalization, business]
comments: true
image: '/images/posts/2020/data-driven.jpg'
---
![](/images/posts/2020/data-driven.jpg)

So as part of my current role, I've been tasked with developing a strategy (and executing!) our transformation towards a data-driven culture. 

I've been developing this and putting the building blocks in place for the last 6 months in preparation to launch with the start of the new year. This has been derived from a lot of readings / research and strongly based on the experience from my own team as a blueprint to scale to the wider company. 

I would lie if I said I was 100% certain everything we have proposed would lead us to this goal, but it was certainly reassuring while reading this (Originally found here in the [Harvard Business Review](https://hbr.org/2020/02/10-steps-to-creating-a-data-driven-culture)) to see we had covered all ten of these points. Nevertheless, let's see, time will tell on this one...

---

Exploding quantities of data have the potential to fuel a new era of fact-based innovation in corporations, backing up new ideas with solid evidence. Buoyed by hopes of better satisfying customers, streamlining operations, and clarifying strategy, firms have for the past decade amassed data, invested in technologies, and paid handsomely for analytical talent. Yet for many companies a strong, data-driven culture remains elusive, and data are rarely the universal basis for decision making.

Why is it so hard?

Our work in a range of industries indicates that the biggest obstacles to creating data-based businesses aren’t technical; they’re cultural. It is simple enough to describe how to inject data into a decision-making process. It is far harder to make this normal, even automatic, for employees — a shift in mindset that presents a daunting challenge. So we’ve distilled 10 data commandments to help create and sustain a culture with data at its core.

#### 1. Data-driven culture starts at the (very) top
Companies with strong data-driven cultures tend have top managers who set an expectation that decisions must be anchored in data — that this is normal, not novel or exceptional.  They lead through example.  At one retail bank, C-suite leaders together sift through the evidence from controlled market trials to decide on product launches.  At a leading tech firm, senior executives spend 30 minutes at the start of meetings reading detailed summaries of proposals and their supporting facts, so that they can take evidence-based actions. These practices propagate downwards, as employees who want to be taken seriously have to communicate with senior leaders on their terms and in their language. The example set by a few at the top can catalyze substantial shifts in company-wide norms.

#### 2. Choose metrics with care — and cunning
Leaders can exert a powerful effect on behavior by artfully choosing what to measure and what metrics they expect employees to use. Suppose a company can profit by anticipating competitors’ price moves. Well, there’s a metric for that: predictive accuracy through time. So a team should continuously make explicit predictions about the magnitude and direction of such moves. It should also track the quality of those predictions – they will steadily improve!

For example, a leading telco operator wanted to ensure that its network provided key customers with the best possible user experience. But it had only gathered aggregated statistics on network performance, so it knew little about who was receiving what and the service quality they experienced. By creating detailed metrics on customers’ experiences, the operator could make a quantitative analysis of the consumer impact of network upgrades. To do this, the company just needed to have a much tighter grip on the provenance and consumption of its data than is typically the case — and that’s precisely the point.

#### 3. Don’t pigeonhole your data scientists
Data scientists are often sequestered within a company, with the result that they and business leaders know too little about each another.  Analytics can’t survive or provide value if it operates separately from the rest of a business. Those who have addressed this challenge successfully have generally done so in two ways.

The first tactic is to make any boundaries between the business and the data scientists highly porous. One leading global insurer rotates staff out of centers of excellence and into line roles, where they scale up a proof of concept. Then they may return to the center. A global commodities trading firm has designed new roles in various functional areas and lines of business to augment the analytical sophistication; these roles have dotted-line relationships to centers of excellence.  Ultimately, the particulars matter less than the principle, which is to find ways to fuse domain knowledge and technical knowhow.

Companies at the leading edge use another tactic.  In addition to dragging data science closer to the business, they pull the business toward data science, chiefly by insisting that employees are code-literate and conceptually fluent in quantitative topics. Senior leaders don’t need to be reborn as machine-learning engineers.  But leaders of data-centric organizations cannot remain ignorant of the language of data.

#### 4. Fix basic data-access issues quickly
By far the most common complaint we hear is that people in different parts of a business struggle to obtain even the most basic data. Curiously, this situation persists despite a spate of efforts to democratize access to data within corporations.  Starved of information, analysts don’t do a great deal of analysis, and it’s impossible for a data-driven culture to take root, let alone flourish.

Top firms use a simple strategy to break this logjam.  Instead of grand — but slow — programs to reorganize all their data, they grant universal access to just a few key measures at a time. For example, a leading global bank, which was trying to better anticipate loan refinancing needs, constructed a standard data layer for its marketing department, focusing on the most relevant measures. In this instance, these were core data pertaining to loan terms, balances, and property information; marketing channel data on how loans were originated; and data that characterized customers’ broad banking relationship. No matter the specific initiative, a canny choice for the first data to make accessible is whichever metrics are on the C-suite agenda. Demanding that other numbers eventually be tied to this data source can dramatically encourage its use.

#### 5. Quantify uncertainty
Everyone accepts that absolute certainty is impossible.  Yet most managers continue to ask their teams for answers without a corresponding measure of confidence.  They’re missing a trick.  Requiring teams to be explicit and quantitative about their levels of uncertainty has three, powerful effects.

First, it forces decision makers to grapple directly with potential sources of uncertainty: Is the data reliable? Are there too few examples for a reliable model?  How can factors be incorporated when there are no data for them, such as emerging competitive dynamics?  One retailer found that the apparent degradation in redemption rates from its direct marketing models was caused by increasingly stale address data. An update, plus a process for keeping the data fresh, fixed the problem.

Second, analysts gain a deeper understanding of their models when they have to rigorously evaluate uncertainty. For example, a U.K. insurer’s core risk models had failed to adequately adjust to market trends.  So it built an early-warning system to take these trends into account and spot cases that would otherwise have been missed. As a result, it avoided losses due to sudden spikes in claims.

Finally, an emphasis on understanding uncertainty pushes organizations to run experiments.  “At most places, ‘test and learn’ really means ‘tinker and hope,’” a retailer’s chief merchant once noted. At his firm, a team of quantitative analysts paired up with category managers to conduct statistically rigorous, controlled trials of their ideas before making widespread changes.

#### 6. Make proofs of concept simple and robust, not fancy and brittle
In analytics, promising ideas greatly outnumber practical ones. Often, it’s not until firms try to put proofs of concept into production that the difference becomes clear. One large insurer held an internal hackathon and crowned its winner — an elegant improvement of an online process — only to scrap the idea because it seemed to require costly changes to underlying systems. Snuffing out good ideas in this way can be demoralizing for organizations.

A better approach is to engineer proofs of concept where a core part of the concept is its viability in production. One good way is to start to build something that is industrial grade but trivially simple, and later ratchet up the level of sophistication. For example, to implement new risk models on a large, distributed computing system, a data products company started by implementing an extremely basic process that worked end-to-end: a small dataset flowed correctly from source systems and through a simple model and was then transmitted to end users. Once that was in place, and knowing that the whole still cohered, the firm could improve each component independently: greater data volumes, more exotic models, and better runtime performance.

#### 7. Specialized training should be offered just in time
Many companies invest in “big bang” training efforts, only for employees to rapidly forget what they’ve learned if they haven’t put it to use right away.  So while basic skills, such as coding, should be part of fundamental training, it is more effective to train staff in specialized analytical concepts and tooling just before these are needed — say, for a proof of concept. One retailer waited until shortly before a first market trial before it trained its support analysts in the finer points of experimental design.  The knowledge stuck, and once-foreign concepts, such as statistical confidence, are now part of the analysts’ vernacular.

#### 8. Use analytics to help employees, not just customers
It’s easy to forget the potential role of data fluency in making employees happier. But empowering employees to wrangle data themselves can do this, as it enables them to follow the advice in a memorably titled book on programming: Automate the Boring Stuff with Python. If the idea of learning new skills to better handle data is presented in the abstract, few employees will get excited enough to persevere and revamp their work.  But if the immediate goals directly benefit them — by saving time, helping avoid rework, or fetching frequently-needed information — then a chore becomes a choice. Years ago, the analytics team at a leading insurer taught itself the fundamentals of cloud computing simply so they could experiment with new models on large datasets without waiting for the IT department to catch up with their needs. That experience proved foundational when, at last, IT remade the firm’s technical infrastructure. When the time came to sketch out the platform requirements for advanced analytics, the team could do more than describe an answer. They could demonstrate a working solution.

#### 9. Be willing to trade flexibility for consistency — at least in the short term
Many companies that depend on data harbor different “data tribes.” Each may have its own preferred sources of information, bespoke metrics, and favorite programming languages. Across an organization, this can be a disaster. Companies can waste countless hours trying to reconcile subtly different versions of a metric that should be universal. Inconsistencies in how modelers do their work takes a toll too. If coding standards and languages vary across a business, every move by analytical talent entails retraining, making it hard for them to circulate. It can also be prohibitively cumbersome to share ideas internally if they always require translation. Companies should instead pick canonical metrics and programming languages. One leading global bank did this, by insisting that its new hires in investment banking and asset management knew how to code in Python.

#### 10. Get in the habit of explaining analytical choices
For most analytical problems, there’s rarely a single, correct approach.  Instead, data scientists must make choices with different tradeoffs. So it’s a good idea to ask teams how they approached a problem, what alternatives they considered, what they understood the tradeoffs to be, and why they chose one approach over another. Doing this as a matter of course gives teams a deeper understanding of the approaches and often prompts them to consider a wider set of alternatives or to rethink fundamental assumptions.  One global financial services company at first assumed that a fairly conventional machine-learning model to spot fraud couldn’t run quickly enough to be used in production. But it later realized the model could be made blazingly fast with a few simple tweaks. When the company started to utilize the model, it achieved astonishing improvements in accurately identifying fraud.

Companies — and the divisions and individuals that comprise them — often fall back on habit, because alternatives look too risky. Data can provide a form of evidence to back up hypotheses, giving managers the confidence to jump into new areas and processes without taking a leap in the dark. But simply aspiring to be data-driven is not enough. To be driven by data, companies need to develop cultures in which this mindset can flourish. Leaders can promote this shift through example, by practicing new habits and creating expectations for what it really means to root decisions in data.