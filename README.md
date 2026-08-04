# 个人主页 / Personal site

一个中英双语的「人生主页」：自我介绍、工作与研究、近况，以及在读 / 在看 / 在听。
深度内容外链到 LinkedIn、小红书、Instagram。

视觉方向是杂志编辑风——Vogue 的排版骨架（Libre Bodoni 大字、细字距小标签、1px 分隔线）
配 Popeye 的暖纸色和小格子。

## 运行

```bash
npm run dev
```

打开 http://localhost:4321 。构建用 `npm run build`，产物在 `dist/`。

## 目录

| 路径 | 作用 |
|---|---|
| `src/content/site.json` | **所有内容都在这里。** 每个文案字段都是 `{ "zh": "…", "en": "…" }` |
| `src/i18n/ui.ts` | 界面文案（导航、章节名、按钮），以及语言路由规则 |
| `src/styles/global.css` | 色板、字体、`.label` / `.rule` 等排版基础类 |
| `src/components/HomePage.astro` | 首页全部版式 |
| `src/components/ArchivePage.astro` | 三个归档页共用的模板 |
| `src/components/Frame.astro` | 图片位。有图显示图，没图显示占位块 |
| `public/images/` | 图片放这里，在 `site.json` 里写 `/images/xxx.jpg` |

路由：中文在根目录（`/`、`/reading/`），英文在 `/en/` 下（`/en/`、`/en/reading/`）。
两边共用同一份数据，加内容只改 `site.json` 一处。

## 加内容

改 `src/content/site.json` 即可，页面自动更新：

- **工作与研究** → `work` 数组，每条有 `year` / `title` / `summary` / `href`
- **近况** → `notes` 数组，`href` 指向小红书或 Instagram 原帖，`source` 是显示的来源名
- **书 / 影 / 乐** → `library.reading` / `.watching` / `.listening`
  首页每类只显示前 4 条，归档页显示全部——所以**新的放最前面**

## 加图片

图片放进 `public/images/`，然后在 `site.json` 里填路径：

```json
"portrait": { "src": "/images/portrait.jpg", "alt": { "zh": "…", "en": "…" } }
```

`src` 留空字符串就显示占位块，不会出现裂图。

比例约定（保持一致是杂志感的关键）：

| 用途 | 比例 | 建议宽度 |
|---|---|---|
| 人像 | 桌面 2:3，移动端自动裁成 4:5 | 1200px |
| 近况 | 3:2 | 1600px |
| 书 / 影封面 | 2:3 | 800px |
| 专辑封面 | 1:1 | 800px |

## 部署

Cloudflare Pages：连接 Git 仓库，构建命令 `npm run build`，输出目录 `dist`。

注意：Cloudflare Pages 和 Vercel 在国内的访问速度都不稳定。先上线观察，
如果国内访问确实成为问题，再考虑国内服务器 + 域名备案。
