module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig:{
        search: false,
        sidebar: [
            {title:'主页',
            path:'/',sidebarDepth:0
            },
            {
                title: '微信小程序', 
                path: '/miniprogram/'
            },
            {
                title: '开放平台',
                path:'/openPlatform/',
                collapsable: false,
                children: [ 
                    '/openPlatform/i18n',
                 ]
            },
            {title:'wms系统',
                path:'/wms/',
                collapsable: false,
                children: [ 
                    '/wms/authority',
                    '/wms/i18n',
                    '/wms/pageGenerator',
                 ]
            },
            {title:'wsp系统',
            path:'/wsp/',
            collapsable: false,
            children: [ 
                '/wsp/dataBaseSync',
                '/wsp/i18nManagement',
                '/wsp/kpi',
                '/wsp/printConfig',
             ]
        },
        {title:'ewms系统',
        path:'/ewms/',
        collapsable: false,
        children: [ 
            '/ewms/echart',
            '/ewms/print'
         ]
    }
          ]
    }
  }