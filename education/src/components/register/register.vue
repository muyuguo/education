<template>
  <div id="register">
    <div class="register-wrapper">
      <div class="register-container-top"></div>
      <div class="register-container-main">
        <div class="register-content">
          <div class="register-set-panel">
            <div class="rgister-text">
              <div class="title">
                <p>手机号注册</p>
              </div>
              <form action id="register-form">
                <el-input
                  type="text"
                  placeholder="请输入手机号"
                  v-model="text"
                  maxlength="11"
                  show-word-limit
                  style="margin-bottom:30px;"
                >
                  <i slot="prefix" class="el-input__icon el-icon-phone"></i>
                </el-input>
                <el-input
                  type="text"
                  placeholder="验证码预留"
                  v-model="text"
                  maxlength="11"
                  show-word-limit
                  style="margin-bottom:30px;"
                >
                  <i slot="prefix" class="el-input__icon el-icon-phone"></i>
                </el-input>
                <div class="verification">
                  <el-input class="left" style="width:70%;" v-model="input" placeholder="请输入短信验证码"></el-input>
                  <span>
                    <el-button type="primary" plain>获取验证码</el-button>
                  </span>
                </div>
                <el-input
                  style="margin-bottom:20px;"
                  placeholder="请输入密码"
                  v-model="input"
                  show-password
                >
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
                <el-button type="primary" plain style="width:100%;">注册</el-button>
                <div class="register-complex" style="margin-top:20px;">
                  <div class="register-pact left">
                    <el-checkbox v-model="checked">我同意《用户使用协议》</el-checkbox>
                  </div>
                  <div class="go-login right">
                    <router-link
                      to="/login"
                      class="right"
                      style="font-size:14px;position:relative;color:#35AFFB;"
                    >
                      去登录
                      <i class="el-icon-arrow-right"></i>
                    </router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data: function() {
    return {
      text: "",
      input: "",
      checked: true
    };
  },
  methods: {}
};
</script>
<style lang="scss">
@import "../../css/register.scss";
</style>


