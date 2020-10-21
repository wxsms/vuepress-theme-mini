<template>
  <page>
    <valine-comment v-if="$page.frontmatter.comment !== false" :key="$route.path"/>
    <RightAnchor v-if="showRightAnchor"/>
  </page>
</template>

<script>
import ValineComment from '@theme/components/ValineComment'
import Page from '@theme/layouts/Page'
import RightAnchor from '@theme/components/RightAnchor'

export default {
  components: { Page, ValineComment, RightAnchor },
  computed :{
    showRightAnchor () {
      return this.$page.headers && this.$page.headers.length > 0
    }
  }
}
</script>
