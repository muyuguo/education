<template>
  <div :id="id" class="userKindArea" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
import echarts from "echarts";
import echartsTheme from "../theme/westeros.json";

export default {
  name: "userKind",
  data: function() {
    return {
      id: "userKind",
      myChart: null
    };
  },
  props: ["type"],
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
        this.myChart.setOption(this.initOption(this.type));
      });
    },
    initOption(type) {
      let text, legend_data, series_data;
      if (type == "ordertype") {
        text = "用户类型";
        legend_data = ["基金", "股票", "债券", "储蓄", "期货"];
        series_data = [
          { value: 335, name: "普通学生用户" },
          { value: 110, name: "VIP学生用户" },
          { value: 234, name: "教师" },
        ];
      } else {
        text = "用户类型";
        legend_data = [
          "普通学生用户",
          "VIP学生用户",
          "教师",
        ];
        series_data = [
          { value: 335, name: "普通学生用户" },
          { value: 110, name: "VIP学生用户" },
          { value: 234, name: "教师" },
        ];
      }
      let data = {
        title: {
          text: text,
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: legend_data
        },
        series: [
          {
            name: "用户类型",
            type: "pie",
            radius: "50%",
            center: ["50%", "60%"],
            data: series_data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      return data;
    }
  },
  watch: {
    type: v => {
      this.initOption(v);
    }
  }
};
</script>

<style lang="less">
</style>
