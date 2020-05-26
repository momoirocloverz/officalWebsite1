import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  name:'',
	  userInfo: {		  
	  },
  },
  getters:{
  },
  mutations: {
    SET_SCHEDULE(state, payload) {
      state.name = payload.name
    },
    RESET_SCHEDULE(state) {
      state.name = ''
    },
    SET_USERINFO(state, payload) {
      state.userInfo = payload.userInfo
    }
  },
  actions: {
    set_schedule({
      commit
    }, payload) {
      commit('SET_SCHEDULE', payload)
    },
    reset_schedule({
      commit
    }) {
      commit('RESET_SCHEDULE')
    },
    set_userinfo({
      commit
    }, payload) {
      commit('SET_USERINFO', payload)
    }
  }
})