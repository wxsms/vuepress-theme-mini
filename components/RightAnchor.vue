<!--Edited from https://github.com/xuekai-china/vuepress-plugin-right-anchor-->
<!--MIT License-->

<!--Copyright (c) 2020 xuek.-->

<!--Permission is hereby granted, free of charge, to any person obtaining a copy-->
<!--of this software and associated documentation files (the "Software"), to deal-->
<!--in the Software without restriction, including without limitation the rights-->
<!--to use, copy, modify, merge, publish, distribute, sublicense, and/or sell-->
<!--copies of the Software, and to permit persons to whom the Software is-->
<!--furnished to do so, subject to the following conditions:-->

<!--The above copyright notice and this permission notice shall be included in all-->
<!--copies or substantial portions of the Software.-->

<!--THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR-->
<!--IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,-->
<!--FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE-->
<!--AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER-->
<!--LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,-->
<!--OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE-->
<!--SOFTWARE.-->

<template>
  <ul class="right-anchor">
    <li
      v-for="(item, index) in listData"
      :key="index"
      class="right-anchor-item"
      :class="{ active: index === activeIndex, sub: item.level === 3 }"
      @click="itemClick(index, item.slug)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  name: 'RightAnchor',
  data() {
    return {
      listData: [],
      activeIndex: null,
    }
  },
  watch: {
    '$page.regularPath': function () {
      this.filterDataByLevel()
    },
  },
  mounted() {
    this.filterDataByLevel()
    // wait for async contents to be loaded
    setTimeout(this.filterDataByLevel, 5000)
    window.addEventListener(
      'scroll',
      debounce(() => {
        const scrollTop = this.getScrollTop()
        this.listData.map((item, index) => {
          if (item.offsetTop && scrollTop >= item.offsetTop)
            this.activeIndex = index
        })
      }, 300)
    )
  },
  methods: {
    itemClick(index, slug) {
      this.filterDataByLevel()
      this.activeIndex = index
      window.scrollTo({
        top: document.getElementById(slug).offsetTop,
        behavior: 'smooth',
      })
    },
    filterDataByLevel() {
      this.listData = []
      const headers = this.$page.headers || []
      headers.forEach((item) => {
        if (item.level === 2 || item.level === 3) {
          this.listData.push(JSON.parse(JSON.stringify(item)))
        }
      })
      this.$nextTick(() => {
        this.listData.forEach((item) => {
          this.getEleById(item.slug).then((el) => {
            item.offsetTop = el.offsetTop
          })
        })
      })
    },
    getEleById(id) {
      return new Promise((resolve) => {
        const t = setInterval(() => {
          const el = document.getElementById(id)
          if (el) {
            clearInterval(t)
            resolve(el)
          }
        }, 100)
      })
    },
    getScrollTop() {
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
.right-anchor {
  position: fixed;
  padding: 8px 0;
  margin: 0;
  top: $navbarHeight;
  max-height: 75vh;
  right: 0;
  min-width: 132px;
  border-left: 1px solid #eaecef;
  background-color: $rightAnchorBgColor;
  overflow-y: auto;
  z-index: 1;

  &-item {
    display: block;
    padding: 4px 16px;
    font-size: 12px;
    margin-left: -1px;
    text-decoration: none;
    display: block;
    cursor: pointer;

    &.sub {
      padding-left: 24px;
    }

    &:hover,
    &.active {
      color: $accentColor;
      border-left: 1px solid $accentColor;
      padding-left: 15px;

      &.sub {
        padding-left: 23px;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .right-anchor {
    display: none;
  }
}
</style>
