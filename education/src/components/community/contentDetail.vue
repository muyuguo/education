<template>
  <div id="contentDetail">
    <div class="nav" :style="{'z-index':isZindex}">
      <header-view></header-view>
    </div>
    <div class="main">
      <div class="content-container">
        <div class="content-top">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/forum' }">讨论</el-breadcrumb-item>
            <el-breadcrumb-item :to="{}">...</el-breadcrumb-item>
            <el-breadcrumb-item :to="{}">...</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="content-body">
          <div class="body-container">
            <div class="common-content">
              <div class="header">
                <div class="title">HTML5蔡徐坤打篮球游戏 NMSL❤️❤️❤️</div>
                <div class="heat">
                  <div class="views"></div>
                  <div class="reply">{{}}回复</div>
                  <div class="button">
                    <el-button :plain="true" type="success" v-show="nolike" @click="changeLike">收藏</el-button>
                    <el-button type="danger" v-show="like" @click="returnChange">已收藏</el-button>
                  </div>
                </div>
              </div>
              <div class="meta">
                <div class="user-avatar">
                  <router-link to>
                    <img src="../../assets/dog.png" alt />
                  </router-link>
                </div>
                <div class="user-name">
                  <router-link to>偶像练习生CXK</router-link>
                  <div class="level">L3</div>
                </div>
                <div class="datetime">2019-04-19 15:42:26</div>
              </div>
              <div class="markdown-body" id="mavonEditor">
                <mavon-editor
                  :value="content"
                  :subfield="false"
                  :defaultOpen="'preview'"
                  :toolbarsFlag="false"
                  :editable="false"
                  :scrollStyle="true"
                  :ishljs="true"
                />
              </div>
              <div class="btns"></div>
              <div class="add-answer">
                <div class="title">你的回复</div>
                <div class="answer-editor">
                  <div class="editor-content wrapper">
                    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="contentText"></el-input>
                    <!--表情包-->
                    <emojiPicker @emoji="append" :search="search">
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
                  <div class="footer">
                    <div class="author">
                      <div class="user-avatar">
                        <router-link to>
                          <img src="../../assets/小狗柯基.png" alt />
                        </router-link>
                      </div>
                      <div class="user-name">
                        <router-link to>{{}}</router-link>
                        <div class="level">{{}}</div>
                      </div>
                    </div>
                    <div class="btns">
                      <el-button type="success" @click="submit">发布</el-button>
                    </div>
                  </div>
                </div>
              </div>
              <!--全部回复功能区-->
              <div class="answers">
                <div class="title">全部回复</div>
                <div class="answer">
                  <div class="user-avatar">
                    <router-link to>
                      <img src="../../assets/笑脸.png" alt />
                    </router-link>
                  </div>
                  <div class="content">
                    <div class="meta">
                      <div class="meta-users">
                        <div class="user-name">
                          <router-link to class="name">{{}}</router-link>
                          <div class="level">{{}}</div>
                        </div>
                      </div>
                      <div class="like"></div>
                    </div>
                    <div class="answer-content">
                      <div class="content-text">{{contentText}}</div>
                      <div class="date-time"></div>
                      <div class="btns">
                        <div class="reply" @click="comment1">回复</div>
                      </div>
                    </div>
                    <!--一级回复-->
                    <div class="comment-form-1" v-show="isReply1">
                      <div class="form-box">
                        <div class="input-box">
                          <el-input v-model="reply1" placeholder="请输入内容"></el-input>
                        </div>
                        <!--表情包-->
                    <emojiPicker @emoji="reply1Append" :search="search">
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
                        <div class="action-box">
                          <el-button type="primary">评论</el-button>
                        </div>
                      </div>
                    </div>
                    <div class="byreply-content">
                      <div class="item">
                        <div class="comment-content-container">
                          <div class="comment-content-box">
                            <div class="comment-content">
                              <div class="user-popover-box">
                                <router-link to class="username">
                                  <img src="../../assets/小狗柯基.png" alt />
                                </router-link>
                              </div>
                              <div class="user-content-box">
                                <div class="profie">
                                  <div class="user-reply">
                                    <router-link to class="name">{{}}</router-link>
                                    <div class="level">{{}}</div>
                                  </div>
                                  <div class="position-byreply">{{}}</div>
                                </div>
                                <div class="content-box">
                                  <span>回复</span>
                                  <div class="byreplyer">
                                    <router-link to>{{}}</router-link>
                                  </div>
                                  <span>:</span>
                                  <span class="content"></span>
                                </div>
                                <div class="footer-content">
                                  <div class="date-time"></div>
                                  <div class="btns">
                                    <div class="reply" @click="comment2">回复</div>
                                  </div>
                                </div>
                                <!--二级回复-->
                                <div class="comment-form" v-show="isReply2">
                                  <div class="form-box">
                                    <div class="input-box">
                                      <el-input v-model="reply2" placeholder="请输入内容"></el-input>
                                    </div>
                                    <!--表情包-->
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
                                    <div class="action-box">
                                      <el-button type="primary">评论</el-button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--右侧功能区-->
        <div class="right-complex">
          <div class="right-content">
            <el-button type="primary" plain @click="jumpEditor">我要发帖</el-button>
            <el-button type="success" plain>每日签到</el-button>
            <!--近期活动-->
            <div class="event-notice">
              <div class="box-header">
                <span>近期活动</span>
              </div>
              <div class="box-body">
                <ul>
                  <li>我要发帖我要发帖我要发帖我要发帖</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <footerWrapeer></footerWrapeer>
    </div>
  </div>
</template>
<script>
import emojiPicker from "vue-emoji-picker";
import header from "../plugin/header.vue";
import footer from "../footer-page/footerWrapeer.vue";
import { Notification } from "element-ui";
export default {
  name: "contentDetail",
  data: function() {
    return {
      isZindex: 300,
      isReply1: false,
      isReply2: false,
      reply1: "",
      reply2: "",
      contentText: "",
      nolike: true,
      like: false,
      search: "",
      content:
        "目录Markdown 语法简介**粗体***斜体*标题分割线^上^角~下~标++下划线++ ~~中划线~~"
    };
  },
  methods: {
    changeLike: function() {
      this.isZindex = 100;
      this.like = true;
      this.nolike = false;
      this.$message({
        type: "success",
        dangerouslyUseHTMLString: true,
        message: "<strong>已收藏</strong>",
        center: true
      });
    },
    returnChange: function() {
      this.like = false;
      this.nolike = true;
    },
    jumpEditor: function() {
      //编程式导航，跳转至下一级页面
      this.isMainContainer = false;
      this.$router.push("/forum/editor");
    },
    append(emoji) {
      this.contentText += emoji;
    },
    reply1Append(emoji) {
      this.reply1 += emoji;
    },
    reply2Append(emoji) {
      this.reply2 += emoji;
    },
    comment1:function() {
      this.isReply1 = !this.isReply1;
    },
    comment2:function() {
      this.isReply2 = !this.isReply2;
    },
    submit: function() {
      if (this.contentText == "" || this.contentText == null) {
        Notification.warning("输入不能为空");
      } else if (this.contentText.length <= 2) {
        Notification.warning("输入太少");
      }
      console.log(this.contentText);
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  },
  components: {
    headerView: header,
    footerWrapeer: footer,
    emojiPicker
  }
};
</script>
<style lang="scss">
@import "../../css/contentDetail.scss";
</style>
<style lang="css">
@import "../../../node_modules/mavon-editor/dist/css/index.css";
</style>
<style lang="scss">
@import "../../css/emoji.scss";
</style>
