<template>
    <div>
        <!-- 遮罩 -->
		<div v-show="buyStatus" class="shade"></div>
        <!-- 购买操作栏 -->
		<div v-show="buyStatus" class="buy-style">
			<i @click="close">X</i>
			<div class="left">
				<div>购买数量:</div>
				<div>剩余{{data.surplus}}</div>
			</div>
			<div class="right">
				<button>-</button>
				<span>{{num}}</span>
				<button>+</button>
			</div>
			<p>下一步</p>
		</div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>


