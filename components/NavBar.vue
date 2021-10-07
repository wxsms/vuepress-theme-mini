<template>
  <div class="space-header">
    <router-link to="/" class="home-link" v-text="siteName"></router-link>
    <div v-if="nav && nav.length" class="links">
      <template v-for="(item, index) in nav">
        <span :key="index">
          <router-link
            :to="item.link"
            class="site-link"
            v-text="item.text"
          ></router-link
          ><span v-if="index !== nav.length - 1" class="dot">&middot;</span>
        </span>
      </template>
    </div>
    <div class="search-box-container">
      <SearchBox />
    </div>
  </div>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  name: 'Navbar',
  components: { SearchBox },
  computed: {
    siteName() {
      return this.$themeConfig.siteName
    },
    nav() {
      return this.$themeConfig.nav
    },
  },
}
</script>

<style lang="stylus">
@import "../assets/stylesheets/main.styl"
@import "../assets/stylesheets/article.styl"
</style>

<style lang="stylus" scoped>
.dot
  margin: 0 6px;
</style>
