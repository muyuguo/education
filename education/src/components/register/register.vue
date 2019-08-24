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
              <el-form
                :model="registers"
                :rules="registerRules"
                ref="registers"
                action
                id="register-form"
              >
                <el-form-item prop="uphone">
                  <el-input
                    prop="uphone"
                    type="text"
                    placeholder="请输入手机号"
                    v-model="registers.uphone"
                    maxlength="11"
                    show-word-limit
                  >
                    <i slot="prefix" class="el-input__icon el-icon-phone"></i>
                  </el-input>
                </el-form-item>
                <el-form-item prop="yzm">
                  <div class="verification">
                    <el-input
                      prop="yzm"
                      class="left"
                      style="width:70%;"
                      v-model="registers.yzm"
                      placeholder="请输入验证码"
                    ></el-input>

                    <span>
                      <el-button v-show="isVerify" type="primary" plain @click="getVerify">获取验证码</el-button>
                      <el-button
                        v-show="!isVerify"
                        type="primary"
                        class="count-down"
                      >{{this.countdown}}后可发送</el-button>
                    </span>
                  </div>
                </el-form-item>
                <el-form-item prop="upwd">
                  <el-input placeholder="请输入密码" v-model="registers.upwd" show-password>
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                  </el-input>
                </el-form-item>
                <el-form-item prop="reupwd">
                  <el-input placeholder="请确认密码" v-model="registers.reupwd" show-password>
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                  </el-input>
                </el-form-item>
                <el-button
                  type="primary"
                  plain
                  style="width:100%;"
                  @click="register('registers')"
                >注册</el-button>
                <div class="register-complex" style="margin-top:20px;">
                  <div class="register-pact left">
                    <el-checkbox v-model="registers.checked">我同意《用户使用协议》</el-checkbox>
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
              </el-form>
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
    let validatePhone = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入手机号码~"));
      }
      {
        let phoneRegex = /^1[34578]\d{9}$/;
        if (!phoneRegex.test(value)) {
          callback(new Error("手机号码格式不正确！"));
        } else {
          callback();
        }
      }
    };
    // validateField:对部分表单字段进行校验的方法
    let validateNewpassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码~"));
      } else {
        if (this.registers.upwd !== "") {
          this.$refs.registers.validateField("reupwd");
        }
        callback();
      }
    };
    let validateSurepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入确认密码~"));
      } else if (value !== this.registers.upwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      isEmail: "",
      isVerify: true,
      countdown: "",
      timer: null,
      registers: {
        uphone: "",
        yzm: "",
        upwd: "",
        reupwd: ""
        //checked: true
      },
      registerRules: {
        uphone: [{ required: true, validator: validatePhone, trigger: "blur" }],
        yzm: [{ required: true, message: "请输入验证码~", trigger: "change" }],
        upwd: [
          { required: true, validator: validateNewpassword, trigger: "blur" },
          { min: 6, max: 11, message: "请输入6-11位字符" }
        ],
        reupwd: [
          { required: true, validator: validateSurepassword, trigger: "blur" },
          { min: 6, max: 11, message: "请输入6-11位字符" }
        ]
      }
    };
  },
  methods: {
    //获取验证码
    getVerify: function() {
      //验证码倒计时
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.countdown = TIME_COUNT;
        this.isVerify = false;
        this.timer = setInterval(() => {
          if (this.countdown > 0 && this.countdown <= TIME_COUNT) {
            this.countdown--;
            console.log(this.countdown);
          } else {
            this.isVerify = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
      this.axios
        .post(
          "http://188.131.173.104/hlw+/sendmsg.php",
          JSON.stringify(this.registers)
        )
        .then(res => {
          console.log(res.data);
          if (res.data.verify == true) {
            console.log(res.data.verify);
          }
        });
    },
    //注册
    register: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("hjgfd");
          this.axios
            .post(
              "http://188.131.173.104/hlw+/rejister.php",
              JSON.stringify(this.registers)
            )
            .then(res => {
              console.log(res.data);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss">
@import "../../css/register.scss";
</style>


