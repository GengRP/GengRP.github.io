---
title: AI 变便宜、变小以后：16 天新闻里看到的方向
summary: 模型越来越强，价格却一直在降；大模型开始能在桌面电脑上跑。两条线合起来，AI 会出现在越来越多的地方。但便宜不等于花得少，真正卡住的也不再是钱。
date: 2026-10-22
draft: true
---

我每天早上整理一份 AI 日报，从 10 月 7 日到今天一共 16 期、90 多条新闻。回头翻一遍，有两类新闻反复出现：一类是「同样的活变便宜了」，一类是「模型能在自己的电脑上跑了」。

这两件事看起来不相干，一个是云端的价格，一个是本地的硬件，但方向是一致的：用一次 AI 的成本在快速往下掉。成本低到一定程度，AI 就不再是你打开一个网页去问的东西，它会被塞进软件、设备和后台任务里，到处都有。

这篇用这 16 天里的新闻把这件事讲清楚，也说说我觉得还没到位的地方。数字都回原文核对过，文末附来源。

## 同样的活，越来越便宜

先看价格。只看最近两周：

- Anthropic 发布 Claude Haiku 5.5，官方说**平均运行成本比上一代低约 75%**；同时把 Sonnet 5.5 的缓存读取价格减半，从每百万 token 0.20 美元降到 0.10 美元。
- Google 的生图模型 Nano Banana 2.1，一张 1K 图从 6.70 美分降到 3.36 美分，4K 图从 15.10 美分降到 7.56 美分，**价格砍半**。
- 扩散语言模型 Mercury 3 每秒能生成 1,000 多个 token，价格是每百万输入 token 0.20 美元。
- 微软的决策模型 Microsoft-Decision-1 只给选项打分、不写文字，输入每百万 token 0.042 美元，**输出不要钱**，因为它根本不输出 token。

![最近两周几次降价的幅度对比](/writing/ai-everywhere/price-cuts-zh.png)

*图：按各家官方公布的数字整理。Notion 的 90% 是和直接用顶级模型相比，其他是和上一代相比。*

图里降得最多的一项，其实不是哪家降价，而是 Notion 的做法。

![Notion 官方博客：Agents, rebuilt to do more for less](/writing/ai-everywhere/notion-more-for-less.jpg)

