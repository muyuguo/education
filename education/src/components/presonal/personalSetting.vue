<template>
  <div id="personalSetting">
    <div class="nav">
      <headerView></headerView>
    </div>
    <div class="main">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="资料设置" name="first">
          <div class="data-setting">
            <div class="data-setting-top">
              <span>完善资料，你我更亲近</span>
            </div>
            <table class="basic-info">
              <tbody>
                <tr>
                  <td>
                    <h2>基本信息</h2>
                  </td>
                </tr>
                <tr class="b-10"></tr>
                <tr>
                  <td class="title">
                    <i class="f-sign">*</i>
                    昵称
                  </td>
                  <td>
                    <div class="nickName">
                      <div class="nickName-container">
                        <el-input v-model="input1" placeholder="请输入内容"></el-input>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr style="width:1000px;">
                  <td class="title">头像</td>
                  <td style="width:1000px;">
                    <div class="avatar">
                      <div class="imgbox">
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleAvatarSuccess"
                          :before-upload="beforeAvatarUpload"
                        >
                          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                      </div>
                      <div class="infobox">
                        <span class="info">只允许上传jpg、png格式的图片，且大小不能超过20M</span>
                        <div class="modify-imgbox"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="title">性别</td>
                  <td>
                    <div class="eBcon">
                      <el-radio v-model="radio2" label="1" border size="medium">男</el-radio>
                      <el-radio v-model="radio2" label="2" border size="medium">女</el-radio>
                      <el-radio v-model="radio2" label="3" border size="medium">保密</el-radio>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="title">个人介绍</td>
                  <td>
                    <div class="eBcon">
                      <el-input
                        type="textarea"
                        placeholder="请输入内容,最多输入50个字"
                        v-model="textarea"
                        maxlength="50"
                        show-word-limit
                      ></el-input>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>联系信息</h2>
                  </td>
                </tr>
                <tr class="b-10"></tr>
                <tr>
                  <td class="title">真实姓名</td>
                  <td>
                    <div class="f-fl">
                      <el-input v-model="input2" placeholder="请输入内容"></el-input>
                      <p class="tip">不会以任何形式向第三方透露</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="title">
                    <i class="f-sign">*</i>
                    常用邮箱
                  </td>
                  <td>
                    <div class="eBcon">
                      <div class="accMail">
                        <p style="height:30px;">{{personalInfo.email}}</p>
                        <el-button
                          class="modify-email"
                          type="text"
                          @click="dialogFormVisible1 = true"
                        >点击修改</el-button>

                        <el-dialog title="修改邮箱" :visible.sync="dialogFormVisible1">
                          <el-form :model="personalInfo">
                            <el-form-item label="邮箱地址" :label-width="formLabelWidth">
                              <el-input v-model="personalInfo.email" autocomplete="off" clearable></el-input>
                            </el-form-item>
                          </el-form>
                          <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
                          </div>
                        </el-dialog>
                        <p class="warning">
                          <i class="el-icon-info" style="color:#f66;font-size:16px;"></i>用于接收来自平台和课程的邮件通知，非常重要
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="title">手机号码</td>
                  <td>
                    <dir class="eBcon">
                      <div class="phone">
                        <p style="height:30px;">{{personalInfo.phone}}</p>
                        <el-button
                          class="modify-phone"
                          type="text"
                          @click="dialogFormVisible2 = true"
                        >点击修改</el-button>

                        <el-dialog title="修改手机" :visible.sync="dialogFormVisible2">
                          <el-form :model="personalInfo">
                            <el-form-item label="手机号码" :label-width="formLabelWidth">
                              <el-input v-model="personalInfo.phone" autocomplete="off" clearable></el-input>
                            </el-form-item>
                          </el-form>
                          <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
                          </div>
                        </el-dialog>
                        <p class="warning">用于优质课程的学习提醒等服务，手机号不会对外公开，请放心</p>
                      </div>
                    </dir>
                  </td>
                </tr>
                <tr>
                  <td class="title">QQ号码</td>
                  <td>
                    <div class="qq">
                      <el-input v-model="input3" placeholder="请输入内容"></el-input>
                      <p class="warning">用于课程的高效交流及老师答疑解惑</p>
                    </div>
                  </td>
                </tr>
                
                    <div class="submit"><el-button type="success" plain>保存信息</el-button></div>
                  
              </tbody>
            </table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="账号设置" name="second">
          <div class="count-setting">
            <div class="user-phone">
              <span class="title">手机:</span>
              <span class="container">{{personalInfo.phone}}</span>
              <span class="binding">
                <el-button class="modify-phone" type="text" @click="dialogFormVisible3 = true">点击修改</el-button>

                <el-dialog title="修改手机" :visible.sync="dialogFormVisible3">
                  <el-form :model="personalInfo">
                    <el-form-item label="手机号码" :label-width="formLabelWidth">
                      <el-input v-model="personalInfo.phone" autocomplete="off" clearable></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible3 = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
                  </div>
                </el-dialog>
              </span>
            </div>
            <div class="user-email">
              <span class="title">邮箱:</span>
              <span class="container">{{personalInfo.email}}</span>
              <span class="binding">
                <el-button class="modify-email" type="text" @click="dialogFormVisible4 = true">点击修改</el-button>

                <el-dialog title="修改邮箱" :visible.sync="dialogFormVisible4">
                  <el-form :model="personalInfo">
                    <el-form-item label="邮箱地址" :label-width="formLabelWidth">
                      <el-input v-model="personalInfo.email" autocomplete="off" clearable></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible4 = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible4 = false">确 定</el-button>
                  </div>
                </el-dialog>
              </span>
            </div>
            <div class="user-password">
              <span class="title">密码:</span>
              <span class="container">**********</span>
              <span class="binding">
                <el-button class="modify-email" type="text" @click="dialogFormVisible5 = true">点击修改</el-button>

                <el-dialog title="修改密码" :visible.sync="dialogFormVisible5">
                  <el-form :model="personalInfo">
                    <el-form-item label="输入密码" :label-width="formLabelWidth">
                      <el-input
                        v-model="personalInfo.password"
                        autocomplete="off"
                        clearable
                        show-password
                      ></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible5 = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible5 = false">确 定</el-button>
                  </div>
                </el-dialog>
              </span>
            </div>
            <div class="account-binding">
              <span class="title">账号绑定:</span>
              <div class="qq-binding">
                <img src="../../assets/QQ.png" alt />
                <span class="binding">
                  <a href>点击绑定</a>
                </span>
              </div>
              <div class="wechat-binding">
                <img src="../../assets/微信.png" alt />
                <span class="binding">
                  <a href>点击绑定</a>
                </span>
              </div>
              <div class="github-binding">
                <img src="../../assets/github.png" alt />
                <span class="binding">
                  <a href>点击绑定</a>
                </span>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
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
  name: "personalSetting",
  data: function() {
    return {
      activeName: "first",
      input1: "",
      input2: "",
      input3: "",
      imageUrl: "",
      radio2: "3",
      textarea: "",
      dialogFormVisible5: false,
      dialogFormVisible4: false,
      dialogFormVisible3: false,
      dialogFormVisible2: false,
      dialogFormVisible1: false,
      personalInfo: {
        id: 1,
        email: "2045657832@qq.com",
        phone: 17862176379,
        password: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(this.imageUrl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type == "image/png";

      const isLt20M = file.size / 1024 / 1024 < 20;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt20M) {
        this.$message.error("上传头像图片大小不能超过 20MB!");
      }
      return isJPG && isLt20M;
    }
  },
  components: {
    headerView: header,
    footerWrapeer: footer
  }
};
</script>
<style lang="scss">
@import "../../css/personalSetting.scss";
</style>
