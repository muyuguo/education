<template>
  <div id="scroll">
    <div class="textBox">
      <transition name="slide">
        <p class="text" :key="text.id"> <i class="iconfont icontongzhi"></i> {{text.val}}</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scroll',
  data () {
    return {
      textArr: [
        '【系统通知：2019-11-20 8:00】 网站将于2019-11-21晚8点进行停机维护',
        '【课程通知：2019-09-20】 新的课程已上线',
        '【活动通知：2019-12-01】 开学季，送大礼，现在开通会员即有大礼相送哦',
        '【课程通知：2019-11-20】 最新热门课程已新鲜出炉',
        '【系统通知：2019-10-03 21:00】 网站已经修复异常',
        '【活动通知：2019-11-20】 开学季活动即将结束'
      ],
      number: 0
    }
  },
  computed: {
    text () {
      return {
        id: this.number,
        val: this.textArr[this.number]
      }
    }
  },
  mounted () {
    this.startMove()
  },
  methods: {
    startMove () {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === this.textArr.length-1) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 3000); // 滚动不需要停顿则将2000改成动画持续时间
    }
  }
}
</script>

<style lang="scss">
  .textBox {
    width: 100%;
    height: 33px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
  .text {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s linear;
  }
  .slide-enter{
    transform: translateY(20px) scale(1);
    opacity: 1;
  }
  .slide-leave-to {
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
  }
  .text {
      color: #42B983;
      font-weight: 500;
      font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
      text-align: left;
      i {
          color: #f89d0c;
          font-size: 18px;
      }
  }
</style>