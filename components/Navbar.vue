<template functional>
  <div class="space-header">
    <router-link to="/" class="home-link">{{siteName}}</router-link>
    <div class="links" v-if="navLinks && navLinks.length">
      <template v-for="(link,index) in navLinks">
        <router-link :to="link.to" class="site-link">{{link.name}}</router-link>
        <span v-if="index !== navLinks.length - 1">&nbsp;&middot;&nbsp;</span>
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
      navLinks () {
        return this.$themeConfig.navLinks
      }
    }
  }
</script>

<style lang="less">
  body {
    overflow-y: scroll;
  }

  .theme-default-content:not(.custom) > *:first-child {
    margin-top: 1.5rem !important;
  }

  .space-header {
    text-align: center;
    // margin-top: -3.6rem !important;

    .home-link {
      color: #2c3e50 !important;
      text-decoration: none !important;
      letter-spacing: 3px;
      font-size: 20px;
      font-weight: lighter;
    }

    .site-link {
      color: #2c3e50 !important;
      text-decoration: none !important;
      font-size: 15px;
      font-weight: lighter;
    }

    .links {
      margin-top: 20px;
    }
  }
</style>