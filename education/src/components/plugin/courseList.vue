<template>
  <div id="courseList">
    <div class="nav">
      <headerView></headerView>
    </div>
    <div class="main">
      <!--分类-->
      <div class="classify-wrapper">
        <div class="classify-options">
          <div class="options-content">
            <div class="options-filters">
              <div class="options-top">
                <div class="title-wrapper">
                  <span class="filter-title">方向：</span>
                </div>
                <div class="item-wrapper">
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                </div>
              </div>
              <div class="tag-wrapper">
                <div class="title-wrapper">
                  <span class="filter-title">标签：</span>
                </div>
                <div class="item-wrapper">
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
                  <span class="filter-item">课程</span>
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
                        <el-dropdown-item>全部</el-dropdown-item>
                        <el-dropdown-item>免费</el-dropdown-item>
                        <el-dropdown-item>会员</el-dropdown-item>
                        <el-dropdown-item>私有</el-dropdown-item>
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
                <router-link tag="li" to>
                  <div class="course-item">
                    <div class="item-box-top">
                      <div class="course-cover">
                        <img v-lazy="img" :key="img" alt />
                      </div>
                      <div class="status-info"></div>
                    </div>
                    <div class="item-box-bottom">
                      <div class="course-info-wrapper">
                        <h3>Linux基础入门</h3>
                        <span>xxxx大学</span>
                        <span class="name">赵二狗</span>
                        <div
                          class="course-description"
                        >要在实验楼愉快地学习，先要熟练地使用 Linux，本实验中通过在线动手实验的方式学习 Linux 常用命令，用户与权限管理，目录结构与文件操作，环境变量，计划任务，管道与数据流重定向等基本知识点。</div>
                      </div>
                      <div class="course-data-meta">
                        <div class="meta-data-inner">
                          <span class="course-type">免费</span>
                          <span @click="changeLike" class="nolike" v-show="isNolike">
                            <i class="el-icon-star-off"></i>
                          </span>
                          <span @click="returnLike" class="like" v-show="isLike">
                            <i class="el-icon-star-on"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </router-link>
                <router-link tag="li" to>
                  <div class="course-item">
                    <div class="item-box-top">
                      <div class="course-cover">
                        <img v-lazy="img" :key="img" alt />
                      </div>
                      <div class="status-info"></div>
                    </div>
                    <div class="item-box-bottom">
                      <div class="course-info-wrapper">
                        <h3>Linux基础入门</h3>
                        <span>xxxx大学</span>
                        <span class="name">赵二狗</span>
                        <div
                          class="course-description"
                        >要在实验楼愉快地学习，先要熟练地使用 Linux，本实验中通过在线动手实验的方式学习 Linux 常用命令，用户与权限管理，目录结构与文件操作，环境变量，计划任务，管道与数据流重定向等基本知识点。</div>
                      </div>
                      <div class="course-data-meta">
                        <div class="meta-data-inner">
                          <span class="course-type">免费</span>
                          <span @click="changeLike" class="nolike" v-show="isNolike">
                            <i class="el-icon-star-off"></i>
                          </span>
                          <span @click="returnLike" class="like" v-show="isLike">
                            <i class="el-icon-star-on"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </router-link>
                <router-link tag="li" to>
                  <div class="course-item">
                    <div class="item-box-top">
                      <div class="course-cover">
                        <img v-lazy="img" :key="img" alt />
                      </div>
                      <div class="status-info"></div>
                    </div>
                    <div class="item-box-bottom">
                      <div class="course-info-wrapper">
                        <h3>Linux基础入门</h3>
                        <span>xxxx大学</span>
                        <span class="name">赵二狗</span>
                        <div
                          class="course-description"
                        >要在实验楼愉快地学习，先要熟练地使用 Linux，本实验中通过在线动手实验的方式学习 Linux 常用命令，用户与权限管理，目录结构与文件操作，环境变量，计划任务，管道与数据流重定向等基本知识点。</div>
                      </div>
                      <div class="course-data-meta">
                        <div class="meta-data-inner">
                          <span class="course-type">免费</span>
                          <span @click="changeLike" class="nolike" v-show="isNolike">
                            <i class="el-icon-star-off"></i>
                          </span>
                          <span @click="returnLike" class="like" v-show="isLike">
                            <i class="el-icon-star-on"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </router-link>
                <router-link tag="li" to>
                  <div class="course-item">
                    <div class="item-box-top">
                      <div class="course-cover">
                        <img v-lazy="img" :key="img" alt />
                      </div>
                      <div class="status-info"></div>
                    </div>
                    <div class="item-box-bottom">
                      <div class="course-info-wrapper">
                        <h3>Linux基础入门</h3>
                        <span>xxxx大学</span>
                        <span class="name">赵二狗</span>
                        <div
                          class="course-description"
                        >要在实验楼愉快地学习，先要熟练地使用 Linux，本实验中通过在线动手实验的方式学习 Linux 常用命令，用户与权限管理，目录结构与文件操作，环境变量，计划任务，管道与数据流重定向等基本知识点。</div>
                      </div>
                      <div class="course-data-meta">
                        <div class="meta-data-inner">
                          <span class="course-type">免费</span>
                          <span @click="changeLike" class="nolike" v-show="isNolike">
                            <i class="el-icon-star-off"></i>
                          </span>
                          <span @click="returnLike" class="like" v-show="isLike">
                            <i class="el-icon-star-on"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </router-link>
                <router-link tag="li" to>
                  <div class="course-item">
                    <div class="item-box-top">
                      <div class="course-cover">
                        <img v-lazy="img" :key="img" alt />
                      </div>
                      <div class="status-info"></div>
                    </div>
                    <div class="item-box-bottom">
                      <div class="course-info-wrapper">
                        <h3>Linux基础入门</h3>
                        <span>xxxx大学</span>
                        <span class="name">赵二狗</span>
                        <div
                          class="course-description"
                        >要在实验楼愉快地学习，先要熟练地使用 Linux，本实验中通过在线动手实验的方式学习 Linux 常用命令，用户与权限管理，目录结构与文件操作，环境变量，计划任务，管道与数据流重定向等基本知识点。</div>
                      </div>
                      <div class="course-data-meta">
                        <div class="meta-data-inner">
                          <span class="course-type">免费</span>
                          <span @click="changeLike" class="nolike" v-show="isNolike">
                            <i class="el-icon-star-off"></i>
                          </span>
                          <span @click="returnLike" class="like" v-show="isLike">
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
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
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
      isNolike: true,
      //关于不能用普通方式引入图片的问题
      img: require("../../assets/小狗柯基.png"),
      isLike: false
    };
  },
  methods: {
    changeLike: function() {
      if (this.$store.state.isLogin == false) {
        this.$message({
          type: "warning",
          dangerouslyUseHTMLString: true,
          message: "<strong>请先登录</strong>",
          center: true
        });
      } else {
        this.isNolike = false;
        this.isLike = true;
      }
    },
    returnLike: function() {
      this.isNolike = true;
      this.isLike = false;
    }
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
