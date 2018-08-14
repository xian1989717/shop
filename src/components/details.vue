<template>
  <div>
    <mt-header class="nav" fixed title="商品详情">
      <router-link v-show="from ==='commodityList'" to="/CommodityList" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link v-show="from ==='home'" to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-swipe :auto="4000" style="height:200px;">
      <mt-swipe-item v-for="item in data.commImages" :key="item.id">
        <img :src="item.url" alt="" style="width:100%;">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 主要内容 -->
    <main>
      <p>{{data.name}} {{data.ruleVal}}</p>
      <p class="color">
        <span>价格:</span>
        <span>￥{{data.price | formatMoney}}</span>
      </p>
      <p class="transverse-line">
        <span>回购价:</span>
        <span>￥{{data.buyBackPrice | formatMoney}}</span>
      </p>
      <div class="transverse-line">
        <span class="fl">运费：{{data.freight | formatMoney}}</span>
        <span class="ml5" style="margin-left:50px;">剩余：{{data.inventory}}</span>
        <span class="fr">销量：{{data.sales}}</span>
      </div>
      <div class="">
        <!-- <span class="my-span" @click="graphicDetails(1)">图文详情</span> -->
        <!-- <span class="my-span" @click="graphicDetails(2)">评价详情</span> -->
        <div v-show="graphicDetailsStatus">{{data.description}}</div>
        <div v-show="!graphicDetailsStatus">评价详情</div>
      </div>
    </main>
    <!-- 遮罩 -->
    <div v-show="buyStatus" class="shade"></div>
    <!-- 购买操作栏 -->
    <div v-show="buyStatus" class="buy-style">
      <cartBar :com-name="data" :com-surplus="data.surplus" @buy-Stauts="close"></cartBar>
    </div>
    <!-- 底部导航 -->
    <footer>
      <div class="service">客服</div>
      <div class="shopping" @click="toCart">购物车</div>
      <div class="add-cart" @click="addCart">加入购物车</div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import api from "../api/api";
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
      data: {},
      num: 1,
      buyStatus: false,
      graphicDetailsStatus: true,
      from: "",
      id: ""
    };
  },
  events: {
    confirm() {},
    cancel() {}
  },
  created() {
    this.from = this.$route.query.from;
    this.id = this.$route.query.comId;
    api.getComDetails(this.id).then(res => {
      console.log(res.data.data);
      this.data = res.data.data;
    });
  },
  methods: {
    toCart() {
      this.$router.push({
        path: "/cart"
      });
    },
    addCart() {
      this.buyStatus = !this.buyStauts;
    },
    close(data) {
      this.buyStatus = data;
    }
    // graphicDetails(id) {
    //   if (id === 1) {
    //     this.graphicDetailsStatus = true;
    //   } else {
    //     this.graphicDetailsStatus = false;
    //   }
    // }
  },
  components: {
    cartBar
  }
};
</script>

<style lang='less' scoped>
.shade {
  position: fixed;
  bottom: 30px;
  z-index: 90;
  width: 100%;
  height: 100%;
  background: #ccc;
  opacity: 0.5;
}
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
    width: 100%;
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
    line-height: 30px;
  }
  .service {
    width: 20%;
  }
  .shopping {
    width: 30%;
  }
  .add-cart {
    width: 47.4%;
    color: white;
    background: red;
  }
}
.buy-style {
  height: 131px;
  position: fixed;
  bottom: 30px;
  width: 100%;
  z-index: 100;
  background: white;
  i {
    border: 1px solid black;
    border-radius: 25px;
    position: absolute;
    right: 5px;
    top: 5px;
    height: 12px;
    font-size: 6px;
  }
  .left {
    width: 60%;
    height: 60px;
    text-align: left;
  }
  .right {
    position: absolute;
    top: 25px;
    right: 5px;
  }
  p {
    background: red;
    line-height: 30px;
    height: 30px;
    color: white;
  }
}
</style>
