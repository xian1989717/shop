<template>
  <div class="main">
   
    <div class="title">
      <img src="" alt="">
      <p>
        <span>鹿听冬瓜荷叶茶 60克</span>
        <i :style="{backgroundImage:'url('+require('../../assets/close.png')+')'}" class="close" @click="close"></i>
      </p>
      <p>￥24.00</p>
    </div>
    <div class="content">
      <div class="left">
        <div>购买数量:</div>
        <div>剩余{{surplus}}</div>
      </div>
      <div class="right">
        <button>-</button>
        <span>{{num}}</span>
        <button>+</button>
      </div>
    </div>
   
    <p>下一步</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      surplus: this.comSurplus
    };
  },
  props: ["comSurplus"],
  methods: {
    close() {
      this.$emit("buy-Stauts", false);
    }
  }
};
</script>

<style lang="less" scoped>
.close {
  display:inline-block;
  width: 15px;
  height: 15px;
}

.main {
  padding: 5px 5px 0 5px;
  height: 195px;
  .title {
    border-bottom: 1px solid #ccc;
  }
  .content {
    position: relative;
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
  }

  > p {
    background: red;
    line-height: 30px;
    height: 30px;
    color: white;
  }
}
</style>

