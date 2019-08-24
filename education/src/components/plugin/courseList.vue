<template>
  <div id="courseList">
    <div class="nav">
      <headerView></headerView>
    </div>
    <div class="main-content">
      <!--分类-->
      <div class="classify-wrapper">
        <div class="classify-options">
          <div class="options-content">
            <div class="options-filters">
              <div class="options-top">
                <div class="title-wrapper">
                  <span class="filter-title">类别：</span>
                </div>
                <div class="item-wrapper">
                  <span
                    @click="activeKind(index,item.course)"
                    :class="{activeKind: index == isKind}"
                    class="filter-item"
                    v-for="(item, index) in courseKind"
                    :key="index"
                  >{{item.course}}</span>
                </div>
              </div>
              <div class="tag-wrapper">
                <div class="title-wrapper">
                  <span class="filter-title">标签：</span>
                </div>
                <div
                  class="item-wrapper"
                  v-show="index == isKind"
                  v-for="(item, index) in courseKind"
                  :key="index"
                >
                  <span
                    @click="activeTag(index,list.title)"
                    :class="{activeTag: index == isTag || list.title == '全部'}"
                    class="filter-item"
                    style="float: left;"
                    v-for="(list, index) in item.list"
                    :key="index"
                  >{{list.title}}</span>
                </div>
              </div>
              <div class="hr-line"></div>
              <div class="course-group">
                <div class="right-options">
                  <div class="select-option">
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        全部
                        <i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="over">全部</el-dropdown-item>
                        <el-dropdown-item @click.native="free">免费</el-dropdown-item>
                        <el-dropdown-item @click.native="vip">会员</el-dropdown-item>
                        <el-dropdown-item @click.native="self">私有</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                  <div class="button-options">
                    <el-button type="success" plain>加入私有课程</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--课程列表-->
        <div class="course-list">
          <div class="course-content">
            <div class="course-info">
              <div class="course-item-box">
                <router-link tag="li" to v-for="(item, index) in courseInfo" :key="index">
                  <div class="course-item">
                    <div class="item-box-top">
                      <div class="course-cover">
                        <img v-lazy="item.cimg" :key="item.cimg" alt />
                      </div>
                      <div class="status-info"></div>
                    </div>
                    <div class="item-box-bottom">
                      <div class="course-info-wrapper">
                        <h3>{{item.cname}}</h3>
                        <span>{{item.cschool}}</span>
                        <span class="name">{{item.cteacher}}</span>
                        <div
                          class="course-description"
                        >要在实验楼愉快地学习，先要熟练地使用 Linux，本实验中通过在线动手实验的方式学习 Linux 常用命令，用户与权限管理，目录结构与文件操作，环境变量，计划任务，管道与数据流重定向等基本知识点。</div>
                      </div>
                      <div class="course-data-meta">
                        <div class="meta-data-inner">
                          <span v-if="item.cfy == 'mf'" class="course-type-free">免费</span>
                          <span v-else-if="item.cfy == 'hy'" class="course-type-vip">会员</span>
                          <span v-else-if="item.cfy == 'sy'" class="course-type-self">私有</span>
                          <span
                            @click.stop="changeLike(index,item.cid)"
                            class="nolike"
                            v-show="isLike"
                          >
                            <i class="el-icon-star-off"></i>
                          </span>
                          <span @click="returnLike(index,item.cid)" class="like" v-show="noLike">
                            <i class="el-icon-star-on"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="base-pagination">
            <el-pagination
              background
              :current-page="page"
              layout="prev, pager, next"
              @next-click="nextPage"
              @prev-click="prevPage"
              @current-change="currentChange"
              :total="100"
            ></el-pagination>
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
  name: "courseList",
  data: function() {
    return {
      courseInfo: "",
      page: 1,
      yesLike: false,
      isLike: true,
      noLike: false,
      isKind: 0,
      isTag: -1,
      courseKind: [
        { course: "全部", list: [{ title: "全部" }] },
        {
          course: "理学",
          list: [
            { title: "动力气象学" },
            { title: "高等数学" },
            { title: "统计学" },
            { title: "线性代数" },
            { title: "概率论" },
            { title: "地理科学" },
            { title: "信息与计算科学" },
            { title: "微积分" },
            { title: "应用物理" },
            { title: "地球物理" },
            { title: "化学" }
          ]
        },
        {
          course: "工学",
          list: [
            { title: "力学" },
            { title: "光学工程" },
            { title: "电子信息工程" },
            { title: "工程力学" },
            { title: "冶金工程" },
            { title: "环境工程" },
            { title: "生物医学" },
            { title: "岩土工程" },
            { title: "土木工程" },
            { title: "电气工程" },
            { title: "材料物理与化学" }
          ]
        },
        {
          course: "计算机",
          list: [
            { title: "C/C++" },
            { title: "Java程序设计" },
            { title: "网络安全" },
            { title: "计算机导论" },
            { title: "人工智能" },
            { title: "web前端" },
            { title: "后端" },
            { title: "大数据科学" },
            { title: "Python" },
            { title: "Php" },
            { title: "通信原理" },
            { title: "算法与数据结构" },
            { title: "物联网" }
          ]
        },
        { course: "管理" },
        { course: "经济学" },
        { course: "外语" },
        { course: "四六级" },
        { course: "期末冲刺" },
        { course: "考研" }
      ],
      KindName: ""
    };
  },
  methods: {
    changeLike: function(index, id) {
      let key = index + 1;
      if (this.$store.state.isLogin == false) {
        this.$message({
          type: "warning",
          dangerouslyUseHTMLString: true,
          message: "<strong>请先登录</strong>",
          center: true
        });
      } else {
        console.log(id, key);
        if (key == id) {
          this.yesLike = true;
          this.noLike = true;
          this.isLike = false;
        }
      }
    },
    //激活课程类别
    activeKind: function(index, name) {
      this.isKind = index;
      this.KindName = name;
      if (index == 0 && name == "全部") {
        this.axios
          .post(
            "http://188.131.173.104/hlw+/coursepage.php",
            JSON.stringify({ page: this.page })
          )
          .then(res => {
            //console.log(this.page);
            this.courseInfo = res.data;
            this.$router.push({
              path: "/courseList/page",
              query: {
                page: this.page
              }
            });
            this.courseInfo.pop();
            //console.log(this.courseInfo);
          });
      } else {
        this.axios
          .post(
            "http://188.131.173.104/hlw+/courseDL.php",
            JSON.stringify({ direction: name, label: null })
          )
          .then(res => {
            //console.log(res.data);
            this.$router.push({
              path: "/courseList/page",
              query: {
                page: this.page,
                kind: name
              }
            });
            this.courseInfo = res.data;
            //console.log(this.courseInfo);
          });
      }
    },
    //激活课程标签
    activeTag: function(index, name) {
      this.isTag = index;
      if (name == "全部") {
        this.axios
          .post(
            "http://188.131.173.104/hlw+/coursepage.php",
            JSON.stringify({ page: this.page })
          )
          .then(res => {
            //console.log(this.page);
            this.courseInfo = res.data;
            this.$router.push({
              path: "/courseList/page",
              query: {
                page: this.page
              }
            });
            this.courseInfo.pop();
            //console.log(this.courseInfo);
          });
      } else {
        this.axios
          .post(
            "http://188.131.173.104/hlw+/courseDL.php",
            JSON.stringify({
              direction: null,
              label: name
            })
          )
          .then(res => {
            //console.log(res.data);
            this.$router.push({
              path: "/courseList/page",
              query: {
                page: this.page,
                kind: this.KindName,
                type: name
              }
            });
            this.courseInfo = res.data;
            //console.log(this.courseInfo);
          });
      }
    },
    returnLike: function(index, id) {
      let key = index + 1;
      if (key == id) {
        this.yesLike = false;
        this.noLike = false;
        this.isLike = true;
      }
    },
    nextPage: function(val) {
      let page = val;
      this.$router.push({ path: "/courseList/page", query: { page: page } });
      this.getList(page);
      //console.log(this.page);
    },
    prevPage: function(val) {
      let page = val;
      this.$router.push({ path: "/courseList/page", query: { page: page } });
      this.getList(page);
      //console.log(this.page);
    },
    currentChange(val) {
      let page = val;
      this.$router.push({ path: "/courseList/page", query: { page: page } });
      this.getList(page);
    },
    getList: function(page) {
      this.axios
        .post(
          "http://188.131.173.104/hlw+/coursepage.php",
          JSON.stringify({ page: page })
        )
        .then(res => {
          //console.log(page);
          this.courseInfo = res.data;
          this.courseInfo.pop();
          //console.log(this.courseInfo);
        });
    },
    //课程类型选择
    over: function() {
      this.axios
        .post(
          "http://188.131.173.104/hlw+/coursepage.php",
          JSON.stringify({ page: this.page })
        )
        .then(res => {
          //console.log(this.page);
          this.courseInfo = res.data;
          this.$router.push({
            path: "/courseList/page",
            query: {
              page: this.page
            }
          });
          this.courseInfo.pop();
          //console.log(this.courseInfo);
        });
    },
    free: function() {
      //console.log("free");
      this.axios
        .post(
          "http://188.131.173.104/hlw+/coursefy.php",
          JSON.stringify({ cfy: "mf" })
        )
        .then(res => {
          //console.log(res.data);
          this.$router.push({
            path: "/courseList/page",
            query: {
              page: this.page,
              cfy: "mf"
            }
          });
          this.courseInfo = res.data;
        });
    },
    vip: function() {
      this.axios
        .post(
          "http://188.131.173.104/hlw+/coursefy.php",
          JSON.stringify({ cfy: "hy" })
        )
        .then(res => {
          //console.log(res.data);
          this.$router.push({
            path: "/courseList/page",
            query: {
              page: this.page,
              cfy: "hy"
            }
          });
          this.courseInfo = res.data;
        });
    },
    self: function() {
      this.axios
        .post(
          "http://188.131.173.104/hlw+/coursefy.php",
          JSON.stringify({ cfy: "sy" })
        )
        .then(res => {
          //console.log(res.data);
          this.$router.push({
            path: "/courseList/page",
            query: {
              page: this.page,
              cfy: "sy"
            }
          });
          this.courseInfo = res.data;
        });
    }
  },
  created: function() {
    this.getList(1);
  },
  components: {
    headerView: header,
    footerWrapeer: footer
  }
};
</script>
<style lang="scss">
@import "../../css/courseList.scss";
</style>
