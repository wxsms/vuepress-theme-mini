<template>
  <section class="v-comment-container">
    <div id="vcomments"></div>
  </section>
</template>

<script>
import Waline from '@waline/client'

export default {
  name: 'CommentBox',
  mounted () {
    if (typeof window !== 'undefined' && this.$themeConfig.comment) {
      new Waline({
        ...this.$themeConfig.comment,
        el: '#vcomments',
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.v-comment-container
  margin: 5rem 0
</style>
