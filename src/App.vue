<template>
  <div id="app">
    <mt-header class="nav" fixed title="myShop"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="tab1">
        <img slot="icon" src="./assets/cart.png">
        <router-link to="./home">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="./assets/cart.png">
        <router-link to="./cart">购物车</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="./assets/cart.png">
        <router-link to="./me">我的</router-link>
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
  name: 'App',
  data () {
    return {
      selected: '首页'
    };
  },
  methods: {
    test () {
      alert('11111');
    }
  },
  watch: {
    selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  z-index: 100px;
}
</style>
