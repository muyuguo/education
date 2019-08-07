<template>
  <div id="inform">
    <div class="nav">
      <headerView></headerView>
    </div>
    <div class="main">
      <div class="message-wrapper">
        <div class="left-complex">
          <ul>
            <router-link
              v-for="(item,index) in listNav"
              @click.native="change(index)"
              :key="index"
              :to="item.path"
              :class="{active:index == isActive}"
              tag="li"
            >{{item.name}}</router-link>
          </ul>
        </div>
        <div class="right-container">
          <ul>
              <li>
                  <router-view></router-view>
              </li>
          </ul>
        </div>
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
  name: "inform",
  data: function() {
    return {
      isActive: 0,
      listNav: [
        { id: 1, path: "/inform/course", name: "课程提醒" },
        { id: 2, path: "/inform/interactive", name: "互动提醒" },
        { id: 3, path: "/inform/system", name: "系统通知" },
        { id: 4, path: "/inform/privateLetter", name: "我的私信" }
      ]
    };
  },
  components: {
    headerView: header,
    footerWrapeer: footer
  },
  methods: {
    change: function(index) {
      this.isActive = index;
      console.log(this.isActive);
    }
  }
};
</script>
<style lang="scss">
@import "../../css/inform.scss";
</style>


