<template>
  <div id="courseMain">
    <div class="nav">
      <headerView></headerView>
    </div>
    <div class="main">
      <div class="course-info">
        
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
  name: "courseMain",
  data: function() {
    return {};
  },
  components: {
    headerView: header,
    footerWrapeer: footer
  }
};
</script>
<style>
@import "../../css/courseMain.scss";
</style>

