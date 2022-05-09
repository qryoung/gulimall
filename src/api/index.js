// 所有 api 接口 统一管理

import requests from "./request";

//  /api/product/getBaseCategoryList    get 无参




export const reqCategoryList = () => { 
   return requests({ url: '/product/getBaseCategoryList', method: 'get' });
}

