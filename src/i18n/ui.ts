export type Lang = 'zh' | 'ja' | 'en';

export const LANGS: Lang[] = ['zh', 'ja', 'en'];

/** A text field in site.json: one value per language. */
export type Text = Record<Lang, string>;

export const HTML_LANG: Record<Lang, string> = { zh: 'zh-CN', ja: 'ja', en: 'en' };

/** Short labels for the language switch. */
export const LANG_LABEL: Record<Lang, string> = { zh: '中', ja: '日', en: 'EN' };

/** ai-daily uses its own language folder names. */
export const DAILY_PATH: Record<Lang, string> = {
  zh: '/ai-daily/cn/',
  ja: '/ai-daily/jp/',
  en: '/ai-daily/en/',
};

export const ui = {
  zh: {
    nav: { writing: '文章', daily: 'AI 日报', projects: '项目', shelf: '书影音', about: '关于' },
    home: {
      latest: '最新文章',
      daily: 'AI 日报',
      dailyLead: '每天早上更新，五条新闻，每条一两句话讲清楚。',
      dailyCta: '看今天的日报',
      projects: '项目',
      elsewhere: '在别处',
      allWriting: '全部文章',
      allProjects: '全部项目',
    },
    writing: { title: '文章', lead: '学 AI、用 AI 过程中弄明白的事。', also: '也发在', back: '全部文章' },
    projects: { title: '项目', lead: '公开的仓库和长期在做的东西。', site: '网站', repo: '代码' },
    shelf: { title: '书影音', lead: '在读的书、看过的电影、常听的音乐。', books: '书架', reading: '在读', finished: '读过', progress: '读到', none: '还没有', films: '影集', music: '歌单' },
    about: { title: '关于' },
    soon: '准备中',
    skip: '跳到正文',
    menu: '主导航',
    langs: '语言',
    footer: '',
  },
  ja: {
    nav: { writing: '記事', daily: 'AIデイリー', projects: 'プロジェクト', shelf: 'ライブラリ', about: '自己紹介' },
    home: {
      latest: '新着記事',
      daily: 'AIデイリー',
      dailyLead: '毎朝更新。ニュース5本を、それぞれ一言二言で。',
      dailyCta: '今日のデイリーを読む',
      projects: 'プロジェクト',
      elsewhere: 'ほかの場所',
      allWriting: '記事一覧',
      allProjects: 'すべて見る',
    },
    writing: { title: '記事', lead: 'AIを学び、使うなかで分かったこと。', also: '掲載先', back: '記事一覧' },
    projects: { title: 'プロジェクト', lead: '公開しているリポジトリと、続けているもの。', site: 'サイト', repo: 'コード' },
    shelf: { title: '本・映画・音楽', lead: '読んでいる本、観た映画、よく聴く音楽。', books: '本棚', reading: '読書中', finished: '読了', progress: '進捗', none: 'まだありません', films: '映画', music: 'プレイリスト' },
    about: { title: '自己紹介' },
    soon: '準備中',
    skip: '本文へ移動',
    menu: 'メインナビゲーション',
    langs: '言語',
    footer: '',
  },
  en: {
    nav: { writing: 'Writing', daily: 'AI Daily', projects: 'Projects', shelf: 'Library', about: 'About' },
    home: {
      latest: 'Latest writing',
      daily: 'AI Daily',
      dailyLead: 'Updated every morning: five news items, a sentence or two each.',
      dailyCta: "Read today's issue",
      projects: 'Projects',
      elsewhere: 'Elsewhere',
      allWriting: 'All writing',
      allProjects: 'All projects',
    },
    writing: { title: 'Writing', lead: 'Things I figured out while learning and using AI.', also: 'Also on', back: 'All writing' },
    projects: { title: 'Projects', lead: 'Public repositories and long-running work.', site: 'Site', repo: 'Code' },
    shelf: { title: 'Library', lead: 'What I am reading, have watched, and keep listening to.', books: 'Bookshelf', reading: 'Reading', finished: 'Finished', progress: 'At', none: 'Nothing yet', films: 'Films', music: 'Playlist' },
    about: { title: 'About' },
    soon: 'Coming soon',
    skip: 'Skip to content',
    menu: 'Primary',
    langs: 'Language',
    footer: '',
  },
} as const;

/** zh lives at the root, ja under /ja/, en under /en/. */
export function path(lang: Lang, slug = ''): string {
  const tail = slug ? `${slug.replace(/^\/|\/$/g, '')}/` : '';
  return lang === 'zh' ? `/${tail}` : `/${lang}/${tail}`;
}

/** Route params for pages under src/pages/[...locale]/. */
export function localePaths() {
  return LANGS.map((lang) => ({
    params: { locale: lang === 'zh' ? undefined : lang },
    props: { lang },
  }));
}

export function formatDate(date: Date, lang: Lang): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return lang === 'en' ? `${y}-${m}-${d}` : `${y}.${m}.${d}`;
}
