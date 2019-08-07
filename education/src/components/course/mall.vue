<template>
  <div id="mall">
    <div class="nav">
      <headerView></headerView>
    </div>
    <div class="main">
      <div class="mall-banner" :style="{'background-image':`url(${banner})`}">
        <div class="info">
          <div class="golden-bean">
            <span>我的金豆:</span>
            <span>{{}}个</span>
          </div>
          <el-tooltip content="通过在 社区 -> 讨论 每日签到获得" placement="top">
            <p>
              <i class="el-icon-question"></i> 如何获得金豆
            </p>
          </el-tooltip>
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
  name: "mall",
  data: function() {
    return {
      //banner背景图
      banner: require("../../assets/bannerBg.jpg")
    };
  },
  components: {
    headerView: header,
    footerWrapeer: footer
  }
};
</script>
<style lang="scss">
@import "../../css/mall.scss";
</style>

