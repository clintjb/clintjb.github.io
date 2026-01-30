---
layout: post
title: 'Tunes'
date: 2026-01-30
description: This weeks top 5 albums...
tags: [stuff, pop culture, music, albums]
categories: stuff
comments: true
image: '/images/posts/2026/tunes.jpg'
---

![](https://api.listenbrainz.org/1/art/lps-on-the-floor/clintjb/this_week/750)

<img src="https://api.listenbrainz.org/1/art/lps-on-the-floor/clintjb/week/750" alt="My listening stats" width="750">

<div id="listening-svg"></div>

<script>
fetch('https://api.listenbrainz.org/1/art/lps-on-the-floor/clintjb/week/750')
  .then(response => response.text())
  .then(svg => {
    document.getElementById('listening-svg').innerHTML = svg;
  });
</script>
