<template>
  <div class="space-header">
    <router-link to="/" class="home-link">{{siteName}}</router-link>
    <div class="links" v-if="nav && nav.length">
      <template v-for="(item,index) in nav">
        <router-link :to="item.link" class="site-link">{{item.text}}</router-link>
        <span v-if="index !== nav.length - 1">&nbsp;&middot;&nbsp;</span>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    computed: {
      siteName () {
        return this.$themeConfig.siteName
      },
      nav () {
        return this.$themeConfig.nav
      }
    }
  }
</script>

<style lang="stylus">
  body
    overflow-y: scroll

  .theme-default-content:not(.custom) > *:first-child
    margin-top: 1.5rem !important

  .space-header
    margin-bottom 50px
    // text-align: center
    // margin-top: -3.6rem !important

    .home-link
      color: #2c3e50 !important
      text-decoration: none !important
      letter-spacing: 3px
      font-size: 20px
      font-weight: lighter

    .site-link
      color: #2c3e50 !important
      text-decoration: none !important
      font-size: 15px
      font-weight: lighter

    .links
      margin-top: 20px
</style>
