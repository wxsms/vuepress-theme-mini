<template>
  <div class="space-footer">
    <p class="footer-text">© {{year}} {{author}}</p>
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