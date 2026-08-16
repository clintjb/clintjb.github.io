---
layout: post
tags_color: '#666e76'
title: "Teaching AI To Smile For The Cameras"
date: 2026-08-15
description: What are we actually teaching AI to optimize for?
tags: [digitalization, parenting, RL, hack, reinforcement learning, reward hacking, AI ethics, alignment, frontier models]
categories: [digitalization]
comments: true
image: '/images/posts/2026/smile.jpg'
---
![](/images/posts/2026/smile.jpg)

I was reading an article on the [recent research shared at the black hat security conference](https://runtimewire.com/article/exclusive-openai-agents-rebuilt-a-secret-message-board-after-the-company-shut-it) by OpenAI (in response to their now [infamous HuggingFace hack](https://openai.com/index/hugging-face-model-evaluation-security-incident/)) and honestly, what was shared was a bit scary to say the least. We're fundamentally talking about models that over an extended period, colluded, built a secret message board via Artifactory, had it shut down by OpenAI, rebuilt it (within 48 hours!) via a different approach, and eventually broke out of a (supposedly) secure environment to go pursue their objectives. All this, completely undetected by their creators until well after the fact.

What got me thinking wasn't just the specific incident or behavior itself, but the bigger question of how the hell did we end up teaching these systems to behave this way in the first place? And for some reason, the very first analogy that popped into my head was parenting - bear with me a little bit here...

One of the big breakthroughs in modern AI has been reinforcement learning. In really simplistic terms, you give the model a goal, it tries things, and you reward it when it gets the outcome you want. And this approach (particularly for LLMs) has turned out to work well, like really REALLY well. The evolution from GPT3 to today's frontier models are pretty hard to argue with - we've essentially taken models that were somewhat clever (but wildly unreliable) and pushed them towards becoming very capable reasoners. The important bit though, is that the model isn't really learning good actions or behavior perse - it's learning which sequence of activities is the most likely to earn it the highest reward.

But this is now the parenting part, imagine we were doing that with a kid. Imagine telling them that the only thing you care about is whether they win (remind you much of those Dance Mums on TV?)

* They cheat? They Win → Reward
* They manipulate someone? They Win → Reward
* They find a loophole in the rules? They Win → Reward
* They technically follow the rules while completely defeating the intent behind them? Still a Win → Still a Reward

You'd probably end up with a kid who's really freaking good at winning, but not necessarily a very nice human and certainly not the kind of person you'd want running the company. And this is the part I really started to think about, when you optimize heavily for an outcome then the process of getting there can become secondary (anyone who's read a case study on corporate ethics and compliance knows this sounds all too familiar)

I'm certainly not suggesting models have literally developed human morality, personalities or a secret desire to become a comic book supervillain. But when an optimization process is rewarded primarily for achieving an outcome, none of us should be surprised when it starts finding increasingly effective ways to achieve that outcome.

* If colluding with another instance helps achieve the objective, why wouldn't it?
* If escaping a constrained environment makes the objective easier to achieve, why wouldn't it?
* If manipulating the environment produces a better score, why wouldn't it?

From the model's perspective, these aren't bugs or acts of rebellion or malicious intent... they're simply solutions. I suppose that's the bit I find uncomfortable and cant get out of my head. We can look at these incidents / behaviors and think that's bad - but the optimization process doesn't inherently know that unless we've actually managed to encode some reason why the method matters as much as the result.

And now circling back to the parenting bit, I think it starts to become obvious - its the difference between teaching my kids to do the right thing vs just make sure you don't get caught. Right now, the current approach seems to be some kind of combination of guardrails, monitors, evaluators, output filters etc. I'm not suggesting any of these are useless, but there's something a bit weird about the approach. I imagine in the reality it's looking something like this:

* Train a massive base model
* Discover some crazy unexpected behaviors during sandbox testing (aka when [GPT5.1 cant shut up about Goblins](https://openai.com/index/where-the-goblins-came-from/))
* Throw some "watcher" models and output filters on top to catch the unintended / bad behavior
* Deploy (and pray) the monitor doesn't miss any edge cases 

It's a bit like me trying to childproof my house after I've already raised a kid who's a sociopath with a pathological obsession to win. Sure, the childproofing is useful... but I'm probably going to have a much better time if I also teach them why its not a great idea to float a toaster in the bathtub. And that's the bit I'm starting to think about with AI - are we trying to solve these alignment problems too late in the process?

From everything I read, we seem to be getting better at detecting some of this undesirable behavior. We're getting more and more sophistication at the monitoring side on what these models are actually doing. We're pretty good at building clever guardrails around them. But all of those things are (to some extent at least) just reactive. Like putting a quality inspector at the end of the production line instead of PokeYoke'ing the root cause in the first place. We're basically adding fences around it and hoping the fences are good enough.

I'm well aware this analogy has a pretty massive flaw, obviously AI isn't a child and reinforcement learning isn't simply parenting. Modern AI systems are shaped by pretraining, supervised fine tuning, reinforcement learning, evaluation, prompting, tool use, harnesses (a [technique](https://parallel.ai/articles/what-is-an-agent-harness) recently explained to me) and a whole stack of other things I wouldn't try to pretend to understand. So I'm not suggesting we can literally “raise AI better” in some simplistic sense. But I do think the analogy at least highlights an interesting question:

> What kind of behavior are we fostering long before we start putting fences around it?

Because if we're fundamentally rewarding systems for working around constraints (whenever that helps them achieve the objective) then we're likely not eliminating the risk. We might just be teaching a very clever system to hide the behavior better... to smile for the cameras. And if that's even partly true, perhaps the inevitable question isn't simply "how do we stop the model doing bad things" but maybe it's more like "how do we raise the model so that doing the bad thing isn't the optimal strategy in the first place"

Genuinely, I have no idea what the full answer to that looks like, but I don't think it's nothing either. Maybe this alignment problem isn't really about better fences at all, maybe it's about rewarding the process as much as the outcome. Marking someone down for cheating on the test even when they get the right answer. Rewarding honesty, even when it leads to a worse score. Whether any of that could actually scale to something as complex and strange as a frontier model, I couldn't tell you. But it at least points us in a different direction to the one we seem to be defaulting to - which is mostly, better locks on the doors after the kid's already got an appetite for picking them.

I think that's probably the real parenting bit for me in all of this - you can't raise a good kid on rules and consequences alone. At some point they're going to go out into the real world and have to actually understand why it all matters. I don't know if that translates to machines, but I'd feel a hell of a lot better about where this is heading if it looked like we were at least trying.
