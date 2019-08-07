<template>
  <div id="mavonEditor">
    <mavon-editor v-model="value" />
    {{value}}
  </div>
</template>
<script>
export default {
  name: "mavon-Editor",
  data: function() {
    return {
      value: ""
    };
  }
};
</script>
<style lang="scss">
@import "../../css/mavonEditor.scss";
</style>
<style lang="css">
@import "../../../node_modules/mavon-editor/dist/css/index.css";
</style>
