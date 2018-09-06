<template>
  <div>
    <mt-header fixed title="订单列表">
      <router-link to="/me" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="nav">
      <span :class="{'active':index === dom}" v-for="(item,index) in headerList" :key="item.id" @click="changeList(item.id,index)">{{item.name}}</span>
    </div>
    <div>
      <ul>
        <li>
          <p>
            <span>订单编号:1232141231313</span>
            <span>交易关闭</span>
          </p>
          <div class="content-warp clearfloat">
            <img class="fl" src="../assets/01.png" alt="">
            <div class="clearFloat">
              <p>
                <span>鹿听冬瓜荷叶茶60克</span>
                <span class="fr">￥23.00</span>
              </p>
              <span class="fr">X1</span>
            </div>

          </div>
          <p class="tr">合计:￥23.00</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Header } from "mint-ui";
Vue.component(Header.name, Header);
export default {
  data() {
    return {
      headerList: [
        {
          id: 0,
          name: "全部订单"
        },
        {
          id: 1,
          name: "代付款"
        },
        {
          id: 2,
          name: "代发货"
        },
        {
          id: 3,
          name: "已发货"
        },
        {
          id: 4,
          name: "已完成"
        }
      ],
      dom: 0
    };
  },
  created(){
    
  },
  methods: {
    changeList(id, index) {
      this.dom = index;
    }
  }
};
</script>

<style lang="less" scoped>
.nav {
  text-align: center;
  line-height: 40px;
  span {
    width: 20%;
    display: inline-block;
  }
}
.content-warp {
  background: #ccc;
  margin: 5px 0;
  padding: 5px;
  img {
    width: 100px;
  }
  div {
    margin-left: 100px;
  }
}
.active {
  border-bottom: 2px solid red;
}
</style>


