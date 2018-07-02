<template>
  <div>
    <ul class='myUl'>
      <li class='first_li' v-for='item in list' :key=item.id @click='toDetails(item.id)'>
        <div class='list_div_left fl'>
          <img :src='item.img'>
        </div>
        <div class='list_div_right'>
          <div>{{item.name}}</div>
          <p>
            <span class="price">￥{{item.signPrice|formatMoney}}</span>
            <img class="fr" @click.stop="buyNow(item.id)" src="../../assets/cart_title.png">
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: this.comList,
      from: this.comFrom
    };
  },
  props: ["comList", "comFrom"],
  methods: {
    toDetails(id) {
      this.$router.push({
        path: "/details",
        query: {
          from: this.from,
          comId: id
        }
      });
    },
    buyNow(id) {
      this.$emit("buy-now", { status: true, id: id });
    }
  }
};
</script>

<style lang="less" scoped>
.myUl {
  text-align: left;
  margin: 0 10px;
  .first_li {
    overflow: hidden;
    position: relative;
    background: white;
    margin-bottom: 5px;
    padding-right: 5px;
    border: 1px solid #ccc;
    .list_div_right {
      margin: 0 0 0 125px;
      > div {
        text-align: left;
        margin: 10px 0 50px 5px;
      }
      > p {
        .price {
          margin-left: 5px;
          color: red;
        }
        img {
          width: 20px;
        }
      }
    }
    .list_div_left {
      height: 106px;
    }
    .buttonWrap {
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
  }
}
</style>

