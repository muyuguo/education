  <template>
  <div id="videoPlayer">
    <div class="main-video-wrapper">
      <div class="cl-bg"></div>
      <div class="player">
        <i class="el-icon-video-play"></i>
      </div>
      <div class="return-course-main">
        <el-button type="info" icon="el-icon-arrow-left" round @click="returCourse">返回课程主页</el-button>
      </div>
      <div class="course-speed">
        <p>
          <span class="chapter">章节1</span>
          <span class="class">课时1</span>
          <span class="title">我就是测试一下，别紧张</span>
        </p>
      </div>
      <div class="video-wrapper">
        <div class="video-content">
          <video id="myVideo" @timeupdate="second" language class="video-js vjs-big-play-centered">
            <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div class="right-menu-complex">
        <div class="top-content">
          <div class="content-wrapper">
            <div class="left-content">
              <router-link to target="_blank">Vue2.0小白入门教程(最全)</router-link>
              <div class="score-level">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#9900ff"
                  score-template="{value}"
                ></el-rate>
                <p>（综合评分）</p> 
              </div>
              <p>发布者：Web前端网站教程-米斯特吴</p>
            </div>
            <router-link to class="right-content">
              <div class="courseImg-link"></div>
              <img src="../../assets/dog.png" alt />
            </router-link>
          </div>
        </div>
        <div class="main-content">
          <el-tabs type="border-card">
            <el-tab-pane label="目录">
              <div class="title-list">
                <div class="title-list-content">
                  <div class="chapter">
                    <span class="chapter-content">章节</span>
                    <span class="number">
                      <span class="number-content">1</span>
                    </span>
                    <span class="title-content">我就是测试一下，别紧张</span>
                  </div>
                  <div class="section">
                    <span class="class">课时11</span>
                    <span class="speed">
                      <span class="speed-content">
                        <el-progress
                          type="circle"
                          @="second"
                          :stroke-width="10"
                          :percentage="videoTime"
                        ></el-progress>
                      </span>
                    </span>
                    <el-popover
                      placement="top-start"
                      title="标题"
                      width="200"
                      trigger="hover"
                      :open-delay="500"
                      transition="el-fade-in-linear"
                      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                    >
                      <span class="title" slot="reference">我就是测试一下，别紧张</span>
                    </el-popover>
                    <span class="time">
                      <span class="video">{{totalTime}}</span>
                      <span class="time-content">
                        <i class="el-icon-video-camera-solid"></i>
                      </span>
                      <span class="info"></span>
                    </span>
                  </div>
                </div>
                <div class="title-list-content">
                  <div class="chapter">
                    <span class="chapter-content">章节</span>
                    <span class="number">
                      <span class="number-content">1</span>
                    </span>
                    <span class="title-content">我就是测试一下，别紧张</span>
                  </div>
                  <div class="section">
                    <span class="class">课时11</span>
                    <span class="speed">
                      <span class="speed-content">
                        <el-progress
                          type="circle"
                          @="second"
                          :stroke-width="10"
                          :percentage="videoTime"
                        ></el-progress>
                      </span>
                    </span>
                    <el-popover
                      placement="top-start"
                      title="标题"
                      width="200"
                      trigger="hover"
                      :open-delay="500"
                      transition="el-fade-in-linear"
                      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                    >
                      <span class="title" slot="reference">我就是测试一下，别紧张</span>
                    </el-popover>
                    <span class="time">
                      <span class="video">{{totalTime}}</span>
                      <span class="time-content">
                        <i class="el-icon-video-camera-solid"></i>
                      </span>
                      <span class="info"></span>
                    </span>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="讨论">
              <div class="comment">
                <div class="comment-content">
                  <div class="tip-options">
                    您还可以输入
                    <span>{{inputLength}}</span> 字
                  </div>
                  <div class="input-content">
                    <el-input
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容"
                      v-model="inputContent"
                      maxlength="100"
                      show-word-limit
                      @input="textLength"
                    ></el-input>
                  </div>
                  <div class="btns">
                    <el-button type="success">发表讨论</el-button>
                  </div>
                  <div class="emoji">
                    <emojiPicker @emoji="reply2Append" :search="search">
                      <div
                        class="emoji-invoker"
                        slot="emoji-invoker"
                        slot-scope="{ events: { click: clickEvent } }"
                        @click.stop="clickEvent"
                      >
                        <svg
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                          />
                        </svg>
                      </div>

                      <div slot="emoji-picker" slot-scope="{ emojis, insert}">
                        <div class="emoji-picker">
                          <div class="emoji-picker__search">
                            <input type="text" v-model="search" v-focus />
                          </div>
                          <div>
                            <div v-for="(emojiGroup, category) in emojis" :key="category">
                              <h5>{{ category }}</h5>
                              <div class="emojis">
                                <span
                                  v-for="(emoji, emojiName) in emojiGroup"
                                  :key="emojiName"
                                  @click="insert(emoji)"
                                  :title="emojiName"
                                >{{ emoji }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </emojiPicker>
                  </div>
                </div>
                <div class="review-list">
                  <div class="review-container">
                    <ul class="review-content">
                      <router-link to tag="li">
                        <div class="forumli">
                          <div class="top">
                            <div class="top-info">
                              <router-link to class="avatar">
                                <img src="../../assets/小狗柯基.png" alt />
                              </router-link>
                              <span class="username">
                                <router-link to class="username-info">赵二狗</router-link>
                              </span>
                              <span class="level">L4</span>
                              <span class="datetime">2018-12-20</span>
                            </div>
                          </div>
                          <div class="main-wrapper">
                            <span
                              class="main-text"
                            >大家如果遇到问题, 可以通过交流工具进行讨论. 如果需要翻墙软件, 或者是野狗云的测试账号, 或者是全部的课程, 可以在微信公众号中获取到, 有新的课程上线, 我也会在微信公众号中给大家发送通知. 微信公众号: why2wm</span>
                          </div>
                          <div class="footer"></div>
                        </div>
                      </router-link>
                      <router-link to tag="li">
                        <div class="forumli">
                          <div class="top">
                            <div class="top-info">
                              <router-link to class="avatar">
                                <img src="../../assets/小狗柯基.png" alt />
                              </router-link>
                              <span class="username">
                                <router-link to class="username-info">赵二狗</router-link>
                              </span>
                              <span class="level">L4</span>
                              <span class="datetime">2018-12-20</span>
                            </div>
                          </div>
                          <div class="main-wrapper">
                            <span
                              class="main-text"
                            >大家如果遇到问题, 可以通过交流工具进行讨论. 如果需要翻墙软件, 或者是野狗云的测试账号, 或者是全部的课程, 可以在微信公众号中获取到, 有新的课程上线, 我也会在微信公众号中给大家发送通知. 微信公众号: why2wm</span>
                          </div>
                          <div class="footer"></div>
                        </div>
                      </router-link>
                    </ul>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="笔记">
              <div class="note">
                <div class="note-wrapper">
                  <div class="note-content">
                    <div class="note-main">
                      <div class="edit-wrapper">
                        <el-input
                          type="textarea"
                          :rows="6"
                          placeholder="请输入你的想法"
                          v-model="noteText"
                        ></el-input>
                      </div>
                      <div class="editopt">
                        <div class="buttons">
                          <el-checkbox v-model="checked">私密</el-checkbox>
                          <el-button type="primary">发布</el-button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="资料">
              <div class="data">
                <div class="data-content">
                  <ul>
                    <router-link to tag="li">资料一</router-link>
                    <router-link to tag="li">资料一</router-link>
                    <router-link to tag="li">资料一</router-link>
                    <router-link to tag="li">资料一</router-link>
                  </ul>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//emoji
import emojiPicker from "vue-emoji-picker";

/* eslint-disable */
export default {
  name: "videoPlayer",
  data() {
    return {
      videoTime: 0,
      totalTime: 0,
      inputContent: "",
      noteText: "",
      search: "",
      inputLength: 100,
      checked: true,
      value: 5,
      iconClasses: ["icon-rate-face-1", "icon-rate-face-2", "icon-rate-face-3"] // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
    };
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      //初始化视频方法
      let myPlayer = this.$video(myVideo, {
        //播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "1560px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "860px",
        //封面地址
        poster: "../../assets/小狗柯基.png",
        language: "zh-CN"
      });
    },
    returCourse: function() {
      this.$router.push("/courseDetail");
    },
    //获取视频播放秒数,当视频播放时触发该事件，并且将值转化为百分比
    second: function() {
      var lengthOfVideo = this.$video(myVideo, {
        src: "//vjs.zencdn.net/v/oceans.mp4"
      }).duration();

      var time = parseInt(lengthOfVideo);
      var count = 0;
      if (time < 60) {
        this.totalTime = "00:" + time;
      } else if (time >= 60) {
        count = parseInt(time / 60);
        time = time % 60;
        this.totalTime = count + ":" + time;
      }
      //console.log(lengthOfVideo);
      var timeLeft = this.$video(myVideo, {
        src: "//vjs.zencdn.net/v/oceans.mp4"
      }).remainingTime();
      //console.log(timeLeft);
      this.videoTime = Math.round(100 - (timeLeft / lengthOfVideo) * 100);
      //console.log(this.videoTime);
    },
    textLength: function() {
      this.inputLength = 100 - this.inputContent.length;
    },
    reply2Append(emoji) {
      this.inputContent += emoji;
    }
  },
  components: {
    emojiPicker,
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  }
};
</script>
<style lang="scss">
@import "../../css/videoPlayer.scss";
</style>
<style lang="scss">
@import "../../css/emoji.scss";
</style>