// home
import { reqCategoryList } from "@/api";

const actions = {
   // 通过 api 里面的函数 调用 向服务器 发送请求 ,  获取服务器数据
// export const reqCategoryList = () => {
//     return requests({ url: '/product/getBaseCategoryList', method: 'get' });
//  }
    
    async categoryList({commit}) {
        let result =await reqCategoryList() 
        if (result.code == 200) { 
            commit("CATEGORYLIST",result.data)
        }
    }   
    
 

    
};
const mutations = { 
    CATEGORYLIST(state,categoryList) { 
        state.categoryList = categoryList;
    }
}; 
const state = { 
    // state 中的默认数据 不能乱写 根据接口的返回值 初始化
    categoryList:[]
 };

const getters = { };

export default {
    actions,
    mutations,
    state,
    getters
}