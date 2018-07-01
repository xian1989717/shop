<template>
  <div class="main">
    <myList :com-list="list" @buy-now="show"></myList>
    <!-- 遮罩 -->
    <div v-show="buyStatus" class="shade"></div>
    <!-- 购买操作栏 -->
    <div v-show="buyStatus" class="buy-style" style="height:120px;">
      <cartBar :com-surplus="data.surplus" @buy-Stauts="close"></cartBar>
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
      buyStatus: false
    };
  },
  components: {
    myList,
    cartBar
  },
  methods: {
    show(data) {
      this.buyStatus = data;
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
  bottom:30px;
  z-index: 90;
  width: 100%;
  height: 100%;
  background: #ccc;
  opacity: 0.5;
}
</style>

