<template>
  <div id="top-nav">
    <div class="web-nav-container">
      <div class="nav-top">
        <div class="nav-container">
          <div class="logo left">
            <router-link to="/index">
              <img src="../../assets/dog.png" alt="logo" />
            </router-link>
          </div>
          <div class="left-nav-complex left">
            <!--学习中心-->
            <div class="left nav-study">
              <router-link to>学习中心</router-link>
            </div>
            <!--今日课程-->
            <div class="left nav-coursea">
              <router-link to>今日课程</router-link>
            </div>
            <!--探索-->
            <div class="nav-explore left">
              <div
                class="nav-dropdown-first"
                @mouseover="addDisplay(this)"
                @mouseout="removeDisplay(this)"
              >
                <span style="margin-right:4px;">探索</span>
                <span class="dropdown-menu-arrow"></span>
                <ul class="nav-dropdown-second" :style="{display:isDisplay}">
                  <li v-for="(item,index) in Coursea" :key="index">
                    <router-link to>{{item.title}}</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <!--社区-->
            <div
              class="nav-community left margin-left-32"
              v-on:mouseover="addForum(this)"
              v-on:mouseout="removeForum(this)"
            >
              <span class="left">社区</span>
              <i
                style="margin-top:22px;margin-left:3px;font-weight:bold;font-size:16px;"
                class="el-icon-arrow-down left"
                :style="{display:isDown}"
              ></i>
              <i
                style="margin-top:22px;margin-left:3px;font-weight:bold;font-size:16px;"
                class="el-icon-arrow-up left"
                :style="{display:isUp}"
              ></i>
              <div class="community-dropdown" v-show="activeShow">
                <ul class="community-dropdown-content">
                  <li v-for="(item,index) in Forum" :key="index">
                    <router-link :to="item.path">{{item.title}}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="right-nav-complex right">
            <div class="downland-app left">
              <span>
                <router-link to>下载客户端</router-link>
              </span>
            </div>
            <div class="search left">
              <el-input
                placeholder="请输入内容"
                v-model="searchText"
                class="input-with-select"
                @keyup.enter.native="search()"
              >
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <el-option label="课程名" value="1"></el-option>
                  <el-option label="教师名" value="2"></el-option>
                </el-select>
                <el-button @click="search()" slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <div class="login-register left">
              <div class="no-login" v-show="isLoginRegister">
                <span class="login">
                  <router-link to="/login">登录</router-link>
                </span>
                <span class="login-line"></span>
                <span class="register">
                  <router-link to="/register">注册</router-link>
                </span>
              </div>
              <!--个人中心-->
              <div class="personalInfo right" v-show="isPersonalInfo">
                <span class="login-line" style="margin-right:20px;margin-left: 0px;"></span>
                <router-link style="margin-right:20px;" class="personal-center" to="/personalInfo">
                  <span>{{"mosi"+$store.getters.userPhone}}</span>
                </router-link>
                <div
                  class="personal-img-container"
                  v-on:mouseover="addAvatarComplex(this)"
                  v-on:mouseout="removeAvatarComplex(this)"
                >
                  <router-link class="personal-img-info" to="/personalInfo">
                    <img src="../../assets/info.png" alt />
                  </router-link>
                  <div class="avatar-dropdown-complex" v-show="avatarComplex">
                    <div class="triangle1"></div>
                    <div class="triangle2"></div>
                    <ul>
                      <router-link to="/personalInfo" tag="li">我的主页</router-link>
                      <router-link to="/personalSetting" tag="li">个人设置</router-link>
                      <router-link to="/vip" tag="li">会员中心</router-link>
                      <router-link
                        to="/feedback/about"
                        tag="li"
                        style="border-bottom:1px solid #eee;"
                      >帮助与反馈</router-link>
                      <router-link to="/login" tag="li" @click.native="loginOut">退出登录</router-link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "top-nav",
  data: function() {
    return {
      select: "",
      searchText: "",
      isActive1: "block",
      isActive2: "none",
      isDisplay: "none",
      isUp: "none",
      isDown: "block",
      activeShow: false,
      avatarComplex: false,
      isLoginRegister: true,
      isPersonalInfo: false,
      Coursea: [
        { id: 1, title: "理学", message: "" },
        { id: 2, title: "工学", message: "" },
        { id: 3, title: "计算机", message: "" },
        { id: 4, title: "管理", message: "" },
        { id: 5, title: "经济学", message: "" },
        { id: 6, title: "外语", message: "" },
        { id: 7, title: "四六级", message: "" },
        { id: 8, title: "期末冲刺", message: "" }
      ],
      Forum: [
        { title: "讨论", path: "/forum" },
        { title: "资源库", path: "/resource" }
      ]
    };
  },
  methods: {
    addDisplay: function() {
      this.isActive1 = "none";
      this.isActive2 = "block";
      this.isDisplay = "block";
    },
    removeDisplay: function() {
      this.isActive2 = "none";
      this.isActive1 = "block";
      this.isDisplay = "none";
    },
    addForum: function() {
      this.activeShow = true;
      this.isUp = "block";
      this.isDown = "none";
    },
    removeForum: function() {
      this.activeShow = false;
      this.isUp = "none";
      this.isDown = "block";
    },
    addAvatarComplex: function() {
      this.avatarComplex = true;
      this.zIndex = -2;
    },
    removeAvatarComplex: function() {
      this.avatarComplex = false;
      this.zIndex = 300;
    },
    loginOut: function() {
      this.$store.state.isRemove = true;
      localStorage.removeItem("Flag");
      this.$router.push("/loginOut");
      location.reload();
    },
    search: function() {
      let txt = this.searchText;
      this.$store.dispatch("userSearch", txt);
      console.log("tiaozhaun");
      this.$router.push("/search");
    }
  },
  mounted: function() {
    if (this.$store.state.isLogin == true) {
      this.isLoginRegister = false;
      this.isPersonalInfo = true;
    }
  }
};
</script>
<style lang="scss">
@import "../../css/header.scss";
</style>


