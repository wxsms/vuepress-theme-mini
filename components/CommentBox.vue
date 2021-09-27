<template>
  <section class="v-comment-container">
    <div id="vcomments"></div>
  </section>
</template>

<script>
  export default {
    name: 'CommentBox',
    mounted () {
      // console.log('mounted')
      if (typeof window !== 'undefined' && this.$themeConfig.comment) {
        const Waline = require('@waline/client');
        window.AV = require('leancloud-storage')
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
