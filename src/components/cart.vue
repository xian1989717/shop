<template>
  <div class="main">
    <p v-show="editStatus" @click="changeEditStatus">编辑</p>
    <p v-show="!editStatus" @click="changeEditStatus">完成</p>
    <ul>
      <li v-for="item in list" :key="item.id">
        <img v-show="item.status" @click="item.status =!item.status" class="change" src="../assets/yes.png" alt="">
        <img v-show="!item.status" @click="item.status = !item.status" class="change" src="../assets/no.png" alt="">
        <img :src="item.img">
        <p>{{item.name}}</p>
        <div class="priceWrap" v-show="editStatus">
          <span>￥{{item.groupPrice | formatMoney}}</span>
          <span>X{{item.num}}</span>
        </div>
        <div class="fl" style="margin-top:60px;" v-show="!editStatus">
          <button @click="subtract(item.id)">-</button>
          <span>{{item.num}}</span>
          <button @click="add(item.id)">+</button>
        </div>
        <div class="fr delete" v-show="!editStatus" @click="deleteCom(item.id)">删除</div>
      </li>
    </ul>
    <div class="footer">
      <input type="checkbox" :checked="isSelectAll" @click="allSelect" />
      <span>全选</span>
      <span>合计:{{getTotal.totalPrice}}</span>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          img: require("../assets/01.png"),
          name: "鹿听茶",
          groupPrice: 20.0,
          signPrice: 23.0,
          num: 5,
          status: true
        },
        {
          id: 2,
          img: require("../assets/01.png"),
          name: "鹿听茶",
          groupPrice: 20.0,
          signPrice: 23.0,
          num: 5,
          status: true
        },
        {
          id: 3,
          img: require("../assets/01.png"),
          name: "鹿听茶",
          groupPrice: 20.0,
          signPrice: 23.0,
          num: 5,
          status: true
        }
      ],
      editStatus: true
    };
  },
  methods: {
    /**
     * 全选方法
     */
    allSelect() {
      this.list.forEach((val, index) => {
        console.log(val);
        val.status = !val.status;
      });
    },
    /**
     * 删除方法
     * @param id 要删除的元素的Id
     */
    deleteCom(id) {
      MessageBox.confirm("确定执行此操作?").then(res => {
        if (res) {
          this.list.forEach((v, i) => {
            if (v.id === id) {
              this.list.splice(i, 1);
            }
          });
        }
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
          this.list[i].num += 1;
        }
      }
    },
    subtract(id) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].id === id) {
          if (this.list[i].num > 1) {
            this.list[i].num = this.list[i].num - 1;
          }
        }
      }
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
        totalPrice += _proList[i].num * _proList[i].groupPrice;
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
  bottom: 70px;
}
</style>
