
 # 自定义vue组件
 本文讲述如何在 vuepress 站点中自定义 vue 组件。我们可以在 md 文档中插入自定义组件，来实现各种页面效果。关于如何定义 vue 组件，请查阅 vuejs 官方文档。
 ## 根据组件文件或目录自动注册 Vue 组件

   ### 安装插件
   ```sh
   npm i -D @vuepress/plugin-register-components@next
   ```
   ### 配置插件
   在config.{js/ts} 中配置修改如下：
   ``` js
   import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

   import { path } from '@vuepress/utils'  
  plugins: [
    registerComponentsPlugin({
      // 配置项 
      // 自动查找
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],

//https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html#componentsdir
   ```
### 客户端配置的使用方法
以前叫enhanceApp.js

在项目.vuepress下创建client.{js/ts}文件

``` js
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }){},
  setup(){},
  layouts: {},
  rootComponents: [],
})
```
### 创建组件
 
 ``` path
 在 .vuepress/components/
 ```
 下注册自定义组件
 Bar.vue

### 使用组件
 在.md文件中假如要使用组件的话，就需要
 ``` vue
 <Bar></Bar>
 ```

 
