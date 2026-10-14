# KOUHEI AI · 个人主页

https://gengrp.github.io （日本語 /ja/ · English /en/）

用 Astro + Tailwind 写的三语静态站：文章、AI 日报入口、项目、书影音、关于。推送到 `main` 后由 GitHub Actions 部署到 GitHub Pages。

## 运行

```bash
npm run dev     # http://localhost:4321
npm run build   # 产物在 dist/
```

## 内容在哪

| 路径 | 内容 |
|---|---|
| `src/content/site.json` | 个人简介、项目、影集、歌单、外部链接 |
| `src/content/books.json` | 书架（每天从 Apple Books 自动同步，不要手改） |
| `src/content/writing/` | 文章（中日英） |
| `src/i18n/ui.ts` | 界面文字 |
