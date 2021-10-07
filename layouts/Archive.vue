<template>
  <div class="theme-container no-sidebar">
    <main class="page">
      <div class="theme-default-content content__default">
        <nav-bar />
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
        <footer-bar />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '@theme/components/NavBar'
import FooterBar from '@theme/components/FooterBar'
import format from 'date-fns/format'
import postsMixin from '../mixins/posts.mixin'

export default {
  components: { NavBar, FooterBar },
  mixins: [postsMixin],
  methods: {
    format,
  },
}
</script>
