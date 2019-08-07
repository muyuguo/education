<template>
    <div id="footer-container">
        <div class="wrapper">
            <div class="inner-wrapper">
                <div class="inner-wrapper-complex">
                    <div class="logo-wrapper">
                    <router-link to='/'>
                        <img src="" alt="">
                    </router-link>
                        <p>慕学而思，让每一个大学生快乐轻松的沉浸在学习中，致力于提升每一位大学生的愿望</p>
                    </div>
                </div>
                <div class="inner-wrapper-right">
                    <div class="about-we">
                        <h3>关于我们</h3>
                        <ul>
                            <li><router-link to="/">关于我们</router-link></li>
                            <li><router-link to="/">联系我们</router-link></li>
                            <li><router-link to="/">意见反馈</router-link></li>
                        </ul>
                    </div>
                    <div class="friend-link">
                        <h3>友情链接</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer-container',
    data() {
        return {}
}
}
</script>
<style lang="scss">
@import "../../css/footer.scss"
</style>


