---
title: AIが安く、小さくなったら：16日分のニュースから見えた方向
summary: モデルは強くなる一方で、値段は下がり続けている。大きなモデルがデスクトップで動き始めた。この2つを合わせると、AIはもっと多くの場所に入り込む。ただし、安くなっても使うお金が減るわけではなく、本当の壁ももうお金ではない。
date: 2026-10-22
---

私は毎朝AIデイリーをまとめています。10月7日から今日までで16号、90本以上のニュースになりました。振り返ると、2種類のニュースが何度も出てきます。「同じ仕事が安くなった」というものと、「モデルが自分のパソコンで動くようになった」というものです。

一見、関係なさそうに見えます。片方はクラウドの値段、もう片方は手元のハードウェアの話です。でも向かっている方向は同じで、AIを1回使うコストが急速に下がっています。コストがある程度まで下がると、AIはWebページを開いて質問するものから、ソフトやデバイス、裏で動く作業の中に組み込まれるものになり、あらゆる場所に入っていきます。

この記事では、この16日間のニュースを使ってその流れを整理し、まだ足りないと思う部分も書きます。数字はすべて原文で確認し、最後に出典を載せました。

## 同じ仕事が、どんどん安くなる

まず値段です。ここ2週間だけでも：

- AnthropicがClaude Haiku 5.5を発表。公式によると**平均の実行コストは前世代より約75%安い**。あわせてSonnet 5.5のキャッシュ読み取りを半額にし、100万トークンあたり0.20ドルから0.10ドルに。
- Googleの画像生成モデルNano Banana 2.1は、1K画像が6.70セントから3.36セントに、4K画像が15.10セントから7.56セントに。**ほぼ半額**です。
- 拡散型の言語モデルMercury 3は毎秒1,000トークン以上を生成し、入力100万トークンあたり0.20ドル。
- MicrosoftのMicrosoft-Decision-1は選択肢に点数をつけるだけで文章を書かない「判断専用」モデル。入力は100万トークンあたり0.042ドルで、**出力は無料**です。そもそもトークンを出力しないからです。

![ここ2週間の値下げ幅の比較](/writing/ai-everywhere/price-cuts-ja.png)

*図：各社の公式発表の数字をもとに作成。Notionの90%はトップモデルを直接使った場合との比較、ほかは前世代との比較。*

図の中でいちばん大きく下がっている項目は、実はどこかの値下げではなく、Notionの工夫によるものです。

![Notion公式ブログ：Agents, rebuilt to do more for less](/writing/ai-everywhere/notion-more-for-less.jpg)

