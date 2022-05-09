<template>
  <div id="app">
   <Header></Header>
   <router-view></router-view>
   <!-- 在 home search 显示 登录 注册 隐藏 -->
   <Footer v-show="$route.meta.show" ></Footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
     // vuex 发请求 获取数据 在App 中 只执行一次
    this.$store.dispatch("categoryList");
  },
}
</script>

<style>
</style>
