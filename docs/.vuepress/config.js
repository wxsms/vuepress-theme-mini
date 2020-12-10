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
    valine: {
      appId: 'PXFnynf8h6Qnpm9cIWT0BMgG-gzGzoHsz',
      appKey: 'GshYVR9jngnBj94to63biynJ',
      placeholder: 'Leave a comment...',
      verify: false,
      notify: false,
      avatar: 'retro',
      lang: 'en'
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-include'))
    }
  }
}
