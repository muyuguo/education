import Vue from 'vue'
import Router from 'vue-router'
//路由懒加载
const index = () => import('../components/index/index.vue') 
const login = () => import('../components/login.vue')
const studyManage = () => import('../components/manage/studyManage.vue')
const dataView = () => import('../components/data/data.vue')
const redirect = () => import('../components/index/redirect.vue')
const editMessage = () => import('../components/manage/messageManage/editMessage.vue')
const personalMessage = () => import('../components/manage/messageManage/personalMessage.vue')
const teacherManage = () => import('../components/manage/teacherManage.vue')
const error = () => import ('../components/manage/401.vue')
const messageInfo = () => import('../components/messageInfo.vue')
const pushInfo = () => import('../components/pushInfo.vue')
const courseManage = () => import('../components/manage/courseManage.vue')
const taskManage = () => import('../components/manage/taskManage.vue')
Vue.use(Router)

const routes = [
    {
        path: '/',
        name: login,
        component: (resolve) => require(['../components/login.vue'],resolve),
    },
    {
        path: '/index',
        name: index,
        component: (resolve) => require(['../components/index/index.vue'],resolve),
        children: [
            {
                path: '/dataView',
                name: dataView,
                component: (resolve) => require(['../components/data/data.vue'],resolve)
            },
            //学生管理
            {
                path: '/studyManage',
                name: studyManage,
                component: (resolve) => require(['../components/manage/studyManage.vue'],resolve),
            },
            //教师管理
            {
                path: '/teacherManage',
                name: teacherManage,
                component: (resolve) => require(['../components/manage/teacherManage.vue'],resolve),
            },
            //修改信息
            {
                path: '/editMessage',
                name: editMessage,
                component: (resolve) => require(['../components/manage/messageManage/editMessage.vue'],resolve),
            },
            //个人信息
            {
                path: '/personalMessage',
                name: personalMessage,
                component: (resolve) => require(['../components/manage/messageManage/personalMessage.vue'],resolve),
            },
            //404
            {
                path: '/error',
                name: error,
                component: (resolve) => require(['../components/manage/401.vue'],resolve)
            },
            //消息通知
            {
                path: '/messageInfo',
                name: messageInfo,
                component: (resolve) => require(['../components/messageInfo.vue'],resolve)
            },
            //发布通知
            {
                path: '/pushInfo',
                name: pushInfo,
                component: (resolve) => require(['../components/pushInfo.vue'],resolve)
            },
            //课程管理
            {
                path: '/courseManage',
                name: courseManage,
                component: (resolve) => require(['../components/manage/courseManage.vue'],resolve)
            },
            //任务管理
            {
                path: '/taskManage',
                name: taskManage,
                component: (resolve) => require(['../components/manage/taskManage.vue'],resolve)
            }
        ]
    },
    //页面刷新重定向
    {
        path: '/redirect',
        name: redirect,
        component: (resolve) => require(['../components/index/redirect.vue'],resolve),
    }

]

const router = new Router({
    routes,
    mode: 'hash'
})

export default router