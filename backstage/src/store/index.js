import Vue from 'vue'
import Vuex from 'vuex' 

Vue.use(Vuex)

const mutations = {
    changeWidth: (state, width) => {
        state.width = width;
    },
    loginName: (state, name) => {
        state.name = name;
        localStorage.setItem('username',name)
    }
}

const state = {
    width: 240,
    name: localStorage.getItem('username')
}

const getters = {
    introductionWidth: (state) => state.width,
    loginUser: (state) => state.name
}

const store = new Vuex.Store({
    mutations,
    state,
    getters
})

export default store