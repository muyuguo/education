<template>
  <div id="index">
    <!--顶部导航-->
    <div class="nav">
      <top-header></top-header>
    </div>
    <!--侧边栏-->
    <div class="slider" :class="{'change-slider': isChange}">
      <el-row class="tac">
        <el-col :span="3">
          <!--:default-active="this.$route.path"能保持当前菜单选中，刷新后保持激活状态-->
          <el-menu
            :default-active="this.$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#304156"
            text-color="#fff"
            active-text-color="#41B883"
            :collapse="isCollapse"
            :collapse-transition="true"
            :unique-opened="true"
          >
            <el-menu-item index="/dataView" @click="reloadRouter('/dataView')">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">学生管理</template>
                <el-menu-item index="/studyManage" @click="reloadRouter('/studyManage')">学生管理</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">教师管理</template>
                <el-menu-item index="/teacherManage" @click="reloadRouter('/teacherManage')">教师管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="iconfont iconxinxiguanli" style="margin-left:5px;margin-right:8px;"></i>
                <span slot="title">信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  index="/personalMessage"
                  @click="reloadRouter('/personalMessage')"
                >个人信息</el-menu-item>
                <el-menu-item index="/editMessage" @click="reloadRouter('/editMessage')">修改信息</el-menu-item>
                <el-menu-item index="/messageInfo" @click="reloadRouter('/messageInfo')">消息通知</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="barchart">
              <i class="el-icon-s-data"></i>
              <span slot="title">数据管理</span>
            </el-menu-item>
            <el-menu-item index="lineChart">
              <i class="el-icon-s-tools"></i>
              <span slot="title">权限设置</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-setting"></i>
              <span slot="title">错误页面</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <!--顶部收缩按钮-->
    <div class="top-menu" :class="{'change-top-menu':isChange}">
      <div class="top-content" @click="changeMenu">
        <i class="el-icon-s-fold" v-show="isLeft"></i>
        <i class="el-icon-s-unfold" v-show="isRight"></i>
        <span>首页</span>
      </div>
    </div>
    <!--右侧主内容-->
    <div class="main-content" :class="{'change-main-content': isChange}">
      <div class="main-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import topHeader from "../nav/header.vue";
export default {
  name: "index",
  data: function() {
    return {
      isLeft: true,
      isRight: false,
      isCollapse: false,
      isChange: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //菜单展开切换
    changeMenu: function() {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse == true) {
        this.isLeft = false;
        this.isRight = true;
        this.isChange = true;
        this.$store.commit("changeWidth", "387");
        console.log(this.$store.getters.introductionWidth);
      } else {
        this.isLeft = true;
        this.isRight = false;
        this.isChange = false;
        this.$store.commit("changeWidth", "240");
        console.log(this.$store.getters.introductionWidth);
      }
    },
    //实现路由的局部刷新
    reloadRouter(path) {
      this.$router.replace({
        path: "/redirect",
        query: {
          nextPath: path
        }
      });
    }
  },
  components: {
    "top-header": topHeader
  }
};
</script>
<style lang="scss">
@import "../../css/index.scss";
</style>

