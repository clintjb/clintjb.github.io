---
layout: post
tags_color: '#666e76'
title: 'What Startups Can Learn From IKEA'
date: 2016-05-15
description: Some insights for anyone involved in cost convergence or DtX in general.
tags: [business, development, ikea, supply chain, dtc, dtx]
categories: business
comments: true
image: '/images/posts/2016/ikea.jpg'
---
![](/images/posts/2016/ikea.jpg)

This is a fantastic post that I stumbled across over at [Bolt](https://blog.bolt.io/what-startups-can-learn-from-ikea-6a2fad86a5ff#.73bpbvkyf) - Although its focussed on Startups; I think it gives an interesting insight about IKEA for anyone involved in cost convergence or design to X in general.

---

Hardware startups continuously struggle with two things: sales and supply chain management. Practically speaking, this means startups must get really good at efficiently moving the right amount of stuff around the world at exactly the right time so customers can purchase it. Startups typically get one or two shots at this before they run out of money, so it’s critical to set up their supply chain correctly from the start.
I’ve always found the most effective way to do something correctly is to look at companies that are better than anyone else at that thing. You can’t go too far in a conversation about supply chain and retail sales before realizing there is one company that trumps all others: IKEA. The Swedish furniture maker manages over 1,300 Tier 2 (materials + processing) suppliers and over 500 Tier 1 (finished good) suppliers across 50 different countries. They work together to move 100M units of 9,500 unique SKUs through 53 distribution centers and 330 retail stores all over the world. By any measure, this is an astounding feat. Even though most hardware startups have one SKU and a handful of suppliers, all startups can learn from the techniques IKEA uses to minimize complexity and maximize gross margin.

#### Off-The-Shelf Components Custom Parts

There is not a “one size fits all” approach to finding a supplier, which is why IKEA has so many. Each supplier is best at the specific thing they manufacture with respect to cost, quality, and volume. While many of these parts are custom made by companies that are part of the IKEA Industry Group (like Swedwood, Baosteel, and DyeCoo) the vast majority of their 1,300 Tier 2 suppliers are providing shared components for a huge range of IKEA products.
Your $69 BILLY bookshelf and $2,500 SEKTION cabinets are made by different suppliers in different countries but share the same nails from a single Tier 2 supplier in China. This part sharing is critical to huge companies with diverse supply chains and it’s equally important to small hardware startups.
The reason is simple: going outside of the boundaries of the existing supply chain ecosystem is exponentially more taxing. It’s not just the cost of sourcing and development of a custom part. Every custom part has only one supplier that must be constantly validated for cost, quality, schedule, payment terms, reliability, etc. For example, if your design calls for custom machined screws, you may find maintaining a certain level of quality and reliability is far more difficult versus using a standard off-the-shelf commodity screw. Finding ways to alter a design to rely more heavily on commodity suppliers often saves large amounts of time/money and gives you flexibility should you have to switch suppliers.

#### Design for Logistics

Each design decision made during the product development process at IKEA weighs logistics just as heavily as aesthetics and reliability: if a product can’t be efficiently shipped around the world, it’s just as bad as the product collapsing when you sit on it. Most engineers are painfully aware of the importance of design for manufacturability (DFM) and some experienced engineers may also think about assembly (DFA) or environmental sustainability (DFE). Very few engineers prioritize design around how a product will move throughout the world, known as design for logistics (DFL). DFL is a fundamental design principle for all IKEA products. I would go so far as to say IKEA’s RTA (ready to assemble) product philosophy is the key enabler the entire business: without the customer performing final assembly, IKEA would likely not exist. Here are a few examples of aspects startups can think through related to design for logistics:

* *Size/weight* - can you reduce the footprint of your final (gift) box? One tip I’ve found helpful to illustrate savings: do the math at the pallet-level rather than the individual gift box level. If you can save 1" on all 3 sides of a gift box, this winds up allowing each palette to have 29 additional units, saving $185 per pallet.
* *Parallelization* - most products are inherently serial supply chain problems: in order to assemble the PCB, you first need all the components, in order to assemble the gift box, you need the fully assembled product, etc. Are there steps you can take to limit serial dependencies and increase parallelization of assembly and logistics? IKEA does this by separating different parts into different boxes, only when the customer purchases the product are the SKUs put together.
* *Modalities* - how many nodes of transport does your product need to touch before getting to a customer? Most products go from part suppliers to final assembly (by ship and truck) to dock (by truck) to port of entry (by ship and plane) to distributor (by truck) to customer (by UPS/FedEx) or to retailer (by truck and then home by car). I’ve worked on products that have over 25 nodes involved. Each node is a potential point of failure, delay, and unnecessary cost. Can you reduce or outsource this?
* *Ocean vs air* - many startups strongly dislike waiting the 3+ weeks it takes to move a container from China to the US by ocean freight. Some even go so far as to avoid suppliers that are overseas to evade the timing delay, but this is often a bad reaction to a small tactical disadvantage. Most companies ship the bulk of their product via ocean and only rely on air freight (which is ~10x more expensive) for a small portion of their products. 3 weeks is a blink of an eye in the life of a hardware product. If you can get ahead of timelines you’ll save thousands of dollars by using ocean freight.

#### Single-Point Distribution Focus

IKEA knows its customers are far more likely to buy their products in the physical store than through any other channel. Every element of their business is designed around driving users to a single point in the supply chain: their retail stores. From a meandering walk through staged home environments that introduces you to new products to free childcare and meatballs, Ikea optimizes around keeping you in store longer so you’ll purchases more skus than you came in for.

#### IKEA has a relentless obsession with uncovering every conversion opportunity possible.

Most startups fail miserably at understanding key drivers in a purchase decision and push product through any distribution channels they can. They celebrate when Target issues a PO for 5,000 units rather than questioning how to get those 5,000 units to convert to happy customers that in-turn sell 50,000 more units. IKEA, on the the other hand, is a meticulously designed sales funnel to convert a maximum number of visits to a maximum number of dollars:

IKEA prints more copies of its catalog than the bible (it’s the most printed “book” in the world). But very few customers call the 1–800 number and order. IKEA knows this, but prints 213M catalogs a year to coax potential customers to show up to their retail stores. Ever wonder why the IKEA website sucks so much? It’s also not designed to get you to buy, it’s designed to get you into the store. Once in the store, retail psychology takes over and you’re likely to walk out with a lighter wallet.
In contrast, look at Bonobos and Warby Parker. Both of these brands are the opposite of IKEA: they optimize towards converting online with a direct-to-consumer model. Every part of their product experience is designed to deal with online consumers including their website, marketing material, business model, customer service system, blog articles, and packaging.
There are an endless list of optimization options that companies can pursue; the important thing is to pick one and focus on it. For IKEA, supply chain and logistics reign supreme. Whether or not these are the key drivers of your business, every hardware startup can learn a thing or two from our Swedish friends.