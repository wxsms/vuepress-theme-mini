<template>
  <section class="v-comment-container">
    <div id="vcomments"></div>
  </section>
</template>

<script>
  export default {
    name: 'Valine',
    mounted () {
      // console.log('mounted')
      if (typeof window !== 'undefined' && this.$themeConfig.valine) {
        const Valine = require('valine')
        window.AV = require('leancloud-storage')
        new Valine({
          ...this.$themeConfig.valine,
          el: '#vcomments',
          path: this.$route.path
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .v-comment-container {
    margin: 5rem 0;
  }
</style>
