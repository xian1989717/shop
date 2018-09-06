<template>
  <div class="main">
    <div v-show="list.length>0?true:false">
      <p v-show="editStatus" @click="changeEditStatus">编辑</p>
      <p v-show="!editStatus" @click="changeEditStatus">完成</p>
    </div>
    <ul>
      <li v-for="(item,index) in list" :key="item.id">
        <img v-show="item.status" @click="changeStats(item.status,index)" class="change" src="../assets/yes.png">
        <img v-show="!item.status" @click="changeStats(item.status,index)" class="change" src="../assets/no.png">
        <img :src="baseUrl+item.commodityPic">
        <p>{{item.commodityName+" "+item.ruleVal}}</p>
        <div class="priceWrap" v-show="editStatus">
          <span>￥{{item.commodityPrice | formatMoney}}</span>
          <span>X{{item.count}}</span>
        </div>
        <div class="fl" style="margin-top:60px;" v-show="!editStatus">
          <button @click="subtract(item.id)">-</button>
          <span>{{item.count}}</span>
          <button @click="add(item.id)">+</button>
        </div>
        <div class="fr delete" v-show="!editStatus" @click="deleteCom(item.id)">删除</div>
      </li>
    </ul>
    <div class="footer">
      <div style="display:inline-block;width: 70%;">
        <input type="checkbox" :checked="isSelectAll" @click="allSelect" />
        <span>全选</span>
        <span>合计:{{getTotal.totalPrice}}</span>
      </div>
      <div @click="toOrderForPayment" style="display: inline-block;text-align: center;width: 28%;">结算</div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import api from "../api/api";
import vue from "vue";
export default {
  data() {
    return {
      list: [],
      editStatus: true
    };
  },
  created() {
    api.selectCart("fz").then(res => {
      this.list = res.data.appCartItem;
      this.list.forEach(function(data) {
        vue.set(data, "status", true);
      });
    });
  },
  destroyed() {
    this.updateBatch();
  },
  methods: {
    /**
     * 全选方法
     */
    allSelect() {
      this.list.forEach((val, index) => {
        val.status = !val.status;
      });
    },
    /**
     * 删除方法
     * @param id 要删除的元素的Id
     */
    deleteCom(id) {
      MessageBox.confirm("确定执行此操作?").then(res => {
        if (!res) {
          return;
        }
        this.list.forEach((v, i) => {
          if (v.id === id) {
            api.deleteCart(id, "fz").then(res => {
              console.log(res);
              if (res.data.code === "1" && res.data.msg === "success") {
                this.list.splice(this.list[i], 1);
              }
            });
          }
        });
      });
    },
    /**
     * 切换编辑状态/完成状态
     */
    changeEditStatus() {
      this.editStatus = !this.editStatus;
    },
    add(id) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].id === id) {
          this.list[i].count += 1;
        }
      }
    },
    subtract(id) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].id === id) {
          if (this.list[i].count > 1) {
            this.list[i].count = this.list[i].count - 1;
          }
        }
      }
    },
    changeStats(stats, index) {
      this.list[index].status = !stats;
    },
    /**
     * 在页面销毁的时候掉用该接口保存购物车数据
     */
    updateBatch() {
      let _list = [];
      this.list.forEach(function(v, i) {
        _list.push({
          id: v.id,
          userId: v.userId,
          count: v.count
        });
      });
      api.payment(_list);
    },
    toOrderForPayment() {
      let _list = [];
      this.list.forEach((v, i) => {
        _list.push({
          commodityPic: v.commodityPic,
          commodityName: v.commodityName,
          count: v.count,
          commodityPrice: v.commodityPrice
        });
      });
      this.$router.push({
        path: "/orderForPayment",
        query: {
          list: _list
        }
      });
    }
  },
  computed: {
    isSelectAll: function() {
      return this.list.every(function(val) {
        return val.status;
      });
    },
    getTotal: function() {
      var _proList = this.list.filter(function(val) {
          return val.status;
        }),
        totalPrice = 0;
      for (var i = 0, len = _proList.length; i < len; i++) {
        totalPrice += _proList[i].count * _proList[i].commodityPrice;
      }
      return { totalNum: _proList.length, totalPrice: totalPrice };
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
.main {
  p {
    margin-right: 10px;
    text-align: right;
  }
  li {
    overflow: hidden;
    margin-top: 10px;
    padding: 5px 0;
    background: #ccc;
    .change {
      width: 20px;
      height: 20px;
      margin-top: 50px;
    }
    img {
      float: left;
      margin-right: 5px;
    }
    position: relative;
    p {
      text-align: left;
      margin-left: 5px;
    }
    div.fr {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .priceWrap {
      margin-top: 60px;
      span:nth-child(2) {
        float: right;
        margin-right: 10px;
      }
    }
  }
}
.footer {
  position: fixed;
  bottom: 40px;
  width: 100%;
}
</style>
