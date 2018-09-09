<template>
  <div>
    <mt-header class="nav" fixed title="代付款订单">
      <router-link to="/cart" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 地址栏 -->
    <div>

    </div>
    <!-- 商品栏 -->
    <div>
      <ul>
        <li v-for="item in list" :key='item.id'>
          <img :src="baseUrl+item.commodityPic">
          <p>{{item.commodityName}}</p>
          <div class="priceWrap">
            <span>￥{{item.commodityPrice | formatMoney}}</span>
            <span>X{{item.count}}</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 其它信息 -->
    <div>
      <p>
                                      <span>配送方式</span>
                                      <span>商家配送</span>
      </p>
      <p>
        <span>合计</span>
        <span>{{totalPrice}}</span>
      </p>
    </div>
    <div @click="payment" class="foot">
      <p><span>付款</span></p>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  data() {
    return {
      list: [],
      totalPrice: 0
    };
  },
  created() {
    this.list = this.$route.query.list;
    this.list.forEach((v, i) => {
      this.totalPrice += v.commodityPrice;
    });
  },
  methods: {
    payment() {
      let data = {
        name: "张三",
        phone: 18092564370,
        address: "石家庄，第三大道",
        list: this.list
      };
      api.paymentAdd(data).then(data => {
        console.log(data);
      });
    }
  }
};
</script>

<style scoped lang="less">
.priceWrap {
  margin-top: 60px;
  span:nth-child(2) {
    float: right;
    margin-right: 10px;
  }
}
.foot {
  position: fixed;
  bottom: 0px;
  background: #ccc;
  width: 100%;
  > p {
    line-height: 30px;
    text-align: right;
    > span {
      margin-right: 10px;
    }
  }
}
</style>

