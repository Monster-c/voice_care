<template>
<div>
  <div class="main">
    <div class="start">
      <el-button round type="info" onclick="startRecording()" class="el-icon-mic">点击录音</el-button>
    </div>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <div class="upload">
      <el-button round type="primary">发送语音<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
  </div>
  <div class="chose">
    <router-link to="/Custom_Tailor">
    <el-button type="success" icon="el-icon-circle-plus-outline" size="medium" circle></el-button>
    </router-link>
  </div>
  <div>
    <common-footer></common-footer>
  </div>
</div>
</template>

<script>
import CommonFooter from "@/components/CommonFooter.vue";
import {startRecording} from '@/components/AudioRecorder/static/js/app.js'

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
.chose {
  margin-top: 90%;
  margin-right:90%;
}
</style>