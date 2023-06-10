

import { defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'

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
        text: 'vuepress',
        link: '/myvuepress/自定义vue组件.md',
      },
      {
        text: '测试',
        link: '/test.md',
      },
      {

         text:'程序员在线导航',
         link:'https://mouday.github.io/hao123'
      }
   
    ],
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
}