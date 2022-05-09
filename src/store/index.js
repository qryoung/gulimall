import Vue from 'vue';
import Vuex from 'vuex';

// 引入仓库
import home from './home'
import search from './search'



Vue.use(Vuex)

/**
 *  state: 仓库,
    mutations: 修改state 的唯一手段,
    actions: 处理 action (书写自己的业务逻辑, 处理异步),
    getters: ** 计算属性 , 简化仓库数据 , 获取 仓库数据更方便
 */
// 对外暴露 store 类的一个实例
export default new Vuex.Store({
   
    modules: {
        home,
        search
    }
})