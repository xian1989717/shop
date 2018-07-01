<template>
  <div class='main'>
    <div class='fl'>
      <ul>
        <li :class="{change_bac:item.id === myId}" @click="changeDetailsList(item.id)" v-for='item in list' :key='item.id'>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class='right'>
      <div v-for='item in showList' :key='item.id' @click="toDetails">
        <p class="title">{{item.headline}}</p>
        <div class="details" v-for="details in item.details" :key="details.name">
          <img :src="details.img">
          <p>{{details.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 0,
          name: "热门推荐"
        },
        {
          id: 1,
          name: "手机数码"
        },
        {
          id: 2,
          name: "家用电器"
        },
        {
          id: 3,
          name: "电脑办公"
        },
        {
          id: 4,
          name: "计生情趣"
        },
        {
          id: 5,
          name: "美妆护肤"
        },
        {
          id: 6,
          name: "个护清洁"
        }
      ],
      showList: [],
      detailsList: [
        {
          id: 0,
          headline: "热门推荐",
          details: [
            {
              id: 10,
              name: "电风扇",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 11,
              name: "手机",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 12,
              name: "空调",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 13,
              name: "充电宝",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 14,
              name: "蓝牙耳机",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 15,
              name: "蚊帐",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 16,
              name: "凉席",
              img: require("../assets/5b056472N771896da.png")
            }
          ]
        },
        {
          id: 1,
          headline: "手机数码",
          details: [
            {
              id: 21,
              name: "小米",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 22,
              name: "华为",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 23,
              name: "荣耀",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 24,
              name: "iPhone",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 25,
              name: "VIVO",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 26,
              name: "OPPO",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 27,
              name: "魅族",
              img: require("../assets/5b056472N771896da.png")
            }
          ]
        },
        {
          id: 2,
          headline: "家用电器",
          details: [
            {
              id: 31,
              name: "电水壶/热水瓶",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 32,
              name: "电压力锅",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 33,
              name: "电饭煲",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 34,
              name: "电磁炉",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 35,
              name: "微波炉",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 36,
              name: "电饼铛",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 37,
              name: "豆浆机",
              img: require("../assets/5b056472N771896da.png")
            }
          ]
        },
        {
          id: 3,
          headline: "电脑办公",
          details: [
            {
              id: 41,
              name: "轻薄本",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 42,
              name: "游戏本",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 43,
              name: "机械键盘",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 44,
              name: "组装电脑",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 45,
              name: "移动硬盘",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 46,
              name: "显卡",
              img: require("../assets/5b056472N771896da.png")
            },
            {
              id: 47,
              name: "游戏台式机",
              img: require("../assets/5b056472N771896da.png")
            }
          ]
        }
      ],
      myId: null
    };
  },
  created() {
    this.changeDetailsList(0);
  },
  methods: {
    changeDetailsList(id) {
      this.myId = id;
      this.showList = this.detailsList.filter(val => {
        if (id === val.id) {
          return val;
        }
      });
    },
    toDetails(id) {
      this.$router.push({
        path: "/commodityList",
        query: {
          comId: id
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
.main {
  position: relative;
  .fl {
    min-width: 76px;
    ul {
      padding-left: 5px;
      .change_bac {
        background: #ccc;
      }
      span {
        line-height: 46px;
      }
    }
  }
  .right {
    margin-left: 76px;
    .title {
      margin-left: 10px;
    }
    .details {
      font-size: 12px;
      width: 33%;
      display: inline-block;
      text-align: center;
      img {
        min-width: 50px;
        width: 50px;
      }
    }
  }
}
</style>

