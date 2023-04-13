import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/inertia-study/",
    title: "inertia 学习",
    description: "inertia 学习记录",
    lastUpdated: true,
    themeConfig: {
        logo: "",
        siteTitle: "inertia 学习",
        outline: {
            label: "章节导航",
            level: 'deep',
        },
        lastUpdatedText: "最后更新时间",
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: "https://github.com/curder/inertia-study/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/inertia-study'}
        ],
        nav: nav(),
        sidebar: {
            "/guide/install": sidebarInstall(),
        }
    }
});


function nav()
{
    return [
        {text: '基础', link: '/guide/install/server-side', activeMatch: '/guide/install'},
    ];
}

function sidebarInstall() {
    return [
        {
            text: "",
            // collapsible: true,
            // collapsed: false,
            items: [
                {text: "服务端设置", link: "/guide/install/server-side"},
                {text: "客户端设置", link: "/guide/install/client-side"},
            ]
        },
    ];
}