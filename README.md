# vuepress-theme-mini

[![NPM Version](https://img.shields.io/npm/v/vuepress-theme-mini.svg)](https://www.npmjs.com/package/vuepress-theme-mini)
[![License](https://img.shields.io/github/license/wxsms/vuepress-theme-mini.svg)](https://github.com/wxsms/vuepress-theme-mini)

## Introduction

A minimal blogging theme of VuePress.

* extended from [@vuepress/theme-default](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/theme-default)
* With [Valine](https://valine.js.org/) comment system integrated
* Home page content will be ignored

## Example

* [My Personal blog](https://wxsm.space/) ([Source](https://github.com/wxsms/blog))

## Install

NPM:

```bash
npm install vuepress-theme-mini --save-dev
```

Yarn:

```bash
yarn add vuepress-theme-mini --dev
```

## Usage

Configurations are extended from [Default theme config](https://vuepress.vuejs.org/theme/default-theme-config.html), with some additions. Noted that not all of the defaults are usable (such as sidebar), since this theme is a minimal design.

```javascript
module.exports = {
  // ...
  theme: 'mini',
  themeConfig: {
    siteName: '...', // site name at navbar
    author: '...', // author name at footer
    // enable navbar and add links
    navbar: true,
    nav: [
      { text: 'home', link: '/' },
      { text: 'about', link: '/about/' }
    ],
    // valine configurations: https://valine.js.org/configuration.html
    // note that `el` and `path` are already taken care and will be ignored
    valine: {
      appId: 'PXFnynf8h6Qnpm9cIWT0BMgG-gzGzoHsz',
      appKey: 'GshYVR9jngnBj94to63biynJ'
    }
  },
  // ...
}
```

## License

MIT