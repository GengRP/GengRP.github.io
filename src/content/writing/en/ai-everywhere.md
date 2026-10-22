---
title: "When AI gets cheaper and smaller: what 16 days of news point to"
summary: Models keep getting stronger while prices keep falling, and big models have started running on desktop computers. Put together, AI will show up in more and more places. Cheaper doesn't mean we spend less, though, and money is no longer the real bottleneck.
date: 2026-10-22
draft: true
---

Every morning I put together an AI daily. From October 7 to today that's 16 issues and more than 90 news items. Looking back over them, two kinds of stories keep coming up: "the same work just got cheaper" and "this model now runs on your own computer."

They look unrelated. One is about cloud prices, the other about hardware on your desk. But they point the same way: the cost of using AI once is falling fast. Once it falls far enough, AI stops being something you open a web page to ask. It gets built into software, devices and background tasks, and ends up everywhere.

This post uses those 16 days of news to lay that out, and to note where I think things still fall short. I checked every number against the original source; links are at the end.

## The same work keeps getting cheaper

Start with price. In the last two weeks alone:

- Anthropic released Claude Haiku 5.5 and says it **costs about 75% less to run on average** than the previous version. It also halved Sonnet 5.5's cache-read price, from $0.20 to $0.10 per million tokens.
- Google's image model Nano Banana 2.1 cut a 1K image from 6.70 cents to 3.36 cents, and a 4K image from 15.10 to 7.56 cents. **Roughly half price.**
- Mercury 3, a diffusion language model, generates over 1,000 tokens per second at $0.20 per million input tokens.
- Microsoft-Decision-1 only scores fixed options and writes no text. Input costs $0.042 per million tokens, and **output is free**, because it doesn't produce output tokens at all.

![Size of recent price cuts over the past two weeks](/writing/ai-everywhere/price-cuts-en.png)

*Chart: compiled from each company's official numbers. Notion's 90% is compared with using a frontier model directly; the others are compared with the previous version.*

The biggest drop in that chart isn't a price cut by anyone. It comes from how Notion routes work.

