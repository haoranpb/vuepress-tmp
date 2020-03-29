module.exports = {
  title: '<%= name %>',
  description: '<%= description %>',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'VuePress',
        link: 'https://vuepress.vuejs.org'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/ludanxer/vuepress-tmp'
      }
    ],
  },
}
