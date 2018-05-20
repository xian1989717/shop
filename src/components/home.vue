<template>
  <div>
    <mt-search class="myHeight" v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
    <main>
      <div>{{meg}}</div>
      <ul>
         <li class="first_li" v-for="item in list">
           <div class="list_div_left">
             <img :src="item.img">
           </div>
           <div class="list_div_right">
            <div>{{item.name}}</div>
            <div>{{item.groupPrice}}</div>
            <div>{{item.signPrice}}</div>
           </div>
         </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search } from 'mint-ui'

Vue.component(Search.name, Search)
export default {
  data () {
    return {
      value: '',
      list: [
        {
          img: require('../assets/01.png'),
          name: '鹿听茶',
          groupPrice: 20.00,
          signPrice: 23.00
        },
        {
          img: require('../assets/01.png'),
          name: '鹿听茶',
          groupPrice: 20.00,
          signPrice: 23.00
        },
        {
          img: require('../assets/01.png'),
          name: '鹿听茶',
          groupPrice: 20.00,
          signPrice: 23.00
        }
      ]
    }
  }

}
</script>

<style lang="less" scoped>
.myHeight {
  height: auto;
}
.first_li {
  .list_div_left {
    width: 40%;
    display:inline-block;
  }
  .list_div_right {
    > div {
      text-align: left;
    }
  }
}
</style>