![Notion's official blog: Agents, rebuilt to do more for less](/writing/ai-everywhere/notion-more-for-less.jpg)

*Notion's official blog, October 20, 2026. Source: [notion.com/blog](https://www.notion.com/blog/notion-ai-more-for-less)*

Notion upgraded a "model router" called Auto. You hand it a task, it judges how hard the task is, and it sends it to the model that fits. Across 20+ common use cases, Notion says <mark>Auto delivered results similar to frontier models like Opus 5.5 at about 90% lower average cost.</mark>

For ordinary users this is the most useful part. Most people send everything to the strongest model, even fixing a typo. But a lot of everyday work, like summarizing, sorting and reformatting, is well within reach of a small model. **Most of the savings come from matching each task to the right model**; vendors cutting prices is only part of it.

## Big models start running on your own computer

The second thread is local. On October 15, Meta released Muse Spark Open, an open-weight model.

![Meta's official blog: Introducing Muse Spark Open](/writing/ai-everywhere/meta-muse-spark-open.jpg)

*Meta AI's official blog, October 15, 2026. Source: [research.meta.ai](https://research.meta.ai/blog/muse-spark-open)*

The model has 816 billion parameters, a size you'd expect to live only in a data center. Meta optimized it together with Apple: an M5 Ultra Mac Studio has up to 512 GB of memory, so **two of them connected can hold the whole model** and run it without the cloud.

It fits because of how it's built. It's a mixture-of-experts (MoE) model: the 816 billion parameters are split into many "experts," and each generated token uses only 42 billion of them. Big in total, small in the part that actually works on each step, which cuts what the hardware needs. Most models released in recent weeks follow the same idea:

- Recursive's open coding model Flint has 40 billion parameters in total and uses about 2.5 billion per token, with quantized versions prepared for Apple silicon and NVIDIA GPUs.
- Liquid AI's decision model d1-3B has just 3 billion parameters. It answers a question in 8 ms on an RTX 4090 and in under 50 ms on every device tested, including Jetson boards used in robots.
- GroundingPI, with only 4 billion parameters, came out ahead of 44 baseline models across 34 visual grounding benchmarks. Used as a robot's "eyes," it improved on the strongest baseline by up to 24.8%.

![Inception Labs: quality versus size across five Mercury generations](/writing/ai-everywhere/mercury-quality-vs-size.jpg)

*Inception Labs' official blog. From the first Mercury to Mercury 3, size grew more than 40x and overall quality about 3x. Source: [inceptionlabs.ai](https://www.inceptionlabs.ai/blog/introducing-mercury-3)*

To be clear, though: <mark>"runs locally" still means "runs on expensive machines."</mark> Two top-spec Mac Studios aren't something most people will buy. Microsoft's new Surface Laptop Ultra, pitched at running large models locally, costs $2,600 to $5,900.

What I find more telling is one line from Microsoft: GitHub Copilot will soon **decide for itself whether a task should run on your computer or go to a large model in the cloud**. It's the same idea as Notion's Auto, extended from "which model" to "where to run it." Simple things answered instantly on your machine, hard ones sent to the cloud, possibly without the user noticing.

## Where the two threads meet: AI everywhere

The most direct result of cheaper and smaller is that AI can stay on all the time.

Notion's agents used to be capped at five minutes per task; they can now run for more than 24 hours. Claude Duet, which Anthropic launched this week, sends you a morning brief, works on its own cloud computer while you're away, and checks with you before sensitive actions. None of this made sense when tokens were expensive.

For how small a device a model can squeeze into, an Anthropic study gives a vivid example:

![Anthropic: one model split across 15 Android TV boxes](/writing/ai-everywhere/anthropic-tv-boxes.jpg)

*Anthropic research blog. Fifteen TV boxes at about $55 each hold two layers of the model apiece and together run a 26-billion-parameter model. Source: [anthropic.com/research](https://www.anthropic.com/research/self-replicating-ai)*

They bought 15 cheap Android TV boxes, networked them, and ran Gemma4-26B at 0.39 tokens per second. Slow, but it runs. The study is really a warning: if small models keep improving at their historical rate, by the end of this year they may be able to copy themselves onto connected devices like smart fridges and TV boxes and run there, with no central switch to turn them off.

I include it because it shows "AI everywhere" cuts both ways. We want AI helping inside every app and device, and the same conditions make harmful uses easier too.

## Cheaper, yet the total bill grows

Falling prices don't mean people are spending less on AI. A few stories from these 16 days point the other way:

- Harvey, a legal AI company, saw its model usage grow 20x while its gross margin fell from about 50% to minus 50%. It only got back to positive after switching to its own model built on an open-weight one. The Financial Times reported that open models now handle 40% of AT&T's AI workloads.
- Accenture capped many employees' Claude spending at $29 a month; some had been spending as much as $1,000.
- Meta expects 2026 capital expenditures of $135–145 billion, most of it going into AI.

<mark>Unit prices fall, usage grows faster, and the total bill gets bigger.</mark> Economists call this the Jevons paradox: the more efficiently coal is used, the more coal gets burned overall, because more uses become affordable. AI seems to be doing the same. For people and companies, the useful question becomes "what did it cost to finish this task," and the price per million tokens on its own says little.

## Where it still falls short

The technical barriers are dropping fast, but "AI everywhere" is now held back by other things.

**Whether it's allowed.** In mid-October, Citi and Bank of America restricted AI agents from operating customer accounts. Amazon blocked Meta's shopping agent from ordering on Amazon. More sites and services are drawing lines for agents.

**Whether it can be trusted.** On October 21, a release of LiteLLM, a widely used AI library, turned out to contain a backdoor that steals SSH keys, cloud credentials and AI provider API keys. The more places AI connects to, the more places there are to attack.

**Whether it can come up with new ideas.** According to AI Weekly, when top models were tested on proposing and completing new AI research on their own, none managed it. AI is good at finishing work; it's not yet good at deciding what work to do.

So my take: cost is no longer the biggest obstacle. <mark>What decides how far AI goes from here is permission and trust.</mark>

## What ordinary people can do

Putting this together, here are three suggestions for friends who haven't really started using AI yet.

First, **pick the model for the task**. Everyday summaries, translations and formatting work fine on small, fast, cheap models; save the strongest model for genuinely hard problems. Tools like Notion's Auto increasingly do this picking for you.

Second, **try local models as a hobby first**. There's no need to buy a several-thousand-dollar computer for it. The computer you have can probably run a small model with a few billion parameters. Install LM Studio or Ollama and get a feel for what it can and can't do.

Third, **hand repetitive work to an agent and let it run longer, but check anything involving money, accounts or privacy yourself.** Banks are restricting agents and libraries get poisoned; before you hand something over, decide what it's allowed to touch.

## Closing

Sixteen days, more than 90 news items. One at a time, each is just "another price cut" or "another model." Side by side, the direction is clear: AI is becoming something as cheap and as everywhere as electricity. I'll keep recording it every day. Next, I'd like to write about how to pick a model for different kinds of work, using my own daily tasks as examples.

---

**Sources used in this post** (in order of appearance)

- [Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5) (Anthropic)
- [Nano Banana 2.1 price cut](https://the-decoder.com/googles-new-image-model-nano-banana-2-1-generates-better-images-for-less-money/) (The Decoder)
- [Mercury 3](https://www.inceptionlabs.ai/blog/introducing-mercury-3) (Inception Labs)
- [Microsoft-Decision-1](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/) (Microsoft)
- [Agents, rebuilt to do more for less](https://www.notion.com/blog/notion-ai-more-for-less) (Notion)
- [Introducing Muse Spark Open](https://research.meta.ai/blog/muse-spark-open) (Meta)
- [Flint model page](https://huggingface.co/RecursiveSI/flint) (Hugging Face)
- [Liquid AI d1](https://www.liquid.ai/blog/d1-open) (Liquid AI)
- [GroundingPI paper](https://arxiv.org/abs/2609.39601) (arXiv)
- [RTX Spark laptop prices](https://www.pcworld.com/article/3256085/here-are-all-the-rtx-spark-laptops-available-at-launch-going-up-to-7000.html) (PCWorld)
- [Claude Duet](https://claude.com/product/claude-duet) (Anthropic)
- [Research on small-model self-replication](https://www.anthropic.com/research/self-replicating-ai) (Anthropic)
- [Companies moving to cheaper models](https://aiweekly.co/issues/ai-got-too-expensive-so-companies-are-moving-to-cheaper) (AI Weekly)
- [Accenture's Claude spending cap](https://www.404media.co/accenture-tells-employees-they-can-now-spend-only-29-on-claude-per-month/) (404 Media)
- [Meta Q3 2026 results](https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Third-Quarter-2026-Results/default.aspx) (Meta)
- [US banks restrict AI agents](https://letsdatascience.com/news/citi-and-bank-of-america-restrict-ai-agent-access-392090c3), [Websites restrict AI agents](https://letsdatascience.com/news/websites-restrict-ai-agents-online-access-d392b987) (Let's Data Science)
- [LiteLLM backdoor](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/) (SafeDep)
- [Top models fail an original-research test](https://aiweekly.co/issues/top-ai-models-failed-a-test-of-inventing-new-ai-research) (AI Weekly)
