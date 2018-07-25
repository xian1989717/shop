<template>
  <div class="main">
    <div class="title">
      <img src="" alt="">
      <p>
        <span>{{name}}</span>
        <span class="fr" @click="close">
          <img src="../../assets/close.png" alt="">
        </span>
      </p>
      <p>
        <span>价格:</span>
        <span>￥{{price|formatMoney}}</span>
      </p>
    </div>
    <div class="content">
      <div class="left">
        <div>
          <b>购买数量:</b>
        </div>
        <div>剩余:{{surplus}}</div>
      </div>
      <div class="right">
        <button @click="sub">-</button>
        <span>{{num}}</span>
        <button @click="add">+</button>
      </div>
    </div>
    <p>下一步</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNum: 1,
      surplus: this.comName.surplus ? this.comName.surplus : "",
      name: this.comName.name ? this.comName.name : "",
      price: this.comName.price ? this.comName.price : ""
    };
  },
  props: ["comSurplus", "comName"],
  watch: {
    comName: {
      handler(newName, oldName) {
        this.name = newName.name;
        this.price = newName.price;
        this.surplus = newName.surplus;
      },
      deep: true
    }
  },
  computed: {
    num: function() {
      return this.newNum;
    }
  },
  methods: {
    close() {
      this.$emit("buy-Stauts", false);
    },
    add() {
      if (this.newNum === this.surplus) {
        return;
      }
      this.newNum = this.newNum + 1;
    },
    sub() {
      if (this.newNum === 1) {
        return;
      }
      this.newNum = this.newNum - 1;
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  height: 110px;
  .title {
    border-bottom: 1px solid #ccc;
    padding: 0 5px;
    span {
      line-height: 21px;
      font-size: 12px;
    }
    span.fr {
      img {
        margin-top: 2px;
        width: 16px;
      }
    }
  }
  .content {
    position: relative;
    padding: 0 5px;
    .left {
      width: 60%;
      height: 40px;
      text-align: left;
      div:nth-child(2) {
        font-size: 12px;
      }
    }
    .right {
      position: absolute;
      top: 12px;
      right: 5px;
    }
  }
  > p {
    background: red;
    line-height: 30px;
    height: 30px;
    color: white;
    text-align: center;
  }
}
</style>

