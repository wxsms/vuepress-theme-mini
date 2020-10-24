<template>
  <div class="space-header">
    <a v-if="useSimpleLinkOnNavBar" href="/" class="home-link" v-text="siteName"></a>
    <router-link v-else to="/" class="home-link" v-text="siteName"></router-link>
    <div class="links" v-if="nav && nav.length">
      <template v-for="(item,index) in nav">
        <span>
          <a v-if="useSimpleLinkOnNavBar" :href="item.link" class="site-link" v-text="item.text"></a>
          <router-link v-else :to="item.link" class="site-link" v-text="item.text"></router-link>
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
    },
    useSimpleLinkOnNavBar () {
      return this.$themeConfig.useSimpleLinkOnNavBar
    }
  }
}
</script>

<style lang="stylus">
body
  overflow-y scroll

  .content__default
    word-break break-all

.theme-default-content:not(.custom) > *:first-child
  margin-top 1.5rem !important

.space-header
  margin-bottom 50px
  position relative
  // text-align center
  // margin-top -3.6rem !important

  .home-link
    color #2c3e50 !important
    text-decoration none !important
    letter-spacing 3px
    font-size 20px
    font-weight lighter

  .site-link
    color #2c3e50 !important
    text-decoration none !important
    font-size 15px
    font-weight lighter

  .links
    margin-top 20px

  .search-box-container
    position absolute
    top ((61px - 34px) / 2)
    right 0

.search-box input
  border-color #eee

@media screen and (max-width: 959px)
  .search-box input
    border-color transparent

.right-anchor
  width 200px
  overflow hidden

@media screen and (max-width: 1199px)
  .right-anchor
    display none !important
</style>
