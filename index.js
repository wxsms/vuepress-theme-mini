const reverse = require('lodash.reverse')
const sortBy = require('lodash.sortby')

module.exports = (options, ctx) => {
  const plugins = {
    ['named-chunks']: {
      pageChunkName: (page) => 'page' + page.key.slice(1),
      layoutChunkName: (layout) => 'layout-' + layout.componentName,
    },
  }

  if (options.hostname) {
    plugins.sitemap = {
      hostname: options.hostname,
    }

    plugins.feed = {
      canonical_base: options.hostname,
      posts_directories: options.posts_directories || ['/posts'],
      sort: (entries) => reverse(sortBy(entries, 'date')),
    }
  }

  if (options.ga) {
    plugins['@vuepress/google-analytics'] = {
      ga: options.ga,
    }
  }

  if (!options.disableBackToTop) {
    plugins['@vuepress/back-to-top'] = options.backToTop || {}
  }

  if (!options.disableFlowChart) {
    plugins['flowchart-js'] = options.flowchart || {}
  }

  return {
    extend: '@vuepress/theme-default',
    plugins,
  }
}
