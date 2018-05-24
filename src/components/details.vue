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
    <mt-tabbar fixed>
      <mt-tab-item>
				客服
      </mt-tab-item>
      <mt-tab-item>
				购物车
      </mt-tab-item>
      <mt-tab-item>
				加入购物车
      </mt-tab-item>
			<mt-tab-item>
				立即购买
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
			}
		}
	},
	events : {
		confirm () {
		},
		cancel (){
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
footer {
  position: fixed;
  bottom: 0px;
  z-index: 100px;
}
</style>
