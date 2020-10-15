<template>
  <div class="main">
    <!-- //返回按钮 -->
    <div class="back">
      <router-link to="/Personal" class="reg">
        <cube-button icon="cubeic-back" inline>返回</cube-button>
      </router-link>
    </div>
    <!-- //注册框 -->
    <div>
      <cube-form :model="model" @submit="submitHandler">
        <cube-form-group>
          <!--名称-->
          <cube-form-item :field="fields[0]"></cube-form-item>
          <!--手机号-->
          <cube-form-item :field="fields[1]"></cube-form-item>
          <!--密码-->
          <cube-form-item :field="fields[2]"></cube-form-item>
          <!--确认密码-->
          <cube-form-item :field="fields[3]"></cube-form-item>
          <!-- 家庭号 -->
          <cube-form-item :field="fields[4]"></cube-form-item>
        </cube-form-group>

        <cube-form-group>
          <cube-button type="submit">注册</cube-button>
        </cube-form-group>
      </cube-form>
      <router-link to="/login" class="reg">登录</router-link>
    </div>
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
            //默认展示的文字
            placeholder: "请输入真实姓名",
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
            placeholder: "请输入手机号",
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
          modelKey: "pwdFirst",
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
        {
          type: "input",
          modelKey: "pwdSecond",
          label: "确认密码",
          props: {
            placeholder: "请确认密码",
            type: "password",
            eye: {
              open: false,
            },
          },
          rules: {
            required: true,
          },
          messages: {
            required: "请再次输入密码！",
          },
        },
        {
          type: "input",
          modelKey: "familyId",
          label: "家庭号",
          props: {
            placeholder: "请输入家庭号",
            type: "text",
          },
          rules: {
            //设置为必填
            required: true,
          },
          messages: {
            required: "家庭号不能为空！",
          },
        }
      ],
    };
  },
  methods: {
    submitHandler(e, model) {
      //防止默认提交
      e.preventDefault();
      function checked() {
        if (mode.pwdFirst !== mode.pwdSecond) {
          const toast = this.$createToast({
            type: "warn",
            text: "两次密码填写不一致！",
            time: "1500",
          });
          toast.show();
          return;
        } //如果密码填写一致
        else
          registerApi(model.nameValue, model.telValue, model.pwdFirst).then(
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
      }
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
.back{
  margin-right:95%;
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