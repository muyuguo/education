<template>
  <div id="editMessage">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple baseMessage">
          <div class="editMessage">
            <div class="edit-top">
              <p>
                <i class="el-icon-edit"></i> 修改信息
              </p>
            </div>
            <el-form
              :model="messageForm"
              :rules="messageRules"
              ref="messageForm"
              label-width="100px"
              class="demo-messageForm"
            >
              <el-form-item label="姓名">
                <el-input disabled :placeholder="username"></el-input>
              </el-form-item>
              <el-form-item label="昵称" prop="nickname">
                <el-input type="text" clearable v-model="messageForm.nickname"></el-input>
              </el-form-item>
              <el-form-item label="手机" prop="phone">
                <el-input type="text" clearable v-model="messageForm.phone"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input type="text" clearable v-model="messageForm.email"></el-input>
              </el-form-item>
              <el-form-item label="Q Q" prop="qq">
                <el-input type="text" clearable v-model="messageForm.qq"></el-input>
              </el-form-item>
              <el-form-item label="工作地点" prop="place">
                <el-input type="text" clearable v-model="messageForm.place"></el-input>
              </el-form-item>
              <el-form-item label="学校" prop="school">
                <el-input type="text" clearable v-model="messageForm.place"></el-input>
              </el-form-item>
              <el-form-item label="职业" prop="office">
                <el-input type="text" clearable v-model="messageForm.office"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitMessageForm('messageForm')">保存</el-button>
                <el-button @click="resetForm('messageForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple passwordInfo">
          <div class="editPassword">
            <div class="edit-top">
              <p>
                <i class="el-icon-view"></i> 修改密码
              </p>
            </div>
            <el-form
              :model="passwordForm"
              :rules="passwordRules"
              ref="passwordForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="原密码" prop="oldPassword">
                <el-input type="password" :show-password="true" clearable v-model="passwordForm.oldPassword"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="newPassword">
                <el-input type="password" :show-password="true" clearable v-model="passwordForm.newPassword"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码" prop="reNewPassword">
                <el-input type="password" :show-password="true" clearable v-model="passwordForm.reNewPassword"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitPasswordForm('passwordForm')">保存</el-button>
                <el-button @click="resetForm('passwordForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "editMessage",
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
    // 附带callback(),是在明确通过验证的情况下去掉输入框上的loading
    let validateEmail = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入邮箱~"));
        return;
      }
      let emailRegex = /^([a-zA-Z0-9]+[_||]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_||]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (!emailRegex.test(value)) {
        callback(new Error("邮箱格式不正确！"));
      } else {
        callback();
      }
    };
    //qq验证
    let vaildQQ = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入QQ~"));
        return;
      }
      let qqRegex = /^[1-9][0-9]{4,14}/;
      if (!qqRegex.test(value)) {
        callback(new Error("QQ格式不正确! "));
      } else {
        callback();
      }
    };
    // validateField:对部分表单字段进行校验的方法
    let validateNewpassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.passwordForm.newPassword !== "") {
          this.$refs.passwordForm.validateField("reNewPassword");
        }
        callback();
      }
    };
    let validateSurepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入确认新密码"));
      } else if (value !== this.passwordForm.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      username: "赵四",
      messageForm: {
        nickname: "",
        phone: "",
        email: "",
        qq: "",
        place: "",
        school: "",
        office: ""
      },
      passwordForm: {
        oldPassword: "",
        newPassword: "",
        reNewPassword: ""
      },
      messageRules: {
        nickname: [{ required: true, message: "请输入昵称~", trigger: "blur" }],
        phone: [{ required: true, validator: validatePhone, trigger: "blur" }],
        email: [{ required: true, validator: validateEmail, trigger: "blur" }],
        qq: [{ required: true, validator: vaildQQ, trigger: "blur" }],
        place: [
          { required: true, message: "请填写工作地点~", trigger: "change" }
        ],
        school: [{ required: true, message: "请填写职业~", trigger: "change" }],
        office: [{ required: true, message: "请填写职业~", trigger: "change" }]
      },
      passwordRules: {
        oldPassword: [
          { required: true, message: "请输入原密码", trigger: "blur" },
          { min: 6, max: 11, message: "请输入6-11位字符" }
        ],
        newPassword: [
          { required: true, validator: validateNewpassword, trigger: "blur" },
          { min: 6, max: 11, message: "请输入6-11位字符" }
        ],
        reNewPassword: [
          { required: true, validator: validateSurepassword, trigger: "blur" },
          { min: 6, max: 11, message: "请输入6-11位字符" }
        ]
      }
    };
  },
  methods: {
    submitMessageForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitPasswordForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit! deds ");
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
@import "../../../css/editMessage.scss";
</style>