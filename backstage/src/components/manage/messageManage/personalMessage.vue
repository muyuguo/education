<template>
  <div id="personalMessage">
    <el-row :gutter="20">
      <el-col :span="7">
        <div class="grid-content bg-purple personal-info">
          <div class="info-top">
            <h3>个人中心</h3>
          </div>
          <div class="info-main">
            <div class="avatar-info">
              <img src="../../../assets/user.gif" alt />
              <h4>{{this.data+"好" + this.user}}{{"，您有" +this.message + "条未读消息请尽快查阅"}}</h4>
            </div>
            <div class="personal-info">
              <p class="maessage-top">
                <i class="el-icon-s-custom"></i> 个人信息
              </p>
              <p class="line"></p>
              <div class="message-info">
                <div class="name introduce">
                  <p class="label">姓名：</p>
                  <p class="content">赵四</p>
                </div>
                <div class="nickname introduce">
                  <p class="label">昵称：</p>
                  <p class="content">尼古拉赵四</p>
                </div>
                <div class="phone introduce">
                  <p class="label">手机：</p>
                  <p class="content">178 3289 9876</p>
                </div>
                <div class="email introduce">
                  <p class="label">邮箱：</p>
                  <p class="content">2045687665@163.com</p>
                </div>
                <div class="qq introduce">
                  <p class="label">Q Q：</p>
                  <p class="content">2045687665</p>
                </div>
                <div class="office introduce">
                  <p class="label">介绍：</p>
                  <p class="content">***大学教授</p>
                </div>
                <div class="over introduce">
                  <p class="label">钱包：</p>
                  <p class="content">2152元</p>
                </div>
              </div>
              <p class="maessage-top">
                <i class="iconfont iconjishu"></i> 掌握知识
              </p>
              <p class="line"></p>
              <div class="course-info">
                <p class="title">高等数学</p>
                <el-progress :percentage="number" :status="typeInfo"></el-progress>
                <p class="title">离散数学</p>
                <el-progress :percentage="number" :status="typeInfo"></el-progress>
                <p class="title">js</p>
                <el-progress :percentage="number" :status="typeInfo"></el-progress>
                <p class="title">html</p>
                <el-progress :percentage="80"></el-progress>
                <p class="title">css</p>
                <el-progress :percentage="90"></el-progress>
                <p class="title">vue</p>
                <el-progress :percentage="80"></el-progress>
                <p class="title">概率统计</p>
                <el-progress :percentage="75"></el-progress>
                <p class="title">网络通信原理</p>
                <el-progress :percentage="90"></el-progress>
                <p class="title">计算机基础</p>
                <el-progress :percentage="100" status="success"></el-progress>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="notice">
          <el-alert title="提示：您发布的消息刚刚通过验证" type="success"></el-alert>
          <el-alert title="提示：您应该做出纠正" type="info"></el-alert>
          <el-alert title="提示：您的课程已经结束" type="warning"></el-alert>
          <el-alert title="提示：发布出错" type="error"></el-alert>
        </div>
        <div class="grid-content bg-purple personal-data">
          <div class="block-line">
            <div class="line-text">
                <p> <i class="iconfont iconshijian"></i> 时间线</p>
                <p class="time-line"></p>
            </div>
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>更新课程 微积分原理</h4>
                  <p>赵四 提交于 2018/4/4 12:36</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                  <h4>更新课程 微积分原理</h4>
                  <p>赵四 提交于 2018/4/3 18:09</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                  <h4>发布课程 微积分原理</h4>
                  <p>赵四 提交于 2018/4/2 20:46</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "personalMessage",
  data: function() {
    return {
      imageUrl: "",
      data: "早上",
      user: "赵四",
      message: 6,
      number: 100,
      typeInfo: ""
    };
  },
  methods: {},
  mounted: function() {
    if (this.number == 100) {
      this.typeInfo = "success";
    }
    if (this.number < 100) {
      this.typeInfo == "";
    }
  }
};
</script>
<style lang="scss">
@import "../../../css/personalMessage.scss";
</style>