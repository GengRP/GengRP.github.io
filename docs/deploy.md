# 发布与在线编辑

仓库：https://github.com/GengRP/GengRP.github.io （公开）
网址：https://gengrp.github.io

仓库名取 `GengRP.github.io` 是有意的——GitHub 对这个特殊名字会把站点发布在
用户根路径上，而不是 `gengrp.github.io/仓库名`。这样省掉了配置 `base` 路径，
所有内部链接和图片路径都能直接用 `/` 开头。

## 一、GitHub Pages（已启用）

`.github/workflows/deploy.yml` 已配好。往 `main` 分支推任何提交都会自动构建并上线，
一般一两分钟生效。

构建状态看这里：https://github.com/GengRP/GengRP.github.io/actions

如果构建失败，点进失败的那次运行看日志——绝大多数情况是 `site.json` 漏了逗号或引号。
构建失败时线上是旧版本，不会挂掉。

## 二、Cloudflare Pages（可选，海外访问更快）

GitHub Pages 已经够用。如果之后觉得访问慢，可以再挂一个 Cloudflare Pages，
两边可以同时构建同一个仓库。

1. https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. 授权 GitHub，选仓库 `GengRP/GengRP.github.io`
3. 构建设置：

   | 字段 | 值 |
   |---|---|
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | 留空 |

4. **Environment variables** 加一条 `NODE_VERSION` = `22`
   （不加的话 Cloudflare 可能用旧版 Node，Astro 7 构建会失败）
5. **Save and Deploy**

## 三、绑自己的域名

GitHub 仓库 → **Settings** → **Pages** → **Custom domain** 填入域名，
然后在域名服务商那里加 DNS 记录：

- 根域名（`example.com`）→ 四条 A 记录指向 `185.199.108.153`、`185.199.109.153`、
  `185.199.110.153`、`185.199.111.153`
- 子域名（`www.example.com`）→ 一条 CNAME 指向 `gengrp.github.io`

绑好后把 `astro.config.mjs` 里的 `site` 改成新域名（影响 `og:` 元数据和站点地图）。

## 四、在线编辑内容

所有内容都在 `src/content/site.json`，改完提交，Actions 自动重新构建上线。

**推荐方式**：打开 https://github.com/GengRP/GengRP.github.io ，键盘按一下 `.`
（英文句号），浏览器里会开出完整的 VS Code。改完点左侧源代码管理图标提交即可。
手机浏览器也能开，只是打字费劲。

**改 JSON 的注意事项**：

- 每个文案字段都是 `{ "zh": "…", "en": "…" }`，两个都要填
- 数组里除最后一项外，每项结尾都要有逗号
- 首页每类只显示前 4 条，**新的放最前面**

## 五、仓库是公开的

任何人都能看到源码和提交历史。这对个人主页通常没问题——内容本来就是要公开的。
但要注意：**不要往仓库里放不想公开的东西**（未发表的草稿、私人照片、任何密钥）。
删掉也没用，提交历史里还留着。
