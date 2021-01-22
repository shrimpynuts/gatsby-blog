---
title: Mistakes building My Desk Tour
date: "2020-09-19"
description: "Why mydesktour.com was a dumb idea and how you can learn from my mistakes."
home: true
---

![](https://i.imgur.com/CPmqvEe.png)

As I wrote about in [an earlier post](https://mementomori.bearblog.dev/mydesktour/), I built a website this summer about desk setups called [mydesktour.com](https://mydesktour.com/). That post was mainly about the idea, but I want to go more in details about how I built the site.

These are the biggest **really dumb** decisions that I made along the way, and a few good ones.

# Mistakes

(In order of magnitude)

### Mistake #1: Coding right away

I actually did *some* research before I began building. I found similar communities/sites like [r/battlestations](https://www.reddit.com/r/battlestations), [Desk Hunt](https://deskhunt.com/), [mysetup.co](mysetup.co), and [kit.co](kit.co).

However, I don't think it was nearly enough. Browsing through and lurking these sites, I wasn't researching the right things.

While I was just looking at the type of engagement numbers (# of likes, # of views, funding $, etc.), I should have been looking for signs of users wanting *more* than the existing platform provided. 

Classic case of researching just to confirm existing beliefs, rather than to actually learn something.

I need to stick to first principles more going forward.

Idea validation doesn't require a single line of code.

(more of my thoughts on #nocode [here](https://mementomori.bearblog.dev/nocode/))

### Mistake #2: Building something I wouldn't use

I was not overly-excited about the space or the community that I was building for.

Instead, I was excited about building the application, the solution.

Major red flag. And as with all insidious red flags (especially in relationships), you don't realize them until you experience their nasty effects and reflect on their root cause.

Everyone talks about product-market fit, but you also need *product-market-founder* fit. As in, you've got to live and breathe the problem-space if you want to maintain the energy to toughen out the inevitable [dip](https://www.amazon.com/Dip-Little-Book-Teaches-Stick/dp/1591841666). 

Loving your solution isn't sufficient (and might not even be necessary it seems). 

You've got to be in love with the problem, in love with the users. This is why it's so helpful if you are your own user.


### Mistake #3: Not designing/wire-framing

Self-explanatory. Not only was I just averse to designing, but I think that I was taking the "agile" idea to the extreme. 

Even a task like creating a wire-frame felt too much like waterfall, and not iterative enough.

But I think it's a case of taking a good principle too far. 

Designing and wire-framing would have saved me many iterations. Especially as it would've forced me to think about the user more. It's surprisingly easy to get lost in the code and forget about user experience.

### Mistake #4: Not load-testing or being prepared to scale

When my [HN post](https://news.ycombinator.com/item?id=24101444) hit the front page, it got bombarded with thousands of hits, which crashed my server because my MongoDB free tier could only hold 500 connections at a time. 

This is of course a good problem to have, but a problem still.

Since this horrific incident, I've found a way to get $1000 in MongoDB Atlas credits by using my five rice.edu email accounts to get $200 credits each.

Next launch, I'll be sure to keep an eye on any free tier quotas.


# Good decisions

### Good decision #1: Taking Michael Seibel's advice on task lists

When building iteratively, you need to relentlessly prioritize. 

I watched [a YC video](https://youtu.be/kzVvjKLdAbk?t=122) about good practices to plan tasks sprint-by-sprint.

He gives a lot of amazing tips, but the best concrete tips were:

1. Have some cycle of weekly or bi-weekly sprints

2. Have one session at the beginning of the cycle to plan (aiming towards a defined KPI)

3. List out all possible features to implement

4. Categorize features by difficulty

5. Categorize features by impact

6. Finally decide features (my twist is just taking features by sorting the list by difficulty/impact)

![](https://i.imgur.com/ZlXpjqE.png)

Why is this so effective?

Because it's so easy to get distracted by shiny new features that might have a terrible difficulty/impact ratio (eg high difficulty, with low impact).

I'll definitely use this method for future projects.

### Good decision #2: Getting out of my comfort zone

Specifically with talking to users, marketing, and thinking about distribution. 

I'm your typical dev, despising sales people and snake oil.

Ryan Hoover advises people to do ["shitty work"](https://ryanhoover.me/post/66092903567/do-shitty-work). Mostly this just means stuff outside of your craft. For developers, that's doing stuff like sales, speaking to customers, doing marketing, etc. 

In my case, I could have easily just built out the website and not worried about getting eyeballs on it like [the rest of my projects](https://jonathancai.com/#projects).

But instead, I spoke to Reddit users, posted on HN, posted on IH, and told friends about the project.

I began a Twitter account, a newsletter, and other auxiliary features that really help foster high fidelity feedback. 

Feedback is everything, and the entire goal of building an MVP. And the only way you get feedback is if you actually spend time and effort on distribution.

"If you build it, they will come" is one hell of a [fallacy](https://samuelmullen.com/articles/startup-fallacies-if-you-build-it-they-will-come/).


### Good decision #3: Not worrying about branding too much

Logo/color scheme/typography.. Shouldn't have to spend much time with these.

I almost got into a time sink by posting on Dribbble looking for design help, but thank god I thought better.

### Good decision #4: Talking to "competitors"

I reached out to many of the aforementioned sites already in the space, [Desk Hunt](https://deskhunt.com/) and [mysetup.co](mysetup.co). I expressed that I enjoyed browsing through their sites and found it inspirational. And in return, these people were very friendly and gave tips on how to get started on the right path. 

Reaching out to people who have done similar things can be extremely helpful, even if your products might seem like "competitors". And if you approach it as a friend/fan, they most likely will treat you with similar friendliness.