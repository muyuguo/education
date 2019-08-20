<template>
  <div :id="id" class="userDataArea" :style="{width: '110%', height: '100%'}"></div>
</template>

<script>
import echarts from "echarts";
import echartsTheme from "../theme/westeros.json";

export default {
    name: "userData",
  data: function() {
    return {
      id: "userData",
      myChart: null
    };
  },
  mounted() {
    this.loadChart();
  },
  beforeDestroy() {
    if (!this.myChart) {
      return;
    }
    this.myChart.dispose();
    this.myChart = null;
  },
  methods: {
    loadChart() {
      this.$nextTick(() => {
        echarts.registerTheme("westeros", echartsTheme);
        this.myChart = echarts.init(
          document.getElementById(this.id),
          "westeros"
        );
        this.myChart.setOption(this.initOption());
      });
    },
    initOption() {
      let option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["访问量", "注册量", "注册百分比"]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "访问量",
            type: "bar",
            data: [
              22.0,
              24.9,
              17.0,
              76.7,
              63.2,
              55.6,
              135.6,
              162.2,
              32.6,
              20.0,
              16.4,
              23.3
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          },
          {
            name: "注册量",
            type: "bar",
            data: [
              14.6,
              15.9,
              9.0,
              66.4,
              58.7,
              44.7,
              115.6,
              142.2,
              28.7,
              18.8,
              16.0,
              12.3
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          },
          {
              name: "注册百分比",
              type: 'line',
              data: [
                  66.6,
                  63.1,
                  52.8,
                  86.9,
                  92.2,
                  80.3,
                  85.7,
                  88.4,
                  88.5,
                  94.3,
                  97.5,
                  52.7,
              ],
              markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          }
        ]
      };
      return option;
    }
  },
  watch: {
    // id:()=>{
    //     this.initOption()
    // }
  }
};
</script>

<style lang="less">
</style>
