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

_⚠️ **THIS POST IS GENERATED WITH LLMs**: This post is newly generated a few times a week based on trending articles from hacker news. It takes the tone of my writing style, takes the topic from Hacker News - throws in some LLM magic and generates this post. Please be aware I don't read what gets generated here - it means I may agree, I may not - its a crap shoot - its not meant to be an opinion piece but merely [an experiment](https://github.com/clintjb/Weekly-Post) with the services from [OpenRouter](https://openrouter.ai) - last updated Monday 19 January 2026_


**Why Your ASCII Art Looks Blurry (And How to Fix It)**  

Ever since I built that Fortnite stats tracker with my son last year, I’ve been itching to dive deeper into the intersection of *code* and *creativity*. You know, the kind of projects where engineering meets art—where pragmatism shakes hands with playfulness. So when I stumbled upon the idea of rendering images using ASCII characters, I couldn’t resist.  

But here’s the thing: most ASCII art you see online? It’s *blurry*.  

Take that spinning cube on Cognition’s homepage—cool effect, right? But squint at those edges. Jagged. Fuzzy. Like someone smeared Vaseline on a monitor. It’s all because we’re treating ASCII characters like tiny rectangles of uniform brightness—pixels with font costumes—instead of leveraging their actual *shapes*.  

### The Problem With Pixels-in-Disguise  
When you convert an image to ASCII the textbook way, you split the image into a grid, sample the “lightness” of each cell (often just grabbing the center pixel), and slap a character in there based on how dark or bright it is. The result? A low-res, pixelated mess.  

Here’s why:  

```javascript  
const CHARS = [" ", ".", ":", "-", "=", "+", "*", "#", "%", "@"];  
function getCharacterFromLightness(lightness) {  
  return CHARS[Math.floor(lightness * (CHARS.length - 1))];  
}  
```  

This approach is like downsampling a high-res photo into Minecraft blocks. You lose *texture*, *contour*, *personality*. A `@` isn’t just a “bright” block—it’s top-heavy, dense in the middle. A `-` is a horizontal dash, perfect for edges. But if you ignore shape, you get jagged soup.  

### Shape Matters (Yes, Even in ASCII)  
Think about the letter `T` versus `L`. The `T` is top-heavy; the `L` anchors to the bottom-left. An `O` is a doughnut—hollow but structured. These aren’t pixels; they’re *shapes* with weight, density, and orientation.  

So I started asking: *What if we picked characters based on how well their shape matches the image’s contours?*  

Here’s how I approached it:  

1. **Sampling Circles**  
   I placed two circles in each grid cell—one in the upper half, one in the lower—and measured how much each ASCII character “overlapped” with them. For example, a `^` would dominate the upper circle; a `_` would own the lower.  

2. **Contour Chasing**  
   Instead of averaging lightness, I matched character shapes to the image’s edges. A steep vertical edge? Maybe a `|` or `]`. A gentle curve? `(` or `~`.  

3. **Cel Shading for Clarity**  
   Borrowing from 3D rendering, I added contrast enhancement to sharpen edges, like using a knife to carve definition into a smoked brisket.  

### The Result?  
Sharp edges. *Finally*.  

Here’s the kicker: it’s not just about technical precision. It’s about *respecting the medium*. ASCII isn’t a grid of lights—it’s a palette of 95 unique brushes. Treat it like paint, not LEGO bricks.  

### Why This Feels Like BBQ  
Funny enough, this mirrors my BBQ experiments. You don’t just throw meat on a grill and call it done. You adjust airflow, rotate for even heat, rest it just right. Similarly, ASCII rendering isn’t a one-algorithm job. It’s iterative. Playful.  

Next time you see blurry ASCII art, ask: *Are they using shapes, or just slapping brightness values onto a grid?*  

If you’re coding your own renderer—try sampling character shapes. It’s like switching from store-bought sauce to homemade rub. Messier, slower, but *oh* the flavor.  

*(Want to see the interactive demos? [Try dragging the sliders here]—though fair warning, you might lose an afternoon.)*  

---  

**P.S.** In true lean fashion, I’m already optimizing this. Next up: animated ASCII sequences using temporal coherence. Because why *wouldn’t* you want a rotating steak rendered in `#` and `%`? 🌶️