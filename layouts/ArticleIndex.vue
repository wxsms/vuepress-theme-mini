<template>
  <div class="theme-container no-sidebar">
    <main class="page">
      <div class="theme-default-content content__default">
        <nav-bar/>
        <ul class="list">
          <li v-for="post in posts" :key="post.key">
            <h3>
              <template v-if="post.frontmatter.date">
                {{format(new Date(post.frontmatter.date), 'MMM dd, yyyy')}}
              </template>
            </h3>
            <router-link :to="post.path" class="title-link">{{post.title}}</router-link>
            <!--{{post}}-->
          </li>
        </ul>
        <footer-bar/>
      </div>
    </main>
  </div>
</template>

<script>
  import NavBar from '@theme/components/NavBar'
  import FooterBar from '@theme/components/FooterBar'
  import format from 'date-fns/format'

  export default {
    components: { NavBar, FooterBar },
    computed: {
      indexSymbol () {
        return this.$page.frontmatter.articleIndex || this.$page.path
      },
      posts () {
        return this.$site.pages
          .filter(page => page.path.indexOf(this.indexSymbol) === 0 && page.frontmatter.layout !== 'ArticleIndex')
          .sort((a, b) => {
            try {
              return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
            } catch (e) {
              // ignore
              return 0
            }
          })
      }
    },
    methods: {
      format
    }
  }
</script>

<style scoped lang="stylus">
  .list
    list-style: none
    margin-top: 20px
    padding: 0

    li
      position: relative
      padding: 30px 0 30px
      border-bottom: 1px solid #e6e6e6
      display: flex
      flex-direction: row
      align-items: center

      h3
        font-size: 13px
        color: #999
        margin: 0
        width: 100px
        flex-shrink: 0
        font-weight: lighter
        text-transform: uppercase

      a
        margin-left: 30px
        display: block
        color: #2c3e50 !important
        font-size: 20px
        text-decoration: none !important
        letter-spacing: 1px
        font-weight: normal
        text-transform: uppercase

  @media screen and (max-width: 420px)
    .list
      list-style: none

      li
        border-bottom: 1px solid #e6e6e6
        display: flex
        flex-direction: column
        align-items: flex-start

        h3
          font-size: 13px
          color: #999
          margin: 0 0 10px 0

        a
          margin-left: 0
</style>
