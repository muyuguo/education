<template>
  <div :id="id" class="incomeDataArea" :style="{width: '100%', height: '100%'}"></div>
</template>
<script>
import echarts from "echarts";
import echartsTheme from "../theme/westeros.json";
export default {
    name: "incomeData",
  data: function() {
    return {
      id: "incomeData",
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
      let data = {
        title: {
          text: "收入分析"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["收入", "支出"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "收入",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            data: [140, 332, 101, 134, 90, 230, 210],
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
          },
          {
            name: "支出",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            data: [220, 182, 191, 234, 290, 330, 310],
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
          },
        ]
      };
      return data;
    }
  },
  watch: {
    // id:()=>{
    //     this.initOption()
    // }
  }
};
</script>