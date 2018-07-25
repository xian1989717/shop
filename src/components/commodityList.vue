<template>
  <div class="main">
    <myList com-from="commodityList" :com-list="list" @buy-now="show"></myList>
    <!-- 遮罩 -->
    <div v-show="buyStatus" class="shade"></div>
    <!-- 购买操作栏 -->
    <div v-show="buyStatus" class="buy-style">
      <cartBar :com-name="listName" @buy-Stauts="close"></cartBar>
    </div>
  </div>
</template>

<script>
import myList from "./public/list.vue";
import cartBar from "./public/cartBar.vue";
import api from "../api/api";
export default {
  data() {
    return {
      list: [],
      buyStatus: false,
      listName: {
        name: "",
        price: "",
        surplus: ""
      }
    };
  },
  components: {
    myList,
    cartBar
  },
  created() {
    //获取商品列表
    api.getCommClassify(this.$route.query.comId).then(res => {
      console.log(res.data.data);
      this.list = res.data.data;
    });
  },
  methods: {
    show(data) {
      this.buyStatus = data;
      this.listName.name = this.list[data.id].name;
      this.listName.price = this.list[data.id].signPrice;
      this.listName.surplus = this.list[data.id].surplus;
    },
    close(data) {
      this.buyStatus = data;
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  padding-top: 10px;
}
.shade {
  position: fixed;
  bottom: 30px;
  z-index: 90;
  width: 100%;
  height: 100%;
  background: #ccc;
  opacity: 0.5;
}
.buy-style {
  height: 140px;
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

