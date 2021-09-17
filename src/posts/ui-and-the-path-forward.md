---
title: UI and the Path Forward
description: User interface thinking has stalled for quite some time. How can we break out of our current thought prison to get to new heights of interaction and composability?
summary: User interface thinking has stalled for quite some time. How can we break out of our current thought prison to get to new heights of interaction and composability?
date: 2021-09-17
tags:
  - user interface
  - software
  - principles
---

We've been trapped in a thought prison for quite some time when it comes to UI. We think that the symbols and boxes on the screen are what entirely comprise a UI. When in reality, everything from the bottom of the stack, the in-between, up to and including the text on the screen is part of the UI. The URL your app sits at, the file that it comes from, the way your interface sounds to a screen reader, all are part of the UI.

For too long we've focused on the visual aspects. Things like voice commands, chat bots, screen readers, and every alternate form of interface have been made secondary because of this. In a future where things are more automated, where our UI reaches untold types of devices with a variety of interfaces, we need a more generalized surface for interaction.

Such a surface should also facilitate internal interactions as well. Right now, our best bet is a variety of languages which are good at internal interactions and representing ideas visually. React, Flutter, SwiftUI, Elm, etc. all are indexed on building something we call apps or applications. An application is a term we've come up with to group some all encompassing-but isolated-feature set providing a path to do something. However most are limited in what they provide outside of their visual representation. This limits how any kind of third-party software might be built to interact with said app. Any kind of inter-op tends to be hacked in or made as a purposeful intention by the original creator. If it wasn't clear yet, this is a huge problem.

We lack a solid way for any two apps or components of apps built by separate developers to communicate in a safe and reliable way without previous cooperation. This is the main thing currently shaping the prolific diaspora of SaaS and the business model that currently dominates tech. Each company is built to basically entrap each customer into their ecosystem so that they can maximize inter-op and also capture as much value as possible from the customer. This leads to massive organizations, corporate hierarchy, and all sorts of dark patterns in our life, especially with tech.

We've create isolated and siloed environments which discourage collaboration and openness. The very things that were promised by the original proliferation of the internet are actually caused by the stacks we've created around it. One stack is hoping to change that, Urbit.

Urbit rebuilds the foundation of the internet to something that can actually facilitate inter-op in a meaningful way. Built from the ground up with networking in mind, Urbit empowers users to facilitate their own data and message transfer, working as a personal computing operating system and server. But something we've learned in relatively recent times, is that the server shouldn't be the one responsible for the UI. Network transport times make it too slow for most real-time UI needs. So while Urbit does break us free from many of our current chains, there still remains a few keeping us from truly composable and open software.

## What We Need

Those last chains are almost entirely contained on the front-end. What I'm proposing, is that we need at least one new UI language and potentially also protocols to open secure channels between UI components. We need granular sandboxing, not just tabs or processes. Two separate people should be able to make components that can reliably work together without communicating beforehand, and can run side-by-side without contaminating the surrounding environment. The components should be able to negotiate their needs and broadcast their capabilities in a way that others can understand and cooperate. It should offer a standard schema in which to extract its data, available by any means. 

If possible, this language should be as easy to write as HTML, but be at least as powerful as writing JSX and React (if not more). It should offer the ability to drop down to as low a level as possible, like injecting code into the rendering pipeline. The language itself should be portable across devices and environments, delegating its rendering to the environment itself. It should handle asynchronous actions and state easily. Serialization and deserialization, state resumption, and sharing data/context should be easy too. We may even need a separate protocol for storing and sharing data.

## Nothing Like It Yet

As far as I know, nothing like this exists. There are glimpses here and there, technology that grasps one piece, but not the whole. In the same way that Urbit had to build the entire stack to see its benefits, so would this. That means it's a massive undertaking, not to be taken lightly. A few of us are trying to  lead the charge, but we'll need the cavalry to back us.

We don't have to live in an environment which works against us, positioning us against each other. We can build something that allows us to thrive together, each piece empowering the rest. It might require us to make some compromises, but isn't that better than living in a prison of our own design?