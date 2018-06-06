<template>
  <div>
    <div class="account">
      Error 404
    </div>
    <div class="order-wrap">
      <div class="order-header clearfloat">
        <span class="fl">我的订单</span>
        <span class="fr" @click="toOrderList(5)">查看全部订单</span>
      </div>
      <div class="order-content">
        <span v-for="item in list" :key="item.id" @click="toOrderList(item.id)">
          <img :src="item.img">
          <p>{{item.name}}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 0,
          name: "代付款",
          img: require("../assets/me-01.png")
        },
        {
          id: 1,
          name: "代发货",
          img: require("../assets/me-02.png")
        },
        {
          id: 2,
          name: "已发货",
          img: require("../assets/me-03.png")
        },
        {
          id: 3,
          name: "已完成",
          img: require("../assets/me-04.png")
        }
      ]
    };
  },
  methods: {
    toOrderList(id) {
      this.$router.push({
        path: "/orderList",
        query: {
          comId: id
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.account {
  height: 200px;
  line-height: 200px;
  text-align: center;
  width: 100%;
}
.order-wrap {
  .order-header {
    line-height: 30px;
    border-bottom: 1px solid #ccc;
    padding: 0 5px;
  }
  .order-content {
    margin-top: 10px;
    span {
      text-align: center;
      display: inline-block;
      width: 24%;
      line-height: 30px;
      img {
        width: 35px;
      }
    }
  }
}
</style>
