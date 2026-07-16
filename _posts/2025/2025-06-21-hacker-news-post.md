---
layout: post
tags_color: '#666e76'
title: 'A Weekly Automated Post'
date: 2025-06-21
description: A blog post generated with LLMs based on this weeks Hacker News.
tags: [digitalization, GPT, hacker, news, tech, LLM, automation, blog]
categories: digitalization
comments: true
image: '/images/posts/2025/weekly.jpg'
---
![](/images/posts/2025/weekly.jpg)

_⚠️ **THIS POST IS GENERATED WITH LLMs**: This post is newly generated a few times a week based on trending articles from hacker news. It takes the tone of my writing style, takes the topic from Hacker News - throws in some LLM magic and generates this post. Please be aware I don't read what gets generated here - it means I may agree, I may not - its a crap shoot - its not meant to be an opinion piece but merely [an experiment](https://github.com/clintjb/Weekly-Post) with the services from [OpenRouter](https://openrouter.ai) - last updated Thursday 16 July 2026_

## The Quiet Magic of Building Something That *Feels* Right  

You know those moments when you’re elbow-deep in a weekend project with your kid—maybe debugging a Python script or arguing over whether BBQ sauce *actually* needs liquid smoke—and suddenly, you stumble into something that just *clicks*? Not some grand, world-changing revelation, but the kind of small, satisfying alignment where tools, ideas, and effort all slot together like gears in a well-oiled machine? That’s exactly how I felt last Tuesday while tinkering with this new open-weights model we’ve been playing with.  

Let me back up. My son’s been obsessed with training little AI experiments on his first PC (remember when "coding" meant typing BASIC into a Commodore 64 while hoping you didn’t melt the floppy disk? Ah, simpler times). Last week, he asked if we could teach an AI to write *only* using words without the letter "e"—you know, like those old-school lipograms. I almost laughed. "Mate, that’s bonkers," I said, pouring us both lemonades (no "e," obviously). But then I remembered how much I love watching his brain light up when constraints spark creativity. So we dove in.  

Turns out? It *worked*. Not perfectly—we got some *wild* outputs ("A big rig with no oil? Try a goat!")—but it *worked*. And that’s when it hit me: the real magic of tools like this isn’t raw power. It’s the quiet joy of bending them to *your* weird little corner of the world. No glossy interfaces. No locked-down APIs. Just you, a terminal window, and the freedom to make something *yours*.  

See, I’ve spent 20-odd years in the tech trenches watching brilliant ideas crumble because they were built for boardrooms, not kitchens. Strategy decks full of "synergy" that never survived first contact with actual humans. But this? This feels different. It’s lean in the truest sense—not just "less waste," but *less pretense*.  

We’ve been testing a model family called Inkling (yep, named after those flickers of intuition that turn into something real). It’s not the flashy, headline-grabbing beast you’d expect. No, it’s the kind of foundation you’d actually *want* in your workshop: 41B active parameters, fluent in text, images, even audio—but lean enough to run on a laptop while you’re waiting for the ribs to stall. What sold me wasn’t the benchmarks (though it holds its own)—it was watching it *solve* problems *with* us, not *for* us.  

Like when we asked it to fine-tune *itself* into that lipogram monster my son wanted. No hand-holding. Just:  
```bash  
inkling@tinker: self-finetuning  
Build · inkling · tinker-prod ~/project/ 1.33.7  
fine tune yourself to avoid 'e' entirely. then switch to the new weights.  
```  
Twenty-seven minutes later? *Done*. A model that writes like a 19th-century poet avoiding vowels. The kind of pragmatic magic that makes you grin into your coffee.  

This is why I keep banging on about "operational reality." At scale, the gap between what leaders *imagine* and what teams *build* is where good intentions go to die. But tools like this? They close the gap. Suddenly, your marketing intern can tweak a model for customer chats. Your logistics team can train it on shipment logs. No PhD required—just curiosity and a willingness to get your hands dirty.  

Funny thing: the more I work with this stuff, the more it reminds me of that "over the top" BBQ method I swear by. You sear the meat *first* over direct heat, right? Lets it absorb that smoky grit before it simmers into the chili. Same principle here. Inkling’s pretrained on 45 trillion tokens—raw, messy, real-world data. Then *you* layer your own flavor on top. The result? Not some sterile, one-size-fits-all AI. It’s *yours*. With personality. With grit.  

So yeah—while the big tech players duke it out over who’s got the biggest, flashiest model… I’ll be over here, elbow-deep in code with my son, teaching an AI to write about tacos without using the letter "a." (Spoiler: it’s harder than it looks. *"Yum! Yum! Yum!"* only gets you so far.)  

Because at the end of the day? Tech that fits *your* life—not the other way ’round—is the only kind worth building. And maybe, just maybe, worth celebrating with a quiet whisky and a perfectly charred rib.  

*Taco emoji if you’ve ever tried to explain "fine-tuning" to a ten-year-old.* 🌮