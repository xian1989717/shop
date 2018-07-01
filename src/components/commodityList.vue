<template>
  <div class="main">
    <myList com-from="commodityList" :com-list="list" @buy-now="show"></myList>
    <!-- 遮罩 -->
    <div v-show="buyStatus" class="shade"></div>
    <!-- 购买操作栏 -->
    <div v-show="buyStatus" class="buy-style">
      <cartBar :com-name="listName" :com-surplus="data.surplus" @buy-Stauts="close"></cartBar>
    </div>
  </div>
</template>

<script>
import myList from "./public/list.vue";
import cartBar from "./public/cartBar.vue";

export default {
  data() {
    return {
      list: [
        {
          id: 1,
          img: require("../assets/01.png"),
          name: "鹿听茶",
          groupPrice: 20.0,
          signPrice: 23.0
        },
        {
          id: 2,
          img: require("../assets/01.png"),
          name: "鹿听茶",
          groupPrice: 20.0,
          signPrice: 23.0
        },
        {
          id: 3,
          img: require("../assets/01.png"),
          name: "鹿听茶",
          groupPrice: 20.0,
          signPrice: 23.0
        }
      ],
      data: {
        surplus: 996
      },
      buyStatus: false,
      listName: ""
    };
  },
  components: {
    myList,
    cartBar
  },
  methods: {
    show(data) {
      this.buyStatus = data;
      this.listName = this.list[data.id].name;
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

