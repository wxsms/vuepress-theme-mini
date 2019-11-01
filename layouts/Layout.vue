<template>
  <page>
    <valine-comment v-if="$page.frontmatter.comment !== false" :key="$route.path"/>
  </page>
</template>

<script>
  import ValineComment from '@theme/components/ValineComment'
  import Page from '@theme/layouts/Page'

  export default {
    components: { Page, ValineComment }
  }
</script>

<style scoped lang="stylus">

</style>
