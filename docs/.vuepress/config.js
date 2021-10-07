const path = require('path')

module.exports = {
  title: 'vuepress-theme-mini',
  description: 'A minimal blogging theme of VuePress.',
  theme: path.join(__dirname, '..', '..'),
  themeConfig: {
    hostname: 'https://vuepress-theme-mini.wxsm.space',
    ga: 'UA-102731925-1',
    smoothScroll: false,
    lastUpdated: 'Last Updated',
    siteName: 'vuepress-theme-mini',
    author: 'wxsm',
    navbar: true,
    nav: [
      { text: 'home', link: '/' },
      { text: 'archive', link: '/archive/' },
      { text: 'about', link: '/about/' }
    ],
    comment: {
      serverURL: 'https://blog-api-8pvwfy3l9-wxsms.vercel.app',
      avatar: 'retro',
      visitor: true,
      lang: 'en'
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-include'))
    }
  }
}
