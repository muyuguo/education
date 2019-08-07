<template>
  <div id="personalInfo">
    <div class="nav">
      <headerView></headerView>
    </div>
    <div class="main">
      <div class="info-top">
        <div class="left-message">
          <router-link class="img-info" to='/personalInfo'>
            <img src="../../assets/dog.png" alt />
          </router-link>
          <div class="complex-info">
            <span class="name">尼古拉斯赵二狗</span>
            <span class="grade">L3</span>
            <router-link to="/vip">
              <span class="open-vip">开通会员</span>
            </router-link>
            <router-link to="/personalSetting">
              <span class="personal-edit">
                <i class="el-icon-edit"></i>
              </span>
            </router-link>
            <span class="join-time">2018-11-12 加入共产国际</span>
          </div>
        </div>
        <div class="right-message"></div>
      </div>
      <div class="my-course">
        <div class="my-course-top">
          <span>我的课程</span>
        </div>
        <div class="my-course-main">
          <ul>
            <li>
              <router-link to>
                <div class="detail-top">
                  <img src="../../assets/dog.png" alt />
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
            <li>
              <router-link to>
                <div class="detail-top">
                  <img src="../../assets/dog.png" alt />
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
            <li>
              <router-link to>
                <div class="detail-top">
                  <img src="../../assets/dog.png" alt />
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
            <li>
              <router-link to>
                <div class="detail-top">
                  <img src="../../assets/dog.png" alt />
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
    <div class="footer">
      <footerWrapeer></footerWrapeer>
    </div>
  </div>
</template>
<script>
import header from "../plugin/header.vue";
import footer from "../footer-page/footerWrapeer.vue";
export default {
  name: "personalInfo",
  data: function() {
    return {};
  },
  components: {
    headerView: header,
    footerWrapeer: footer
  }
};
</script>
<style lang="scss">
@import "../../css/personalInfo.scss";
</style>

