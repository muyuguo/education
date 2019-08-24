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
      <div class="mall-offer">
        <div class="20-offer offer" @click="dialogFormVisible20 = true">
          <div class="card">
            <div class="card-top">
              <img src="../../assets/20.png" alt />
            </div>
            <div class="card-bottom">
              <h4>20元 优惠券</h4>
              <p>20金豆</p>
            </div>
          </div>
        </div>
        <el-dialog title="兑换20元优惠券" :visible.sync="dialogFormVisible20">
          <div slot="footer" class="dialog-footer">
            <div class="content-info">
              <p>购买课程时可抵扣现金¥20，领取后30天内有效；优惠码仅限个人使用，禁止转用和售卖。</p>
              <p class="count-info">
                消耗金豆：20个 (总剩余实验豆：
                <span>{{}}</span> 个 )
              </p>
            </div>
            <el-button @click="dialogFormVisible20 = false">取 消 兑 换</el-button>
            <el-button type="primary" @click="exchange20">立 即 兑 换</el-button>
          </div>
        </el-dialog>
        <div class="50-offer offer" @click="dialogFormVisible50 = true">
          <div class="card">
            <div class="card-top">
              <img src="../../assets/50.png" alt />
            </div>
            <div class="card-bottom">
              <h4>50元 优惠券</h4>
              <p>50金豆</p>
            </div>
          </div>
        </div>
        <el-dialog title="兑换50元优惠券" :visible.sync="dialogFormVisible50">
          <div slot="footer" class="dialog-footer">
            <div class="content-info">
              <p>购买课程时可抵扣现金¥50，领取后30天内有效；优惠码仅限个人使用，禁止转用和售卖。</p>
              <p class="count-info">
                消耗金豆：50个 (总剩余实验豆：
                <span>{{}}</span> 个 )
              </p>
            </div>
            <el-button @click="dialogFormVisible50 = false">取 消 兑 换</el-button>
            <el-button type="primary" @click="exchange50">确 定 兑 换</el-button>
          </div>
        </el-dialog>
        <div class="100-offer offer" @click="dialogFormVisible100 = true">
          <div class="card">
            <div class="card-top">
              <img src="../../assets/100.png" alt />
            </div>
            <div class="card-bottom">
              <h4>100元 优惠券</h4>
              <p>100金豆</p>
            </div>
          </div>
        </div>
        <el-dialog title="兑换100元优惠券" :visible.sync="dialogFormVisible100">
          <div slot="footer" class="dialog-footer">
            <div class="content-info">
              <p>购买课程时可抵扣现金¥100，领取后30天内有效；优惠码仅限个人使用，禁止转用和售卖。</p>
              <p class="count-info">
                消耗金豆：100个 (总剩余实验豆：
                <span>{{}}</span> 个 )
              </p>
            </div>
            <el-button @click="dialogFormVisible100 = false">取 消 兑 换</el-button>
            <el-button type="primary" @click="exchange100">确 定 兑 换</el-button>
          </div>
        </el-dialog>
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
      banner: require("../../assets/bannerBg.jpg"),
      dialogFormVisible20: false,
      dialogFormVisible50: false,
      dialogFormVisible100: false
    };
  },
  components: {
    headerView: header,
    footerWrapeer: footer
  },
  methods: {
    exchange20: function() {
      this.dialogFormVisible20 = false;
    },
    exchange50: function() {
      this.dialogFormVisible50 = false;
    },
    exchange100: function() {
      this.dialogFormVisible100 = false;
    }
  }
};
</script>
<style lang="scss">
@import "../../css/mall.scss";
</style>

