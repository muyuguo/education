<template>
  <div id="courseDetail">
    <div class="nav" :style="{'z-index':isZindex}">
      <headerView></headerView>
    </div>
    <div class="main">
      <div class="detail-container">
        <div class="bread-crumbs">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{}">全部课程</el-breadcrumb-item>
            <el-breadcrumb-item :to="{}">linux</el-breadcrumb-item>
            <el-breadcrumb-item :to="{}">linux基础入门</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="left-complex">
          <div class="course-introduce">
            <div class="content">
              <div class="content-top">
                <div class="header-info">
                  <h1 class="course-title">Linux 入门</h1>
                </div>
              </div>
              <div class="content-body">
                <p class="info-meta">
                  <span>5252 人学过</span>
                  <span class="ma-left-20">258 人关注</span>
                  <span class="ma-left-20">作者：尼古拉斯赵二狗</span>
                </p>
                <p
                  class="info-desc"
                >要愉快地学习，先要熟练地使用 Linux，本实验中通过在线动手实验的方式学习 Linux 常用命令，用户与权限管理，目录结构与文件操作，环境变量，计划任务，管道与数据流重定向等基本知识点。</p>
              </div>
            </div>
          </div>
          <div class="course-overview">
            <div class="content">
              <div class="overview-content">
                <div class="content-top">
                  <span class="content-title">课程概述</span>
                </div>
                <div class="content-body">
                  Linux 基本概念
                  Linux 用户与权限管理
                  Linux 环境变量
                  打包与压缩
                  Linux 上获取帮助
                  管道与数据流重定向
                  Linux 软件安装
                  Linux 常用命令
                  Linux 目录结构与文件操作
                  查找文件
                  Linux 文件系统与磁盘管理
                  Linux Crontab
                  简单的正则表达式
                  Linux 进程管理
                </div>
              </div>
            </div>
          </div>
          <div class="course-content">
            <div class="content">
              <div class="content-top">
                <span class="content-title">课程内容</span>
              </div>
              <div class="content-body">
                <ul>
                  <li v-for="(title,index) in chapterList" :key="index">
                    <h3 class="chapter-title">{{title.chapterTitle}}</h3>
                    <p
                      v-for="(text,index) in title.chapterContent"
                      :key="index"
                      class="chapter-content"
                    >{{text.content}}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="course-present">
            <div class="content">
              <div class="content-top">
                <span class="content-title">课程介绍</span>
              </div>
              <div class="content-body">
                <div class="markdown-box">
                  <h2 class="prerequisite-knowledge">先学知识</h2>
                  <ul>
                    <li></li>
                  </ul>
                  <h2 class="course-difficulty">课程难度</h2>
                  <p></p>
                  <h2 class="user-oriented">面向用户</h2>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div class="course-teacher">
            <div class="content">
              <div class="content-top">
                <span class="content-title">课程教师</span>
              </div>
              <div class="content-body">
                <div class="teacher-info">
                  <div class="teacher-avatar">
                    <div class="user-avatar">
                      <router-link to>
                        <img src="../../assets/笑脸.png" alt />
                      </router-link>
                    </div>
                  </div>
                  <div class="teacher-desc">
                    <p>
                      <span class="name">尼古拉斯赵四狗</span>
                      <span class="count">共发布过三十四门课程</span>
                    </p>
                    <router-link to>
                      查看老师的所有课程
                      <i class="el-icon-arrow-right"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="course-comment">
            <div class="content">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="课程评价" name="first">
                  <div class="my-comment">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 5, maxRows: 5}"
                      :placeholder="placeHolder"
                      v-model="content"
                      :minlength="minLength"
                    ></el-input>

                    <div class="btn-actions">
                      <div class="comment-rate">
                        <el-rate v-model="value1" :colors="colors" show-text></el-rate>
                      </div>
                      <el-button
                        id="submit"
                        type="success"
                        @click="submitComment"
                        :disabled="isDisabled"
                      >发表评论</el-button>
                    </div>
                  </div>
                  <div class="course-comment-content" v-for="(user,index) in users" :key="index">
                    <div class="comment-item">
                      <div class="user-img">
                        <div class="user-avatar">
                          <router-link to>
                            <img src="../../assets/小狗柯基.png" alt />
                          </router-link>
                        </div>
                      </div>
                      <div class="user-info">
                        <div class="comment-header">
                          <div class="user-name">
                            <router-link to class="name" target="_blank">{{user.username}}</router-link>
                            <div class="level">{{user.level}}</div>
                            <div class="rate">
                              <el-rate v-model="user.rateValue" disabled :colors="colors" show-text></el-rate>
                            </div>
                          </div>
                        </div>
                        <div class="comment-body">鸡儿</div>
                        <div class="comment-footer">
                          <div class="comment-meta">
                            <span class="creat-time">2019-07-08 01:33:16</span>
                          </div>
                          <div class="comment-operations">
                            <div class="reply">
                              <i
                                style="margin-right:5px;font-size:18px;"
                                class="el-icon-chat-dot-round"
                              ></i>
                              <span @click="reply(index)">回复</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="课程问答" name="second">
                  <div class="my-comment">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 5, maxRows: 5}"
                      placeholder="请输入您想说的话"
                      v-model="content"
                    ></el-input>
                    <div class="btn-actions">
                      <el-button type="success">发表评论</el-button>
                    </div>
                  </div>
                  <div class="course-comment-content">
                    <div class="comment-item">
                      <div class="user-img">
                        <div class="user-avatar">
                          <router-link to>
                            <img src="../../assets/小狗柯基.png" alt />
                          </router-link>
                        </div>
                      </div>
                      <div class="user-info">
                        <div class="comment-header">
                          <div class="user-name">
                            <router-link
                              to
                              class="name"
                              target="_blank"
                            >{{this.$store.state.user_name}}</router-link>
                            <div class="level">L3</div>
                          </div>
                        </div>
                        <div class="comment-body">鸡儿</div>
                        <div class="comment-footer">
                          <div class="comment-meta">
                            <span class="creat-time">2019-07-08 01:33:16</span>
                          </div>
                          <div class="comment-operations"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
        <div class="right-complex">
          <div class="box-body-top">
            <img src="../../assets/test.png" alt />
          </div>
          <div class="box-body-bottom">
            <div class="course-info">
              <el-button type="primary" plain @click="joinStudy">加入学习</el-button>
            </div>
            <div class="course-info" v-show="isStudy">
              <el-button type="success" plain>继续学习</el-button>
            </div>
            <div class="course-additional">
              <el-rate
                v-model="value2"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
            </div>
            <div class="course-actions">
              <span :plain="true" v-show="nolike" @click="changeLike">
                <i class="el-icon-star-off"></i> 收藏
              </span>
              <span v-show="islike" class="like-course" @click="returnChange">
                <i class="el-icon-star-on"></i> 已收藏
              </span>
            </div>
          </div>
          <div class="announce">
            <div class="announce-top">
              <h2>公告</h2>
            </div>
            <div class="announce-body">
              <div class="announce-content">
                安装并启动 Django
                创建应用、编写视图函数并运行显示“Hello World”
                创建模型并进行迁移
              </div>
              <div class="announce-time">2018-9-21</div>
            </div>
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
  name: "courseDetail",
  data: function() {
    return {
      value1: null,
      value2: 5,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      content: "",
      isStudy: false,
      placeHolder: "请输入您想说的话",
      isDisabled: false,
      minLength: 5,
      myTextIndex: -1,
      userIndex: -1,
      replyCount: -1,
      nolike: true,
      islike: false,
      myText: [],
      isZindex: 300,
      users: [
        { id: 1, username: "许世友", level: "L4", byReply: "", rateValue: 3 },
        { id: 2, username: "曾国藩", level: "L10", byReply: "", rateValue: 4 }
      ],
      chapterList: [
        {
          id: 1,
          chapterTitle: "第一讲 基本概念（1:15:26）[陈越]",
          chapterContent: [
            { id: 1.1, content: "1.1 什么是数据结构（4节共32:43）" },
            { id: 1.2, content: "1.2 什么是算法（3节共22:41）" },
            { id: 1.3, content: "1.3 应用实例：最大子列和问题（3节共20:02）" }
          ]
        },
        {
          id: 2,
          chapterTitle: "第二讲 线性结构（2:19:00）[何钦铭]",
          chapterContent: [
            { id: 2.1, content: "2.1 线性表及其实现(6小节共45:04)" },
            { id: 2.2, content: "2.2 堆栈(4小节共39:51)" },
            { id: 2.3, content: "2.3 队列(2小节共15:45)" },
            { id: 2.4, content: "2.4 应用实例：多项式加法运算(1小节10:37)" }
          ]
        },
        { id: 3, chapterTitle: "", chapterContent: "" },
        { id: 4, chapterTitle: "", chapterContent: "" },
        { id: 5, chapterTitle: "", chapterContent: "" },
        { id: 6, chapterTitle: "", chapterContent: "" }
      ],
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    reply: function(index) {
      let text = this.users[index].username;
      this.placeHolder = "回复:" + text;
      this.userIndex = index;
      console.log(this.placeHolder);
      console.log(this.userIndex);
      return this.placeHolder;
    },
    submitComment: function() {
      if(this.$store.state.isLogin == false) {
        this.$message({
          type: "warning",
          dangerouslyUseHTMLString: true,
          message: "<strong>请先登录</strong>",
          center: true
        });
      }
      else {
        if (this.placeHolder == "请输入您想说的话") {
        this.myText.push(this.content);
        this.content = "";
        this.placeHolder = "请输入您想说的话";
        console.log(this.myText.push(this.content));
        console.log(-1);
      } else if (this.placeHolder != "请输入您想说的话") {
        if (this.users[this.userIndex].byReply == "") {
          this.users[this.userIndex].byReply = this.content;
          console.log(this.users[this.userIndex].byReply);
          this.content = "";
          this.placeHolder = "请输入您想说的话";
        }
      }
      this.content = "";
      }
      
    },
    changeLike: function() {
      if (this.$store.state.isLogin == false) {
        this.$message({
          type: "warning",
          dangerouslyUseHTMLString: true,
          message: "<strong>请先登录</strong>",
          center: true
        });
      } else {
        this.isZindex = 100;
        this.nolike = false;
        this.islike = true;
      }
    },
    returnChange: function() {
      this.nolike = true;
      this.islike = false;
    },
    joinStudy: function() {
      this.$router.push("/courseDetail/courseMain/videoPlayer");
    }
  },
  components: {
    headerView: header,
    footerWrapeer: footer
  }
};
</script>
<style lang="scss">
@import "../../css/courseDetail.scss";
</style>