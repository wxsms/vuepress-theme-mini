# vuepress-theme-mini

[![NPM Version](https://img.shields.io/npm/v/vuepress-theme-mini.svg)](https://www.npmjs.com/package/vuepress-theme-mini)
[![License](https://img.shields.io/github/license/wxsms/vuepress-theme-mini.svg)](https://github.com/wxsms/vuepress-theme-mini)

## Introduction

A minimal blogging theme of VuePress.

* extended from [@vuepress/theme-default](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/theme-default).
* With [Valine](https://valine.js.org/) comment system integrated.

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
      appId: '[your appId]',
      appKey: '[your appKey]'
    }
  },
  // ...
}
```
## Layouts

FYI: [Custom Layout for Specific Pages](https://vuepress.vuejs.org/theme/default-theme-config.html#custom-layout-for-specific-pages)

### Default

Default layout for normal articles that including a comment area.

### Page

Almost the same as default but without comment.

### ArticleList

Display an article archive base on the folder structure or `articleIndex` param in YAML frontmatter.

For example: if you place a `README.md` with `layout: ArticleList` inside `posts` folder, then it will content all articles inside `posts` folder. You can also place it under root folder with `articleIndex: '/posts'` frontmatter.


## License

MIT
