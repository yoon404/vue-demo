<template>
  <div style="width: 100%;height: 100vh;background-color: aquamarine;overflow: hidden">
    <div style="width: 500px;margin: 150px auto;">
      <div style="color: hotpink;font-size: 30px;text-align: center;padding: 30px">
        欢迎登陆
      </div>
      <el-form ref="form"
               :model="form"
               label-width="120px"
               :rules="rules"
               style="padding-right: 100px">
        <el-form-item prop="name">
          <el-input prefix-icon="User" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="Key" v-model="form.password" type="password" autocomplete="off" show-password/>
        </el-form-item>
        <el-form-item style="padding-left: 30px">
          <el-button type="primary" @click="login">登 陆</el-button>
          <el-button @click="reset">重 置</el-button>
          <el-button @click="$router.push('register')">注 册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

import request from "@/utils/request";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {},
      rules: {
        name: [
          {
            required: true, message: "请输入用户名", trigger: "blur"
          },
        ],
        password: [
          {
            required: true, message: "请输入密码", trigger: "blur"
          },
          {
            min: 5, max: 16, message: "密码为5-16位", trigger: "blur"
          }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          request.post("/user/getUser", this.form).then(res => {
            if (res.data.code === 200) {
              this.$message({
                type: "success",
                message: "登陆成功"
              })
              sessionStorage.setItem("user",JSON.stringify(res.data.data))
              this.$router.push("/")  // 登陆成功后进行页面跳转
            } else {
              this.$message({
                type: "error",
                message: res.data.msg
              })
              this.reset()
            }
          })
        }
      })
    },
    reset() {
      this.form = {}
    },
    register() {

    }
  }
}
</script>


<style scoped>

</style>