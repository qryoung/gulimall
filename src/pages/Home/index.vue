<template>
  <div>
      <!-- 全局组件 无需 import TypeNav  -->
      <TypeNav></TypeNav>
      <ListContainer></ListContainer>
      <Recommend></Recommend>
      <Rank></Rank>
      <Like></Like>
      <Floor></Floor>
      <Floor></Floor>
      <Brand></Brand>
      <button @click="add">点击我加 1</button>
      <button>仓库数据 {{count}}</button>
      <button>点我 减一</button>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from'@/pages/Home/Recommend';
import Rank from'@/pages/Home/Rank';
import Like from'@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand'
import {mapState,mapActions} from 'vuex'
export default {
    name:'Home',
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    computed: {
        ...mapState(['count'])
    },
    methods: {
        // add(){
        //     // 派发 act
        //     this.$store.dispatch('add');
        // },
        ...mapActions(['add'])
    },

}
</script>

<style>

</style>