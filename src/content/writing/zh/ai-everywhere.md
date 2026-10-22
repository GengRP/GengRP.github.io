---
title: AI 便宜到不用多想的时候
summary: 两周的新闻里，模型一边降价，一边被塞进越来越小的机器。用一次 AI 的成本在往零走。等到用之前不用再掂量，我们用 AI 的方式会变，真正稀缺的东西也会变。
date: 2026-10-22
draft: true
---

我主页上的「AI 日报」每天早上八点更新。挑新闻、写摘要、翻成日语和英语、发布到网站，这一整套都是一个 AI 助手在做，我起床后看一眼就行。每天让它读几十篇文章、写三种语言，我几乎没想过这要花多少钱。

这两周回头翻日报，我发现让我不用去想的原因，正好就写在日报里。

## 降价和变小，其实是一件事

最近的新闻里，有两类反复出现。一类是降价：Anthropic 说新出的 Haiku 5.5 平均比上一代便宜约 75%，Google 把生图的价格砍了一半。另一类是变小：Meta 开放了一个 8160 亿参数的模型，两台 Mac Studio 连起来就能在家里跑；一个只有 40 亿参数的视觉模型，在 34 项测试里排到了 44 个对照模型的前面。

![最近两周几次降价的幅度对比](/writing/ai-everywhere/price-cuts-zh.png)

*图：按各家官方公布的数字整理。Notion 的 90% 是和直接用顶级模型相比，其他是和上一代相比。*

一个说的是云端的价格，一个说的是自己电脑上的硬件，看起来不相干。但它们背后是同一个变化：完成同样一件事，需要的计算越来越少。

Meta 那个模型能装进两台电脑，靠的是现在很流行的一种结构。8160 亿个参数分成很多组，每生成一个字只调用其中 420 亿个。就像一家大医院有几百个科室，看一个病人只需要去其中两三个。总量很大，每次真正动用的很少。省下来的这部分计算，放在云端就是降价，放在桌面上就是家里也能跑。

![Meta 官方博客：Introducing Muse Spark Open](/writing/ai-everywhere/meta-muse-spark-open.jpg)

*图：Meta AI 官方博客，2026 年 10 月 15 日。来源：[research.meta.ai](https://research.meta.ai/blog/muse-spark-open)*

当然，两台顶配 Mac Studio 离普通人的书桌还很远。但方向已经很清楚了，用一次 AI 的成本在一路往下走。

## 便宜之后，「用不用」不再是个问题

成本高的时候，用 AI 之前要先掂量一下：这件事值不值得问，用哪个模型，问几次。成本低到一定程度，这一步就消失了。最先变的，是谁来挑模型。

Notion 这周的更新里有一个功能叫 Auto。你交给它一个任务，它先判断难易，再派给合适的模型，比如改格式交给小模型，写方案交给大模型。Notion 说，这样做出来的结果和全部用顶级模型差不多，平均成本低了约九成。微软也说，GitHub Copilot 很快会自己判断一个任务该在你的电脑上处理，还是送去云端。

![Notion 官方博客：Agents, rebuilt to do more for less](/writing/ai-everywhere/notion-more-for-less.jpg)

*图：Notion 官方博客，2026 年 10 月 20 日。来源：[notion.com/blog](https://www.notion.com/blog/notion-ai-more-for-less)*

这背后是用法的转变。以前是我们去找 AI：挑好工具，想好问题，等它回答。以后更多是 AI 一直在那里，在软件里，在设备上，在后台，由它自己决定用多大的力气。Notion 的 agent 以前一个任务最多跑五分钟，现在能连续跑一整天。Anthropic 这周推出的 Claude Duet 会每天早上给你发一份简报，你不在的时候自己在云端电脑上做事，碰到敏感操作再停下来问你。

这些用法，在 token 还很贵的时候是想都不会去想的。我的日报也一样。

## 那么，什么变贵了

不过，如果因此觉得以后用 AI 会越来越省钱，可能想错了方向。这两周有两条新闻让我印象很深。

一条是法律 AI 公司 Harvey。据彭博报道，它的模型用量涨了 20 倍，毛利率从约 50% 掉到了负 50%。每次调用都在变便宜，调用的次数涨得更快。另一条是埃森哲：这家一直劝客户大举投资 AI 的咨询公司，给很多员工的 Claude 用量设了每人每月 29 美元的上限，其中有人以前每月要用掉 1,000 美元。

这让我想起经济学里一个很老的现象。十九世纪蒸汽机越来越省煤，英国的用煤总量却越来越多，因为更多的工厂开始用得起蒸汽机。AI 现在就在重复这件事。单价降下来，原本不值得交给 AI 的事情也开始交给它，总账反而越来越大。

所以对个人来说，更值得练的是另一件事：判断什么该交出去，交出去之后结果对不对。

我的日报就是个例子。AI 每天替我读几十篇文章，几乎不花什么钱，可它会出错。前几天有一条新闻说某款 AI 攻击工具「与 80 起针对日本的入侵有关」，我回头去找原文，怎么也找不到这个说法的出处。如果我不看，它就会原样挂在我的网站上。AI 越便宜，做的事越多，需要人去看、去判断、去负责的地方也跟着变多。这部分成本不在账单上，花掉的是我们的注意力。

AI 便宜到不用多想以后，我们省下的是「要不要用」的那一下犹豫，多出来的是「它做得对不对」的那一份责任。前者正在变得很便宜，后者还没有办法打折。

---

**本文提到的原文**

- [Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5)（Anthropic）
- [Nano Banana 2.1 降价](https://the-decoder.com/googles-new-image-model-nano-banana-2-1-generates-better-images-for-less-money/)（The Decoder）
- [Introducing Muse Spark Open](https://research.meta.ai/blog/muse-spark-open)（Meta）
- [GroundingPI 论文](https://arxiv.org/abs/2609.39601)（arXiv）
- [Agents, rebuilt to do more for less](https://www.notion.com/blog/notion-ai-more-for-less)（Notion）
- [Microsoft-Decision-1 与 Copilot 本地模型](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/)（Microsoft）
- [Claude Duet](https://claude.com/product/claude-duet)（Anthropic）
- [企业改用更便宜的模型（含 Harvey）](https://aiweekly.co/issues/ai-got-too-expensive-so-companies-are-moving-to-cheaper)（AI Weekly）
- [埃森哲 Claude 用量上限](https://www.404media.co/accenture-tells-employees-they-can-now-spend-only-29-on-claude-per-month/)（404 Media）
