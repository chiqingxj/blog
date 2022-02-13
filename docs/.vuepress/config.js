module.exports = {
  title: 'chiqing',
  description: 'chiqing\'s blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Front End', 
        link: '/front-end/', 
        items: [
          {
            text: 'HTML',
            link: '/front-end/html/'
          },
          {
            text: 'CSS',
            link: '/front-end/css/'
          },
          {
            text: 'Javascript',
            link: '/front-end/javascript/'
          },
          {
            text: 'Framework',
            link: '/front-end/framework/'
          },
          {
            text: 'Build Tools',
            link: '/front-end/build-tools/'
          }
        ]
      },
      {
        text: 'Interview',
        link: '/interview/'
      },
      { text: 'Github', link: 'https://github.com/chiqingxj' },
    ],
    sidebar: {
      '/front-end/html/': [
        '',
        'head'
      ],
      '/front-end/framework/': [
        [
          '',
          '介绍'
        ],
        {
          title: 'Vue 3',
          path: '/front-end/framework/vue3/',   
          collapsable: false, 
          sidebarDepth: 1, 
          children: [
            '/front-end/framework/vue3/grammar'
          ]
        }
      ],
    }
  },
  markdown: {
    lineNumbers: true
  }
};
