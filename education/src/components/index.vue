<template>
  <div id="index" class="hello">
    <el-row :gutter="10" class="flex">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="el-col">
        <div class="grid-content bg-purple content">
          <el-container style="z-index:-2">
            <div class="scroll-nav" v-show="navBarFixed">
              <headerView></headerView>
            </div>
            <el-header class="header">
              <div class="top-header left">
                <div class="top-header-logo left" style="width:202px;height:90px;">
                  <router-link to="/container" style="width:202px;height:90px;">
                    <img src="../assets/dog.png" alt="logo" />
                  </router-link>
                </div>
                <div class="top-header-search left">
                  <div class="search">
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
                </div>
                <div class="top-header-right-menu left">
                  <router-link to="/header">后台管理</router-link>
                  <router-link to="/courseList">我的课程</router-link>
                  <router-link to="/mall">金豆商城</router-link>
                  <div class="login-register right">
                    <div class="no-login" v-show="isLoginRegister">
                      <router-link to="/login">登录</router-link>
                      <span class="login-line"></span>
                      <router-link to="/register" style="margin-left:10px;">注册</router-link>
                    </div>
                    <!--个人中心-->
                    <div class="personalInfo right" v-show="isPersonalInfo">
                      <span class="login-line" style="margin-right:20px;"></span>
                      <router-link
                        style="margin-right:20px;"
                        class="personal-center"
                        to="/personalInfo"
                      >
                        <span>{{"mosi"+$store.getters.userPhone}}</span>
                      </router-link>
                      <div
                        class="personal-img-container"
                        v-on:mouseover="addAvatarComplex(this)"
                        v-on:mouseout="removeAvatarComplex(this)"
                      >
                        <router-link class="personal-img-info" to="/personalInfo">
                          <img src="../assets/info.png" alt />
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
              <div class="top-nav">
                <div class="top-nav-menu">
                  <div class="top-nav-study left">
                    <router-link to>学习中心</router-link>
                  </div>
                  <div class="top-nav-coursea left margin-left-32">
                    <router-link to="/">今日课程</router-link>
                  </div>
                  <div class="top-nav-explore left margin-left-32">
                    <div
                      class="dropdown-menu-explore"
                      v-on:mouseover="addDropdownContent(this)"
                      v-on:mouseout="removeDropdownContent(this)"
                    >
                      <span class="dropdown-menu">探索</span>
                      <span class="dropdown-menu-arrow"></span>
                      <div class="dropdown-content" v-bind:style="{display:activeDisplay1}">
                        <div class="dropdown-menu-content" id="dropdown-menu-content">
                          <ul>
                            <li
                              class="drop-menu-content-first"
                              v-for="(list,index) in lists"
                              v-bind:key="index"
                              v-on:mouseover="addListContent(index)"
                              v-on:mouseout="removeListContent(this)"
                            >
                              <router-link to>{{list.message}}</router-link>
                              <ul class="dropdown-menu-content-list" v-show="index===isShow">
                                <li
                                  class="drop-menu-content-second"
                                  v-for="(item,index) in list.childs"
                                  v-bind:key="index"
                                >
                                  <h2>
                                    <router-link to>{{item.subTitle}}</router-link>
                                  </h2>
                                  <span>
                                    <router-link to>{{item.subMessage}}</router-link>
                                  </span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="top-nav-community left margin-left-32"
                    v-on:mouseover="addForum(this)"
                    v-on:mouseout="removeForum(this)"
                  >
                    <span class="left">社区</span>
                    <i
                      style="margin-top:9px;margin-left:3px;font-weight:bold;font-size:16px;"
                      class="el-icon-arrow-down left"
                      :style="{display:isDown}"
                    ></i>
                    <i
                      style="margin-top:9px;margin-left:3px;font-weight:bold;font-size:16px;"
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
                  <div class="top-nav-complex">
                    <ul class="right">
                      <li class="left">
                        <router-link to="/inform/course">消息中心</router-link>
                      </li>
                      <li class="left">
                        <router-link to="/">私信我们</router-link>
                        <div></div>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-header>
            <div class="main" :style="{'z-index':zIndex}">
              <!--轮播图部分-->
              <carousel></carousel>
              <!--热门课程部分-->
              <div class="popularCourse">
                <!--课程内容-->
                <div class="popular-course-container">
                  <div class="course-title">
                    <span>热门课程</span>
                  </div>
                  <div class="course-list">
                    <ul class="left">
                      <li>
                        <router-link to="/courseDetail">
                          <div class="detail-top">
                            <img src="../assets/dog.png" alt />
                          </div>
                          <div class="course-teacher">
                            <span>尼古拉赵四</span>
                          </div>
                          <div class="course-teacher-detail">
                            <span>尼古拉斯大学名师 尼古拉赵四老师</span>
                          </div>
                          <div class="detail-main">
                            <span>开启人生规划第一课fvddddddddddddddddddd</span>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="commetn-community">
                  <router-link to="/forum" tag="li">
                    <img src="../assets/comment.png" alt />
                  </router-link>
                  <router-link to="/forum" tag="li">
                    <img src="../assets/resource.png" alt />
                  </router-link>
                  <router-link to="/forum" tag="li">
                    <img src="../assets/integral.png" alt />
                  </router-link>
                </div>

                <!--今日课程-->
                <div class="popular-course-container">
                  <div class="course-title">
                    <span>今日课程</span>
                    <router-link to class="more">
                      更多
                      <i class="el-icon-d-arrow-right"></i>
                    </router-link>
                  </div>
                  <div class="course-list">
                    <ul class="left">
                      <li>
                        <router-link to="/courseDetail">
                          <div class="detail-top">
                            <img src="../assets/dog.png" alt />
                          </div>
                          <div class="course-teacher">
                            <span>尼古拉赵四</span>
                          </div>
                          <div class="course-teacher-detail">
                            <span>尼古拉斯大学名师 尼古拉赵四老师</span>
                          </div>
                          <div class="detail-main">
                            <span>开启人生规划第一课fvddddddddddddddddddd</span>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>

                <!--理学-->
                <div class="popular-course-container">
                  <div class="course-title">
                    <span>理学</span>
                    <router-link to class="more">
                      更多
                      <i class="el-icon-d-arrow-right"></i>
                    </router-link>
                  </div>
                  <div class="course-list">
                    <ul class="left">
                      <li>
                        <router-link to="/courseDetail">
                          <div class="detail-top">
                            <img src="../assets/dog.png" alt />
                          </div>
                          <div class="course-teacher">
                            <span>尼古拉赵四</span>
                          </div>
                          <div class="course-teacher-detail">
                            <span>尼古拉斯大学名师 尼古拉赵四老师</span>
                          </div>
                          <div class="detail-main">
                            <span>开启人生规划第一课fvddddddddddddddddddd</span>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--工学-->
                <div class="popular-course-container">
                  <div class="course-title">
                    <span>工学</span>
                    <router-link to class="more">
                      更多
                      <i class="el-icon-d-arrow-right"></i>
                    </router-link>
                  </div>
                  <div class="course-list">
                    <ul class="left">
                      <li>
                        <router-link to="/courseDetail">
                          <div class="detail-top">
                            <img src="../assets/dog.png" alt />
                          </div>
                          <div class="course-teacher">
                            <span>尼古拉赵四</span>
                          </div>
                          <div class="course-teacher-detail">
                            <span>尼古拉斯大学名师 尼古拉赵四老师</span>
                          </div>
                          <div class="detail-main">
                            <span>开启人生规划第一课fvddddddddddddddddddd</span>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--计算机-->
                <div class="popular-course-container">
                  <div class="course-title">
                    <span>计算机</span>
                    <router-link to class="more">
                      更多
                      <i class="el-icon-d-arrow-right"></i>
                    </router-link>
                  </div>
                  <div class="course-list">
                    <ul class="left">
                      <li>
                        <router-link to="/courseDetail">
                          <div class="detail-top">
                            <img src="../assets/dog.png" alt />
                          </div>
                          <div class="course-teacher">
                            <span>尼古拉赵四</span>
                          </div>
                          <div class="course-teacher-detail">
                            <span>尼古拉斯大学名师 尼古拉赵四老师</span>
                          </div>
                          <div class="detail-main">
                            <span>开启人生规划第一课fvddddddddddddddddddd</span>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-wrapper">
              <footerWrapeer></footerWrapeer>
              <div class="scroll-top"></div>
            </div>
          </el-container>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import header from "../components/plugin/header.vue";
