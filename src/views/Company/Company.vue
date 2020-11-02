<template>
  <div>
    <div class="main">
      <div class="start">
        <router-link to="/Recorder"
          ><el-button round type="info" class="el-icon-mic"
            >点击录音</el-button
          ></router-link
        >
      </div>
      <!-- 分割线 -->
      <el-divider></el-divider>
      <div class="upload">
        <el-button round type="primary"
          >发送语音<i class="el-icon-upload el-icon--right"></i
        ></el-button>
      </div>
    </div>
    <div>
      <p @click="playAudio">播放</p>
      <el-button type="primary" round @click="playAudio">播放</el-button>
      <m-audio @playing="playAudio"  type="audio/mpeg"></m-audio>
    </div>
    <div class="chose">
      <router-link to="/Recorder">
        <el-button
          type="success"
          icon="el-icon-circle-plus-outline"
          size="medium"
          circle
        ></el-button>
      </router-link>
    </div>
    <div>
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
import CommonFooter from "@/components/CommonFooter.vue";
import { getAudio } from "@/api/getData.js";

export default {
  components: {
    CommonFooter,
  },
  data() {
    return {
      infor: "",
    };
  },
  //获取用户token
  computed: {
    getToken() {
      return this.$store.state.token;
    },
  },
  methods: {
    async playAudio() {
      try {
        await getAudio(this.getToken).then((res) => {
          alert(this.getToken);

          let url = URL.createObjectURL(res.data);//通过这个API让语音数据转为成一个url地址
          this.infor = url;

          let audio = new Audio();//在VUE中使用audio标签
          audio.src = url;//设置audio的src为上面生成的url
            let playPromiser = audio.play();//进行播放
            //在谷歌内核中,audio.play()会返回一个promise的值，在IE内核中就不会返回任何的值
            //所以如果你要分浏览器，可以判断playPromiser的值来进行操作
            audio.onended = () => {
            //onended可以检测语音是否播完
            //dosometing
            };

          
          });
      } catch (error) {
        alert(error);
        console.log(error);
        alert("2");
      }
    },
  },
};
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
  margin-right: 90%;
}
</style>

