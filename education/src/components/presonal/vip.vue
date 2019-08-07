<template>
  <div id="vip">
    <div class="nav">
      <headerView></headerView>
    </div>
    <div class="main">
      <div class="myvip-header">
        <div class="myvip-img">
          <img src='../../assets/vip.jpg' alt />
          <div class="myvip-detail">
              <h1>VIP会员中心</h1>
          </div>
        </div>
        <div class="myvip-open">
<div class="card-body">
    <div class="user-info">
        <div class="user-img">
            <img src="../../assets/小狗柯基.png" alt="">
            <div class="user-detail">
                <p class="name">尼古拉斯赵二狗</p>
                <span class="grade">L3</span>
                <p class="join-time">已加入慕思256天</p>
            </div>
        </div>
        <div class="user-message"></div>
    </div>
    <div class="shortly-open">
         <el-button type="warning" round>立即开通</el-button>
    </div>
</div>
        </div>
      </div>
      <div class="myvip-select">
        <div class="myvip-select-top">
          <h2>套餐选择</h2>
          <p>
            您还有10个金豆，去兑换课程
            <i class="el-icon-arrow-right"></i>
          </p>
        </div>
        <div class="myvip-select-content">
          <div class="one-month box">
            <div class="top-line">
              <h1>1个月</h1>
            </div>
            <div class="vip-money1">
              <p>￥25</p>
              <p class="buy">
                <el-button type="primary" round>立即购买</el-button>
              </p>
            </div>
          </div>
          <div class="three-month box">
            <div class="top-line">
              <h1>3个月</h1>
            </div>
            <div class="vip-money3">
              <p>￥66</p>
              <p class="buy">
                <el-button type="warning" round>立即购买</el-button>
              </p>
            </div>
          </div>
          <div class="twelve-month box">
            <div class="top-line">
              <h1>12个月</h1>
            </div>
            <div class="vip-money12">
              <p>￥275</p>
              <p class="buy">
                <el-button type="danger" round>立即购买</el-button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--VIP权益-->
      <div class="vip-equity">
        <div class="myvip-equity-top">
          <h2>专属权益</h2>
        </div>
        <div class="myvip-equity-content">
          <div class="vip-discount equity">
              <div class="equity-img">
                  <img src="../../assets/discount.png" alt="">
              </div>
              <div class="equity-content">
                  <h2>会员折扣</h2>
                  <p>购买付费课程时，可享受会员价折扣</p>
              </div>
          </div>
          <div class="vip-id equity">
              <div class="equity-img">
                  <img src="../../assets/id.png" alt="">
              </div>
              <div class="equity-content">
                  <h2>会员标识</h2>
                  <p>头像上带有会员特殊标识，彰显您的尊贵身份</p>
              </div>
          </div>
          <div class="good-class equity">
              <div class="equity-img">
                  <img src="../../assets/class.png" alt="">
              </div>
              <div class="equity-content">
                  <h2>好课畅学</h2>
                  <p>在会员期间内，无限畅学会员课程，会员课程定期更新，提供您更多的选择</p>
              </div>
          </div>
          <div class="free-read equity">
              <div class="equity-img">
                  <img src="../../assets/read.png" alt="">
              </div>
              <div class="equity-content">
                  <h2>免费阅读</h2>
                  <p>在会员期间内，每月可畅读50本电子书，电子书定期更新，提供您更多的阅读选择</p>
              </div>
          </div>
          <div class="caring-service equity">
              <div class="equity-img">
                  <img src="../../assets/service.png" alt="">
              </div>
              <div class="equity-content">
                  <h2>贴心服务</h2>
                  <p>提供贴心服务</p>
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
  name: "vip",
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
@import "../../css/vip.scss";
</style>


