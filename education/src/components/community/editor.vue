<template>
  <div id="editor">
    <div class="nav">
      <headerView></headerView>
    </div>
    <div class="main">
      <form action id="form-editor">
        <div class="editor-container">
          <div class="title">
            <el-select v-model="value" name="plateSelect" placeholder="请选择发布板块">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input
              name="titleInput"
              type="text"
              v-model="input"
              minlength="8"
              placeholder="请输入标题(字数至少8位)"
              show-word-limit
            ></el-input>
          </div>

          <div class="editor-view" id="mavonEditor">
            <mavon-editor ref=md @imgAdd="$imgAdd" @imgDel="$imgDel" :toolbars="markdownOption" v-model="mdvalue" />
            {{mdvalue}}
          </div>

          <div class="submit">
            <el-button type="success" plain>发布</el-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
//禁止后退
/*
history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
history.pushState(null, null, document.URL);
});*/
import header from "../plugin/header.vue";

export default {
  name: "editor",
  data: function() {
    return {
      input: "",
      mdvalue: "",
      options: [
        {
          value: "选项1",
          label: "交流讨论"
        },
        {
          value: "选项2",
          label: "技术分享"
        },
        {
          value: "选项3",
          label: "学习总结"
        }
      ],
      value: "",
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true,// 预览
      }
    };
  },
  components: {
    headerView: header
  },
  methods: {
        // 绑定@imgAdd event
        $imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           formdata.append('image', $file);
           this.axios({
               url: 'server url',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((url) => {
               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
               /**
               * $vm 指为mavonEditor实例，可以通过如下两种方式获取
               * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
               * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
               */
               this.$refs.md.$img2Url(pos, url);
           })
        },
        $imgDel(pos, $file){
            // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           formdata.append('image', $file);
           this.axios({
               url: 'server url',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((url) => {
               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
               /**
               * $vm 指为mavonEditor实例，可以通过如下两种方式获取
               * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
               * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
               */
               this.$refs.md.$img2Url(pos, url);
           })
        },
    },
  mounted: function() {
    console.log(this.$route.path);
    if (this.$route.path == "forum") {
      location.reload();
    }
  }
};
</script>
<style lang="scss">
@import "../../css/editor.scss";
</style>
<style lang="css">
@import "../../../node_modules/mavon-editor/dist/css/index.css";
</style>
<style lang="scss">
@import "../../css/mavonEditor.scss";
</style>
