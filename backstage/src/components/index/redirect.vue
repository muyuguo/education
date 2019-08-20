<script>
import { Message } from "element-ui";
export default {
  beforeCreate() {
    console.log(this.$route);
    const nextPath = this.$route.query.nextPath;
    if (
      nextPath == "/teacherManage" &&
      this.$store.getters.loginUser == "11111111111"
    ) {
      Message.warning("无权限！");
      this.$router.replace({ path: '/error' });
    }
    else {
      this.$router.replace({ path: nextPath });
    }
    
    console.log("调用");
    console.log(nextPath);
  },
  render: function(h) {
    return h(); // avoid warning message
  }
};
</script>
