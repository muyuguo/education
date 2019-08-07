<template>
    <div id="feedBack">
        <div class="nav">
            <headerView></headerView>
        </div>
        <div class="main">
            <div class="feedBack-container">
                <div class="left-nav">
                    <ul>
                        <router-link @click.native="changeNav(index)" :class="{activeNav: index == i}" :to="item.path" tag="li" v-for="(item,index) in leftNav" :key="index">
                            <div class="left-text-box"></div>
                            <div class="right-text-content">{{item.text}}</div>
                        </router-link>
                    </ul>
                </div>
                <div class="right-content">
                    <router-view></router-view>
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
    name: 'feedBack',
    data:function() {
        return {
            leftNav: [
                {id:1, path:'/feedBack/about', text:'关于我们'},
                {id:2, path:'/feedBack/contact', text:'联系我们'},
                {id:3, path:'/feedBack/idea', text:'意见反馈'},
                {id:4, path:'/feedBack/problem', text:'常见问题'}
            ],
            i:0,
        }
    },
    components: {
    headerView: header,
    footerWrapeer: footer
  },
  methods: {
      changeNav:function(index) {
          this.i = index;
          console.log(this.i);
      }
  }
}
</script>
<style lang="scss">
@import '../../css/feedBack.scss'
</style>


