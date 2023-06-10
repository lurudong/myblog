

import { defaultTheme } from 'vuepress'

export default {
    base: process.env.NODE_ENV == "production" ? "/" : "/",
    head: [['link', { rel: 'icon', href: '/hero.png' }]],
    theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      }
   
    ],
  }),
}