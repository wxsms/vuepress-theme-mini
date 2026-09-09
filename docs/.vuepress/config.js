const path = require('path')

module.exports = {
  // Sub-path base is only needed when deploying to GitHub Pages; it is
  // injected via VUEPRESS_BASE in the deploy workflow. Local dev/build
  // defaults to '/'.
  base: process.env.VUEPRESS_BASE || '/',
  title: 'vuepress-theme-mini',
  description: 'A minimal blogging theme of VuePress.',
  shouldPrefetch: (name) => {
    return name.includes('vendors~') || name.includes('layout-')
  },
  theme: path.join(__dirname, '..', '..'),
  themeConfig: {
    hostname: 'https://wxsms.github.io/vuepress-theme-mini',
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
    ]
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-include'))
    }
  }
}
