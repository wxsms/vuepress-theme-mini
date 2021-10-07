<template>
  <page>
    <ClientOnly>
      <CommentBox
        v-if="$page.frontmatter.comment !== false"
        :key="$route.path"
      />
      <RightAnchor v-if="showRightAnchor" />
    </ClientOnly>
  </page>
</template>

<script>
import CommentBox from '@theme/components/CommentBox'
import Page from '@theme/layouts/Page'
import RightAnchor from '@theme/components/RightAnchor'

export default {
  components: { Page, CommentBox, RightAnchor },
  computed: {
    showRightAnchor() {
      return this.$page.headers && this.$page.headers.length > 0
    },
  },
}
</script>
