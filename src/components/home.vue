<template>
  <div>
    <mt-search class="myHeight" v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
    <main>
      <div>{{meg}}</div>
      <ul class="myUl">
         <li class="first_li" v-for="item in list" @click="toTest(item.id)">
           <div class="list_div_left">
             <img :src="item.img">
           </div>
           <div class="list_div_right">
            <div style="margin:10px 0 10px 0">{{item.name}}</div>
            <div>{{item.groupPrice}}</div>
            <div>{{item.signPrice}}</div>
           </div>
         </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "mint-ui";

Vue.component(Search.name, Search);
export default {
  data() {
    return {
      value: "",
      list: [
        {
          id: 1,
          img: require("../assets/01.png"),
          name: "鹿听茶",
          groupPrice: 20.0,
          signPrice: 23.0
        },
        {
          id: 2,
          img: require("../assets/01.png"),
          name: "鹿听茶",
          groupPrice: 20.0,
          signPrice: 23.0
        },
        {
          id: 3,
          img: require("../assets/01.png"),
          name: "鹿听茶",
          groupPrice: 20.0,
          signPrice: 23.0
        }
      ]
    };
  },
  methods: {
    toTest(id) {
      console.log(id);
    }
  }
};
</script>

<style lang="less" scoped>
.myHeight {
  height: auto;
}
.myUl {
  text-align: left;
  .first_li {
    overflow: hidden;
    .list_div_left {
      display: inline-block;
    }
    .list_div_right {
      display: inline-block;
      > div {
        text-align: left;
      }
    }
  }
}
</style>
