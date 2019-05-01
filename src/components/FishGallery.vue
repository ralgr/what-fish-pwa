<template lang="html">
  <div class="gallery">
    <!-- Image gallery dialog -->
    <v-layout row justify-center>
      <v-dialog :value="galleryState" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
          <!-- Dialog toolbar -->
          <v-toolbar dark flat color="primary lighten-3">
            <v-btn icon dark @click="toCloseDialog">
              <v-icon color="primary lighten-1">close</v-icon>
            </v-btn>
            <v-toolbar-title><span class="headline primary--text text--lighten-1">Gallery</span></v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-card-actions>
            <v-btn small flat color="secondary lighten-3">My Photos</v-btn>
            <v-btn small flat color="secondary lighten-3">All Photos</v-btn>
          </v-card-actions>

          <!-- Dialog content -->
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex
                v-for="n in 9"
                :key="n"
                xs6 sm4 md2 lg1
              >
                <!-- Trigger for enlarge image dialog on card -->
                <v-card flat tile class="galleryThumb" @click.stop="enlargeImage">
                  <v-img
                    :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                    max-height="150px"
                  >
                    <v-layout pa-2 column fill-height class="lightbox white--text onHover">
                      <v-spacer></v-spacer>
                      <v-flex shrink>
                        <div class="subheading">Title</div>
                      </v-flex>
                    </v-layout>
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

          <!-- Image gallery enlarge image dialog -->
          <v-layout row justify-center>
            <v-dialog
              v-model="dialog2"
              max-width="290"
            >
              <v-card>
                <v-img
                  :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                  max-height="150px"
                >
                  <v-layout pa-2 column fill-height class="lightbox white--text onHover">
                    <v-spacer></v-spacer>
                    <v-flex shrink>
                      <div class="subheading">Title</div>
                    </v-flex>
                  </v-layout>
                </v-img>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FishGallery',

  data() {
    return {
      dialog2: false,
    }
  },

  computed: {
    ...mapGetters([
      'galleryState'
    ])
  },

  methods: {
    ...mapActions([
      'closeGalleryAction'
    ]),
    toCloseDialog() {
      this.closeGalleryAction()
    },
    enlargeImage() {
      this.dialog2 = true
    },
  }
}
</script>

<style lang="css" scoped>
</style>
