<template>
  <div id="forum">
    <div class="top-nav">
      <headerView></headerView>
    </div>
    <div class="main">
      <div class="main-container" v-show="isMainContainer">
        <!--帖子区-->
        <div class="left-forum-complex">
          <div class="forum-content">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="全部" name="first">
                <div class="first-content line">
                  <div class="content-avatar">
                    <div class="avatar-img">
                      <router-link to>
                        <img src="../../assets/dog.png" alt />
                      </router-link>
                    </div>
                  </div>
                  <div class="content-info">
                    <div class="content-title">
                      <router-link to="/forum/contentDetail">会员服务</router-link>
                    </div>
                    <div class="content-tip">
                      <div class="author">
                        <router-link to>石头人</router-link>
                      </div>
                      <div class="date">
                        <router-link to>2019-06-27 12:28:21</router-link>
                      </div>
                    </div>
                    <div class="content-hot"></div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="课程问答" name="second">
                <div class="first-content line"></div>
              </el-tab-pane>
              <el-tab-pane label="交流讨论" name="third">
                <div class="first-content line"></div>
              </el-tab-pane>
              <el-tab-pane label="技术分享" name="fourth">
                <div class="first-content line"></div>
              </el-tab-pane>
              <el-tab-pane label="学习总结" name="fifth">
                <div class="first-content line"></div>
              </el-tab-pane>
              <el-tab-pane label="站内公告" name="sixth">
                <div class="first-content line"></div>
              </el-tab-pane>
            </el-tabs>
            <div class="pagination">
              <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
            </div>
          </div>
        </div>
        <!--右侧功能区-->
        <div class="right-complex">
          <div class="right-content">
            <el-button type="primary" plain @click="jumpEditor">我要发帖</el-button>
            <el-button type="success" plain @click="checkIn">每日签到</el-button>
            <!--近期活动-->
            <div class="event-notice">
              <div class="box-header">
                <span>近期活动</span>
              </div>
              <div class="box-body">
                <ul>
                  <li>我要发帖我要发帖我要发帖我要发帖</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="calendar">
          <calendar :dialogCalendar="post.dialogCalendar" @listenDialog="changeDialog"></calendar>
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
import calendar from "../plugin/calendar.vue"

export default {
  name: "forum",
  data: function() {
    return {
      activeName: "first",
      isMainContainer: true,
      post: {
        dialogCalendar: false,
      }
    };
  },
  components: {
    headerView: header,
    footerWrapeer: footer,
    calendar
  },
/*mounted:function(){
  console.log(this.$route.path);
  if(this.$route.path == 'forum') {
    location.reload();
  }
},*/
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    jumpEditor:function() {
      //编程式导航，跳转至下一级页面
      this.isMainContainer = false;
      this.$router.push('/forum/editor');
    },
    //签到
    checkIn: function() {
      this.post.dialogCalendar = !this.post.dialogCalendar;
      console.log(this.post.dialogCalendar)
    },
    //通过接收子组件传值来改变父组件数据
    changeDialog: function(data) {
      this.post.dialogCalendar = data;
      console.log(data)
    }
  }
};
</script>
<style lang="scss">
@import "../../css/forum.scss";
</style>

