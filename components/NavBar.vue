<template>
  <div class="space-header">
    <router-link to="/" class="home-link" v-text="siteName"></router-link>
    <div class="links" v-if="nav && nav.length">
      <template v-for="(item,index) in nav">
        <span>
          <router-link :to="item.link" class="site-link" v-text="item.text"></router-link>
          <span v-if="index !== nav.length - 1" v-html="splitter"></span>
        </span>
      </template>
    </div>
    <div class="search-box-container">
      <SearchBox/>
    </div>
  </div>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  name: 'Navbar',
  components: { SearchBox },
  data () {
    return {
      splitter: '&nbsp;&nbsp;&middot;&nbsp;&nbsp;'
    }
  },
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
@import "../assets/stylesheets/main.styl"
@import "../assets/stylesheets/article.styl"
</style>
