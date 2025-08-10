---
layout: post
tags_color: '#666e76'
title: 'A Weekly Automated Post'
date: 2025-06-21
description: A blog post generated with LLMs based on this weeks Hacker News
tags: [digitalization, GPT, hacker, news, tech, LLM, automation, blog]
categories: digitalization
comments: true
image: '/images/posts/2025/weekly.jpg'
---
![](/images/posts/2025/weekly.jpg)

_⚠️ **THIS POST IS GENERATED WITH LLMs**: This post is newly generated a few times a week based on trending articles from hacker news. It takes the tone of my writing style, takes the topic from Hacker News - throws in some LLM magic and generates this post. Please be aware I don't read what gets generated here - it means I may agree, I may not - its a crap shoot - its not meant to be an opinion piece but merely [an experiment](https://github.com/clintjb/Weekly-Post) with the services from [OpenRouter](https://openrouter.ai) - last updated Sunday 10 August 2025_

# There’s Something Magic About Keeping It Local  

A few months ago, I caught myself reflexively pasting a chunk of sensitive code into an online AI tool—something I’d never do with a human stranger but somehow felt *fine* handing over to a faceless cloud service. That moment bugged me. Why were we all so comfortable outsourcing our thinking (and our data) just because the interface had a friendly chatbot UX?  

Turns out, I wasn’t the only one uneasy about it. "I want everything local—no cloud, no remote execution," a colleague said over coffee. Simple demand. Shockingly hard to implement in 2025.  

## The Local-Only Dream  

Modern AI tools are like those all-inclusive resorts: convenient, polished, and utterly dependent on someone else’s infrastructure. Need to generate a chart? Off to the cloud. Want to tweak a photo? Upload it. Even editing a damn grocery list often routes through third-party servers these days.  

But open-source models have gotten *good*. Ollama, local LLMs, lightweight VMs—the pieces exist. The real challenge was stitching them together into something that felt seamless. Not just a jury-rigged terminal script, but a proper self-contained workspace where:  

- The AI runs on my machine  
- Code executes in an isolated sandbox (because blindly running `curl | bash` is the digital equivalent of licking subway poles)  
- I can still pull in outside info when needed—but on *my* terms  

## The Frankenstein Stack That (Mostly) Worked  

Let’s be honest: the first attempt was a monstrosity.  

I started with grand visions of a slick native Mac app. **Reality check:** After wrestling with Electron for a weekend (and nearly tossing my laptop into the Elbe), I admitted defeat. The web UI would do just fine.  

Then came the real puzzle—tool calling. Some models claim to support it, but try actually using those features via Ollama and you’ll get hit with:  

```json  
{"error":"registry.ollama.ai/library/deepseek-r1:8b does not support tools"}  
```  

Classic. The AI space moves so fast that even the documentation is a hallucination.  

The breakthrough came with Apple’s new(ish) Container tool. Lightweight, isolated VMs perfect for running untrusted code. Combined with a Jupyter server exposed via MCP, suddenly Claude and Gemini could execute Python snippets in a sandbox without ever leaving my machine. Watching an LLM seamlessly pipe code into a container—*that* felt like magic.  

## The Sweet Spot  

After the thousandth configuration tweak, it finally clicked. Here’s what the workflow looks like now:  

1. **Chat with a local model** (or a cloud one if I’m feeling impatient)  
2. **Generate code → execute in container** (goodbye, `rm -rf` anxiety)  
3. **Pull external data via headless browser** (Playwright pretending *not* to be a bot)  

Real-world test: I had it edit a vacation video—trimming clips, adding subtitles, the works—without uploading a single frame to a third party. That’s the dream right there.  

## The Trade-Offs  

Of course, local-first means compromises:  

- **Small models still stumble** on complex tasks (though they’re improving *fast*)  
- **Apple Silicon only** for now (blame my M2’s fanless smugness)  
- **Some sites block the headless browser** (looking at you, Stack Overflow)  

But the philosophy is what matters. This isn’t about rejecting the cloud entirely—it’s about reclaiming agency. Knowing that my data, my experiments, my workflows *can* exist offline by default changes how I interact with tech.  

## Try It, Break It, Make It Better  

If this resonates with you, grab the [coderunner-ui](https://github.com/instavm/coderunner-ui) code and hack away. No grand claims here—just a working proof that local AI doesn’t have to mean sacrificing modern conveniences.  

And if you improve it? Shoot me a note. I’ll be over here, editing videos and parsing CSV files like it’s 1999—blissfully disconnected.  

*(Whisky optional but recommended.)* 🥃