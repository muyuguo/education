<template>
  <div id="idea">
    <div class="idea-feedBack">
      <div class="idea-container">
        <div class="header-feed">
          <h2>意见反馈</h2>
          <p>
            <router-link to>
              <i class="el-icon-view el-icon--right" style="margin-right:6px;"></i>看看常见问题中是否有你想要的答案
            </router-link>
          </p>
        </div>
        <div class="question-category">
          <p>
            <em class="f-sign">*</em>
            问题分类
          </p>
          <div class="type">
            <el-radio-group v-model="radio">
              <el-radio :label="1">登录注册</el-radio>
              <el-radio :label="2">课程学习</el-radio>
              <el-radio :label="3">课件播放</el-radio>
              <el-radio :label="4">其他问题和建议</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="title">
          <p>
            <em class="f-sign">*</em>
            标题
          </p>
          <div class="input-title">
            <el-input v-model="title" maxlength="20" placeholder="请输入标题" clearable show-word-limit></el-input>
          </div>
        </div>
        <div class="content">
          <p>
            <em class="f-sign">*</em>
            内容
          </p>
          <div class="content-text">
            <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="textarea"></el-input>
          </div>
          <div class="upload-cutimg nui-scroll">
            <el-upload
              class="upload-demo f-left"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
            >
              <el-button size="small" type="primary">上传截图</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
        </div>
        <div class="contact-type">
          <p>
            <em class="f-sign">*</em>
            联系方式
          </p>
          <div class="email-input">
            <el-input v-model="email" placeholder="请输入邮箱地址" clearable></el-input>
          </div>
        </div>
        <div class="submit">
            <el-button type="success" plain>提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "idea",
  data: function() {
    return {
      radio: 1,
      title: "",
      textarea: "",
      email: "",
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>
<style lang="scss">
@import "../../../css/idea.scss";
</style>


