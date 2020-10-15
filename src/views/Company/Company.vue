<template>
<div>
  <div class="main">
    <div class="start">
      <cube-button onclick="startRec()" inline>点击录音</cube-button>
    </div>
    <div class="upload">
      <cube-button onclick="uploadRec()" inline>点击发送语音</cube-button>
    </div>
  </div>
  <div>
    <common-footer></common-footer>
  </div>
</div>
</template>

<script>
import CommonFooter from "@/components/CommonFooter.vue";
export default{
  components:{
    CommonFooter
  },
  methods:{
    
  }


}


</script>

<style lang="scss" scoped>
.main {
  padding: 50px 5% 0;
  text-align: center;
}
.start {
  margin: 5px;
}
.upload {
  margin: 5px;
}
</style>