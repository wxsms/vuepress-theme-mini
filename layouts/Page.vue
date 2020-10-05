<template>
  <div class="theme-container no-sidebar">
    <main class="page">
      <div class="theme-default-content content__default">
        <nav-bar/>
        <div class="title" v-if="$page.title && $page.frontmatter.title">
          <h3 v-if="$page.frontmatter.date">{{format(new Date($page.frontmatter.date), 'MMM dd, yyyy')}}</h3>
          <h1>{{$page.title}}</h1>
        </div>
        <Content/>
        <template v-if="lastUpdated && $page.frontmatter.date">
          <br/>
          <div class="last-updated">
            <span class="prefix">{{ lastUpdatedText }}:</span>
            <span class="time">{{ lastUpdated }}</span>
          </div>
        </template>
        <slot/>
        <footer-bar/>
      </div>
    </main>
  </div>
</template>

<script>
  import format from 'date-fns/format'
  import NavBar from '@theme/components/NavBar'
  import FooterBar from '@theme/components/FooterBar'

  export default {
    components: { NavBar, FooterBar },
    computed: {
      lastUpdated () {
        return this.$page.lastUpdated
      },
      lastUpdatedText () {
        if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
          return this.$themeLocaleConfig.lastUpdated
        }
        if (typeof this.$site.themeConfig.lastUpdated === 'string') {
          return this.$site.themeConfig.lastUpdated
        }
        return 'Last Updated'
      }
    },
    methods: {
      format
    }
  }
</script>

<style scoped lang="stylus">
  .last-updated
    text-align right
    font-size: 13px;
    color: #999;
    font-weight: 200;
    text-transform: uppercase;

    .prefix
      color lighten($textColor, 25%)

  .title
    margin-top: 50px

    h3
      font-size: 13px
      color: #999
      width: 100px
      flex-shrink: 0
      margin: 0 0 15px 0
      font-weight: lighter
      text-transform: uppercase

    h1
      letter-spacing: 1px
      margin: 0 0 40px 0 !important
      font-weight: normal
      text-transform: uppercase
</style>