*图：Notion 官方博客，2026 年 10 月 20 日。来源：[notion.com/blog](https://www.notion.com/blog/notion-ai-more-for-less)*

Notion 升级了一个叫 Auto 的「模型路由」：你交给它一个任务，它先判断这个任务有多难，再派给最合适的模型。官方在 20 多种常见用途上测试，<mark>结果和直接用 Opus 5.5 这类顶级模型差不多，平均成本低约 90%。</mark>

这一点对普通人最有用。大多数人用 AI 的习惯是什么都丢给最强的模型，改个错别字也用它。但日常的很多活，比如总结、分类、改格式，小模型完全够用。**省钱的大头来自给每件事挑合适的模型**，等厂商降价只是其中一部分。

## 大模型开始能在自己的电脑上跑

第二条线是本地。10 月 15 日，Meta 发布了开放权重的 Muse Spark Open。

![Meta 官方博客：Introducing Muse Spark Open](/writing/ai-everywhere/meta-muse-spark-open.jpg)

*图：Meta AI 官方博客，2026 年 10 月 15 日。来源：[research.meta.ai](https://research.meta.ai/blog/muse-spark-open)*

这个模型总共有 8160 亿个参数，按理说只能放在数据中心。Meta 和苹果一起做了优化：一台 M5 Ultra 的 Mac Studio 最多有 512 GB 内存，**两台连起来就能装下整个模型**，不用连云端。

能装下的原因在于它的结构。它是「混合专家」模型（MoE），8160 亿参数分成很多组「专家」，每生成一个字只调用其中 420 亿。总量大，每次真正干活的部分小，对机器的要求就降了一大截。这几周发布的模型几乎都是这个思路：

- Recursive 开源的编程模型 Flint，总参数 400 亿，每次只用约 25 亿，官方另外准备了给苹果芯片和英伟达显卡用的量化版本。
- Liquid AI 的决策模型 d1-3B 只有 30 亿参数，在 RTX 4090 显卡上回答一个问题要 8 毫秒，在所有测过的设备上都不超过 50 毫秒，能直接跑在机器人用的 Jetson 小板子上。
- 只有 40 亿参数的 GroundingPI，在 34 项视觉定位基准上和 44 个对照模型比，成绩领先；装进机器人当「眼睛」用，最多比最强的对照提升 24.8%。

![Inception Labs：Mercury 五代模型的质量和规模](/writing/ai-everywhere/mercury-quality-vs-size.jpg)

*图：Inception Labs 官方博客，Mercury 从第一代到第三代，规模涨了 40 多倍，综合质量涨了约 3 倍。来源：[inceptionlabs.ai](https://www.inceptionlabs.ai/blog/introducing-mercury-3)*

不过要说清楚：<mark>「能在本地跑」目前还是贵机器的事。</mark>两台顶配 Mac Studio 不是普通人会买的东西；微软新出的 Surface Laptop Ultra 主打本地跑大模型，价格从 2,600 美元到 5,900 美元。

我觉得更值得注意的是微软的一句话：GitHub Copilot 很快会**自己判断一个任务该在你电脑上处理，还是交给云端的大模型**。这和 Notion 的 Auto 是同一个思路，只是把「挑模型」扩展到了「挑在哪里跑」。以后简单的事在本地秒回，难的事送去云端，用的人不一定会察觉。

## 两条线汇到一起：AI 会出现在到处

便宜和变小，最直接的结果是 AI 可以一直开着。

Notion 的 agent 以前单个任务最多跑 5 分钟，现在能连续跑 24 小时以上。Anthropic 本周推出的 Claude Duet 会在早上给你发简报，你不在的时候用自己的云端电脑做事，遇到敏感操作再来问你。这些在 token 很贵的时候是做不起的。

模型能塞进多小的设备里，Anthropic 的一份研究给了一个很直观的例子：

![Anthropic：一个模型分布在 15 台安卓电视盒子上运行](/writing/ai-everywhere/anthropic-tv-boxes.jpg)

*图：Anthropic 研究博客。15 台每台约 55 美元的电视盒子，每台负责模型的两层，合起来跑一个 260 亿参数的模型。来源：[anthropic.com/research](https://www.anthropic.com/research/self-replicating-ai)*

他们买了 15 台便宜的安卓电视盒子，连起来跑 Gemma4-26B 模型，速度是每秒 0.39 个 token，很慢，但能跑。这份研究其实是一个警告：小模型的能力如果按现在的速度涨，今年年底前就可能学会自己拷贝到智能冰箱、电视盒子这类联网设备上运行，而且因为没有一个集中的开关，很难关掉。

我把这件事放在这里，是因为它说明「AI 到处都有」是双向的。我们想要的是 AI 在每个软件、每台设备里帮忙，同样的条件也让坏的用法更容易。

## 便宜了，总账反而更大

价格在降，并不代表大家在 AI 上花的钱变少了。这 16 天里有几条新闻正好反过来：

- 法律 AI 公司 Harvey 的模型调用量涨了 20 倍，毛利率从约 50% 掉到负 50%。后来他们换成基于开放权重模型自己训练的版本，才转正。据《金融时报》报道，AT&T 有 40% 的 AI 工作已经交给开放模型。
- 埃森哲给很多员工的 Claude 用量设了每人每月 29 美元的上限，而有些员工原来每月要用掉 1,000 美元。
- Meta 把今年的资本开支预期定在 1350 亿到 1450 亿美元之间，大部分花在 AI 上。

<mark>单价降下来，用量涨得更快，总账反而更大。</mark>经济学里有个说法叫「杰文斯悖论」：煤用得越省，煤的总消耗反而越多，因为更多地方开始用得起。AI 现在看起来也是这样。对个人和公司来说，有用的问题变成了「做完一件事花了多少钱」，只看每百万 token 多少钱没有太大意义。

## 还没到位的地方

技术上的门槛在快速变低，但「AI 到处都有」现在卡在另外几件事上。

**让不让它做。** 花旗和美国银行在 10 月中旬限制了 AI agent 操作客户账户；亚马逊不让 Meta 的购物 agent 在亚马逊下单。越来越多的网站和服务开始给 agent 划线。

**信不信得过。** 10 月 21 日，常用的 AI 工具库 LiteLLM 有一个版本被人植入后门，装了就会被偷走 SSH 密钥、云账号和各家 AI 的 API 密钥。AI 接入的地方越多，能被攻击的地方也越多。

**它自己能不能想新东西。** 据 AI Weekly 报道，有测试让顶级模型独立提出并完成一项新的 AI 研究，目前都没做到。AI 很擅长把活干完，还不擅长决定该干什么活。

所以我的判断是：成本已经不是最大的障碍了，<mark>接下来决定 AI 能走多远的，是权限和信任。</mark>

## 对普通人来说，可以做什么

结合上面这些，我会给还没真正用起来的朋友三个建议。

第一，**按任务挑模型**。日常的总结、翻译、改格式，用便宜快速的小模型就行，把最强的模型留给真正难的问题。很多工具（比如 Notion 的 Auto）已经能帮你自动挑。

第二，**本地模型先当成兴趣去试**，不用为它专门买几千美元的电脑。手上的电脑能跑几十亿参数的小模型，可以先装一个 LM Studio 或 Ollama 体验一下，知道它能做什么、做不了什么。

第三，**把重复的活交给 agent，让它跑久一点；但涉及钱、账号和隐私的事，自己把关。** 银行在限制 agent，工具库会被投毒，这些提醒我们，交出去之前要先想好它能碰什么。

## 最后

16 天、90 多条新闻，单看每一条都只是「又降价了」「又发了一个模型」。放在一起看，方向很清楚：AI 正在变成像电一样便宜、到处都有的东西。我会继续每天记录，下一篇想写写「怎么给不同的活挑模型」，用我自己的日常任务做例子。

---

**本文用到的原文**（按出现顺序）

- [Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5)（Anthropic）
- [Nano Banana 2.1 降价](https://the-decoder.com/googles-new-image-model-nano-banana-2-1-generates-better-images-for-less-money/)（The Decoder）
- [Mercury 3](https://www.inceptionlabs.ai/blog/introducing-mercury-3)（Inception Labs）
- [Microsoft-Decision-1](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/)（Microsoft）
- [Agents, rebuilt to do more for less](https://www.notion.com/blog/notion-ai-more-for-less)（Notion）
- [Introducing Muse Spark Open](https://research.meta.ai/blog/muse-spark-open)（Meta）
- [Flint 模型页](https://huggingface.co/RecursiveSI/flint)（Hugging Face）
- [Liquid AI d1](https://www.liquid.ai/blog/d1-open)（Liquid AI）
- [GroundingPI 论文](https://arxiv.org/abs/2609.39601)（arXiv）
- [RTX Spark 笔记本价格](https://www.pcworld.com/article/3256085/here-are-all-the-rtx-spark-laptops-available-at-launch-going-up-to-7000.html)（PCWorld）
- [Claude Duet](https://claude.com/product/claude-duet)（Anthropic）
- [小模型自我复制研究](https://www.anthropic.com/research/self-replicating-ai)（Anthropic）
- [企业改用更便宜的模型](https://aiweekly.co/issues/ai-got-too-expensive-so-companies-are-moving-to-cheaper)（AI Weekly）
- [埃森哲 Claude 用量上限](https://www.404media.co/accenture-tells-employees-they-can-now-spend-only-29-on-claude-per-month/)（404 Media）
- [Meta 2026 年第三季度财报](https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Third-Quarter-2026-Results/default.aspx)（Meta）
- [美国银行限制 AI agent](https://letsdatascience.com/news/citi-and-bank-of-america-restrict-ai-agent-access-392090c3)、[网站封锁 AI agent](https://letsdatascience.com/news/websites-restrict-ai-agents-online-access-d392b987)（Let's Data Science）
- [LiteLLM 后门](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/)（SafeDep）
- [顶级模型没通过原创研究测试](https://aiweekly.co/issues/top-ai-models-failed-a-test-of-inventing-new-ai-research)（AI Weekly）
