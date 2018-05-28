<template>
	<div>
		<mt-header class="nav" fixed title="商品详情">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>  
		<div class="slider">轮播图</div>
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
        <span class="my-span" @click="graphicDetails">图文详情</span><span class="my-span" @click="graphicDetails">评价详情</span>
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
    <mt-tabbar fixed>
      <mt-tab-item>
				客服
      </mt-tab-item>
      <mt-tab-item>
				购物车
      </mt-tab-item>
      <mt-tab-item >
				<div @click="addCart">加入购物车</div>
      </mt-tab-item>
			<mt-tab-item>
				<div @click="addCart">立即购买</div>
      </mt-tab-item>
    </mt-tabbar>
	</div>
</template>

<script>
import Vue from "vue";
import cartBar from './public/cartBar.vue';
import { Tabbar, TabItem, Header,Button } from "mint-ui";
Vue.component(Button.name, Button);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
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
    close(data){
      this.buyStatus = data;
    },
    graphicDetails() {
      this.graphicDetailsStatus = !this.graphicDetailsStatus;
    }
  },
  components:{
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
    width: 50%;
  }
}

footer {
  position: fixed;
  bottom: 0px;
  z-index: 100;
}
</style>
