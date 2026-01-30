---
layout: post
title: 'Tunes'
date: 2026-01-30
description: Dynamic visualization of last weeks top 5 albums
tags: [stuff, pop culture, music, albums, listenbrainz]
categories: stuff
comments: true
image: '/images/posts/2026/tunes.jpg'
---
<img src="https://api.listenbrainz.org/1/art/lps-on-the-floor/clintjb/week/750" 
     alt="My listening stats" 
     width="750">
     
![ListenBrainz Stats](https://api.listenbrainz.org/1/art/lps-on-the-floor/clintjb/week/750)

<script>
fetch('https://api.listenbrainz.org/1/art/lps-on-the-floor/clintjb/week/750')
  .then(response => response.text())
  .then(svg => {
    document.getElementById('listening-svg').innerHTML = svg;
  });
</script>
