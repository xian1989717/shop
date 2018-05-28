<template>
  <div class="main">
    <p>编辑</p>
    <ul>
      <li v-for="item in list" :key="item.id">
        <div v-show="item.stauts" ><img @click="item.stauts =!item.stauts" style="width:20px;height:20px;" src="../assets/yes.png" alt=""></div>
        <div v-show="!item.stauts" ><img @click="item.stauts = !item.stauts" style="width:20px;height:20px;" src="../assets/no.png" alt=""></div>
        <img :src="item.img" alt="">
        <p>{{item.name}}</p>
        <div>
          <span>{{item.groupPrice}}</span>
          <span>X{{item.num}}</span>
        </div>
      </li>
    </ul>
    <div class="footer">
      <input type="checkbox" :checked="isSelectAll" @click="allSelect"/>
      <span>全选</span>
      <span>合计:{{getTotal.totalPrice}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          img: require('../assets/01.png'),
          name: '鹿听茶',
          groupPrice: 20.0,
          signPrice: 23.0,
          num:5,
          stauts:true,
        },
        {
          id: 2,
          img: require('../assets/01.png'),
          name: '鹿听茶',
          groupPrice: 20.0,
          signPrice: 23.0,
          num:5,
          stauts:true,
        },
        {
          id: 3,
          img: require('../assets/01.png'),
          name: '鹿听茶',
          groupPrice: 20.0,
          signPrice: 23.0,
          num:5,
          stauts:true,
        }
      ],
    };
  },
  methods:{
    allSelect(){
      this.list.forEach((val,index)=>{
        console.log(val);
        val.stauts = !val.stauts;
        // console.log(val+'...'+index);
      })
    }
  },
  computed: {  
    isSelectAll:function(){  
      console.log(this.list);
      //如果每一条数据的select都为true，返回true，否则返回false; 
      return this.list.every(function (val) { return val.stauts});  
    },  
    getTotal:function(){  
        //获取goodsList中select为true的数据。  
        var _proList=this.list.filter(function (val) { return val.stauts}),totalPrice=0;  
        for(var i=0,len=_proList.length;i<len;i++){  
            //总价累加  
            totalPrice+=_proList[i].num*_proList[i].groupPrice;  
        }  
        //选择产品的件数就是_proList.length，总价就是totalPrice  
        return {totalNum:_proList.length,totalPrice:totalPrice}  
    },  
  },  
  watch:{
    // totalPrice(curVal,oldVal){
    //   console.log(curVal);
    // }
    'list':{
      handler: function (val, oldVal) {
          console.log(val);
      },
      deep: true
    },

  }
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
    img {
      float: left;
    }
    position: relative;
    p {
      text-align: left;
      margin-left: 5px;
    }
    div {
      margin-top: 60px;
      span {
        margin-left: 5px;
      }
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
