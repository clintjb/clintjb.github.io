---
layout: post
tags_color: '#666e76'
title: 'PixelGate NFT Experiment'
date: 2025-12-18
description: An extended experiment run over the 2025 Christmas holidays
tags: [digitalization, experiment, serverless, NFT, AI, blockchain, Cloudflare, workers, base, funkopop]
categories: digitalization
comments: true
image: '/images/posts/2025/pixelgate.jpg'
---
![](/images/posts/2025/pixelgate.jpg)

Almost every Christmas break, I try and set some time aside to simply build something new. These projects aren't meant to scale or make any financial sense; they exist simply from me to try and learn something new, to scratch a bit of a technical itch. This year, the inspiration came from a moment of mild embarrassment - during the preparation for a presentation I realized I made a fleeting comment on blockchain and smart contracts - although I had worked on this (also over a Christmas a few years ago) I had never actually released what I did publicly or on my site - seemed a bit cheap to have opinions but not having shared the experience forming those. So in addition to wanting to really deep dive into Cloudflares serverless workers this year's experiment was going to have to integrate something with blockchain as well - I wanted to build an end to end system that's triggered via Jekyll (static site) utilizing serverless architecture, AI and blockchain (really trying hard for that tech bingo trifecta) - this project became what Ive called PixelGate.

So before going deep into the details let's start here with the riddle to mint your very own NFT - you will need to connect your MetaMask wallet so the NFT can be minted to the address (if your nervous you can see what's happening in the [source code here](https://github.com/clintjb/clintjb.github.io/blob/main/js/pixelgate.js) as well as MetaMask [instructions here](https://support.metamask.io/start/getting-started-with-metamask))

![](/images/posts/2025/pixelgate-riddle.jpg)

> I speak without a mouth,
> And hear without ears,
> I have no body, but I come alive with wind -
> What am I?

<style>
  #wallet, #riddle {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
  }

  #wallet button, #riddle button {
    background: #000;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  #wallet button:hover, #riddle button:hover {
    background: #333;
  }

  #address {
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 6px;
    margin-top: 12px;
    font-family: monospace;
    color: #495057;
    background: #fff;
    font-size: 16px;
    box-sizing: border-box;
  }

  #riddle input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 6px;
    margin-bottom: 12px;
    font-size: 16px;
  }

  #result {
    margin-top: 16px;
    padding: 12px;
    border-radius: 6px;
    display: none;
  }

  #result.show { display: block; }
  #result.success { background: #d4edda; color: #155724; }
  #result.error { background: #f8d7da; color: #721c24; }
  #result a { color: #000000; }
</style>
<div id="wallet">
  <button id="connect">Connect Wallet</button>
  <p id="address"></p>
</div>

<div id="riddle">
  <input id="answer" placeholder="Your Answer..." />
  <button id="solve">Solve The Riddle</button>
  <p id="result"></p>
</div>
---

