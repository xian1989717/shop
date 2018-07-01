<template>
  <div>
    <mt-header class="nav" fixed title="myShop"></mt-header>
    <router-view></router-view>
    <footer class="footer">
      <router-link to="./home">首页</router-link>
      <router-link to="./classify">分类</router-link>
      <router-link to="./cart">购物车</router-link>
      <router-link to="./me">我的</router-link>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabItem, Header } from "mint-ui";
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);

export default {
  name: "App",
  data() {
    return {
      selected: "首页"
    };
  },
  methods: {
    test() {
      alert("11111");
    }
  },
  watch: {
    selected: function(val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
    }
  }
};
</script>

<style <style lang="less" scoped>
.nav {
  z-index: 100px;
}
.active {
  background: red;
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0px;
  background: white;
  z-index:100;
  > a {
    display: inline-block;
    width: 24%;
    text-align: center;
    color: black;
    line-height: 30px;
  }
}
.router-link-active {
  text-decoration: none;
}
</style>

