<template>
  <div>
    <mt-swipe :auto="4000" style="height:200px;">
      <mt-swipe-item><img src="../assets/swipe_01.jpg" alt="" style="width:100%;"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe_02.jpg" alt="" style="width:100%;"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe_03.jpg" alt="" style="width:100%;"></mt-swipe-item>
    </mt-swipe>
    <mt-search class='myHeight' v-model='value' cancel-text='取消' placeholder='搜索'></mt-search>
    <main>
      <ul class='myUl'>
        <li class='first_li' v-for='item in list' :key=item.id @click='toDetails(item.id)'>
          <div class='list_div_left fl'>
            <img :src='item.img'>
          </div>
          <div class='list_div_right'>
            <div style='margin:10px 0 10px 0'>{{item.name}}</div>
            <div>{{item.groupPrice|format}}</div>
            <div>{{item.signPrice|format}}</div>
          </div>
          <div class="buttonWrap">
            <div @click.stop="buyNow">立即购买</div>
          </div>
        </li>
      </ul>
    </main>
    <!-- 遮罩 -->
    <div v-show="buyStatus" class="shade"></div>
    <!-- 购买操作栏 -->
    <div v-show="buyStatus" class="buy-style">
      <cartBar :com-surplus="data.surplus" @buy-Stauts="close"></cartBar>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Search, Button } from "mint-ui";
Vue.component(Search.name, Search);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import cartBar from "./public/cartBar.vue";

export default {
  data() {
    return {
      value: "",
      data: {
        surplus: 955
      },
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
      ],
      buyStatus: false
    };
  },
  methods: {
    toDetails(id) {
      this.$router.push({
        path: "/details",
        query: {
          comId: id
        }
      });
    },
    buyNow() {
      this.buyStatus = true;
    },
    close(data) {
      this.buyStatus = data;
    }
  },
  filters: {
    format: function(value) {
      return value + ".00";
    }
  },
  components: {
    cartBar
  }
};
</script>

<style lang='less' scoped>
.myHeight {
  height: auto;
}
.myUl {
  text-align: left;
  .first_li {
    overflow: hidden;
    position: relative;
    .list_div_left {
      display: inline-block;
    }
    .list_div_right {
      display: inline-block;
      > div {
        text-align: left;
      }
    }
    .buttonWrap {
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
  }
}
</style>
