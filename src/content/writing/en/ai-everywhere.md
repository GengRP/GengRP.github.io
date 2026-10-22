---
title: When AI gets too cheap to think about
summary: Over the past two weeks of news, models kept getting cheaper while squeezing into smaller and smaller machines. The cost of using AI once is heading toward zero. Once we no longer stop to weigh whether to use it, the way we use AI changes, and so does what becomes scarce.
date: 2026-10-22
---

The "AI Daily" on my site updates every morning at eight. Picking the stories, writing the summaries, translating them into Japanese and English, publishing to the site: an AI assistant does all of it, and I just take a look after I get up. It reads dozens of articles a day and writes in three languages, and I've hardly ever thought about what that costs.

Reading back through two weeks of the daily, I noticed that the reason I don't have to think about it is written right there in the daily itself.

## Cheaper and smaller are the same story

Two kinds of stories kept coming up. One was price cuts: Anthropic says the new Haiku 5.5 costs about 75% less on average than the previous version, and Google halved the price of image generation. The other was shrinking: Meta released an 816-billion-parameter model that runs at home on two connected Mac Studios, and a vision model with only 4 billion parameters came out ahead of 44 baseline models across 34 tests.

![What the same work costs now, as a share of the original price](/writing/ai-everywhere/price-now-en.png)

*Chart: compiled from each company's official numbers. Grey is the original price, blue is the price now. Notion is compared with using a frontier model directly; the others with the previous version.*

One is about cloud prices, the other about hardware on your own desk, and they look unrelated. Underneath, though, it's one change: doing the same job takes less and less computation.

Meta's model fits on two computers thanks to a design that's everywhere right now. Its 816 billion parameters are split into many groups, and each generated token uses only 42 billion of them. Think of a big hospital with hundreds of departments: any one patient only visits two or three. Huge in total, small in what actually gets used each time. The computation saved shows up as lower prices in the cloud and as "it runs at home" on the desktop.

![Meta's official blog: Introducing Muse Spark Open](/writing/ai-everywhere/meta-muse-spark-open.jpg)

*Meta AI's official blog, October 15, 2026. Source: [research.meta.ai](https://research.meta.ai/blog/muse-spark-open)*

Of course, two top-spec Mac Studios are still a long way from most people's desks. But the direction is clear: the cost of using AI once keeps falling.

## Once it's cheap, "should I use it?" stops being a question

When AI is expensive, you weigh things before using it: is this worth asking, which model, how many tries. Once the cost drops far enough, that step disappears. The first thing to change is who picks the model.

Notion's update this week includes a feature called Auto. You hand it a task, it judges how hard it is, sends the easy ones to cheap small models and only the hard ones to big models. Notion says the results are about the same as running everything on a frontier model, at roughly 90% lower average cost. Microsoft, too, says GitHub Copilot will soon decide on its own whether a task should run on your computer or go to the cloud.

![Notion's official blog: Agents, rebuilt to do more for less](/writing/ai-everywhere/notion-more-for-less.jpg)

*Notion's official blog, October 20, 2026. Source: [notion.com/blog](https://www.notion.com/blog/notion-ai-more-for-less)*

Behind this is a shift in how we use it. Until now, we went to AI: pick a tool, think up a question, wait for the answer. More and more, AI will just be there, inside software, on devices, in the background, deciding for itself how much effort to spend. Notion's agents used to max out at five minutes per task; now they can keep going all day. Claude Duet, which Anthropic launched this week, sends you a brief every morning, works on its own cloud computer while you're away, and only stops to ask before sensitive actions.

None of this would have crossed anyone's mind back when tokens were expensive. Neither would my daily.

## So what got more expensive?

Still, if you take all this to mean AI will keep getting cheaper to use, you may be looking the wrong way. Two stories from these two weeks stuck with me.

One is Harvey, a legal AI company. According to Bloomberg, its model usage grew 20x and its gross margin fell from about 50% to minus 50%. Each call got cheaper; the number of calls grew faster. The other is Accenture. The consulting firm that has been urging clients to invest heavily in AI capped many employees' Claude use at $29 a month, and some of them had been spending as much as $1,000.

It reminded me of an old idea in economics. In the 19th century, steam engines kept getting more efficient with coal, yet Britain's total coal use kept rising, because more and more factories could now afford steam engines. AI is repeating the pattern. As the unit price falls, things that never used to be worth handing to AI get handed over too, and the total bill grows.

Once AI is too cheap to think about, what we save is the moment of hesitation over whether to use it. What we take on is the responsibility for whether it got things right. The first is getting very cheap. The second doesn't come with a discount yet.

---

**Sources mentioned in this post**

- [Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5) (Anthropic)
- [Nano Banana 2.1 price cut](https://the-decoder.com/googles-new-image-model-nano-banana-2-1-generates-better-images-for-less-money/) (The Decoder)
- [Introducing Muse Spark Open](https://research.meta.ai/blog/muse-spark-open) (Meta)
- [GroundingPI paper](https://arxiv.org/abs/2609.39601) (arXiv)
- [Agents, rebuilt to do more for less](https://www.notion.com/blog/notion-ai-more-for-less) (Notion)
- [Microsoft-Decision-1 and local models in Copilot](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/) (Microsoft)
- [Claude Duet](https://claude.com/product/claude-duet) (Anthropic)
- [Companies moving to cheaper models (incl. Harvey)](https://aiweekly.co/issues/ai-got-too-expensive-so-companies-are-moving-to-cheaper) (AI Weekly)
- [Accenture's Claude spending cap](https://www.404media.co/accenture-tells-employees-they-can-now-spend-only-29-on-claude-per-month/) (404 Media)
