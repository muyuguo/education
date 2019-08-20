<template>
  <div id="topInfo">
    <div class="topInfo-wrapper">
      <ul>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <li class="study">
                <div class="left-content">
                  <img src="../../assets/用户.png" alt />
                </div>
                <div class="right-content">
                  <div class="card-panel-text">User</div>
                  <div class="card-panel-number">102,400</div>
                </div>
              </li>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <li class="teacher">
                <div class="left-content">
                  <img src="../../assets/老师.png" alt />
                </div>
                <div class="right-content">
                  <div class="card-panel-text">Teacher</div>
                  <div class="card-panel-number">42</div>
                </div>
              </li>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <li class="message">
                <div class="left-content">
                  <img src="../../assets/消息.png" alt />
                </div>
                <div class="right-content">
                  <div class="card-panel-text">Message</div>
                  <div class="card-panel-number">100</div>
                </div>
              </li>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <li class="income">
                <div class="left-content">
                  <img src="../../assets/收入.png" alt />
                </div>
                <div class="right-content">
                  <div class="card-panel-text">Income</div>
                  <div class="card-panel-number">2,400</div>
                </div>
              </li>
            </div>
          </el-col>
        </el-row>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "topInfo",
  data: function() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../../css/topInfo.scss";
</style>