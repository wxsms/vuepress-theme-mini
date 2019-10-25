<template>
  <div class="space-footer">
    <p class="footer-text">© {{year}} {{author}}</p>
    <p class="footer-text">
      Powered by <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a>
      &nbsp;&middot;&nbsp;
      Theme by <a href="https://github.com/wxsms/vuepress-theme-mini" target="_blank">mini</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'FooterBar',
    data () {
      return {
        year: new Date().getFullYear()
      }
    },
    computed: {
      author () {
        return this.$themeConfig.author
      }
    }
  }
</script>

<style lang="less" scoped>

  .space-footer {
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 0;

    .footer-text {
      color: #2c3e50 !important;
      font-size: 15px;
      font-weight: lighter;
    }
  }
</style>