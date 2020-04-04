module.exports = {
  // Reference: https://vuepress.vuejs.org/config/
  title: '<%= name %>',
  description: '<%= description %>',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  // Reference: https://vuepress.vuejs.org/theme/
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/',
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
    sidebar: {
      '/guide/': [{
        title: 'Guide',
        path: '/guide/',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '',
          'basic-cofig',
          'directory-structure',
          'i18n'
        ]
      }]
    },
  },
  // Reference: https://vuepress.vuejs.org/plugin/
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/google-analytics',
      {
        'ga': '<%= ga %>'
      }
    ],
  ]
}
