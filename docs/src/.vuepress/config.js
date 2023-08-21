const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Symfony Course',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Data modeling',
        link: '/data/',
      },
      {
        text: 'PHP',
        link: '/php/',
      },
      {
        text: 'Symfony',
        link: '/symfony/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
    ],
    sidebar: {
      '/config/': [
        {
          title: 'Configuration',
          collapsable: false,
          children: [
            '',
            'symfony-project'
          ]
        }
      ],
      '/php/': [
        {
          title: 'PHP',
          collapsable: false,
          children: [
              '',
              'syntax',
              'operators',
              'control-structures',
              'arrays',
              'functions',
              'oop',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
