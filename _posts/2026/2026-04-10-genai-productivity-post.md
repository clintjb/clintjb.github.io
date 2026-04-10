---
layout: post
tags_color: '#666e76'
title: 'Generative AI in Process Driven Environments'
date: 2026-04-10
description: Why process driven businesses need precision not creative AI variation.
tags: [digitalization, business, transformation, data, ai, productivity, enterpise, improvement, constraints, deterministic, ERP, supply chain, generative]
categories: [digitalization, business]
comments: true
image: '/images/posts/2026/productivity.jpg'
---
![](/images/posts/2026/productivity.jpg)

First and foremost, this isn’t meant to be a technical paper - it’s my personal opinions - based on a long series of experiments and reflections, meant (hopefully) as a practical guide for operational managers who are being asked to sponsor / evaluate AI initiatives and are looking for a way to separate genuine opportunity from expensive distraction. It is written specifically for businesses that depend on structured processes and consistency (e.g. supply chains, industrial operations etc) where the context is fundamentally different from Silicon Valley, and much of the mainstream AI conversation today simply doesn’t quite fit.

#### The AI Gold Rush

We are currently in an artificial intelligence gold rush - in the corporate world, there’s a genuine fear of somehow missing out or being left behind, while at the same time, real amazement at what the technology can do, and underneath all of that (even for those of us working closely on the topic) significant confusion about where it actually creates value.

The excitement around AI is understandable, for managers and employees alike, a large language model genuinely feels like magic - emails are written, reports are summarized and data is organized. It produces work that really looks and feels like human effort.

But in the world of logistics, supply chains and industrial operations, value doesn’t live in the elegance of an explanation or the novelty of a one off solution. Value lives in the rigidity of our processes and the integrity of the maths driving them.

The most dangerous tendency in this current rush is confusing faster communication with more value. Businesses built on consistent, repeatable processes (think ERP driven supply chains) need AI that enforces precision, not AI that generates creative alternatives. An AI generated paragraph cannot solve a physical part missing from a shelf - a smarter chatbot shouldn't decide an appropriate safety stock value. If we’re not careful, we end up using the world’s most expensive technology to help our workarounds dry a little faster, instead of fixing the underlying problems.

#### Same Inputs, Same Outputs?

For some time, my team and I have challenged ourselves to work out where AI can potentially bring real productivity and revenue gains. This question is an enormous challenge in itself to answer, but our aim was to find a simple, practical framework to help operational managers evaluate AI use cases quickly. We believe the following question (while not an absolute rule) is the most reliable starting point:

> If two people with the same role are given identical inputs, are they expected to reach exactly the same result?

This question cuts through the hype and gets to the heart of where generative AI adds real value, and maybe even more importantly where it doesn’t.

When the answer is YES, consistency is what matters. Think of inventory planners, logistics coordinators, finance analysts or supply management teams. Given the same data and the same process, ideally they should all reach the same decision. An inventory planner should come to the same safety stock level every time, based on the forecast input, the volatility of supply / demand and the company’s financial planning policies. This is a deterministic environment. In these organizations, generative AI’s tendency to introduce variation is not a feature, it's a defect. An AI that gives 100 planners 100 slightly different answers to the same question is not an upgrade, it's frankly a new source of error.

On the other hand, when the answer is NO, then creativity is acceptable. Think of software developers, strategists or business analysts producing a one off analysis for an M&A. Two people solving the same problem differently is perfectly fine (maybe even desirable). In these settings, generative AI’s ability to fast track the ideation phase and frame a "blank page" is genuinely valuable.

|                       | Creative / Tech Industry                                                  | Operations / Supply Chain                                                          |
| --------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Who's doing the work? | Usually one person (a coder, writer, analyst)                             | Tens or hundreds of people doing the same role                                     |
| Is variance OK?       | Yes, two coders solving a problem differently is fine and normal practice | No, 100 planners should reach the exact same answer from the same data and process |
| LLM value             | High, AI solves the "blank page" problem and accelerates output           | Risky / Low, AI introduces inconsistency into a math problem                       |
| The goal              | Speed and novelty                                                         | Mathematical certainty and repeatability                                           |

#### Why Tech Companies See It Differently

To understand why Silicon Valley is so enthusiastic about large language models, we need to understand what problem they actually solved (and for whom)

Manufacturing had its automation revolution decades ago. In the 70s and 80s, material requirements planning (MRP) digitized and automated the mathematics of parts, planning and production. This later evolved into ERPs that extended beyond the shopfloor to other areas of the business. Operational businesses were able to automate and solve the deterministic side of their work a long time ago.

