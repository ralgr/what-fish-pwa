import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fish: null
  },
  mutations: {
    setFish: (state, payload) => {
      state.fish = payload
      console.log(state.fish);
    }
  },
  actions: {
    setFishAction: ({ commit }, payload) => {
      commit('setFish', payload)
    }
  }
})
