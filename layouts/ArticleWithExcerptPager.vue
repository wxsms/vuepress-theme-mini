<template>
  <div class="theme-container no-sidebar">
    <main class="page">
      <div class="theme-default-content content__default">
        <nav-bar/>
        <Content/>
        <ul class="article-list article-list-with-excerpt">
          <li v-for="post in postChunks[page - 1]" :key="post.key">
            <h3>
              <template v-if="post.frontmatter.date">
                {{ format(new Date(post.frontmatter.date), 'MMM dd, yyyy') }}
              </template>
            </h3>
            <div class="list-item">
              <router-link :to="post.path" class="title-link" v-text="post.title"/>
              <template v-if="post.excerpt">
                <div class="excerpt" v-html="post.excerpt"></div>
                <div class="read-more">
                  <router-link :to="post.path" class="read-more-link" v-text="'Read more...'"/>
                </div>
              </template>
            </div>
          </li>
        </ul>

        <div class="article-page-nav">
          <p class="inner">
            <span class="prev" v-if="page > 1">←&nbsp;
              <router-link
                  class="prev"
                  :to="`${$page.regularPath}?page=${page - 1}`"
                  v-text="'Newer'"
              />
            </span>
            <span class="next" v-if="page < postChunks.length">
               <router-link
                   :to="`${$page.regularPath}?page=${page + 1}`"
                   v-text="'Older'"
               />
              &nbsp;→
            </span>
          </p>
        </div>


        <footer-bar/>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '@theme/components/NavBar'
import FooterBar from '@theme/components/FooterBar'
import format from 'date-fns/format'
import chunk from 'lodash.chunk'

export default {
  components: { NavBar, FooterBar },
  data () {
    return {
      page: 1
    }
  },
  watch: {
    '$route.query.page': {
      handler (val) {
        this.page = Math.floor(Number(val)) || 1
      },
      immediate: true
    }
  },
  computed: {
    pageSize () {
      return 10
    },
    indexSymbol () {
      return this.$page.frontmatter.articleIndex || this.$page.regularPath
    },
    posts () {
      return this.$site.pages
          .filter(page => {
            const included = page.regularPath.indexOf(this.indexSymbol) === 0
            const isPost = page.frontmatter.layout === 'Layout' || typeof page.frontmatter.layout === 'undefined'
            return included && isPost
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
    postChunks () {
      return chunk(this.posts, this.pageSize)
    }
  },
  methods: {
    format
  }
}
</script>
