<template>
  <div>
    <div class="back">
      <router-link to="/Company" class="reg">
      <el-page-header content="陪伴"></el-page-header>
        <!-- <cube-button icon="cubeic-back" inline>返回</cube-button> -->
      </router-link>
    </div>
    <div class="body">
		<h1 class="first">录制您的定制语音</h1>
		<div class="second">录制成功后，智能语音助手就可以模仿您来说话了</div>
		<img class="timg" src="@/assets/invoice.jpg" mode="widthFix" lazy-load></img>
		<div class="third">为保证录制效果</div>
		<div class="fourth">请在安静环境中</div>
		<div class="fourth">以恒定速度、自然地读出接下来的话</div>
		<div class="fourth">并与手机保持半臂的距离</div>
		<button class="voice-btn">开始录入</button>
		
	</div>
  </div>
</template>



<script>
export default {};
</script>


<style lang="scss" scoped>
.first{
	margin-top: 25px;
	margin-right: 70px;
	font-size: 30px;
	font-weight: bold;
}
.second{
    margin-top:30px;
	margin-left: 100upx;
	font-size: 20upx;
	color: #928E8E;
	font-weight: bold;
}
.timg{
	padding: 30upx 40upx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 50upx;
}
.third{
    margin-top:30px;
	margin-top: 20upx;
	margin-left: 80upx;
	font-size: 30upx;
	font-weight: bold;
}
.fourth{
    margin-top:30upx;
	margin-left: 80upx;
	font-size: 25upx;
	font-weight: bold;
	color: #928E8E;
}
.voice-btn{
    margin-top:30px;
	padding: 0 60upx !important;
	margin: 40upx;
	
}
</style>