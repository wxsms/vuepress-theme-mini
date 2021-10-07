export default {
  computed: {
    posts() {
      const reg = this.$page.frontmatter.postsDir
        ? new RegExp(this.$page.frontmatter.postsDir)
        : null

      return this.$site.pages
        .filter((page) => {
          const isPost =
            page.frontmatter.layout === 'Layout' ||
            typeof page.frontmatter.layout === 'undefined'
          const isMatch = reg
            ? reg.test(page.regularPath)
            : page.regularPath.indexOf(this.$page.regularPath) >= 0
          return isPost && isMatch
        })
        .sort((a, b) => {
          try {
            return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          } catch (e) {
            // ignore
            return 0
          }
        })
    },
  },
}
