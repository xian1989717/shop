<template>
  <div>
    <i @click="close">X</i>
			<div class="left">
				<div>购买数量:</div>
				<div>剩余{{surplus}}</div>
			</div>
			<div class="right">
				<button>-</button>
				<span>{{num}}</span>
				<button>+</button>
			</div>
			<p>下一步</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      num:1,
      surplus:this.comSurplus
    }
  },
  props:[
    'comSurplus'
  ],
  methods:{
    close() {
      this.$emit('buy-Stauts',false);
    },
  }
}
</script>

<style lang="less" scoped>
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
</style>