import Carousel from "./main-page/carousel.vue";
import FooterWrapeer from "./footer-page/footerWrapeer.vue";
export default {
  name: "index",
  data: function() {
    return {
      inject: ["reload"],
      input1: "",
      input2: "",
      searchText: "",
      select: "",
      activeIndex2: "1",
      isActive: false,
      activeDisplay1: "none",
      activeDisplay2: "none",
      isDown: "block",
      isUp: "none",
      isLoginRegister: true,
      isPersonalInfo: false,
      activeShow: false,
      zIndex: 300,
      isShow: 0,
      avatarComplex: false,
      navBarFixed: false,
      lists: [
        {
          id: 1,
          message: "理学",
          childs: [{ subTitle: "1", subMessage: "这是子菜单信息" }]
        },
        {
          id: 2,
          message: "工学",
          childs: [{ subTitle: "2", subMessage: "这是子菜单信息" }]
        },
        { id: 3, message: "计算机" },
        { id: 4, message: "管理" },
        { id: 5, message: "经济学" },
        { id: 6, message: "外语" },
        { id: 7, message: "四六级" },
        { id: 8, message: "期末冲刺" },
        { id: 9, message: "考研" },
        { id: 10, message: "更多" }
      ],
      Forum: [
        { title: "讨论", path: "/forum" },
        { title: "资源库", path: "/resource" }
      ]
    };
  },
  components: {
    headerView: header,
    carousel: Carousel,
    footerWrapeer: FooterWrapeer
  },
  methods: {
    handleSelect: function() {},
    //鼠标覆盖显示下拉内容
    addDropdownContent: function() {
      this.activeDisplay1 = "block";
    },
    //鼠标移出隐藏内容
    removeDropdownContent: function() {
      this.activeDisplay1 = "none";
    },
    addForum: function() {
      this.zIndex = -2;
      this.activeShow = true;
      this.isUp = "block";
      this.isDown = "none";
    },
    removeForum: function() {
      this.zIndex = 300;
      this.activeShow = false;
      this.isUp = "none";
      this.isDown = "block";
    },
    //二级菜单
    addListContent: function(index) {
      this.isShow = index;
    },
    removeListContent: function() {
      this.isShow = !this.isShow;
    },
    search: function() {
      let txt = this.searchText;
      this.$store.dispatch('userSearch',txt);
      console.log("tiaozhaun");
      this.$router.push('/search');
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
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 49) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    }
  },
  mounted: function() {
    // 避免第一个渲染的显示
    this.isShow = -1;
    if (this.$store.state.isLogin == true) {
      this.isLoginRegister = false;
      this.isPersonalInfo = true;
    }
    // 事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../css/index.scss";
</style>
