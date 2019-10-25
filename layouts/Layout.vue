<template>
  <div class="theme-container no-sidebar">
    <main class="page">
      <div class="theme-default-content content__default">
        <nav-bar/>
        <div class="title">
          <h3 v-if="$page.frontmatter.date">{{format(new Date($page.frontmatter.date), 'MMM dd, yyyy')}}</h3>
          <h1>{{$page.title}}</h1>
        </div>
        <Content/>
        <valine-comment v-if="$page.frontmatter.comment !== false" :key="$route.path"/>
        <footer-bar/>
      </div>
    </main>
  </div>
</template>

<script>
  import format from 'date-fns/format'
  import NavBar from '@theme/components/Navbar'
  import FooterBar from '@theme/components/Footer'
  import ValineComment from '@theme/components/ValineComment'

  export default {
    components: {ValineComment, NavBar, FooterBar},
    methods: {
      format
    }
  }
</script>

<style scoped lang="less">
  .title {
    margin-top: 50px;

    h3 {
      font-size: 13px;
      color: #999;
      width: 100px;
      flex-shrink: 0;
      margin: 0 0 15px 0;
      font-weight: lighter;
      text-transform: uppercase;
    }

    h1 {
      letter-spacing: 1px;
      margin: 0 0 40px 0 !important;
      font-weight: normal;
      text-transform: uppercase;
    }
  }
</style>