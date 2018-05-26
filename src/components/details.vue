<template>
	<div>
		<mt-header class="nav" fixed title="商品详情"></mt-header>  
		<div class="slider">轮播图</div>
		<main>
			<p>{{data.name}}</p>
			<p class="color">{{data.price}}</p>
			<p class="transverse-line">{{data.oldPrice}}</p>
			<div class="transverse-line">
				<span style="float:left;">运费：{{data.transportation}}</span>
				<span>剩余：{{data.inventory}}</span>
				<span style="float:right;">销量：{{data.sales}}</span>
			</div>
		</main>
		<div v-show="buyStatus" class="shade"></div>
		<div v-show="buyStatus" class="buy-style">
			<i @click="close">X</i>
			<div class="left">
				<div>购买数量:</div>
				<div>剩余{{data.surplus}}</div>
			</div>
			<div class="right">
				<button>-</button>
				<span>{{num}}</span>
				<button>+</button>
			</div>
			<p>下一步</p>
		</div>
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
import Vue from 'vue';
import { Tabbar, TabItem, Header } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
export default {
  data() {
		return {
			data:{
				name:'鹿听冬瓜荷叶茶 60克',
				price:23.00,
				oldPrice:46,
				transportation:'￥0.00-15.00',
				inventory:955,
				sales:45,
				surplus:955,
			},
			num:1,
			buyStatus:false,
		}
	},
	events : {
		confirm () {
		},
		cancel (){
		}
	},
	methods:{
		addCart(){
			this.buyStatus = !this.buyStauts;
			console.log("11111");
		},
		close(){
			this.buyStatus = !this.buyStatus;
		}
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
}
.buy-style {
  height: 90px;
  position: fixed;
  bottom: 0;
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
.shade {
  position: fixed;
  top: 0;
  z-index: 90px;
  width: 100%;
  height: 100%;
  background: #ccc;
  opacity: 0.5;
}

footer {
  position: fixed;
  bottom: 0px;
  z-index: 100;
}
</style>
