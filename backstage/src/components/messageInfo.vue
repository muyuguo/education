<template>
  <div id="messageInfo">
    <div class="messageInfo-content">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="'未读消息' + '（' + noMessage.length + '）'" name="first">
            <div v-if="noMessage == '' || noMessage == null" class="tip">
                暂无新消息!
            </div>
            <div v-else class="noMessage">
                <ul>
                    <router-link v-for="(content, index) in noMessage" :key="index" tag="li" to>
                        <div class="text">{{content.text}}</div>
                        <div class="date">{{content.date}}</div>
                        <div class="button">
                             <el-button type="success" @click="isRead(index)" plain>标为已读</el-button>
                        </div>
                    </router-link>
                </ul>
            </div>
        </el-tab-pane>
        <el-tab-pane :label="'已读消息' + '（' + message.length + '）'" name="second">
            <div v-if="message == '' || message == null" class="tip">
                暂无新消息!
            </div>
            <div v-else class="readMessage">
                <ul>
                    <router-link tag="li" to v-for="(content, index) in message" :key="index">
                        <div class="text">{{content.text}}</div>
                        <div class="date">{{content.date}}</div>
                        <div class="button">
                             <el-button type="danger" @click="isDelete(index)" plain>删除</el-button>
                        </div>
                    </router-link>
                </ul>
            </div>
        </el-tab-pane>
        
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "messageInfo",
  data: function() {
    return {
      activeName: "first",
      noMessage: [
          {id: 1, text: '【系统通知】系统将于2019年12月3日凌晨2点到4点进行维护', date: '2019-11-23 21:00:00'},
          {id: 2, text: '【课程通知】您的课程已经结束', date: '2019-10-21 17:00:00'}
      ],
      message: [
          {id: 1, text: '【课程通知】您的课程已开始', date: '2019-8-21 09:00:00'}
      ]
    };
  },
  methods: {
      isRead: function(index) {
          this.message.unshift(this.noMessage[index])
          this.noMessage.splice(index,1)
          console.log(this.message)
      },
      isDelete: function(index) {
          this.message.splice(index,1)
      }
  }
};
</script>
<style lang="scss">
@import "../css/messageInfo.scss";
</style>