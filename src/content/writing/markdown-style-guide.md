---
title: "A Git Odyssey"
description: "Story of my small contribution to the biggest version control system"
pubDate: "Aug 22 2026"
---

Last month took a turn I would not have expected. I was just refactoring a specific feature for what felt like the eighth time, _as is my right to do!_ I decided to move a file, but not in the way I'm accustomed to, **no**. Why be a developer if you cant try out new toys while toiling away at work.

When you're working inside a repository and need to move something, what do you, my dear reader, do? Do you use the simple but effective `mv`? Do you just drag your unwashed mouse through the destroyed piece of fabric and foam that is your deskmat? See, thats where we are different, my newly sophisticated mind decided that the tool for my task was **git mv**.

## But why?

A couple of months ago my company gave me and my team access to an AI Agent, and I know that is late to the party, but not everywhere has the unlimited budget of the free world, the point is, a coding agent does not take the most mundane paths to accomplish it's tasks, if you ever take a gander at the command log that it runs there's a mishmash of quick Python hacked together; cats; greps and CLI hackery that no human dares to imitate for it's machine spells are too complicated for our thimble minds.

But one particular piece of CLI hackery was always stealing my attention: whenever the agent needed to move or rename files, it never used `mv`, one of the oldest and most ubiquitous commands in the Unix world. Instead, it always used `git`, and that made me question **why**.

## What makes git mv special

Maybe this is obvious to you reader, maybe I'm just a meager web developer that does not know a thing about software outside of my top five frontend frameworks _(shoutout to Astro the technology this blog is built on)_.

The point is that _I_ did not know, so _I_ went seeking knowledge. After devouring the extensive and resourceful `git mv` documentation I was enlightned, the difference is the index, have you ever stumbled upon a piece of code that you knew was older than what the `git` history whas telling you? Maybe the problem wasn't `git` but our own collective inexperience, for it provides us with an way to prevent that.

File tracking is a complicated business, try the following:

```

