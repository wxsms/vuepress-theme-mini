module.exports = {
  extend: '@vuepress/theme-default',
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        const formatDistanceToNow = require('date-fns/formatDistanceToNow')
        return formatDistanceToNow(timestamp, { addSuffix: true })
      }
    }
  }
}
