<template>
    <div id="resource">
        <div class="nav">
            <headerView></headerView>
        </div>
        <div class="main">
            <div class="document">
                <div class="top">
                    <h2>文档/电子书</h2>
                </div>
                <div class="container">
                    <ul>
                        <li>
                            <a href=""><span>111</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="video">
                <div class="top">
                    <h2>视频</h2>
                    
                </div>
                <div class="container">
                    <ul>
                        <li>
                            <a href=""><span>111</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="other">
                <div class="top">
                    <h2>其他</h2>
                </div>
                <div class="container">
                    <ul>
                        <li>
                            <a href=""><span>111</span></a>
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
    name: "resource",
    data:function() {
        return {

        }
    },
    components: {
    headerView: header,
    footerWrapeer: footer
  },
}
</script>
<style lang="scss">
@import "../../css/resource.scss"
</style>

