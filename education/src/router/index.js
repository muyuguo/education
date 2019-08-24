import Vue from 'vue'
import Router from 'vue-router';
import index from '../components/index.vue'
import container from '../components/container.vue'
import resource from '../components/community/resource.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'
import forum from '../components/community/forum.vue'
import editor from '../components/community/editor.vue'
import returnTop from '../components/plugin/returnTop.vue'
import personalInfo from '../components/presonal/personalInfo.vue'
import personalSetting from '../components/presonal/personalSetting.vue'
import inform from '../components/presonal/inform.vue'
import course from '../components/presonal/slider/course.vue'
import interactive from '../components/presonal/slider/interactive.vue'
import system from '../components/presonal/slider/system.vue'
import privateLetter from '../components/presonal/slider/privateLetter.vue'
import loginOut from '../components/login/loginOut.vue'
import feedBack from '../components/login/feedBack.vue'
import about from '../components/login/helpFeedback/about.vue'
import contact from '../components/login/helpFeedback/contact.vue'
import idea from '../components/login/helpFeedback/idea.vue'
import problem from '../components/login/helpFeedback/problem.vue'
import vip from '../components/presonal/vip.vue'
import courseDetail from '../components/course/courseDetail.vue'
import contentDetail from '../components/community/contentDetail.vue'
import courseList from '../components/plugin/courseList.vue'
import videoPlayer from '../components/course/videoPlaer.vue'
import courseMain from '../components/course/courseMain.vue'
import mall from '../components/course/mall.vue'
import search from '../components/course/search.vue'


Vue.use(Router)

const routes = [
  //首页
  {
    path: '/',
    name: index,
    component: (resolve) => require(['../components/index.vue'], resolve),
    alias: '/index',
    meta: {
      keepAlive: true, //是否需要被缓存
      ifDoFresh: false, //是否刷新字段
    }
  },
  {
    path: '/container',
    name: container,
    component: container
  },
  //课程列表
  {
    path: '/courseList/:page',
    name: courseList,
    component: (resolve) => require(['../components/plugin/courseList.vue'], resolve),
    meta: {
      isLogin: false
    }
  },
  //金豆商城
  {
    path: '/mall',
    name: mall,
    component: (resolve) => require(['../components/course/mall.vue'], resolve),
    meta: {
      isLogin: false
    }
  },
  //跳转资源库
  {
    path: '/resource',
    name: resource,
    component: (resolve) => require(['../components/community/resource.vue'], resolve),
    meta: {
      isLogin: true
    }
  },
  //跳转登录
  {
    path: '/login',
    name: login,
    component: (resolve) => require(['../components/login/login.vue'], resolve),
    meta: {
      isLogin: false
    }
  },
  //跳转社区
  {
    path: '/register',
    name: register,
    component: (resolve) => require(['../components/register/register.vue'], resolve),
    meta: {
      isLogin: false
    }
  },
  //跳转论坛
  {
    path: '/forum',
    name: forum,
    component: (resolve) => require(['../components/community/forum.vue'], resolve),
    meta: {
      isLogin: true
    }
  },
  //跳转帖子详情
  {
    path: '/forum/contentDetail',
    name: contentDetail,
    component: (resolve) => require(['../components/community/contentDetail.vue'], resolve)
  },
  {
    path: '/forum/editor',
    name: editor,
    component: (resolve) => require(['../components/community/editor.vue'], resolve),
    meta: {
      isLogin: true
    }
  },
  {
    path: '/returnTop',
    name: returnTop,
    component: returnTop
  },
  //个人信息
  {
    path: '/personalInfo',
    name: personalInfo,
    component: (resolve) => require(['../components/presonal/personalInfo.vue'], resolve),
    meta: {
      isLogin: true
    }
  },
  //個人設置
  {
    path: '/personalSetting',
    name: personalSetting,
    component: (resolve) => require(['../components/presonal/personalSetting.vue'], resolve),
    meta: {
      isLogin: true
    }
  },
  //消息中心
  {
    path: '/inform',
    name: inform,
    component: (resolve) => require(['../components/presonal/inform.vue'], resolve),
    meta: {
      isLogin: true
    },
    children: [{
        path: '/inform/course',
        name: course,
        component: (resolve) => require(['../components/presonal/slider/course.vue'], resolve)
      },

      {
        path: '/inform/interactive',
        name: interactive,
        component: (resolve) => require(['../components/presonal/slider/interactive.vue'], resolve)
      },
      {
        path: '/inform/system',
        name: system,
        component: (resolve) => require(['../components/presonal/slider/system.vue'], resolve)
      },
      {
        path: '/inform/privateLetter',
        name: privateLetter,
        component: (resolve) => require(['../components/presonal/slider/privateLetter.vue'], resolve)
      }
    ]
  },
  //登出
  {
    path: '/loginOut',
    name: loginOut,
    component: loginOut,
    meta: {
      isLogin: false
    }
  },
  //帮助与反馈
  {
    path: '/feedBack',
    name: feedBack,
    component: (resolve) => require(['../components/login/feedBack.vue'], resolve),
    meta: {
      isLogin: true
    },
    children: [{
        //关于我们
        path: '/feedBack/about',
        name: about,
        component: (resolve) => require(['../components/login/helpFeedback/about.vue'], resolve)
      },
      {
        //联系我们
        path: '/feedBack/contact',
        name: contact,
        component: (resolve) => require(['../components/login/helpFeedback/contact.vue'], resolve)
      },
      {
        //意见反馈
        path: '/feedBack/idea',
        name: idea,
        component: (resolve) => require(['../components/login/helpFeedback/idea.vue'], resolve)
      },
      {
        //常见问题
        path: '/feedBack/problem',
        name: problem,
        component: (resolve) => require(['../components/login/helpFeedback/problem.vue'], resolve)
      }
    ]
  },
  //vip区
  {
    path: '/vip',
    name: vip,
    component: (resolve) => require(['../components/presonal/vip.vue'], resolve),
    meta: {
      isLogin: true
    },
  },
  //课程详情
  {
    path: '/courseDetail',
    nmme: courseDetail,
    component: (resolve) => require(['../components/course/courseDetail.vue'], resolve),
    meta: {
      isLogin: false
    },
  },
  //课程播放
  {
    path: '/courseDetail/courseMain/videoPlayer',
    name: videoPlayer,
    component: (resolve) => require(['../components/course/videoPlaer.vue'], resolve),
    meta: {
      isLogin: true
    },
  },
  //课程主页
  {
    path: '/courseDetail/courseMain',
    name: courseMain,
    component: courseMain,
    meta: {
      isLogin: true
    },
  },
  //搜索页面
  {
    path: '/search',
    name: search,
    component: (resolve) => require(['../components/course/search.vue'], resolve),
  },

]


const router = new Router({
  routes, // (缩写) 相当于 routes: routes
  mode: 'hash',
  //页面滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  base: './'
})
export default router