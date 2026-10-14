---
title: '"AI got 75% cheaper": what actually got cheaper?'
summary: Break down the Haiku 5.5 price cut and it is the per-token price that fell. That is also why the number is 75%, not 90%.
date: 2026-10-08
syndication:
  - label: X (Japanese)
    href: https://x.com/SuperKOUHEi001/status/2108018020178334072
---

Anthropic announced that its new model, Haiku 5.5, is "75% cheaper on average". I looked into what that means.

## Cost is price times quantity

What you pay for AI comes down to the price of one token multiplied by how many tokens a task uses. This time it is mainly the price that dropped. Input went from $1 to $0.10 per million tokens, a 90% cut.

## Why 75% and not 90%

The new tokenizer (the way text is split into tokens) produces slightly more tokens for the same text. Subtract that and the average saving comes to 75%.

Comparing per-token prices alone makes it look cheaper than it really is.

## It is not cheaper because it stopped searching

One explanation going around was that the model got smarter, stopped searching the web, used fewer tokens, and so became cheaper. That is not it. Search is one of the tools a model can use, and it has nothing to do with this price cut. On the benchmark, the score with tools is actually higher (57.4% vs 45.9%).

It is still a small model, though. For hard tasks, the larger models do better.
