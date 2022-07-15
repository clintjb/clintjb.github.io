---
layout: post
tags_color: '#666e76'
title: 'Manufacturing By The Numbers'
date: 2015-07-14
description: A detailed overview on the numbers and costs of bringing a product into existence
tags: [business, manufacturing, costs, dtc]
categories: business
comments: true
image: '/images/posts/2015/manufacturing.jpg'
---
This is a fantastic post that I stumbled across over at [Bolt](https://medium.com/@BoltVC/hardware-by-the-numbers-part-2-financing-manufacturing-474c7efe6c5f) - It gives a really intersting overview on some of the numbers behind bringing a product to market.

---

Contrary to popular belief, manufacturing is not that hard if you know what you’re doing. However, If you’ve never done it before, it’s pretty much impossible. The single best thing you can do to ensure success in manufacturing is to work with someone that knows what they’re doing. Either hire someone with experience scaling production or contract a service company like our friends at Dragon Innovation.

One of the largest mistakes first-time engineers make when it comes to manufacturing is thinking that the process is serial: product development ‘finishes’ and manufacturing ‘starts’. In reality, the two are viciously iterative. Very small details of how parts are designed can drastically change the manufacturing process. Time spent in design/engineering is far more efficient than time spent in manufacturing. A design that is ‘print ready’ (meaning it can be molded without changing geometry) can save hundreds or even thousands of person-hours in manufacturing.

![](/images/posts/2015/manufacturing-1.jpg)

Many products make sense to manufacture in south eastern China, especially when cost/margin matters and scale is expected to be large (like consumer electronics). The reasons for this are numerous. Manufacturing in China can be both astoundingly powerful and immensely frustrating. The next few points help chart a course for China.

Most Chinese contract manufactures (CMs) have a minimum order quantity (MOQ) of 5k units. More importantly, these CMs want to see a lot of growth (ie: your second production run is 10k units, your third is 20k, and so on). What really drives this is the total pass-through cost of product rolling through their facility. In the first year of production, a typical CM would like to see $1M worth of BOM leaving their factory for each customer. So if you’re building a really expensive product (like a 3D printer) a smaller MOQ is often okay.

If you don’t plan on making $1M worth of product in the first year, you typically have to get a bit more creative about how to make those first units. More on that in a separate post.

Once you decide to make your product in China (congrats!) you should go there and look around. Contrary to popular belief, it’s next to impossible to build a product using Alibaba or MFG.com. CMs are investing in your company just like a VC; would you ever agree to have a VC join your board without meeting them in person? Hopefully not. For a one week trip to China budget ~$3.5k per person for travel and expenses.

![](/images/posts/2015/manufacturing-2.jpg)

Finding the right CM is like finding the right spouse or co-founder. In order to pick the right one, you have to start with a large number. We usually suggest 10–12. These should be selected from a list of CMs that have built similar products (i.e. if you have a product with a lens in it, you should talk to CMs that make cameras). Look for other products they’ve built and talk to the COOs or CEOs of those companies. How were the companies treated? What was the cost/quality/schedule of their CM versus the others they looked at? What happened when there was a problem?

Next, you’ll want to narrow it down to ~5 CMs that you’d like to engage with. This requires an in-person visit and hopefully a dinner with the factory boss or project manager. If you can’t have dinner with the owner of the factory, you’re probably too small of a client for them.

Now you’re ready to send an Request for Quote (RFQ) package to the CM to begin understanding the price they’ll charge you for the first production run and how long it will take to deliver. This is one part art and one part science; if you’ve never done it before, I strongly suggest getting help. A disorganized RFQ process is the single biggest mistake I see first-time hardware founders make.

Another big mistake: picking the CM with the lowest price from the RFQ and running with them. Again, just like raising money from VCs, this is a business relationship and a negotiation is almost always involved. Select at least 2 CMs based on the RFQ and begin negotiating with the owner or project manager. You have three main dials to turn: cost/margin, timeline/schedule, and quality/care. Remember: you’re not negotiating if you’re not prepared to walk away from the table, which is why having 2+ CMs to negotiate with is so critical.

Once you decide on a CM, you have more finite details to negotiate (i.e. who pays for problems, how delays are handled, etc) as part of the Manufacturing Services Agreement (MSA). This process usually takes about 3 months but many CMs will actually start manufacturing your product before this is agreed to. This is usually okay, but tread very carefully.

![](/images/posts/2015/manufacturing-3.jpg)

Most CMs will quote around 180 days from database release (when you send the ‘final’ design to them) and when the product transfers ownership from the CM to you (typically called Freight On Board or FOB). Unless you’ve gone through the process before, it usually takes at least 50% longer than that and often stretches into 1 year territory. There are many ways to decrease this time, but most of them require capital, expertise, or huge focus from the founding team.

Most CMs require a large downpayment before any work is started and this is especially true for CMs working with small startups doing their first production run. It’s quite common to pay 50% of the total cost up front. This is so the CM can order components, cut tooling, and prepare for building the assembly line. It also separates the wheat from the chaff to signal to the CM that you’re serious.

As you make payments on time and begin to scale your product, CMs and suppliers will often extend large lines of credit to you. This makes it much easier to grow the manufacturing process but doesn’t help you much in the beginning (when you really need it).

![](/images/posts/2015/manufacturing-4.jpg)

Some startups spend huge amounts of time optimizing the cost of every single electronic component during the design phase. CMs have armies of people doing this and they’re much better at it than you are. Focus on the major parts that are difficult to change (typically the battery, microprocessor, and communications). There are often one or two other parts that are special for your product too. Don’t waste time finding the cheapest SMT resistors; your CM will do this better than you.

![](/images/posts/2015/manufacturing-5.jpg)

One of the largest fixed costs associated with manufacturing can be tooling. This unfortunately comes as a large upfront payment and represents one of the hardest/most expensive things to change once the design is released. This can vary by several orders of magnitude, but a simple injection mold tool (straight pull, single cavity, single shot, steel tool including texture/polish) averages around $6.5k in China. Keep in mind, most products that startups make can have between 5 and 50 different injection molded parts which can represent 1–50 tools.

![](/images/posts/2015/manufacturing-6.jpg)

In my experience, that exact same tool will cost a little more than twice as much in the US. It has also typically taken me longer in the US for the tools to be made (not entirely sure why that is though). Because the US and China use different mold base standards, it’s usually impossible to use tools in one country that were made in another, so don’t think you’ll just make product in the US first and then head to China when your volumes are higher.

![](/images/posts/2015/manufacturing-7.jpg)

A mistake I’ve seen over and over again is a product designed around the wrong microcontroller (MCU). A good friend of mine told me about the first version of their product (that eventually became extremely popular) but was originally designed around an obscure Motorola MCU that had a 26 week lead time and was $18/unit at scale. For a consumer product, this is a huge problem. Unfortunately, the MCU was doing a ton of complex math that had been painstakingly optimized to be power efficient. When the CM demanded that the MCU be swapped out to meet schedule/cost, the firmware took 6 months to rewrite for the new processor architecture. A 10 minute conversation with someone that had built high volume consumer electronic products could have saved this company 6 months of time. Do yourself a favor and pick the right MCU from the beginning.

![](/images/posts/2015/manufacturing-8.jpg)

No one is perfect. Manufacturing is complex so things inevitably go wrong. A small portion of complete products are usually thrown away during manufacturing, especially in the beginning of the production cycle. Startups often see around 5% of the products ordered scrapped. This often goes down to around 0.5% after a few production/design cycles.

![](/images/posts/2015/manufacturing-9.jpg)

Nearly all products need at least one product certification test (FCC, UL, CE, etc). These tests can be quite complex and expensive depending on the product but it’s tough to do this for less than $15k. Hiring an expert to help with this or reading great resources like Andy’s eBook can save you tons of time and effort. CMs can often handle this for you as well.

![](/images/posts/2015/manufacturing-10.jpg)

Each product comes in a cardboard box (often called a gift box). Basic single color boxes like the one pictured will usually cost $0.25 to $0.50 per box.

![](/images/posts/2015/manufacturing-11.jpg)

Unfortunately, companies like Apple have set exceptionally high consumer standards for packaging. I’ve seen startups spend more money on their packaging than any other single component. To me, this is a crime (but it won’t stop most people from doing it). High-end packaging with double side, two wall, 6 color printing, UV/foil, molded inserts, etc can cost up to $15 per unit.

![](/images/posts/2015/manufacturing-12.jpg)

All of these gift boxes are then usually put into another larger box called a master carton. These boxes are usually double-walled cardboard that typically costs $1 to $5. Many startups don’t think about packaging until the last minute. More than 75% of the BOMs I’ve seen don’t have line items for gift boxes or master cartons.