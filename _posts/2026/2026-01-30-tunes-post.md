---
layout: post
title: 'Tunes'
date: 2026-01-30
description: This weeks top albums
tags: [stuff, pop culture, music, albums]
categories: stuff
comments: true
image: '/images/posts/2026/tunes.jpg'
---

![](https://api.listenbrainz.org/1/art/lps-on-the-floor/clintjb/this_week/750)

<script>
async function fetchTopAlbums() {
  const username = 'clintjb';
  const toTs = Math.floor(Date.now() / 1000);
  const fromTs = toTs - (7 * 24 * 60 * 60); // 7 days ago
  
  const url = `https://api.listenbrainz.org/1/stats/user/${username}/releases?range=week`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const albumsList = document.getElementById('albums-list');
    const releases = data.payload.releases.slice(0, 10);
    
    albumsList.innerHTML = '<ol>' + releases.map(release => 
      `<li>
        <strong>${release.release_name}</strong> 
        by ${release.artist_name}
        <br><small>${release.listen_count} plays</small>
      </li>`
    ).join('') + '</ol>';
  } catch (error) {
    document.getElementById('albums-list').innerHTML = 
      'Failed to load albums.';
  }
}

fetchTopAlbums();
</script>