<template>
  <div class='main'>
    <div class='fl'>
      <ul style="position:fixed;height:100%;overflow:auto;">
        <li :class="{change_bac:item.id === myId}" @click="changeDetailsList(item.id,item.name)" v-for='item in list' :key='item.id'>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class='right'>
      <div>
        <p class="title">{{headline}}</p>
        <div class="details" v-for="details in detailsList" :key="details.id" @click="toDetails(details.id)">
          <img :src="details.img">
          <p>{{details.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  data() {
    return {
      list: [],
      showList: [],
      detailsList: [],
      myId: null,
      headline: ""
    };
  },
  created() {
    this.changeDetailsList(0, "南北干货");
  },
  methods: {
    changeDetailsList(id, headline) {
      this.myId = id;
      this.headline = headline;
      api.getCommClassify(id).then(res => {
        if (id === 0) {
          this.list = res.data.data;
          api.getCommClassify(10).then(res => {
            this.detailsList = res.data.data;
          });
        } else {
          this.detailsList = res.data.data;
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
      position: fixed;
      height: 100%;
      overflow: auto;
      .change_bac {
        background: #ccc;
      }
      span {
        line-height: 46px;
      }
    }
  }
  .right {
    margin-left: 100px;
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

