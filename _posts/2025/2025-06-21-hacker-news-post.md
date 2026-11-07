---
layout: post
tags_color: '#666e76'
title: 'A Weekly Automated Post'
date: 2025-06-21
description: A blog post generated with LLMs based on this weeks Hacker News.
tags: [digitalization, GPT, hacker, news, tech, LLM, automation, blog]
categories: [digitalization]
comments: true
image: '/images/posts/2025/weekly.jpg'
---
![](/images/posts/2025/weekly.jpg)

_⚠️ **THIS POST IS GENERATED WITH LLMs**: This post is newly generated a few times a week based on trending articles from hacker news. It takes the tone of my writing style, takes the topic from Hacker News - throws in some LLM magic and generates this post. Please be aware I don't read what gets generated here - it means I may agree, I may not - its a crap shoot - its not meant to be an opinion piece but merely [an experiment](https://github.com/clintjb/Weekly-Post) with the services from [OpenRouter](https://openrouter.ai) - last updated Saturday 07 November 2026_



I’ve always been drawn to the quiet corners of systems. The bits everyone assumes are handled, the fine print that gets glossed over in meetings, the unglamorous plumbing that holds everything together. You’d think after two decades in operations and digital transformation, you stop noticing the little things. But honestly, it’s exactly where the most interesting problems live.

A few weeks ago, I found myself down a rabbit hole of exactly that kind. Not in a data pipeline or a business workflow, but in the uninteresting world of password authentication. You’d be surprised how much history is hiding in a single asterisk.

It started with a simple question: what happens when a system refuses to compute a hash? Back in the old Unix days, passwords lived in readable files and a `*` meant “never log in.” Bill Joy literally labeled the daemon account “the devil himself” because nobody was ever supposed to touch it. The logic was straightforward—if the field is just `*`, nothing matches, and you’re locked out. Fast forward to the 1990s, and the hashes moved to `/etc/shadow`. The philosophy stayed the same. But then came the fine print. When `crypt()` couldn’t do its job, the spec said it should return `NULL`. Most programs never checked for that. They’d just compare whatever they got, hit a mismatch, and move on. Or crash.

In 2012, musl libc decided `NULL` was too disruptive and quietly changed it to return a single character on failure. That character? `*`. A clever fix on paper, but it created a quiet collision. A few weeks later, musl added SHA-512 support, which gets slower with longer passwords. So they capped inputs at 256 bytes. Anything longer triggers the failure condition... which now returns `*`. Same `*` that’s supposed to mean “passwordless.”

Then, in 2016, OpenSSH tried to patch a timing side-channel. To waste time consistently whether a user exists or not, `sshd` would borrow another account’s salt and run the hash anyway. It worked beautifully—except for one edge case. Real users with a `*` in their shadow file got swept up in the same timing logic, and somehow, the math aligned so that anything past 256 characters just... passed. I know. I stared at the commit history for a while.

You’d think this would’ve been caught. But operating systems are built on layers of assumptions, and the ones we stop questioning are the ones that stick. Alpine’s Docker images don’t use PAM by default. Most distros go through PAM, which bypasses `crypt` entirely for locked accounts. Glibc never even used the `*` trick. So the bug lived in plain sight, quietly waiting for someone to paste a 300-character SSH key into a password prompt, or type one too many characters by accident.

I didn’t stumble on it by accident, though. I’d been running a few agent swarms to stress-test OpenSSH builds across different libc implementations, throwing nearly 18,000 weird login attempts at them. Weird hashes, broken accounts, passwords absurdly long. Everything aligned perfectly across the board—except musl without PAM. That one kept saying “yes” when it absolutely shouldn’t have.

It’s a perfect example of why I’m so passionate about bridging the gap between high-level vision and operational reality. On paper, a locked account means locked. In practice, a chain of reasonable decisions from 2012, a well-intentioned timing fix in 2016, and a distribution that never runs PAM created a backdoor that nobody noticed for over a decade. These things don’t happen from malice or incompetence. They happen because we stop asking “what if?” and assume the edge cases are handled.

I’m a firm believer that continuous improvement isn’t just about optimizing workflows or trimming costs. It’s about cultivating a mindset that respects the quiet details. The little asterisks. The untested assumptions. The places where systems grow fat on complexity because no one felt responsible for digging in. When we enable teams to look past the dashboard and into the plumbing, that’s when the real value shows up.

If you’re running OpenSSH on musl—Alpine, OpenWrt, Buildroot, or most of the Docker images you’ve pulled lately—you’ll want to check a few things. Password authentication is still on by default in a lot of places, and if you have any accounts with just `*` as their password field (like Alpine’s default user, or root on certain cloud images), they’re now accepting anything between 257 and 1024 characters. It’s an easy fix, but it’s worth doing.

Update to OpenSSH 10.6p2 or later. If that’s not an option, just drop a quick configuration override in your sshd config and restart the service:

```
PasswordAuthentication no
```

And if you’re wondering whether you’ve already been touched, check your auth logs for an account that took a password when it shouldn’t have. It’s not a comforting thought, but it’s better to know. We set out this year to build on strong foundations and actually cement them, and part of that means respecting the parts of the stack that don’t get talked about at strategy offsites.

We spend so much time chasing the shiny new transformations and the big-picture roadmaps that it’s easy to forget how much of our infrastructure is held together by quiet, unglamorous decisions. Sometimes the most meaningful improvements come from stepping back, tracing a thread all the way to 1980, and realizing that a single character can change everything. I’m grateful for the reminder. And I’ll keep pouring over the fine print—next time I’ll probably bring a better coffee.

{% include agent-hp/hp-005.html %}