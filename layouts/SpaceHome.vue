<template>
  <div>
    <space-header/>
    <ul class="list">
      <li v-for="post in posts" :key="post.key">
        <h3>{{format(new Date(post.frontmatter.date), 'MMM dd, yyyy')}}</h3>
        <router-link :to="post.path" class="title-link">{{post.title}}</router-link>
        <!--{{post}}-->
      </li>
    </ul>
    <space-footer/>
  </div>
</template>

<script>
  import SpaceHeader from '@theme/components/SpaceHeader'
  import SpaceFooter from '@theme/components/SpaceFooter'
  import format from 'date-fns/format'

  export default {
    components: { SpaceHeader, SpaceFooter },
    computed: {
      posts () {
        return this.$site.pages
          .filter(page => page.path.indexOf('/posts') === 0)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    },
    methods: {
      format
    }
  }
</script>

<style scoped lang="less">
  .list {
    list-style: none;
    margin-top: 20px;
    padding: 0;

    li {
      position: relative;
      padding: 30px 0 30px;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      flex-direction: row;
      align-items: center;

      h3 {
        font-size: 13px;
        color: #999;
        margin: 0;
        width: 100px;
        flex-shrink: 0;
        font-weight: lighter;
        text-transform: uppercase;
      }

      a {
        margin-left: 30px;
        display: block;
        color: #2c3e50 !important;
        font-size: 20px;
        text-decoration: none !important;
        letter-spacing: 1px;
        font-weight: normal;
        text-transform: uppercase;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .list {
      list-style: none;

      li {
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h3 {
          font-size: 13px;
          color: #999;
          margin: 0 0 10px 0;
        }

        a {
          margin-left: 0;
        }
      }
    }
  }
</style>
