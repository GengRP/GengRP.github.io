---
date: 2026-10-08
x: https://x.com/SuperKOUHEi001/status/2108018020178334072
quote: { label: '@claudeai', href: https://x.com/claudeai/status/2107894039626277339 }
---

Anthropic announced that its new model, Haiku 5.5, is "75% cheaper on average". I looked into what that means.

What you pay for AI is the price of one token times how many tokens a task uses. This time it is mainly the price that dropped. Input went from $1 to $0.10 per million tokens, a 90% cut.

---

So why 75% and not 90%? The new tokenizer (the way text is split into tokens) produces slightly more tokens for the same text. Subtract that and the average saving comes to 75%.

Comparing per-token prices alone makes it look cheaper than it really is.

---

It is not that the model got smarter, stopped searching the web, used fewer tokens and so became cheaper. Search is one of the tools a model uses, and it has nothing to do with this price cut. On the benchmark, the score with tools is actually higher (57.4% vs 45.9%).

It is still a small model, though. For hard tasks, the larger models do better.
