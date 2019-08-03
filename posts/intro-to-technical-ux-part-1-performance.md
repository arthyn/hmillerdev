---
title: "Intro to Technical UX: Part 1 - Performance"
description: Introducing performance as the first aspect of technical UX, and the principles behind it to make sure you aren't leaving users waiting
summary: Introducing performance as the first aspect of technical UX, and the principles behind it to make sure you aren't leaving users waiting
date: 2018-11-01
tags:
  - introductions
  - performance
---

I thought since this topic is brand new let's start out with the most obvious aspect of technical UX, performance. Throughout school and the entirety of my career, developers have always focused on software performance. I think we would all agree that makes sense. Very few people want to spend their precious time waiting on computers, and we've developed all this technology which should theoretically be faster than we can keep up with. 

And yet. 

What do we do every day? Wait, and wait, and wait, on pages to load, queries to run, operations to finish. Many articles have been written lately about this very topic<sup>[1](#notes)</sup>. The articles point out that lazy programming is extremely prevalent in our current ecosystem. Whether it's bad architecture, poor library inclusions, unoptimized functions, shoddy loading strategies, or all of these things, we, as developers, can do better. 

We are responsible for noticing these deficiencies. Other teammates may experience our sub-par performance, but might not really know to call it out because we've continually delivered at that level. We can't rely on others to notice and educate us on issues which are integral to our domain. This is why I think technical ux is a critical topic for developers to study. We need to focus on serving users as best we can by training ourselves to root out technical UX issues. 

Anyway back to the topic. 

## Principles

So you may have noticed that good performance boils down to one thing, reducing the time that the user waits on the computer. The way to mitigate that is by following a few core principles:

### Know the context.
Optimizing performance is highly contextual. Different types of users have different expectations, and those same users will have even more varied expectations depending on the context or task at hand. Similarly, the various environments in which your software runs will constrain what you can achieve. Knowing these contexts and expectations will help to set realistic goals and areas to focus on.

### Set goals for key metrics.
We want to make sure that we know what performance level we are trying to achieve and when to stop optimizing. Maybe that's never dropping below 60 FPS, having an average first paint of 0.5s, or &lt; 0.3s total interruption time for the entirety of a task. Whatever the goals are, we should strive to meet them, stop when we do, and be aggressive to correct them when they fall out of line.

### Deliver the essentials, defer the extraneous.
"External" resources are some of the highest sources of user wait time especially as the resources get larger in size. We can take a multi phased approach by prioritizing the primary user interaction delivering only the core resources initially. Anything outside of that can be delivered once the user is able to start the core task.

### Work with the environment.
It does us no good if we figure out what our constraints are and then ignore them. Whether it's hardware or software, both have constraints that we need to respect and make sure we work within. Most environments offer specific channels or paths for optimization that we can use to our advantage.

### Keep the user in flow.
While users are completing their task we need to keep interruptions to a minimum. Achieving this involves strategizing when and how often interruptions should occur. If we have multiple processes which are short and independent, then we can just process them in the background while the user moves on. If we have the same scenario, but longer times then we can save all the changes until the user is finished and process them in a batch. If we know potential paths that the user is likely to take, we can even preload resources they might need. Regardless of your strategy, help the user stay on task by keeping them flowing from step to step<sup>[2](#notes)</sup>.

### Perception beats actual.
When interruptions and delays are unavoidable we can work with human physiology to keep our users at ease<sup>[3](#notes)</sup> by falling back on illusions that things are going fast. To do this we can show skeletons or estimates of what they are about to see. We can process in the background so that interactions are immediate. We can also provide other indicators of loading/processing and other relevant feedback early and often so that users think the computer is keeping up. If we can match the users' expectations then our perceived performance will be even better than our actual performance.

<hr>
<br>

With goals and context in mind, following these principles should be straightforward. I hope that they're general enough to at least get you in the performance mindset when developing. Performance can be tricky and optimizing too early in the process can lead to wasted effort. After I've introduced the main aspects of technical UX, we'll dive into specific strategies for creating performant experiences on the web.

If you have any questions about this topic or suggestions for the newsletter feel free to <a href="mailto:hunter@technicallyux.com">email me</a>.

<p>Until next time,<br>&ndash; <strong>Hunter</strong></p>

<a name="notes"></a>

## Notes
1. [http://tonsky.me/blog/disenchantment/](http://tonsky.me/blog/disenchantment/) and [https://brandur.org/interfaces](https://brandur.org/interfaces)
2. [https://lawsofux.com/doherty-threshold](https://lawsofux.com/doherty-threshold) and [https://lawsofux.com/postels-law](https://lawsofux.com/postels-law)
3. [Ilya Grigorik, "Speed, Performance, and Human Perception"](https://www.youtube.com/watch?v=7ubJzEi3HuA)
