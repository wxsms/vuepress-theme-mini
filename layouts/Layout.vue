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
import Page from '@theme/layouts/Page'

export default {
  components: {
    Page,
    CommentBox: () => import('@theme/components/CommentBox'),
    RightAnchor: () => import('@theme/components/RightAnchor'),
  },
  computed: {
    showRightAnchor() {
      return this.$page.headers && this.$page.headers.length > 0
    },
  },
}
</script>
