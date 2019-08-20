<template>
  <div id="dataList">
    <div class="topCard">
      <topInfo></topInfo>
    </div>
    <div class="dataList">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple announce-card">
            <div class="announce-card-content">
              <div class="announce-top">
                <span>
                  <i class="el-icon-s-claim"></i>
                </span>
                <span>项目更新日志：</span>
              </div>
              <div class="announce-body">
                <div class="announce-body-content">
                  <p class="refresh-data">
                    <span>日期：</span>
                    <span class="data">2019-08-05</span>
                  </p>
                  <div class="refresh-content">
                    <p class="content-title">更新内容：</p>
                    <ul class="content-body">
                      <li>首页数据导航区域重新改版及ui优化</li>
                      <li>首页新增项目更新日志列表展示</li>
                      <li>首页新增访问量和下载量柱状图</li>
                      <li>首页新增用户投资区域雷达图</li>
                      <li>首页新增用户价格列表</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16" class="userData">
          <div class="grid-content bg-purple user-data-card">
            <userData></userData>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="data-info">
        <el-col :span="6">
          <div class="grid-content bg-purple user-kind-data">
              <userKind></userKind>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple income-data">
              <incomeData></incomeData>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple course-data">
              <courseData></courseData>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import topInfo from "./topInfo.vue";
import userData from "../data/components/echarts/userData.vue";
import userKind from "../data/components/echarts/userKind.vue";
import incomeData from "../data/components/echarts/incomeData.vue";
import courseData from "../data/components/echarts/courseData.vue"
export default {
  name: "dataList",
  data: function() {
    return {};
  },
  components: {
    topInfo,
    userData,
    userKind,
    incomeData,
    courseData
  }
};
</script>
<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #fff;
}
</style>
<style lang="scss">
@import "../../css/dataList.scss";
</style>