Software companies are only having that moment now. Until recently, there was no way to automate the writing of code. Yes, they had automations within their processes, think Git for branch / merging, Jenkins, Sonarqube for quality checks - but the core of their process (coding itself) was still entirely manual. What LLMs have given tech companies is the same automation for their core processes that manufacturers got 40 years ago with MRP.

This is why the excitement from Silicon Valley is genuine, for them, it is legitimately transformative. But the assumption that this success can be directly replicated into operational environments is fundamentally flawed. Productivity gains depend entirely on where the value adding activities sit in each specific businesses operating model, and those are simply very different from one company to the next.

This brings us to an old (but well understood) management concept - the [theory of constraints](https://www.tocinstitute.org/theory-of-constraints.html). An improvement made anywhere other than the process bottleneck is a productivity illusion. If an AI tool helps a warehouse inventory planner summarize a report 30 minutes faster, but that planner still can't serve more customers, optimize part storage or generate more revenue, you have not improved the business. You have created (what we called on the shopfloor) "extra coffee time" You've reclaimed hours for the individual (which I'm certain they're thankful for!) but nothing the business can easily capture as value. Before deploying any AI initiative, leadership should deeply reflect on their actual businesses critical paths and if those are in fact actually being addressed. 

There's another practical implication of this that's worth stating frankly - when that bottleneck is impacted (or even driven) by a broken process or inconsistent master data, AI doesn’t just fail to help, it can actively obscure the problem by making workarounds feel more sustainable and permanent. An effect that was also seen across research and industries ([here](https://link.springer.com/article/10.1007/s10257-026-00721-0) & [here](https://publications.aaahq.org/accounting-horizons/article-abstract/38/2/143/11196/The-Dark-Side-of-Robotic-Process-Automation-RPA)) as the hype of robotics process automation (RPA) faded and the same outcomes were seen.

According to [research from MIT](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf), approximately 95% of generative AI pilot projects have failed when deployed in enterprise settings. The reasons were exceptionally consistent - lack of adaptability to specific business processes, poor integration into existing workflows and failure when decision making context was incomplete. The issue is not that the AI is "dumb" the issue is that supply chains operate as highly interdependent, tightly coupled systems with complex cause and effect relationships. LLMs perform best where tasks are loosely defined and ambiguity is acceptable - precisely the opposite of how most operational enterprises function.

#### Where The Intelligence Actually Lives

There is a deeper structural point worth reflecting on and understanding. The fundamental difference between a technology company and a traditional operational business is where the "intelligence" of that business actually resides.

In a technology company (let's use Amazon as an example) when a process encounters an exception (the non happy path) an error, an edge case an unexpected input - the system is designed to handle it. There is almost no step in their purchasing process where a human manually intervenes. The intelligence is encoded in software, directly in the process itself. Engineers use AI to help write the code that enforces those processes. It sounds counterintuitive, but they are automating the creation of automation.

In many legacy organizations, when a process hits an exception (a delay, missing master data, a missing part linked to a claim) a human manually intervenes. Employees are there to bridge the gap between disconnected processes and systems, but that information often stays in their head or in an email. If the majority of a workforce is performing these bridging tasks, an AI tool that helps them write better emails is not reengineering the business, it's simply a more articulate / slightly quicker workaround. It targets individual convenience rather than the system’s actual bottleneck and provides no increased visibility of the end to end system.

Amazon and a traditional distributor are clearly both supply chain companies, but the day to day roles their employees play bear little resemblance to one another. For generative AI to deliver the double digit productivity gains that are being promised, an evolution in what employees actually do must occur. Acknowledging this will be a critical factor for any leadership team seriously pursuing these gains.

#### Two Kinds Of AI & Why The Distinction Matters

So if generative AI isn't the right tool for deterministic decisions, what is? And where does generative AI fit at all? The answer lies in understanding that there are actually two fundamentally different types of AI. There is barely a product or solution sold today that does not somehow advertise itself as "AI powered" It's easy to treat everything as the same kind of AI - it isn’t.

Traditional machine learning (ML) operates on structured data generated by existing processes and produces measurable, explainable outputs. It can predict outcomes (which orders are at risk of delay? / how many parts will be purchased?) and identify the drivers behind them (why are these parts consistently late etc) This technology is already embedded in parts of many operational businesses - demand forecasting, inventory optimization, anomaly detection etc. These approaches are time tested and should be expanded further, they strengthen deterministic decision making.

Generative AI plays a fundamentally different role. It acts as a layer on top of existing systems. It's brilliant at summarizing large volumes of information, extracting signals from unstructured data and combining multiple inputs into a coherent view. The most critical thing to take away here - it does not generate "truth" it organizes and presents information based on the context it is given.

In deterministic environments, traditional ML improves decisions (the brain - reproduceable & math) generative AI improves how we consume and act on that information (the voice - synthesis & interface) these are not the same thing. Generative AI does not replace business logic, it depends on it. Its value grows in direct proportion to the quality and structure of the data and processes that underpin it.

#### Where AI Actually Creates Value in Operations

None of this means AI has no role in operational environments. But the framing needs to change, we need to stop looking for AI to "think" and instead start asking it to "connect"

In traditional (highly deterministic) organizations, the most powerful use cases for generative AI are as a natural language interface to existing data. The value is not in the AI’s opinion on the supply chain, it's in its ability to act as a smarter, faster way to query what we already know.

Consider the difference between a planner waiting two days for a data analyst to write a SQL query, versus asking an LLM "which orders will likely be impacted by the shipping congestion in the Middle East?" and getting an answer within seconds. The AI is not making a decision, it's reducing the lag between a data event and an employee action. Here AI acts as the natural language interface to the deterministic truth already calculated by our ERP and ML models. If you have disciplined data, AI can definitely break down process silos so experts can see the business as a whole.

The most realistic / practical applications in the short term are processes that rely on:

- Analyzing employee written reports to extract and categorize issues (type of problem, location, severity etc) such as customer visit reports 
- Q&A systems on top of internal knowledge bases (process documentation, SOIs, POD trainings etc) reducing onboarding time for new employees
- Summarizing lengthy supplier communications or regulatory documents into actionable points
- Drafting routine communications based on structured data inputs

The more interesting use cases emerge when processes are standardized and data is captured systematically. At that point, AI can provide genuine end to end visibility, breaking down process silos so that experts can see the larger business as a whole. A hybrid approach (combining traditional ML for decisions with generative AI for synthesis) could unlock insights that neither could produce alone. But this is only possible if the underlying process definitions are standardized and data is captured consistently along the way.

#### The Inevitable Business Case

Currently, the cost of running large AI models is being heavily subsidized by speculative capital (AI bubble anyone?) Eventually, the real economics will come into focus. When that happens, leadership will (quite rightly) ask for a hard business case. The questions will be simple - Did AI increase revenue? Did it allow us to significantly reduce the number of people required to perform value adding tasks? Did it allow us to change the structure of the business?

If the answer is no, if AI was used primarily to help people communicate in a more polished way while the underlying processes remained unchanged - it will very likely be viewed as an expensive, failed experiment.

The process driven businesses that will look back on this period as genuinely transformative are only those that treated AI as an opportunity to fix the foundation, not to decorate it.

#### A Practical Direction for Operational Leaders

There is absolutely no question that generative AI is a real and powerful technology. But its power is conditional - in creative, non deterministic, personal productivity environments it is transformative. In process driven, consistency critical operations, its direct application is currently limited and the hype seems like its overselling AI’s short term impact.

The right question to ask of any proposed AI initiative is not "can AI do this?" but "is this the right problem for AI to solve?" Again, the simple test - would two people with the same inputs be expected to reach the same result? This provides a pretty reliable starting point.

The decisions for operational leaders will remain challenging for the foreseeable future, but hopefully some of the pros & cons / tradeoffs are now somewhat clearer - use traditional ML to strengthen deterministic decision making, use generative AI as a synthesis layer to improve how information is consumed and acted on - invest in process standardization and data capture that is necessary to make both those possible.

In five years, the process driven businesses that took this moment seriously will genuinely have transformed (though not all by the same route). Some will have pursued the digital native path - empowering the people who own their processes to encode them directly into software, using AI the way technology companies do today, to accelerate the building of automation itself. In these organizations, the intelligence will have moved fully into the system, and the role of employees (and what the company looks like itself) will have drastically changed. This is definitely a viable pathway, but if we're honest, unrealistic for the vast majority of legacy companies.

Alternatively, some will have taken a disciplined operational path - investing relentlessly in process standardization and data quality until the foundation is solid enough for the combination of traditional ML and generative AI to unlock gains that have remained out of reach for decades. This would provide the business true end to end visibility that's been promised via tools like process mining but realistically has failed to deliver / lacked for decades.

Both these paths lead to very different end states - what they share though is the same prerequisite - the hard, unglamorous work of getting the foundations right. The businesses that skip that step will find themselves exactly where they are today, just with better looking slides and nicer written emails.

AI cannot be a substitute for a broken process - like the original MRP, it's a force multiplier when connected with an exceptionally disciplined system.