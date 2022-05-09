// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'


let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重新 方法 去除错误提示
VueRouter.prototype.push = function (location, resolve, reject) { 
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else { 
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) { 
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else { 
        originReplace.call(this, location, () => { }, () => { })
    }
}







export default new VueRouter({
    
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { show: true }
        },
        {
            // :keyword 占位  ? 代表可传可不传 如 正则 如果传递的是空串 使用 undefined 解决
            path: '/search/:keyword?',
            // path: '/search',
            component: Search,
            meta: { show: true },
            name: 'search',
            // 路由组件传参   bool   只能 params
            props:true,
            //  props: {a:1,b:2}    // 额外传参 对象写法 
            // 函数写法
            props:($route)=>{
            return {keyword:$route.params.keyword,k:$route.query.k}
            }
            // props:($route)=>{
            //     return {keyword:$route.query.keyword}
            //     }
          
        },
        {
            path: '/login',
            component: Login,
            meta: {show:false}
        },
        {
            path: '/register',
            component: Register,
            meta: {show:false}
        },
        // 重定向   首次访问跳转
        {
            path: '*',
            redirect:'/home'
        }
    ]


})