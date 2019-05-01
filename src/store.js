import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fish: null,
    gallery: false,
    uploadDialog: false
  },
  getters: {
    galleryState: state => {
      return state.gallery
    },
    fishState: state => {
      return state.fish
    },
    uploadDialogState: state => {
      return state.uploadDialog
    }
  },
  mutations: {
    setFish: (state, payload) => {
      state.fish = payload
    },
    openGallery: state => {
      state.gallery = true
    },
    closeGallery: state => {
      state.gallery = false
    },
    openUploadDialog: state => {
      state.uploadDialog = true
    },
    closeUploadDialog: state => {
      state.uploadDialog = false
    }
  },
  actions: {
    setFishAction: ({ commit }, payload) => {
      commit('setFish', payload)
    },
    openGalleryAction: ({ commit }) => {
      commit('openGallery')
    },
    closeGalleryAction: ({ commit }) => {
      commit('closeGallery')
    },
    openUploadDialogAction: ({ commit }) => {
      commit('openUploadDialog')
    },
    closeUploadDialogAction: ({ commit }) => {
      commit('closeUploadDialog')
    }
  }
})
