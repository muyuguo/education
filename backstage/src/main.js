import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
//引入element-ui
import ElementUI from 'element-ui';
//引入echarts
import echarts from 'echarts'
//Vuex 
import store from './store/index'
import './assets/icon/iconfont.css' // global css
import 'element-ui/lib/theme-chalk/index.css';
//引入Excel处理插件
import Blob from './excel/Blob'
import Export2Excel from './excel/Export2Excel'
//引入axios
import axios from 'axios'
Vue.prototype.axios = axios
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // console.log('对响应数据做点什么')
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    console.log(ElementUI)
    //Message 消息提示
    /*ElementUI.Message({
        message: '警告！请先退出！',
        type: 'warning'
    });

    //Notification 通知
    ElementUI.Notification({
        title: '警告',
        message: '请先退出登录!',
        type: 'warning'
    });
    */
    //MessageBox 弹框
    ElementUI.MessageBox({
      title: '您所访问的地址出错',
      message: '服务器错误'
    });
    return Promise.reject(error);
  });
router.beforeEach((to, from, next) => {
  if (store.getters.loginUser == '11111111111') {
    next();
    if (to.path == '/teacherManage') {
      ElementUI.Notification({
        title: '警告',
        dangerouslyUseHTMLString: true,
        message: '<h2>无权限</h2>',
        type: 'warning'
      }) 
      next({
        path: '/'
      })
    }


  } else {
    next()
  }

})
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  Blob,
  Export2Excel,
  render: h => h(App),
}).$mount('#app')