<template>
  <div class="main">
    <cube-form :model="model" @submit="submitHandler">
      <cube-form-group>
        <!--名称-->
        <cube-form-item :field="fields[0]"></cube-form-item>
        <!--手机号-->
        <cube-form-item :field="fields[1]"></cube-form-item>
        <!--密码-->
        <cube-form-item :field="fields[2]"></cube-form-item>
      </cube-form-group>
      <cube-form-group>
        <cube-button type="submit">注册</cube-button>
      </cube-form-group>
    </cube-form>
    <router-link to="/login" class="reg">登录</router-link>
  </div>
</template>


<script>
//注册接口
import { registerApi } from "@/api/getData.js";
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
          modelKey: "nameValue",
          label: "姓名",
          props: {
            placeHolder: "请输入姓名：",
          },
          rules: {
            required: true,
          },
          messages: {
            required: "姓名不能为空！",
          },
        },

        {
          type: "input",
          modelKey: "telValue",
          label: "手机号",
          props: {
            placeHolder: "请输入手机号",
          },
          rules: {
            //设置为必填
            required: true,
          },
          messages: {
            required: "手机号不能为空！",
          },
        },
        {
          type: "input",
          modelKey: "pwdValue",
          label: "密码",
          props: {
            placeHolder: "请输入密码：",
            type: "password",
            ele: {
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
      //调用注册接口
      registerApi(model.nameValue, model.telValue, model.pwdValue).then(
        (res) => {
          if (res.data.code === 0) {
            const toast = this.$createToast({
              //生成一个toast类型的组件弹窗，提示注册成功，时间1.5s
              type: "correct",
              text: "注册成功！",
              time: "1500",
            });
            toast.show();
          }
        }
      );
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