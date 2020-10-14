---
title: The Wizard of Oz Technique
date: "2020-10-05"
---

In L.F. Baum's Wizard of Oz, the Wizard fools everyone by creating a vision of himself to look powerful. He does this by using a set of controls while he hides behind a curtain concealing the reality.

Interestingly, this idea is actually the basis for a powerful technique for rapid prototyping new products.

### What exactly is the Wizard of Oz technique?

The technique involves offering early users a product that is not yet automated in the backend, yet appears functioning based on the interface. 

Instead of developing the backend technology, you manually do the work yourself (eg data manipulation, web crawling, calculations) behind the scenes, giving the user the illusion that the product is functional.

The user remains unaware that you are "pulling the strings" behind the curtains like the Wizard of Oz.

### Why?

Because sometimes building a prototype just takes too long.

You can't afford to waste time building things that people don't actually want to use or pay for.

<p float="left">
  <img src="https://i.imgur.com/VPXU9de.png" width="300" />
  <img src="https://i.imgur.com/4N0uEE7.jpg" width="300" /> 
</p>

The right image is a 3D rendering (you can barely even tell right!?)

If your an architect, you don't immediately start building, you begin by designing and planning. The first iteration of a house is not the frames or the foundation, the first iteration is actually just the blueprint, or the 3D rendering. The point is to give the user (in this case our home builder) a realistic illusion of the end product to verify that they want what we're building, before spending weeks and months to build the first prototype. 

*The better the illusion, the more you can be sure that your client likes what you're planning to build.*

Building before validation is like a cardinal sin in the startup world.


<p align="center">
  <img src="https://i.imgur.com/bQamrgz.jpg"/>
</p>

YC's famous mantra

Well to be more precise, the real cardinal sin is building something people don't want. 

*But the validation of your first prototype is a really strong proxy for that condition.*

So by employing the Wizard of Oz technique, you can easily and quickly validate both of these: 

1. people actually would want/need to use the product
2. people are willing to pay

It's also worth noting that this technique has an additional benefit. It gives you empathy for the user's problem. If you experience and solve the problem yourself, you will likely gain greater understanding about the biggest pain-points and road-blocks, which you can focus on when you actually develop the technology to automate the product.

### A few examples


<p align="center">
  <img src="https://i.imgur.com/bMWEgQU.jpg"/>
</p>


The first implementation of this technique was in 1984 by IBM for their "listening type writer". The user would speak into their microphone, and then their computer would magically have the words typed out for them.

What the user was unaware of, was that there was a "wizard" behind the scenes just listening to the audio and typing into their computer, ending up on the user's screen.

Read more about it [here](http://nosolosoftware.com/files/2015/11/Composing-Letters-long-version.pdf).

<p align="center">
  <img src="https://i.imgur.com/p21OD6f.png"/>
</p>

A friend of mine was testing out a startup idea that helped people optimize the usage of their airline mileage in finding flights.

He's smart, so his first prototype was not a full-fledged web app. His first prototype was just asking his friends if he could find flights for them. Obviously, by telling his friends he was doing the work manually, he didn't create the illusion that the prototype was automated already, but the point still stands: build a manual MVP to validate, build the automation afterwards.

By finding the flights for his friends, he was able to gauge if this was a common problem and also get a better grasp of how he might solve the problem using computers.

### If you can't do it, it's unlikely you can instruct a computer to do it

When I entered college, I was first a political science major. My friend convinced me to take an intro computer science course. It was grueling. 

Throughout the 12-week course, I continually struggled to write the Python code necessary to tell the computer to solve the problem correctly. One day, while I was struggling to code a solution during class, the professor told me to solve the problem by hand, on good old pen and paper. I struggled to come up with a solution by hand!

I was like an English teacher who had never spoken a lick of English in their life.

Or a soccer coach who never played or watched soccer in their life.

How can you expect to teach a computer something that you do not already know how to do?

So when you employ the Wizard of Oz technique, you are making sure that you can actually do what you're implying that you can teach a computer to do.

### Do things that don't scale

This technique is an example of Paul Graham's canonical advice: "do things that don't scale".

He explains the reasoning in his essay much better than my writing ever could, so I'll just urge you to read his [piece](http://paulgraham.com/ds.html).

You'll see a bunch of examples of people employing the "Wizard of Oz" technique at [dothingsthatdontscale.com](https://www.dothingsthatdontscale.com/).

### When does this technique not work?

While this technique can be very useful, it'd be naive to say that it's applicable in all cases. 

I think it's pretty intuitive to imagine scenarios or products for which this doesn't make sense, but here are a few that come to mind for me:

- **When you're working on hard tech.** You can't exactly "Wizard of Oz" rockets, airplanes, or hardware. There's no illusion that will convince someone that the rocket you designed will take them to space without blowing up before you exit the atmosphere. The closest you can get to this is making mockups or 3d renderings or animations, but it's hard to categorize that as using the Wizard of Oz technique.
- **When the prototype is fast enough to build.** A real prototype is still preferable to a "Wizard of Oz" MVP. (The real thing gives the most realistic illusion, because it isn't an illusion.) So if you can build it in a weekend, and you have a spare weekend, then that probably makes more sense.

### TL;DR

A startup is a hypothesis. You must test your most basic assumptions. The Wizard of Oz technique helps you do this in a quick and easy way by creating a very simple prototype.