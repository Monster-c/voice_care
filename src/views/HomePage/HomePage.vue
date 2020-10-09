<template>
  <div>
    <home-member></home-member>
    <common-footer></common-footer>
  </div>
</template>

<script>
import HomeMember from "./Component/MemberList.vue";
import CommonFooter from "../../components/CommonFooter.vue";
import {getMember} from "@/api/getData.js";

export default {
  //注册组件
  components: {
    HomeMember,
    CommonFooter,
  },
  //声明数据源
  data() {
    return {
      memberlist: [],
    };
  },
  methods: {
    //获取成员列表
    //如果内部有await请求  则需要加上 async
    async getMemberList() {
      try {
        //axios为异步加载 需要await等待加载完成
        const result = await getMember();
        console.log(result);
        //状态码为0则提取数据
        if (result.data.code == 0) {
          this.memberlist = result.data.memberlist;
        }
      } catch (error) {
        console.log(error);
      }
    },
    mounted() {
      //页面渲染成功再获取数据
      this.getMemberList();
    },
  },
};
</script>

<style lang="scss" >
</style>