<template lang="html">
  <div class="fishpage">
    <!-- Navigation component -->
    <Navigation :page="this.$route.params.fromId"/>

    <!-- Fish name data and image -->
    <v-container text-xs-center fill-height>
      <v-layout row align-center justify-center fill-height wrap>
        <v-flex xs12 sm6 md6 lg6>
          <v-card flat>
            <v-card-text>
              {{fishState.name}}
            </v-card-text>

            <v-img
              :src="fishState.img"
              aspect-ratio="1"
              contain
            ></v-img>

            <v-card-text>
              <!-- Upload images from user -->
              <v-btn color="primary lighten-2" outline small @click.stop="toOpenUploadDialog">
                <v-icon left>add_photo_alternate</v-icon>
                <span>Upload Images</span>
              </v-btn>
              <ImageUpload/>
              <!-- Fish stats shown by FishStatCard component -->
              <!-- Data is supplied throught vuex store -->
              <FishStatCard/>
            </v-card-text>

            <!-- FAB button for FishGallery -->
            <v-btn fab fixed bottom right color="primary lighten-3" @click.stop="toOpenDialog">
              <v-icon color="primary lighten-1">collections</v-icon>
            </v-btn>
            <FishGallery/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import FishGallery from '@/components/FishGallery'
import FishStatCard from '@/components/FishStatCard'
import ImageUpload from '@/components/ImageUpload'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Fishpage',

  components: {
    Navigation,
    FishStatCard,
    FishGallery,
    ImageUpload
  },

  data() {
    return {
      imageUrl: null
    }
  },

  methods: {
    ...mapActions([
      'openGalleryAction',
      'openUploadDialogAction'
    ]),
    toOpenDialog() {
      this.openGalleryAction()
    },
    toOpenUploadDialog() {
      this.openUploadDialogAction()
    },
    // onImagePick() {
    //   this.$refs.inputFile.click();
    // },
    // onFilePicked(event) {
    //   const files = event.target.files;
    //   // Turn image to base64 string value
    //   const fileReader = new FileReader();
    //
    //   // Async event to convert the image into base64
    //   fileReader.readAsDataURL(files)
    //
    //   // Listen for load event after async task finishes
    //   fileReader.addEventListener('load', () => {
    //     this.imageUrl = fileReader.result;
    //   })
    // }
  },

  computed: {
    ...mapGetters([
      'fishState'
    ])
  },

  beforeRouteEnter (to, from, next) {
    // Guard for reloads
    // Redirects to SearchByShape view on page reload
    // Prevents blank page error on FishStats view
    next(vm => {
      // Checks if "fish" is not null on the store
      if (!vm.$store.getters.fishState) {
        // Redirect to SearchByShape view if "fish" is null
        next({name: 'shape'})
      }

      // Continues to load the view if "fish" is not null
    })
  }
}
</script>

<style lang="css" scoped>
  .fishpage {
    background-color: #F1F2BA;
    min-height: 100vh;
  }

  .onHover:hover {
    transition: all 0.2s ease-in;
    background-color: rgba(22, 23, 22, 0.5);
  }
</style>