### The Core Concept
I wanted to build a small NFT project - I wanted some kind of system that felt kind of like unlocking a secret character in a video game - it shouldn't cost the user anything (but it shouldn't break my wallet either!) The base of the system should be deterministic, so no randomness and no bots. I wanted the aesthetic to originate from 16 bit characters than have them "evolve" via AI when minted. This evolution would be heavily influenced by FunkoPops! (thinking it was a way to wow my son as I watch him currently build a small army of them in his room) The user could only mint a character by "unlocking the gate" via a riddle (also inspired by the awesome [Absolute Batman](https://en.wikipedia.org/wiki/Absolute_Batman) comics Ive been recently reading)

The project was built mainly as a series of independent Cloudflare workers - as I was using a few different APIs and whatnot, I thought would ensure bring in some resilience and that if a failure occurred in one component (e.g. the AI step) it doesn't break the core functionality. The rough architecture was as follows:

![](/images/posts/2025/pixelgate-architecture.png)

- Jekyll: The frontend, it handles the wallet connection and the user input
- Solver Worker: Validates riddle answers server side and triggers the minting on chain
- Metadata Worker: Dynamically builds an ERC-721 JSON, extracts traits and creates an AI backstory
- Image Worker: Generates an "OG" SVG on the fly, renders as PNG and a FunkoPop reinterpretation via OpenRouter

<script src="https://cdn.jsdelivr.net/npm/ethers@6.10.0/dist/ethers.umd.min.js"></script>
<script src="/js/riddle.js"></script>

### Designing The Characters Locally

I had a very strong idea on what I wanted my OG characters to look like, so before coding a line I opened up GIMP and got to work. Each character was built from multiple PNG layers, for example:

- [Body](/images/posts/2025/pixelgate-body.png)
- [Eyes](/images/posts/2025/pixelgate-eyes.png)
- [Hair](/images/posts/2025/pixelgate-hair.png)
- [Top](/images/posts/2025/pixelgate-top.png)
- [Accessories](/images/posts/2025/pixelgate-accessories.png)
- [Logos](/images/posts/2025/pixelgate-logo.png)

To start with, my original plan was to stack the PNGs, render them server side and export as a final image. Quite quickly I realized though this wasn't a good approach. PNGs didn’t really work as there's no easy color manipulation, raster (so they don't scale so well) expensive processing and difficult to use for deterministic logic / extraction.

What I actually wanted was pixel perfect layering, code driven color changes / variations as well as deterministic outputs - having already done all the characters and components I decided to convert each layer into SVG paths - once these were converted, everything became code again!

```
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <path d="M31 16h35v4h4v12h-8v3h-7v2H15v-5h10v-6h2v-6h4Z"/>
  <path fill="#FFF" d="M36 20h8v9h-3v-5h-5Z"/>
</svg>
```
This approach now allowed me to basically reduce the colors to parameters and each character layer was now a function with a specific rendering order. Later The generator would take the tokenID (from the NFT / block) and use it as a seed for decisions / probability rules e.g.

```
function randomChance(seed, probability) {
  return seededRandom(seed) < probability;
}

if (randomChance(tokenId + 42, 0.05)) {
  character.glow = random(glowColors);
}
```

This then meant that if tokenID = 123 it would always be the same character. I wouldn't have to screw around with IPFS uploads (which my previous experiment relied heavily on) and no need for preminting - basically at this point PixelGate was already working as an image generator. Why no IPFS this time? Simple, this time round I wanted deterministic generation + dynamic workers - it would remove the need for preminted assets or permanent storage - the chain should only point to logic, not files. You can see the OG output here:

![](/images/posts/2025/pixelgate-og.png)

### Cloudflare & Workers
So, recapping a bit - up until now PixelGate was just a character generator running locally. It worked, it was deterministic, it produced clean SVGs - it still wasn't very useful though - as a minimum it needed to render to a public URL. SVGs are basically just simple code wrapped up, meaning unlike other images it doesn't need to be a file - if a HTTP call returns "Content-Type: image/svg+xml" then your browser simply treats it like an image even if its not in the traditional sense. This is simplified but basically an example of the worker:

```
export default {
  async fetch(request) {
    const { searchParams } = new URL(request.url);
    const tokenId = Number(searchParams.get("tokenId"));

    if (Number.isNaN(tokenId)) {
      return new Response("Invalid tokenId", { status: 400 });
    }

    const character = generateCharacter(tokenId);
    const svg = renderSVG(character);

    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=31536000"
      }
    });
  }
};
```

This was now basically the backbone for the rest of the project - the worker randomly generated (based on the seed) and these characters would now be used in every subsequent process step - the browser could simply render the image on the fly, no uploads, no storage.

[https://pixelgate-image.clintjb.workers.dev/?tokenId=0](https://pixelgate-image.clintjb.workers.dev/?tokenId=0)

### Gated Minting & Smart Contracts
Now that the OG characters were created it was time to make them ownable - that meant getting them onto a blockchain. As I mentioned earlier the riddle would act as the gateway, main point here was to have a bit of a play with making it "feel" like unlocking content from a game but probably more importantly to make minting intentional / block bots (it wouldn’t survive a hostile public mint, but it didn’t need to) The process was basically the following:

- Jekyll: User attaches the wallet and enters their answer
- Solver Worker: Validates hashed answer, ensures the wallet hasn't already solved and than calls the contract
- PixelGate (ERC-721) Smart Contract: Mints the token & assigns the tokenID

So first up was to choose on what blockchain I would run this on - there were a lot of things I considered but the two most important points (by far!) were support for OpenSea and LOW fees. As mentioned I wanted it to have low friction / no cost for the user, but to keep his affordable I couldn't be paying crazy minting / gas fees (on Ethereum this can range from a few cents to tens of euros depending on congestion - this unpredictability I definitely didn't want to get hit with!) so after a bit of research I landed on [Base](https://www.base.org/build). So with that decided I started to work on the smart contract. The last time I did this I had all kinds of complexities integrated (royalty logic, decay, hooks etc) this time I decided to keep it ridiculously boring and simple:

- ERC-721
- onlyOwner mint
- incrementing tokenId
- dynamic tokenURI

I developed all this in [Remix](https://remix.ethereum.org) along with OpenZeppelin as a base, compiled and deployed the contract. Its slightly more complex than this (but honestly not much) below is a simplified example of the contract - its job is to be basically do two things - point to the metadata and mint tokens - everything else lives and functions elsewhere...

```
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PixelGate is ERC721, Ownable {

    uint256 public nextTokenId;
    string public baseTokenURI;

    constructor(
        string memory name_,
        string memory symbol_,
        string memory baseTokenURI_
    )
        ERC721(name_, symbol_)
        Ownable(msg.sender)
    {
        baseTokenURI = baseTokenURI_;
    }

    function mint(address to) external onlyOwner {
        uint256 tokenId = nextTokenId;
        nextTokenId++;
        _safeMint(to, tokenId);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseTokenURI(string memory newBaseURI) external onlyOwner {
        baseTokenURI = newBaseURI;
    }
}
```

So with the smart contract deployed we had to integrate the solver worker to trigger the minting / pay the gas when people correctly answer the riddle. There's not a lot of rocket science to this one it basically:

- Accepts an answer + wallet address
- Normalizes the input
- Hashes the answer
- Compares against a stored hash
- Calls the contract / mints if valid

Problem here was that once people knew the answer (and it's never designed to be very difficult) people could constantly mint themselves and NFT on my costs - here I wanted to limit it to one token per wallet. So after researching a bit on best practices and fiddling around I came to the conclusion of using a KV store to lock access:

```
const key = address.toLowerCase();
const alreadySolved = await env.SOLVERS.get(key);

if (alreadySolved) {
  return json({ message: "Already Solved" }, 400);
}

await env.SOLVERS.put(key, "true");
```

So now the minting wasn't happening in the browser (ensured no one could inspect the code / bypass the riddle or spam the contract) but keeping everything server side meant the gate remained enforced, contract stays clean and importantly the front end / Jekyll remained simple. Looking back the biggest issue with this approach was that Cloudflare workers cant install npm packages or easily import Ethers.js. This led to a hell of a lot of rewrites / CORS issues and debugging / modified headers etc - with all that said though, my heart lit up the moment I finally saw this response from my console:

```
{
  "success": true,
  "message": "🌮 PixelGate NFT Minted!",
  "txHash": "0x2b622879..."
}
```

So finally, we had characters being rendered in 16 bit glory correctly, minting had worked and the tokens existed on Base. Those tokens though didn't say much - on chain the tokenURI(tokenId) returns a URL, that’s it - everything else the backstory, names, traits, images, rarity - it all depends on what that URL payload returns, and how the OpenSea marketplaces interpret it. In my case the PixelGate contract returns: https://pixelgate-metadata.clintjb.workers.dev/{tokenId}

So the flow for the contract / OpenSea basically means _contract → tokenURI() → metadata worker → JSON response_ - yep, this meant I needed another worker

### Metadata & Traits
So my very first version kind of sucked (current one does as well a bit if I'm honest) but the first version was really a little bare. It parsed the _tokenId_, regenerated the character and returned some really minimal metadata:

```
const metadata = {
  name: `PixelGate #${tokenId}`,
  description: "A 16-bit hero unlocked on clintbird.com",
  image: `https://pixelgate-image.clintjb.workers.dev/?tokenId=${tokenId}`,
  attributes: []
};

return new Response(JSON.stringify(metadata), {
  headers: { "Content-Type": "application/json" }
});
```

This next part now is by far the hackiest / dirtiest part of the project (but in my defense it was late and I just wanted it working at this point) I already had the SVGs of the characters so started deriving the traits - problem was a shirt was a shirt (at least in the payload) even if they were wearing a hoodie - some of the traits weren't coming through as explicit variables, so in the end I inferred them from snippets in the SVG code:

```
const shirtType = (() => {
  if (c.shirt.includes('M34 78h32v4')) return 'Striped';
  if (c.shirt.includes('M43 68h14v5')) return 'Hoodie';
  if (c.shirt.includes('M47 68h6v23')) return 'Jacket';
  return 'Plain';
})();
```

Honestly, it's not elegant but it does work deterministically - and as said it was getting late and I had to move on. So in the end the meta data worker ended up looking something like this:

```
export default {
  fetch(request) {
    const tokenId = Number(request.url.split('/').pop());
    const c = generateCharacter(tokenId);

    const metadata = {
      name: `PixelGate #${tokenId}`,
      description: "A 16-bit hero unlocked on clintbird.com",
      image: `https://pixelgate-image.clintjb.workers.dev/?tokenId=${tokenId}`,
      attributes: [
        { trait_type: "Background", value: c.background.name },
        { trait_type: "Glow", value: c.glow ? c.glow.name : "None" },
        { trait_type: "Shirt Type", value: inferShirt(c) },
        { trait_type: "Headwear", value: inferHead(c) },
        { trait_type: "Face Accessory", value: inferFace(c) },
        { trait_type: "Logo", value: inferLogo(c) }
      ]
    };

    return new Response(JSON.stringify(metadata), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=31536000"
      }
    });
  }
};
```

Once deployed, OpenSea refreshed and everything updated accordingly, I could see each character's traits coming through in place. Now it was time to start weaving in some AI "magic". I wanted to be really mindful here and ensure that the AI wouldn't introduce any "source of truth" - the OG 16 bit characters were the source and they should never change, the AI portion should simply bring a different view to the character but never modify the character / identity itself.

The first part was rather simple - I utilized an LLM via OpenRouter, provided it with the traits from the metadata payload and prompted it to give a background story on the origin of this character. I gave it some additional context on this fictitious world based on my combined interest of BBQ, whisky, comics and whatnot and let it go crazy. This backstory / character lore gets stored as well into a KV and gets added into the metadata payload for OpenSea. From a text standpoint we're basically done now - time to move onto the image / vinyl toy regeneration.

### Vinyl Toy Image Generation

My first instinct was to generate the characters with AI - I would deliver the traits, engineer & tune a prompt and let the model do the work - this was a colossal disaster...

- Outputs wearn’t consistent
- Traits drifted
- Accessories changed
- Colors mutated
- In many cases "slop" would've been putting it mildly

What I came to realize is I was after a reinterpretation - the model should see the OG character, preserve the identity and restyle it (not redesign) Concretely that meant delivering the OG image, a strict prompt and aggressive constraints - this meant selecting an I2I model instead of T2I. After doing some research on the models I could utilize via OpenRouter (that wouldn't break the bank) and that were indeed I2I (e.g. can accept images as an input) it left me with only a few options. Unfortunately all the remaining options also decided not to accept SVG as an input format - meaning I now needed to convert my SVGs to something else.

SVG is great for all the reasons I already mentioned, but OpenSea prefers PNG - and, as I now learnt, most AI models don't accept SVG via API calls. I came to the conclusion that PNG output was unfortunately unavoidable. After googling for some time I came to another unfortunate realization that Cloudflare workers don't have native image libraries or canvas so there was no easy way to “just render” an SVG within my stack. CloudFlare did offer an image pipeline as well as a browser rendering API, but after spending way too long (to not get it to work) I reverted to simply using a free conversion API. I would deliver it the SVG and it would return a PNG. So now having the API working and PNGs being generated I really wanted to cache these (knowing I'm limited to the free calls I can make) and the fact that OpenSea is notorious for hammering the hell out of your endpoints / metadata refresh. Here I added a Cloudflare KV namespace with the following caching logic:

```
const cacheKey = `image:${tokenId}:${format}`;
const cached = await env.PIXELGATE_IMAGES.get(cacheKey);

if (cached) {
  return new Response(cached, headers);
}
```

I headed back to my original image worker and added a query parameter to allow for multiple image calls:
- [?tokenId=0 → SVG](https://pixelgate-image.clintjb.workers.dev/?tokenId=0)
- [?tokenId=0&format=png → PNG](https://pixelgate-image.clintjb.workers.dev/?tokenId=0&format=png)

This meant that if someone called that PNG token it would first check if it existed in the cache and return the image or call the API and store it accordingly. I now had my OG characters publicly available in both SVG and PNG.

So with PNG in hand I now started updating my worker to deliver the image to the AI model via OpenRoute and the corresponding prompt to be returned into (yet another) KV cache. This seems simple but this was surprisingly difficult - getting Cloudflare workers to fetch another worker’s image feels like it should be easy - _403 forbidden / proxy blocking / worker to worker fetch failures / missing headers_ - it unfortunately wasn't...

![](/images/posts/2025/pixelgate-rage.gif)

So after eventually resolving the issue(s) and the response being parsed I would:

- Validate image
- Decode base64
- Cache result
- Return PNG

I tried the models I could via OpenRouter - many returned URLs instead of base64, most hallucinated additional features a few turned characters into animals. Eventually I landed on a [Flux](https://flux2.io/) variant that:

- Respected composition
- Handled style transfer well
- Returned base64 images reliably

This still required a very explicit prompt which was iterated over quite a few times. You can see the OG and AI styled output here:

![](/images/posts/2025/pixelgate-evolution.jpg)

Again that magical KV is super super important here - AI is slow, expensive and unpredictable - once I have something generated the image caches are permanent, repeated requests are instant and OpenSea hammering the call does not trigger re-generation.

### Wrapup & Lessons Learned

So, now we've gone through every individual piece in the PixelGate workflow:

- Characters generated deterministically
- SVG & PNG rendering solid
- Metadata resolving correctly
- NFTs being minted on Base
- AI reinterpretations cached and stable

I'll also run through now with some of the lessons and surprises I had:

**The Solver Worker / The Gate** - The riddle part of PixelGate was intentionally simple “_I speak without a mouth, and hear without ears, I have no body, but I come alive with wind - What am I?_”

> Answer: _echo_

This logic lived server side inside a Cloudflare worker as GitHub pages would expose the source code and (although easy) client side validation is rather meaningless - here the worker is the authority. Mainpoint, the front end never decides anything - it only submits intent

**The Wallet Connection** - here we couldn't make it any simpler, no off chain authorizations, no signing - here we connect a wallet, submit an answer, receive a result:

```
const provider = new ethers.BrowserProvider(window.ethereum);
const accounts = await provider.send("eth_requestAccounts", []);
userAddress = accounts[0];
```

This kept the my website / UX as simple as possible (even for non crypto folks!)

**Transaction Feedback** - Originally when minting succeeded I gave a celebratory response but not much more - I added later the txHash into the UI so that users could click through and see the transaction directly in the browser as well as verify the mint themselves. This was honestly a bit of an oversight from me and only detected when my wife asked "well how do I see it" after I showed her the demo 🤦

**OpenSea** - It genuinely takes a lot of the heavy lifting out of creating these kinds of things. It picked up the contract, resolved the tokenURI correctly, metadata loaded and images stored. You can see the [collection here](https://opensea.io/collection/pixelgate-nft)

![](/images/posts/2025/pixelgate-opensea.jpg)

**Costs** - One thing I was genuinely curious about going into PixelGate was the real cost of running something like this, not theoretical pricing, but actual money leaving my account. The good news - surprisingly little, mostly because almost everything is deterministic, aggressively cached, or both. Below is a rough breakdown of where money could / did go:

- Cloudflare Workers: Entirely within the free tier **(~€0.00)**
- Cloudflare KV: Reads are high but writes are low - still well within the free tier **(~€0.00)**
- Blockchain (Base): One mint per wallet, gas paid by me **(~€0.01 per mint)**
- AI Lore (OpenRouter): Utilizing free LLMs and caching **(~€0.00)**
- SVG To PNG (CloudConvert): Utilizing free API call (10 per day) and caching **(~€0.00)**
- AI Image (OpenRouter): Most expensive part, using Flux2 Pro **(~€0.04 per image)**
- Marketplace (OpenSea): Free, but extremely chatty, caching is essential **(~€0.00)**

**Surprises** - These are the bits that probably don't need too much of a write up but at least caught me a bit of guard throughout the process:

- How well serverless fits NFTs
- How much KV caching matters
- How fragile and unpredictable AI pipelines still are
- How little on chain logic you actually need / almost boring (in a good way)
- Underestimating CloudFlare worker constraints (npm installs / no dynamic imports / limited memory / module refactors / manual bundling etc)

So this was the 2025 Christmas experiment - it hit my objective of all the tech bits I wanted to play with - it also let me finally publish an experiment with something on blockchain - it held true to the FunkoPop influence (although my son was less impressed than I had hoped)

If I did it again there would be endless amounts of things I'd do differently but let's be honest - PixelGate isn't a startup, it isn't a product, it's not mission critical (or even remotely useful). PixelGate did exactly what a Christmas experiment should - taught me things, broke in interesting ways, and shipped anyway. If anyone has questions or wants to chat about serverless NFTs, AI pipelines, or deterministic generation, give me a shout - I'd love to see a few PixelGate characters out there in the wild!

Cheers
<script src="https://cdn.jsdelivr.net/npm/ethers@6.10.0/dist/ethers.umd.min.js"></script>
<script src="/js/pixelgate.js"></script>

