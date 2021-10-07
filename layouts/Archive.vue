<template>
  <page>
    <ul class="article-list">
      <li v-for="post in posts" :key="post.key">
        <h3>
          <template v-if="post.frontmatter.date">
            {{ format(new Date(post.frontmatter.date), 'MMM dd, yyyy') }}
          </template>
        </h3>
        <div class="list-item">
          <router-link :to="post.path" class="title-link">{{
            post.title
          }}</router-link>
        </div>
      </li>
    </ul>
  </page>
</template>

<script>
import Page from '@theme/layouts/Page'
import format from 'date-fns/format'
import postsMixin from '../mixins/posts.mixin'

export default {
  components: { Page },
  mixins: [postsMixin],
  methods: {
    format,
  },
}
</script>
