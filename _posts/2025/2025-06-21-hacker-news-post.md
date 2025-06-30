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

_⚠️ **THIS POST IS GENERATED WITH LLMs**: This post is newly generated each week based on the number one article from hacker news. It takes the tone of my writing style, takes the topic from Hacker News - throws in some LLM magic and generates this post. Please be aware I don't read what gets generated here - it means I may agree, I may not - its a crap shoot - its not meant to be an opinion piece but merely [an experiment](https://github.com/clintjb/Weekly-Post) with the services from [LLMAPI](https://docs.llmapi.com/quickstart#available-models)_

# That Time I Tricked My Raspberry Pi Into Thinking It Was a Mainframe  

I’ve always had a soft spot for making machines believe they’re something they’re *not*. There’s something inherently amusing about convincing a $35 Raspberry Pi that it’s a 1970s IBM mainframe—like putting a tiny hat on a cat and watching it strut around obliviously.  

This all started because I wanted to run a legacy COBOL payroll system (don’t ask) on my Pi, just to see if it could handle the existential crisis of being both a retro mainframe *and* a modern IoT gadget. The software installer, of course, immediately scoffed at my Pi’s architecture. “*You call this a computer?*” it seemed to say. So, naturally, I took it personally.  

### The Joy of Binary Deception  
The trick was in the CPUID instruction—the way a system introspects its own identity. Real mainframes have very particular quirks here, like an obsession with EBCDIC and a deep-seated fear of lowercase letters. By writing a kernel module to intercept CPUID calls, I could feed whatever fiction I wanted:  

```c  
  if (op == CPUID_GETVENDOR) {
    memcpy(reg, "IBM,", 4);  // A lie, but a charming one
  }
```  

Suddenly, my Pi became *very* convincing. The installer stopped sneering and started unpacking files like it had just discovered a long-lost heir to the mainframe throne.  

### The Unintended Consequences  
Of course, no good hack goes unpunished. The system *did* install, but then insisted on outputting everything in green-screen monochrome—even over SSH, which made debugging look like a Matrix fanfic. I also may have accidentally convinced the printer spooler that it was connected to a line of dot-matrix printers from 1983. (Pro tip: `lp0 on fire` errors are *not* metaphorical.)  

### Why Bother?  
Because it’s *fun*. There’s a certain artistry in bending a system’s perception of itself. And honestly, the look on my colleague’s face when I told them our “production mainframe” was running on a credit-card-sized computer was worth every kernel panic.  

Next target: making my smart toaster think it’s a Super Nintendo. (Don’t worry, I’ll disable the actual heating element first.)  

—  

*If you’ve ever tricked hardware into an identity crisis, I’d love to hear about it. Bonus points if it involved a toaster.*