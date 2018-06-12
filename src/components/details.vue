<template>
  <div>
    <mt-header class="nav" fixed title="商品详情">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-swipe :auto="4000" style="height:200px;">
      <mt-swipe-item><img src="../assets/swipe_01.jpg" alt="" style="width:100%;"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe_02.jpg" alt="" style="width:100%;"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe_03.jpg" alt="" style="width:100%;"></mt-swipe-item>
    </mt-swipe>
    <!-- 主要内容 -->
    <main>
      <p>{{data.name}}</p>
      <p class="color">{{data.price}}</p>
      <p class="transverse-line">{{data.oldPrice}}</p>
      <div class="transverse-line">
        <span style="float:left;">运费：{{data.transportation}}</span>
        <span>剩余：{{data.inventory}}</span>
        <span style="float:right;">销量：{{data.sales}}</span>
      </div>
      <div class="">
        <span class="my-span" @click="graphicDetails(1)">图文详情</span>
        <span class="my-span" @click="graphicDetails(2)">评价详情</span>
        <div v-show="graphicDetailsStatus">图片详情</div>
        <div v-show="!graphicDetailsStatus">评价详情</div>
      </div>
    </main>
    <!-- 遮罩 -->
    <div v-show="buyStatus" class="shade"></div>
    <!-- 购买操作栏 -->
    <div v-show="buyStatus" class="buy-style">
      <cartBar :com-surplus="data.surplus" @buy-Stauts="close"></cartBar>
    </div>
    <!-- 底部导航 -->
    <footer>
      <div class="service">客服</div>
      <div class="shopping">购物车</div>
      <div class="add-cart" @click="addCart">加入购物车</div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import cartBar from "./public/cartBar.vue";
import { Tabbar, TabItem, Header, Button, Swipe, SwipeItem } from "mint-ui";
Vue.component(Button.name, Button);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
export default {
  data() {
    return {
      data: {
        name: "鹿听冬瓜荷叶茶 60克",
        price: 23.0,
        oldPrice: 46,
        transportation: "￥0.00-15.00",
        inventory: 955,
        sales: 45,
        surplus: 955
      },
      num: 1,
      buyStatus: false,
      graphicDetailsStatus: true
    };
  },
  events: {
    confirm() {},
    cancel() {}
  },
  methods: {
    addCart() {
      this.buyStatus = !this.buyStauts;
    },
    close(data) {
      this.buyStatus = data;
    },
    graphicDetails(id) {
      if (id === 1) {
        this.graphicDetailsStatus = true;
      } else {
        this.graphicDetailsStatus = false;
      }
    }
  },
  components: {
    cartBar
  }
};
</script>

<style lang='less' scoped>
.slider {
  height: 150px;
  border: 1px solid #ccc;
}
main {
  padding: 10px;
  .color {
    color: red;
  }
  p {
    text-align: left;
    margin: 10px 0;
  }
  .transverse-line {
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }
  .my-span {
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    width: 48%;
  }
}

footer {
  position: fixed;
  bottom: 0px;
  z-index: 100;
  width: 100%;
  div {
    display: inline-block;
    text-align: center;
    line-height: 32px;
  }
  .service {
    width: 20%;
  }
  .shopping {
    width: 30%;
  }
  .add-cart {
    width: 47%;
    color: white;
    background: red;
  }
}
</style>
