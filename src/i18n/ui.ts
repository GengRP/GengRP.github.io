export type Lang = 'zh' | 'en';

export const LANGS: Lang[] = ['zh', 'en'];

/** Archive sections share one template; this is the only place their identity lives. */
export const SHELVES = ['reading', 'watching', 'listening'] as const;
export type Shelf = (typeof SHELVES)[number];

export const ui = {
  zh: {
    nav: {
      work: '工作',
      notes: '近况',
      reading: '在读',
      watching: '在看',
      listening: '在听',
    },
    sections: {
      work: '工作与研究',
      notes: '近况',
      currently: '在读 · 在看 · 在听',
    },
    shelf: {
      reading: '在读',
      watching: '在看',
      listening: '在听',
    },
    shelfLead: {
      reading: '手边正在读的，和今年读完的。',
      watching: '最近看的电影，不按评分排，按记得住的程度排。',
      listening: '工作时听的，和不工作时听的。',
    },
    viewAll: '全部',
    backHome: '返回首页',
    readMore: '详情',
    contact: '联系',
    colophon: '本站以 Astro 构建，字体为 Libre Bodoni 与 Public Sans。',
    skipToContent: '跳到正文',
    placeholder: '照片位',
    langSwitchLabel: '切换到英文',
  },
  en: {
    nav: {
      work: 'Work',
      notes: 'Notes',
      reading: 'Reading',
      watching: 'Watching',
      listening: 'Listening',
    },
    sections: {
      work: 'Work & Research',
      notes: 'Field Notes',
      currently: 'Reading · Watching · Listening',
    },
    shelf: {
      reading: 'Reading',
      watching: 'Watching',
      listening: 'Listening',
    },
    shelfLead: {
      reading: "What's on the desk, and what I finished this year.",
      watching: 'Recent films, ordered by what stuck rather than by rating.',
      listening: 'What I play while working, and what I play when I stop.',
    },
    viewAll: 'View all',
    backHome: 'Back to home',
    readMore: 'Read',
    contact: 'Contact',
    colophon: 'Built with Astro. Set in Libre Bodoni and Public Sans.',
    skipToContent: 'Skip to content',
    placeholder: 'Photo',
    langSwitchLabel: 'Switch to Chinese',
  },
} as const;

/** zh lives at the root, en under /en/. */
export function path(lang: Lang, slug = ''): string {
  const tail = slug ? `${slug}/` : '';
  return lang === 'zh' ? `/${tail}` : `/en/${tail}`;
}

/** Same page, other language. */
export function altPath(lang: Lang, slug = ''): string {
  return path(lang === 'zh' ? 'en' : 'zh', slug);
}
