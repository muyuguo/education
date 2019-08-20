<template>
  <div id="top-nav">
    <div class="left-content">
      <div class="logo">
        <img src="../../assets/logo.png" alt="logo" title="星梦教育" />
      </div>
    </div>
    <div class="right-content">
      <div class="right-complex">
        <ul>
          <router-link to="/messageInfo" tag="li" class="message-announce">
            <el-tooltip class="item" effect="dark" content="您有新的消息" placement="bottom">
              <el-badge value="new" class="item">
                <i class="el-icon-bell"></i>
              </el-badge>
            </el-tooltip>
          </router-link>
          <li class="fullscreen">
            <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
              <i class="iconfont iconquanping" v-show="isNofullscreen" @click="fullscreen"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="退出全屏" placement="bottom">
              <i class="iconfont icontuichuquanping" v-show="isFullscreen" @click="fullscreen"></i>
            </el-tooltip>
          </li>
          <li class="complex-menu">
            <el-dropdown trigger="click">
              <span>
                <img src="../../assets/user.gif" alt="user" />
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link tag="li" to="/personalMessage">个人中心</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link tag="li" to="dataView">首页</router-link>
                </el-dropdown-item>
                <el-dropdown-item divided>
                  <router-link tag="li" to="/">退出登录</router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="loginout">
            <el-tooltip class="item" effect="dark" content="退出" placement="bottom">
              <i class="iconfont icontuichu" @click="logout"></i>
            </el-tooltip>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "top-nav",
  data: function() {
    return {
      isFullscreen: false,
      isNofullscreen: true
    };
  },
  methods: {
    //请求全屏事件，根据isNofullscreen为true还是false来判断请求事件
    fullscreen: function() {
      let element = document.documentElement;
      if (this.isFullscreen == true) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.isFullscreen = !this.isFullscreen;
      this.isNofullscreen = !this.isNofullscreen;
      console.log(this.isFullscreen, this.isNofullscreen);
    },
    logout: function() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss">
@import "../../css/header.scss";
</style>