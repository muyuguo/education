import store from '../store/index'
import router from '../router/index'
import axios from 'axios'
import ElementUI from 'element-ui';
// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
    // 对响应数据做点什么
    // console.log('对响应数据做点什么')
    return response;
  }, function (error) {
    // 对响应错误做点什么
    console.log(ElementUI)
    //Message 消息提示
    ElementUI.Message({
        message: '警告！请先退出！',
        type: 'warning'
    });
    //Notification 通知
    ElementUI.Notification({
        title: '警告',
        message: '请先退出登录!',
        type: 'warning'
    });
    //MessageBox 弹框
    ElementUI.MessageBox({
        title: '标题名称',
        message: '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'
    });
    return Promise.reject(error);
  });
  router.beforeEach((to,from,next) => {
    //获取用户等登录成功后储存的登录标志
    let getFlag = localStorage.getItem("Flag");
    //let token = store.getters.token;
    //如果登录标志存在且为isLogin,token是否存在,如果存在,即用户已登录
    if(getFlag === "isLogin" && (store.getters.token !== 'null' || store.getters.token !== '')) {
      //设置vuex状态为已登录
      store.state.isLogin = true;
      next();
  
      //如果已登录，还想进入登录注册界面，则定向回首页
      if(to.meta.isLogin == false) {
        //如果当前页不是首页
        if(from.path != '/') {
        ElementUI.Notification({
          title: '警告',
          dangerouslyUseHTMLString: true,
          message: '<h2>请先退出登录!</h2>',
          type: 'warning'
      });}
        next({
          path: '/'
        })
      }
    }
    //如果登录标志不存在，即未登录
    else {
      //用户想进入需要登录的页面，则定向回登录界面
      if(to.meta.isLogin == true) {
        next({
          path: '/login'
        })
        if(to.path != '/login') {
        ElementUI.Notification({
          title: '警告',
          message: '请先登录!',
          type: 'warning'
      });
    }
      }
      else {
        next()
      }
    }
  });
  
