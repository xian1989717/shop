<template>
  <div>
    <ul class='myUl'>
      <li class='first_li' v-for='item in list' :key=item.id @click='toDetails(item.id)'>
        <div class='list_div_left fl'>
          <img :src='item.img'>
        </div>
        <div class='list_div_right'>
          <div style='margin:10px 0 10px 0'>{{item.name}}</div>
          <div>{{item.groupPrice}}</div>
          <div>{{item.signPrice}}</div>
        </div>
        <div class="buttonWrap">
          <button @click.stop="buyNow">立即购买</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  prop: [],
  methods: {
    toDetails(id) {
      this.$router.push({
        path: "/details",
        query: {
          comId: id
        }
      });
    },
    buyNow() {
      this.buyStatus = true;
    }
  }
};
</script>

<style lang="less" scoped>
.myUl {
  text-align: left;
  .first_li {
    overflow: hidden;
    position: relative;
    .list_div_left {
      display: inline-block;
    }
    .list_div_right {
      display: inline-block;
      > div {
        text-align: left;
      }
    }
    .buttonWrap {
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
  }
}
</style>

