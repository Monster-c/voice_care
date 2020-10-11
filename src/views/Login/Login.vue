<template>
  <div class="main">
    <cube-form :model="model" @submit="submitHandler">
      <cube-form-group>
        <!--手机号-->
        <cube-form-item :field="fields[0]"></cube-form-item>
        <!--密码-->
        <cube-form-item :field="fields[1]"></cube-form-item>
      </cube-form-group>

      <cube-form-group>
        <cube-button type="submit">登录</cube-button>
      </cube-form-group>
    </cube-form>
    <router-link to="/Login" class="reg">注册</router-link>
  </div>
</template>



<script>
import {loginApi} from "@/api/getData.js";
export default {
  data() {
    return {
      model: {
        nameValue: "",
        telValue: "",
        pwdValue: "",
      },
      fields: [
        {
          type: "input",
          modelKey: "telValue",
          label: "手机号",
          props: {
            placeholder: "请输入账号/手机号",
          },
          rules: {
            //设置为必填
            required: true,
          },
          messages: {
            required: "请输入账号！",
          },
        },
        {
          type: "input",
          modelKey: "pwdValue",
          label: "密码",
          props: {
            placeholder: "请输入密码",
            type: "password",
            eye: {
              //默认不显示密码
              open: false,
            },
          },
          rules: {
            required: true,
          },
          messages: {
            required: "密码不能为空！",
          },
        },
      ],
    };
  },
  methods: {
    submitHandler(e, model) {
      //防止默认提交
      e.preventDefault();
      loginApi(model.telValue, model.pwdValue).then((res) => {
        if (res.data.code === 0) {
          localStorage.setItem("token",res.data.data);
        }else{
          const toast = this.$createToast({
            //生成一个toast类型的组件弹窗，提示注册成功，时间1.5s
            type: "error",
            text: "登录失败！",
            time: "1500",
          });
          toast.show();
        }
      });
      //调用注册接口
    },
  },
};
</script>



<style lang="scss" scoped>
.main {
  padding: 50px 5% 0;
  text-align: center;
}
//注册
.cube-btn {
  margin-top: 20px;
}
// 登录
.reg {
  display: inline-block;
  margin-top: 30px;
  font-size: 18px;
}
</style>