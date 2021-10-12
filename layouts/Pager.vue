<template>
  <page>
    <ul class="article-list article-list-with-excerpt">
      <li v-for="post in postChunks[page - 1]" :key="post.key">
        <h3>
          <template v-if="post.frontmatter.date">
            {{ format(new Date(post.frontmatter.date), 'MMM dd, yyyy') }}
          </template>
        </h3>
        <div class="list-item">
          <router-link :to="post.path" class="title-link" v-text="post.title" />
          <template v-if="post.excerpt">
            <div class="excerpt" v-html="post.excerpt"></div>
            <div v-if="post.frontmatter.readMore !== false" class="read-more">
              <router-link
                :to="post.path"
                class="read-more-link"
                v-text="'Read more...'"
              />
            </div>
          </template>
        </div>
      </li>
    </ul>
    <div class="article-page-nav">
      <p class="inner">
        <span v-if="page > 1" class="prev"
          >←&nbsp;
          <router-link
            class="prev"
            :to="`${$page.regularPath}?page=${page - 1}`"
            v-text="'Newer'"
          />
        </span>
        <span v-if="page < postChunks.length" class="next">
          <router-link
            :to="`${$page.regularPath}?page=${page + 1}`"
            v-text="'Older'"
          />
          &nbsp;→
        </span>
      </p>
    </div>
  </page>
</template>

<script>
import Page from '@theme/layouts/Page'
import format from 'date-fns/format'
import chunk from 'lodash.chunk'
import postsMixin from '../mixins/posts.mixin'

export default {
  components: { Page },
  mixins: [postsMixin],
  data() {
    return {
      page: 1,
    }
  },
  computed: {
    pageSize() {
      return 10
    },
    postChunks() {
      return chunk(this.posts, this.pageSize)
    },
  },
  watch: {
    '$route.query.page': {
      handler(val) {
        this.page = Math.floor(Number(val)) || 1
      },
      immediate: true,
    },
  },
  methods: {
    format,
  },
}
</script>
