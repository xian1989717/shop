<template>
  <div style="background:#CAE1FF">
    <mt-swipe v-show="isSearch" :auto="4000" style="height:200px;">
      <mt-swipe-item><img src="../assets/swipe_01.jpg" alt="" style="width:100%;"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe_02.jpg" alt="" style="width:100%;"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe_03.jpg" alt="" style="width:100%;"></mt-swipe-item>
    </mt-swipe>
    <div style="width:97%;line-height:23px;border:5px solid #ccc;background:white;">
      <input type="text" v-model="value" :result="filterResult" style="width:80%;border:none;height:25px;outline: none;">
      <span style="border-left:3px solid #ccc;height:27px;line-height:25px;padding-left:12px;display:inline-block;font-size:14px;" @click="cancel">取消</span>
    </div>
    <ul style="background：white;">
      <li style="margin:3px;" v-for="item in result" :key="item.id" @click="toDetails(item.id)">{{item.name}}</li>
    </ul>
    <main v-show="isSearch">
      <myList com-from="home" :com-list="list" @buy-now="show"></myList>
      <div style="height:55px;"></div>
    </main>
    <!-- 遮罩 -->
    <div v-show="buyStatus" class="shade"></div>
    <!-- 购买操作栏 -->
    <div v-show="buyStatus" class="buy-style">
      <cartBar :com-name="listName" @buy-Stauts="close"></cartBar>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import myList from "./public/list.vue";
import { Swipe, SwipeItem, Search, Button, Cell } from "mint-ui";
Vue.component(Search.name, Search);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);
import cartBar from "./public/cartBar.vue";
import api from "../api/api";
export default {
  data() {
    return {
      value: "",
      result: [],
      list: [],
      buyStatus: false,
      listName: {
        name: "",
        price: "",
        surplus: "",
        id: ""
      },
      isSearch: true
    };
  },
  created() {
    api.appIndex().then(data => {
      console.log(data.data.data);
      this.list = data.data.data;
    });
  },
  computed: {
    filterResult() {
      if (this.value !== "") {
        this.isSearch = false;
        api.fluzzySearch(this.value).then(res => {
          if (res.data.code === 1) {
            console.log(res.data.data);
            this.result = res.data.data;
          }
        });
      } else {
        this.result = [];
        this.isSearch = true;
      }
    }
  },
  methods: {
    toDetails(id) {
      this.$router.push({
        path: "/details",
        query: {
          comId: id,
          from: "home"
        }
      });
    },
    show(data) {
      this.buyStatus = data.status;
      this.listName.name = this.list[data.index].name;
      this.listName.price = this.list[data.index].price;
      this.listName.surplus = this.list[data.index].surplus;
      this.listName.buyBackPrice = this.list[data.index].buyBackPrice;
      this.listName.id = this.list[data.index].id;
    },
    close(data) {
      this.buyStatus = data;
    },
    //取消搜索状态
    cancel() {
      this.isSearch = true;
      this.result = [];
      this.value = "";
    }
  },
  components: {
    cartBar,
    myList
  }
};
</script>

<style lang='less' scoped>
.shade {
  position: fixed;
  bottom: 30px;
  z-index: 90;
  width: 100%;
  height: 100%;
  background: #ccc;
  opacity: 0.5;
}
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
.buy-style {
  height: 130px;
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
