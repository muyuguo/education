import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    //获取登录状态
    userLogin({
        commit
    }, flag) {
        commit("userStatus", flag)
    },
    userSearch({
        commit
    },txt) {
        commit("updateSearch",txt)
    }
}
const mutations = {
    handleUserName: (state, user_name) => {
        state.user_name = user_name
        // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
        localStorage.setItem('user_name', user_name)
    },
    getToken(state, token) {
        state.token = token;
        localStorage.setItem('token', token)
    },
    userStatus(state, flag) {
        state.isLogin = flag
    },
    updateCount(state, num) {
        state.count = num
        if (state.count >= 4) {
            state.count = 0;
        }
    },
    updateSearch(state, txt) {
        state.searchTxt = txt
    }
}
const state = {
    user_name: localStorage.getItem('user_name'),
    isLogin: false,
    count: 0,
    token: localStorage.getItem('token'),
    searchTxt: '',
}
// getters 只会依赖 state 中的成员去更新
const getters = {
    userPhone: (state) => state.user_name,
    isLogin: (state) => state.isLogin,
    token: (state) => state.token,
    search: (state) => state.searchTxt
}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
export default store