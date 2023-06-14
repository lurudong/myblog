

import { defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
export default {
  base: process.env.NODE_ENV == "production" ? "/" : "/",
  head: [['link', { rel: 'icon', href: '/hero.png' }]],
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
        ]
      },
      {

        text: '程序员在线导航',
        link: 'https://mouday.github.io/hao123'
      }

    ],
  }),
  plugins: [

    activeHeaderLinksPlugin({
      // 配置项

      // headerLinkSelector: 'a.sidebar-item',
      // headerAnchorSelector: '.header-anchor'
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    // docsearchPlugin({
    //   appId: '1KV5ZOFV7K',
    //   apiKey: '8890b0fe2f8538765131e83503501356',
    //   indexName: 'nbcode'
    // }),
  ],
}