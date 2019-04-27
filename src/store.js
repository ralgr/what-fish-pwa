import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 'Page Name'
  },
  mutations: {
    setPage: (state, payload) => {
      state.page = payload
    }
  },
  actions: {
    setPageAction: ({ commit }, payload) => {
      commit('setPage', payload)
    }
  }
})
