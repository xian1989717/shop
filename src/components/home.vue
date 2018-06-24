<template>
  <div style="background:#CAE1FF">
    <mt-swipe :auto="4000" style="height:200px;">
      <mt-swipe-item><img src="../assets/swipe_01.jpg" alt="" style="width:100%;"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe_02.jpg" alt="" style="width:100%;"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe_03.jpg" alt="" style="width:100%;"></mt-swipe-item>
    </mt-swipe>
    <mt-search class='myHeight' v-model='value' cancel-text='取消' placeholder='搜索'></mt-search>
    <main>
      <ul class='myUl'>
        <li class='first_li' v-for='item in list' :key=item.id @click='toDetails(item.id)'>
          <div class='list_div_left fl'>
            <img :src='item.img'>
          </div>
          <div class='list_div_right'>
            <div>{{item.name}}</div>
            <p>
              <span class="price">￥{{item.groupPrice|formatMoney}}</span>
              <img class="fr" @click.stop="buyNow(item.id)" src="../assets/cart_title.png" alt="">
            </p>
          </div>
        </li>
      </ul>
      <div style="height:55px;"></div>
    </main>
    <!-- 遮罩 -->
    <div v-show="buyStatus" class="shade"></div>
    <!-- 购买操作栏 -->
    <div v-show="buyStatus" class="buy-style">
      <cartBar :com-name="listName" :com-surplus="data.surplus" @buy-Stauts="close"></cartBar>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Search, Button } from "mint-ui";
Vue.component(Search.name, Search);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import cartBar from "./public/cartBar.vue";

export default {
  data() {
    return {
      value: "",
      data: {
        surplus: 955
      },
      list: [
        {
          id: 0,
          img: require("../assets/01.png"),
          name: "鹿听茶",
          groupPrice: 20.0,
          signPrice: 23.0
        },
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
        }
      ],
      buyStatus: false,
      listName: ""
    };
  },
  methods: {
    toDetails(id) {
      this.$router.push({
        path: "/details",
        query: {
          comId: id
        }
      });
    },
    buyNow(id) {
      this.listName = this.list[id].name;
      this.buyStatus = true;
    },
    close(data) {
      this.buyStatus = data;
    }
  },
  components: {
    cartBar
  }
};
</script>

<style lang='less' scoped>
.myHeight {
  height: auto;
  margin: 5px 10px;
}
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
        img{
          width:20px;
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