*図：Notion公式ブログ、2026年10月20日。出典：[notion.com/blog](https://www.notion.com/blog/notion-ai-more-for-less)*

NotionはAutoという「モデルルーター」を強化しました。仕事を渡すと、まずその難しさを判断して、いちばん合ったモデルに振り分けます。20種類以上のよくある使い方で試したところ、<mark>Opus 5.5のようなトップモデルを直接使った場合とほぼ同じ結果で、平均コストは約90%低かった</mark>そうです。

これは普通の人にとっていちばん役に立つ話です。多くの人は何でもいちばん強いモデルに投げてしまい、誤字の修正まで任せています。でも要約や分類、書式の整理といった日常の仕事の多くは、小さいモデルで十分です。**節約の大部分は、仕事ごとに合ったモデルを選ぶことから生まれます**。メーカーの値下げはその一部にすぎません。

## 大きなモデルが自分のパソコンで動き始めた

2つ目の流れはローカルです。10月15日、Metaがオープンウェイトのモデル「Muse Spark Open」を公開しました。

![Meta公式ブログ：Introducing Muse Spark Open](/writing/ai-everywhere/meta-muse-spark-open.jpg)

*図：Meta AI公式ブログ、2026年10月15日。出典：[research.meta.ai](https://research.meta.ai/blog/muse-spark-open)*

このモデルのパラメータは全部で8160億個。本来ならデータセンターでしか動かない規模です。MetaはAppleと一緒に最適化を行い、M5 UltraのMac Studioは1台あたり最大512GBのメモリを持つので、**2台つなげばモデル全体が収まり**、クラウドなしで動きます。

収まる理由は構造にあります。これは「混合エキスパート」（MoE）モデルで、8160億のパラメータが多数の「エキスパート」に分かれていて、1文字生成するごとに使うのは420億だけです。全体は大きくても、実際に働く部分は小さいので、マシンへの要求が大きく下がります。ここ数週間に出たモデルの多くが同じ考え方です。

- Recursiveが公開したコーディングモデルFlintは、全体で400億パラメータ、1回に使うのは約25億。Appleシリコン向けとNVIDIA向けの量子化版も用意されています。
- Liquid AIの判断モデルd1-3Bはわずか30億パラメータ。RTX 4090で1問に答えるのに8ミリ秒、測定したすべての機器で50ミリ秒以内で、ロボット用の小型ボードJetsonでもそのまま動きます。
- 40億パラメータしかないGroundingPIは、34の視覚グラウンディングのベンチマークで44の比較モデルを上回り、ロボットの「目」として組み込むと、いちばん強い比較モデルより最大24.8%改善しました。

![Inception Labs：Mercury 5世代の品質と規模](/writing/ai-everywhere/mercury-quality-vs-size.jpg)

*図：Inception Labs公式ブログ。Mercuryは初代から第3世代までで規模が40倍以上、総合品質が約3倍に。出典：[inceptionlabs.ai](https://www.inceptionlabs.ai/blog/introducing-mercury-3)*

ただし、はっきりさせておくと、<mark>「ローカルで動く」はまだ高いマシンの話です。</mark>最上位のMac Studio 2台は普通の人が買うものではありません。ローカルで大きなモデルを動かすのが売りのSurface Laptop Ultraも、2,600ドルから5,900ドルです。

私がもっと注目しているのは、Microsoftの一文です。GitHub Copilotはまもなく、**ある仕事をあなたのパソコンで処理するか、クラウドの大きなモデルに任せるかを自分で判断する**ようになるそうです。NotionのAutoと同じ考え方で、「モデルを選ぶ」が「どこで動かすかを選ぶ」に広がっています。簡単なことは手元ですぐ返し、難しいことはクラウドへ。使う人は気づかないかもしれません。

## 2つの流れが合わさると：AIがあらゆる場所に

安くて小さくなると、いちばん直接的な結果として、AIをずっと動かしておけるようになります。

Notionのエージェントは、これまで1つのタスクが最長5分でしたが、今は24時間以上続けて動けます。Anthropicが今週出したClaude Duetは、朝にブリーフィングを送り、あなたがいない間は自分のクラウド上のパソコンで作業し、重要な操作の前だけ確認に来ます。トークンが高かった頃には成り立たなかった使い方です。

モデルがどこまで小さな機器に入るかについては、Anthropicの研究がわかりやすい例を出しています。

![Anthropic：1つのモデルを15台のAndroid TVボックスで動かす](/writing/ai-everywhere/anthropic-tv-boxes.jpg)

*図：Anthropic研究ブログ。1台約55ドルのTVボックス15台がそれぞれモデルの2層を受け持ち、合わせて260億パラメータのモデルを動かす。出典：[anthropic.com/research](https://www.anthropic.com/research/self-replicating-ai)*

安いAndroid TVボックスを15台買ってつなぎ、Gemma4-26Bを動かしたところ、速度は毎秒0.39トークン。遅いですが、動きます。この研究は実は警告です。小さいモデルの能力が今のペースで伸びれば、年内にもスマート冷蔵庫やTVボックスのようなネット接続機器に自分をコピーして動けるようになるかもしれない。しかも中央のスイッチがないので、止めるのが難しい。

この話をここに入れたのは、「AIがあらゆる場所に」には両面があることを示しているからです。私たちはAIにあらゆるソフトや機器の中で手伝ってほしい。でも同じ条件が、悪い使い方も簡単にしてしまいます。

## 安くなったのに、総額はむしろ増える

値段が下がっても、AIに使うお金が減っているわけではありません。この16日間には、逆を示すニュースがいくつかありました。

- 法律AIの会社Harveyは、モデルの利用量が20倍になり、粗利率が約50%からマイナス50%まで落ちました。その後、オープンウェイトのモデルをもとに自社モデルを作って、ようやく黒字に戻しています。フィナンシャル・タイムズによると、AT&TではAIの仕事の40%がすでにオープンモデルで動いています。
- アクセンチュアは多くの社員のClaude利用に、1人月29ドルの上限を設けました。月1,000ドル使っていた社員もいたそうです。
- Metaは今年の設備投資の見通しを1350億〜1450億ドルとし、その大部分をAIに使います。

<mark>単価が下がると、使う量がそれ以上に増えて、総額はむしろ大きくなる。</mark>経済学には「ジェボンズのパラドックス」という言葉があります。石炭を効率よく使えるようになるほど、使える場所が増えて、石炭の総消費はかえって増える。AIもいま同じことが起きているように見えます。個人や会社にとって意味のある問いは「1つの仕事を終えるのにいくらかかったか」になっていて、100万トークンあたりの値段だけを見てもあまり意味がありません。

## まだ足りないところ

技術的なハードルは急速に下がっていますが、「AIがあらゆる場所に」は今、別のところで止まっています。

**やらせてもらえるか。** シティとバンク・オブ・アメリカは10月中旬、AIエージェントが顧客口座を操作することを制限しました。AmazonはMetaの買い物エージェントがAmazonで注文するのを止めています。エージェントに線を引くサイトやサービスが増えています。

**信用できるか。** 10月21日、よく使われるAIライブラリLiteLLMの1つのバージョンにバックドアが仕込まれていたことがわかりました。入れるとSSH鍵、クラウドの認証情報、各社AIのAPIキーが盗まれます。AIがつながる場所が増えるほど、攻撃される場所も増えます。

**自分で新しいことを考えられるか。** AI Weeklyによると、トップモデルに新しいAI研究を自分で提案して完成させるテストをしたところ、まだどのモデルもできませんでした。AIは仕事をやり切るのは得意でも、何をやるべきかを決めるのはまだ苦手です。

なので私の判断はこうです。コストはもう最大の障害ではなく、<mark>これからAIがどこまで行けるかを決めるのは、権限と信頼です。</mark>

## 普通の人にとって、何ができるか

ここまでの話をふまえて、まだAIを使いこなせていない友人には3つ提案します。

1つ目は、**仕事に合わせてモデルを選ぶ**こと。日常の要約、翻訳、書式の整理は、安くて速い小さなモデルで十分です。いちばん強いモデルは本当に難しい問題のためにとっておきましょう。NotionのAutoのように、自動で選んでくれるツールも増えています。

2つ目は、**ローカルモデルはまず趣味として試す**こと。そのために数千ドルのパソコンを買う必要はありません。手元のパソコンでも数十億パラメータの小さなモデルは動くので、LM StudioやOllamaを入れて、何ができて何ができないかを体験してみてください。

3つ目は、**繰り返しの仕事はエージェントに任せて長めに動かす。ただし、お金・アカウント・プライバシーに関わることは自分で確認する**こと。銀行がエージェントを制限し、ライブラリに毒が仕込まれる。任せる前に、何に触れさせるかを決めておく必要があります。

## おわりに

16日間、90本以上のニュース。1本ずつ見れば「また値下げ」「また新しいモデル」でしかありません。並べてみると方向ははっきりしています。AIは電気のように安く、どこにでもあるものになりつつあります。これからも毎日記録していきます。次は「仕事ごとのモデルの選び方」を、自分の日常のタスクを例に書くつもりです。

---

**この記事で使った原文**（登場順）

- [Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5)（Anthropic）
- [Nano Banana 2.1の値下げ](https://the-decoder.com/googles-new-image-model-nano-banana-2-1-generates-better-images-for-less-money/)（The Decoder）
- [Mercury 3](https://www.inceptionlabs.ai/blog/introducing-mercury-3)（Inception Labs）
- [Microsoft-Decision-1](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/)（Microsoft）
- [Agents, rebuilt to do more for less](https://www.notion.com/blog/notion-ai-more-for-less)（Notion）
- [Introducing Muse Spark Open](https://research.meta.ai/blog/muse-spark-open)（Meta）
- [Flintのモデルページ](https://huggingface.co/RecursiveSI/flint)（Hugging Face）
- [Liquid AI d1](https://www.liquid.ai/blog/d1-open)（Liquid AI）
- [GroundingPIの論文](https://arxiv.org/abs/2609.39601)（arXiv）
- [RTX Sparkノートの価格](https://www.pcworld.com/article/3256085/here-are-all-the-rtx-spark-laptops-available-at-launch-going-up-to-7000.html)（PCWorld）
- [Claude Duet](https://claude.com/product/claude-duet)（Anthropic）
- [小さなモデルの自己複製の研究](https://www.anthropic.com/research/self-replicating-ai)（Anthropic）
- [企業が安いモデルに移る](https://aiweekly.co/issues/ai-got-too-expensive-so-companies-are-moving-to-cheaper)（AI Weekly）
- [アクセンチュアのClaude利用上限](https://www.404media.co/accenture-tells-employees-they-can-now-spend-only-29-on-claude-per-month/)（404 Media）
- [Meta 2026年第3四半期決算](https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Third-Quarter-2026-Results/default.aspx)（Meta）
- [米銀行がAIエージェントを制限](https://letsdatascience.com/news/citi-and-bank-of-america-restrict-ai-agent-access-392090c3)、[サイトがAIエージェントを締め出す](https://letsdatascience.com/news/websites-restrict-ai-agents-online-access-d392b987)（Let's Data Science）
- [LiteLLMのバックドア](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/)（SafeDep）
- [トップモデルが独自研究のテストに不合格](https://aiweekly.co/issues/top-ai-models-failed-a-test-of-inventing-new-ai-research)（AI Weekly）
