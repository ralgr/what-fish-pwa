import Vue from 'vue'
import Vuex from 'vuex'
import { fb, db } from './config/Firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Current user logged in
    user: null,

    // Selected fish to view more information on FishStats view
    // Used in: FishStatCard component to build information cards for FishStats view
    fish: null,

    // A collection of all fish or fish selected by shapes
    // Used in: FishList component to generate a list of fish for SearchByShape2 view and SearchAllFish view
    fishCollection: [],

    // [[ FISHGALLERY COMPONENT CONTROLER ]]
    // A Popup control state for the FishGallery component Popup
    // Used in: FishStats view and FishGallery component to open or close the FishGallery component
    gallery: false,

    // [[ IMAGEUPLOAD COMPONENT CONTROLER ]]
    // A Popup control state for the ImageUpload component Popup
    // Used in: FishStats view and ImageUpload component to open or close the ImageUpload component
    uploadDialog: false
  },

  // ==[[ GETTERS ]]===============================
  getters: {
    // User state getter
    userState: state => {
      return state.user
    },

    // Gallery state getter
    galleryState: state => {
      return state.gallery
    },

    // Fish state getter
    fishState: state => {
      return state.fish
    },

    // Upload state getter
    uploadDialogState: state => {
      return state.uploadDialog
    },

    // FishCollection state getter
    fishCollectionState: state => {
      return state.fishCollection
    },

  },

  // ==[[ MUTATIONS ]]===============================
  mutations: {
    // Mutation to set new data for "fish" on state
    setFish: (state, payload) => {
      state.fish = payload
    },

    // [[ FISHGALLERY COMPONENT CONTROLERS ]]
    // Mutation to set "gallery" on state to "true"
    openGallery: state => {
      state.gallery = true
    },
    // Mutation to set "gallery" on state to "false"
    closeGallery: state => {
      state.gallery = false
    },

    // [[ IMAGEUPLOAD COMPONENT CONTROLERS ]]
    // Mutation to set "uploadDialog" on state to "true"
    openUploadDialog: state => {
      state.uploadDialog = true
    },
    // Mutation to set "uploadDialog" on state to "false"
    closeUploadDialog: state => {
      state.uploadDialog = false
    },

    // [[ FISH COLLECTION MUTATIONS ]]
    // Mutation to set new data for "fishCollection" on state
    setFishCollection: (state, payload) => {
      // Payload is an array of objects containing fish data
      payload.forEach(fish => {
        // Copy each fish object on the payload array onto the "fishCollection" array on state
        state.fishCollection.push(fish)
      })
    },
    // Mutation to clear the fishCollection state of previous data
    clearFishCollection: state => {
      state.fishCollection = []
    }
  },

  // ==[[ ACTIONS ]]===============================
  actions: {
    // Action to commit setFish mutation for use in FishStats view and FishStatsCard component
    setFishAction: ({ commit }, payload) => {
      commit('setFish', payload)
    },

    // [[ FISHGALLERY COMPONENT CONTROLERS ]]
    // Actions to commit opening and closing mutations for FishGallery component
    openGalleryAction: ({ commit }) => {
      commit('openGallery')
    },
    closeGalleryAction: ({ commit }) => {
      commit('closeGallery')
    },

    // [[ IMAGEUPLOAD COMPONENT CONTROLERS ]]
    // Actions to commit opening and closing mutations for ImageUpload component
    openUploadDialogAction: ({ commit }) => {
      commit('openUploadDialog')
    },
    closeUploadDialogAction: ({ commit }) => {
      commit('closeUploadDialog')
    },

    uploadImageAction: ({ getters }, payload) => {
      // Array of images
      let images = payload

      // Image details used for filtering
      const imgDetails = {
        user: getters.userState,
        name: getters.fishState.name
      }


      // console.log(imgDetails);
      images.forEach(image => {
        // Used in Firebase calls
        // Ids of every database entry
        let saveId

        db.collection('what-fish-images')
        .add(imgDetails)
        .then(data => {
          // Get the ID of the database entry
          // Used to link the image to the entry
          saveId = data.id
          return saveId
        })
        .then(saveId => {
          // Image data for use in naming image for Firebase Storage
          const filename = image.name
          const extension = filename.slice(filename.lastIndexOf('.'))

          // Save image to Firebase Storage with the saveId + extension as the filename
          return fb.storage().ref('Fish/' + saveId  + extension).put(image)
        })
        .then(fileData => {
          // Get download URL
          fb.storage().ref(fileData.metadata.fullPath).getDownloadURL().then(url => {
            // Add the actual image URL to the database entry
            return db.collection('what-fish-images').doc(saveId).update({imageUrl: url})
          })
        })
        .catch(error => {
          alert('Error occured: ' + error)
        })
      })
    },

    setFishCollectionAction: ({ commit }, payload) => {
      db.collection('what-fish-fish-data')
      .where("shape", "==", `${payload}`)
      .onSnapshot(data => {
        // New fishCollection Array
        const fishCollection = []

        // Clear old data using mutation
        commit('clearFishCollection')

        // Fetch new data to repopulate fishCollection
        data.forEach(fishObject => {
          fishCollection.push({
            // Take the ID of the fishObject entry and add it to each object as another attribute
            id: fishObject.id,
            // Spread the data inside object
            ...fishObject.data()
          })
        })

        // Send new fishCollection data to mutate the state with it
        commit('setFishCollection', fishCollection)
      })
    },
  }
})
