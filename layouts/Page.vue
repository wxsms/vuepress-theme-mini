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
    methods: {
      format
    }
  }
</script>

<style scoped lang="stylus">
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
