<template functional>
  <div class="space-header">
    <router-link to="/" class="home-link">wxsm's space</router-link>
    <div class="links">
      <router-link to="/" class="site-link">home</router-link>
      <span>&nbsp;&middot;&nbsp;</span>
      <router-link to="/about" class="site-link">about</router-link>
    </div>
  </div>
</template>

<style lang="less">
  body {
    overflow-y: scroll;
  }

  .theme-default-content:not(.custom) > *:first-child {
    margin-top: 1.5rem !important;
  }

  .space-header {
    text-align: center;
    // margin-top: -3.6rem !important;

    .home-link {
      color: #2c3e50 !important;
      text-decoration: none !important;
      letter-spacing: 3px;
      font-size: 20px;
      font-weight: lighter;
    }

    .site-link {
      color: #2c3e50 !important;
      text-decoration: none !important;
      font-size: 15px;
      font-weight: lighter;
    }

    .links {
      margin-top: 20px;
    }
  }
</style>