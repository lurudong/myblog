

import { defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defineUserConfig } from 'vuepress'
export default  defineUserConfig({
  // base: process.env.NODE_ENV == "production" ? "/" : "/",
  // head: [['link', { rel: 'icon', href: '/hero.png' }]],
  // head: [
  //   [
  //     "script",
  //     {
  //       crossorigin:"anonymous",
  //       async: true,
  //       src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5040465088183611"
  //     }
  //   ]
  // ],

  theme: defaultTheme({
  
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
   
      {
        text: '后端',
        link: '/dotnet/design-pattern.md',
      },
      {
        text: '前端',
        link: '/dotnet/design-pattern.md',
      },
      {
        text: 'Linux运维/工具',
        children: [
          {
            text: 'MySql',
            children:[
              {
                text:'MySql的安装',
                link: '/liunx/mysql/Ubuntu 安装MySQL与配置及运程登录.md'
              }
             
            ]
          },
          {
            text: 'Docker',
            children:[
              {
                text:'Ubuntu安装Docker',
                link: '/liunx/docker/Ubuntu下安装Docker.md'
                
              },
              {
                text:'Docker安装Redis',
                link: '/liunx/docker/Dokcer下安装Redis容器.md'
                
              }
             
            ]
          },
        ]
      },
      {

        text: '程序员在线导航',
        link: 'https://mouday.github.io/hao123'
      }

    ],
  }),
 
  plugins: [

    docsearchPlugin({
      appId: '1KV5ZOFV7K',
      apiKey: '8890b0fe2f8538765131e83503501356',
      indexName: 'nbcode',
       searchParameters: {
        facetFilters: ['tags:v2'],
      },
      locales: {
        '/': {
          lang: 'zh-CN',
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      }
    }),
    // activeHeaderLinksPlugin({
    //   // 配置项

    //   // headerLinkSelector: 'a.sidebar-item',
    //   // headerAnchorSelector: '.header-anchor'
    // }),
    // registerComponentsPlugin({
    //   componentsDir: path.resolve(__dirname, './components'),
    // }),
 

  ],

  
})