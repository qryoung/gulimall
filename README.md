# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

node_modules 项目依赖
public 文件夹 : 静态页面,静态资源, 打包时 原封不动打包到 disk 文件夹

src : 源代码
    assets: 静态 资源(一般放置 多个静态资源), webpack 打包时 静态资源当做模块 打包到 js
    components: 全局组件

    App.vue 唯一的根组件

    main.js 程序入口文件

    babel.config.js : 配置文件 (babel相关)  es6 => es5

    package.json    maven   项目的身份证(依赖相关)
    package-lock.json: 缓存文件


    README.md   说明性文件



    -- 浏览器自动打开

    -- eslint 校验关闭


    src -- 配置别名


    {
  "compilerOptions": {
     "target": "es2017",
     "allowSyntheticDefaultImports": false,
      "baseUrl": "./",
      "paths": {
          "@/*": ["src/*"]
     }
  },
  "exclude": ["node_modules", "dist"]
}

    @ == src 在 src 文件夹下

    路由 KV 键值对  (路径和组件)

    上中下  结构
    拆分路由

    路由组件: Home 首页路由组件 , search 组件 

    非路由 :
        不变 => 路由
        变化 => 路由

        header (首页和搜索页),
        footer(首页,搜索页有, ) 
        login 登录路由
        register 注册路由(无 foot)


    // $route 路由信息
  //$router 编程跳转

    params: 路径
    query ; 不属于路径  /home?k=v&k=v
    编程式 导航 多次点击 会报错
    声明式不会
    push 方法 
    function puth(){
        returm new Promise((suss,err)=>{
            
        })
    }





  vuex 
  state

    三级联动组件的路由 跳转 与传递参数


    (1) router-link to    实例过多 卡顿现象
    (2) puth | replace






