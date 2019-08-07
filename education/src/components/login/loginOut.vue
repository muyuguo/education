<template>
  <div id="loginOut">
    <div class="nav">
      <headerView></headerView>
    </div>
    <div class="main">
      <div class="loginout-container">
        <div class="loginout-main">
          <div class="main-top">
            <i style="margin-right:20px;color:#41B883;font-size:60px;" class="el-icon-info"></i>
            <span>您已退出登录！</span>
          </div>
          <div class="main-container">
            <img src="../../assets/笑脸.png" alt />
            <p>
              有意见或者建议请
              <router-link to>反馈</router-link>给我们
            </p>
            <p class="other">或者您想</p>
            <el-button type="info" plain @click="returnLogin">重新登录</el-button>
          </div>
        </div>
        <div class="loginout-footer">{{textList[this.$store.state.count].text}}</div>
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
  name: "loginOut",
  data: function() {
    return {
      textList: [
        { id: 1, text: "路漫漫其修远兮，吾将上下而求索。—— 屈原" },
        { id: 2, text: "愿君学长松，慎勿作桃李。—— 李白" },
        { id: 3, text: "心事浩茫连广宇，于无声处听惊雷。—— 鲁迅" },
        { id: 4, text: "不要等待运气降临，应该去努力掌握知识。—— 弗兰明" }
      ],
      count: 0
    };
  },
  components: {
    headerView: header,
    footerWrapeer: footer
  },
  methods: {
    returnLogin: function() {
      this.$router.push("/login");
    }
  },
  mounted: function() {
    console.log(this.$store);
    console.log(this.$route.path)
    if ((this.$store.state.count == 0) && (this.$route.path == '/loginOut')) {
      let i = -1;
      setInterval(() => {
        //通过store的commit方法调用mutation,传入mutation的函数名称和参数
        i++;
        if (i == 4) {
          i = 0;
        }
        console.log(i);
        this.$store.commit("updateCount", i);
      }, 10000);
    }
  }
};
</script>
<style lang="scss">
@import "../../css/loginOut.scss";
</style>

