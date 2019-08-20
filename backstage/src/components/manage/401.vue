<template>
  <div id="error">
    <div class="error-img">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple left-text">
            <h1 class="text-jumbo">Oops!</h1>
            <h2>你没有权限去该页面</h2>
            <h6 class="tip">你可以仔细查看你的权限</h6>
            <ul>
              <li>或者你可以去:</li>
              <router-link class="return-index" tag="li" to="/dataView">回首页瞅瞅</router-link>
            </ul>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple right-img">
            <img src="../../assets/401(2).gif" alt="">
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "error",
  data: function() {
    return {};
  }
};
</script>
<style lang="scss">
#error {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .error-img {
    width: 1000px;
    margin: 0 auto;
  }
 
  //左侧文字区域
  .left-text {
    width: 100%;
    height: 320px;
    padding-top: 80px;
    padding-left: 160px;
    margin-top: 100px;
    text-align: left;
    .text-jumbo {
      font-size: 60px;
      font-weight: 700;
      color: #484848;
      margin-bottom: 40px;
    }
    .tip {
      margin-top: 40px;
    }
    ul {
      margin-top: 30px;
      padding-left: 50px;
      font-size: 14px;
      .return-index {
        color: #06af77;
        font-weight: bold;
        cursor: pointer;
      }
      .return-index:hover {
        text-decoration: underline;
      }
    }
  }
  //右侧图片区域
  .right-img {
    width: 100%;
    height: 400px;
    margin-top: 100px;
    text-align: left;
  }
  
}
.bg-purple {
  background: #fff;
}
#index .main-content .main-wrapper {
  width: 100%;
  height: 90%;
  position: relative;
  padding: 20px;
}
</style>