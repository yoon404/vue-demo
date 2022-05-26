<template>
  <div style="width: 100%;height: 100vh;background-color: aquamarine;overflow: hidden">
    <div style="width: 500px;margin: 150px auto;">
      <div style="color: hotpink;font-size: 30px;text-align: center;padding: 30px">
        欢迎注册
      </div>
      <el-form ref="form"
               :model="form"
               status-icon
               label-width="120px"
               :rules="rules"
               style="padding-right: 100px">
        <el-form-item prop="name">
          <el-input prefix-icon="User" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="Key" v-model="form.password" type="password" autocomplete="off" show-password/>
        </el-form-item>
        <el-form-item prop="confirm">
          <el-input prefix-icon="Key" v-model="form.confirm" type="password" autocomplete="off" show-password/>
        </el-form-item>
        <el-form-item style="padding-left:65px">
          <el-button type="primary" @click="register">注 册</el-button>
          <el-button @click="reset">重 置</el-button>
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
            required: true, message: '请输入用户名', trigger: "blur"
          },
        ],
        password: [
          {
            required: true, message: '请输入密码', trigger: "blur"
          },
          {
            min: 6, max: 16, message: '密码为6-16位', trigger: "blur"
          }
        ],
        confirm: [
          {
            required: true, message: '请确认密码', trigger: "blur"
          },
          {
            min: 6, max: 16, message: '密码为6-16位', trigger: "blur"
          }
        ],
      }
    }
  },
  methods: {
    register() {
      this.$refs['form'].validate((valid)=>{
        if(valid){
          if (this.form.password !== this.form.confirm) {
            this.$message({
              type: "error",
              message: "注册失败,两次密码不一致"
            })
            return
          }
          request.post("/user/addUser", this.form).then(res => {
            if (res.code === 200) {
              this.$message({
                type: "success",
                message: "注册成功"
              })
              this.$router.push("/login")  // 登陆成功后进行页面跳转
            } else {
              this.$message({
                type: "error",
                message: res.data.msg
              })
              this.reset()
            }
          }).catch(error => {
            this.$message({
              type: "error",
              message: "注册失败,该用户已存在或用户名为空"
            })
          })
        }
      })
    },
    reset() {
      this.form = {}
    },
  }
}
</script>

<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

</script>

<style scoped>

</style>