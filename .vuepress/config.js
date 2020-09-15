module.exports = {
    title: '项目介绍',
    base: '/projectIntroduction/',
    themeConfig: {
        search: false,
        sidebar: [
            {
                title: '概述',
                path: '/'
            },
            {
                title: '绩效项目',
                path: '/kpi',
                collapsable: false
            },
            {
                title: '国际化',
                path: '/i18n',
                collapsable: false
            },
            {
                title: '微信提货小程序',
                path: '/miniprogram'
            },
            {
                title: '代码模版生成',
                path: '/pageGenerator',
                collapsable: false
            },
            {
                title: '打印项目',
                path: '/print',
                collapsable: false
            },
            {
                title: '权限控制',
                path: '/authority'
            }
        ]
    }
}