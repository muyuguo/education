<template>
  <div id="login">
    <div class="nav">
      <headerView></headerView>
    </div>

    <div class="main">
      <div class="bg-image">
        <img src="../../assets/login-bg.png" alt />
      </div>
      <div class="login-wrapper">
        <div class="login-container-top"></div>
        <div class="login-container-main">
          <div class="login-content">
            <div class="login-set-panel">
              <div class="login-text"></div>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <!--手机登录-->
                <el-tab-pane label="手机号登录" name="first">
                  <el-form :model="userInfo" :rules="rules" ref="userInfo" action id="login-form">
                    <div class="phone-login" style="margin-bottom:10px;">
                      <div class="info-login">
                        <p v-on:click="goSms">
                          <i class="el-icon-message" style="margin-right:10px;"></i>使用短信验证登录
                        </p>
                      </div>
                      <div class="login-message">
                        <el-form-item prop="uphone">
                          <el-input
                            name="uphone"
                            type="text"
                            placeholder="请输入手机号"
                            v-model="userInfo.uphone"
                            maxlength="11"
                            show-word-limit
                            style="margin-bottom:10px;"
                          >
                            <i slot="prefix" class="el-input__icon el-icon-phone"></i>
                          </el-input>
                        </el-form-item>
                        <el-form-item prop="upwd">
                          <el-input
                            v-on:keyup.enter.native="submit"
                            name="upwd"
                            style="margin-bottom:10px;"
                            placeholder="请输入密码"
                            v-model="userInfo.upwd"
                            show-password
                          >
                            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                          </el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-button
                            v-on:click="submit('userInfo')"
                            style="width:360px;font-size:18px;font-weight:bold;"
                            type="primary"
                            plain
                          >登 录</el-button>
                        </el-form-item>
                      </div>
                    </div>
                    <div class="login-complex">
                      <div class="freelogin left">
                        <el-checkbox class="left" v-model="userInfo.nocheck">三天免登录</el-checkbox>
                        <span class="line"></span>
                        <span
                          style="margin-left:10px;font-size:14px;height:19px;line-height:19px;position:absolute;"
                        >
                          <router-link to>忘记密码？</router-link>
                        </span>
                      </div>
                      <div class="go-register right">
                        <router-link
                          to="/register"
                          class="right"
                          style="font-size:14px;position:relative;color:#35AFFB;"
                        >
                          去注册
                          <i class="el-icon-arrow-right"></i>
                        </router-link>
                      </div>
                    </div>
                  </el-form>
                </el-tab-pane>

                <!--短信登录-->
                <!--<form action="" id="login-form">
                <div class="sms-login">
                  <div class="login-message">
                    <div class="info-login">
                      <router-link to="/login">
                        <i class="el-icon-message" style="margin-right:10px;"></i>使用短信验证登录
                      </router-link>
                    </div>
                    <el-input
                        type="text"
                        placeholder="手机号"
                        v-model="text"
                        maxlength="11"
                        show-word-limit
                        style="margin-bottom:20px;"
                      >
                        <i slot="prefix" class="el-input__icon el-icon-phone"></i>
                      </el-input>
                  </div>
                </div>
                </form>-->
                <!--邮箱登录-->
                <el-tab-pane label="短信验证登录" name="second" id="sms">
                  <form action id="login-form">
                    <div class="sms-login">
                      <div class="info-login">
                        <p v-on:click="goPhone">
                          <i class="el-icon-message" style="margin-right:10px;"></i>使用手机号登录
                        </p>
                      </div>
                      <div class="login-message">
                        <el-input
                          type="text"
                          placeholder="请输入手机号"
                          v-model="userInfo.uphone"
                          maxlength="11"
                          show-word-limit
                          style="margin-bottom:20px;"
                        >
                          <i slot="prefix" class="el-input__icon el-icon-phone"></i>
                        </el-input>

                        <el-input
                          style="margin-bottom:20px;"
                          placeholder="请输入密码"
                          v-model="userInfo.upwd"
                          show-password
                        >
                          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                        </el-input>
                        <el-alert
                          style="height:30px;margin-bottom:5px;margin-top:-15px"
                          v-bind:style="{display:isTrue1}"
                          title="密码不能为空！"
                          type="error"
                          center
                          show-icon
                        ></el-alert>
                        <el-button
                          style="width:360px;font-size:18px;font-weight:bold;"
                          type="primary"
                          plain
                        >登 录</el-button>
                      </div>
                    </div>
                    <div class="login-complex" style="margin-top:10px;">
                      <div class="freelogin left">
                        <el-checkbox class="left" v-model="userInfo.nocheck">七天免登录</el-checkbox>
                        <span class="line"></span>
                        <span
                          style="margin-left:5px;font-size:14px;height:19px;line-height:19px;position:absolute;"
                        >
                          <router-link to>忘记密码？</router-link>
                        </span>
                      </div>
                      <div class="go-register right">
                        <router-link
                          to="/register"
                          class="right"
                          style="font-size:14px;position:relative;color:#35AFFB;"
                        >
                          去注册
                          <i class="el-icon-arrow-right"></i>
                        </router-link>
                      </div>
                    </div>
                  </form>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
          <div class="other-options">
            <span class="left">使用其他方式登录</span>
            <router-link class="left" to>
              <i class="iconfont icon11qq"></i>
            </router-link>
            <router-link class="left" to>
              <i class="iconfont iconweixin"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <footerWrapeer></footerWrapeer>
    </div>
  </div>
</template>
<script>
import header from "../plugin/header.vue";
import footer from "../footer-page/footerWrapeer.vue";
export default {
  name: "login",
  data: function() {
    return {
      //async-validator验证
      rules: {
        uphone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            required: true,
            min: 11,
            max: 11,
            message: "长度为11个字符",
            trigger: "blur"
          }
        ],
        upwd: [
          {
            type: "string",
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            required: true,
            min: 6,
            max: 11,
            message: "长度在 6 到 11 个字符",
            trigger: "blur"
          }
        ]
      },
      activeName: "first",
      count: 0,
      isTrue1: "none",
      isTrue2: "inline",
      title: "",
      isActive1: false,
      isLogin: false,
      userInfo: {
        uphone: "",
        upwd: "",
        nocheck: false
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submit: function(formName) {
      //表单验证处理
      this.$refs[formName].validate(valid => {
        if (valid) {
          //发送请求
          this.axios
            .post(
              "http://188.131.173.104/hlw+/login.php",
              JSON.stringify(this.userInfo)
            )
            .then(res => {
              console.log(res.data);
              if (res.status == 200 && res.data.verify == true) {
                localStorage.userName = this.userInfo.uphone;
                localStorage.userPassword = this.userInfo.upwd;
                localStorage.token = res.data.token;
                console.log(localStorage.userName, localStorage.token);
                this.$notify({
                  title: "提示信息",
                  message: "登录成功",
                  type: "success"
                });
                this.isLogin = true;
                this.$router.push({ path: "/" });
                this.$store.commit("getToken", localStorage.token);
                //设置Vuex登录标志为true，默认userLogin为false
                this.$store.dispatch("userLogin", true);
                //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
                //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
                localStorage.setItem("Flag", "isLogin");
                // 将登录名使用vuex传递到Home页面
                this.$store.commit("handleUserName", localStorage.userName);
                console.log(res.data.uphone);
              } else {
                this.$notify({
                  title: "提示信息",
                  message: "账号或密码错误",
                  type: "error"
                });
                this.isLogin = false;
              }
            })
            .catch(err => {
              console.log(err);
              this.$notify({
                title: "提示信息",
                message: "登录异常",
                type: "error"
              });
              this.isLogin = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    goSms: function() {
      this.activeName = "second";
      console.log(this.activeName);
    },
    goPhone: function() {
      this.activeName = "first";
      console.log(this.activeName);
    }
  },
  components: {
    headerView: header,
    footerWrapeer: footer
  }
};
</script>
<style lang="scss">
@import "../../css/login.scss";
</style>

