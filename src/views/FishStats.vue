<template lang="html">
  <div class="fishpage">
    <!-- Navigation component -->
    <Navigation :page="this.$route.params.fromId"/>

    <!-- Fish name data and image -->
    <v-container text-xs-center fill-height>
      <v-layout row align-center justify-center fill-height wrap>
        <v-flex xs12 sm6 md6 lg6>
          <v-card flat color="yellow lighten-4">
            <v-card-text>
              {{fish.name}}
            </v-card-text>

            <v-img
              :src="fish.img"
              aspect-ratio="1"
              contain
            ></v-img>

            <v-card-text>
              <!-- Fish stats shown by FishStatCard component -->
              <!-- Data is supplied throught vuex store -->
              <FishStatCard/>
            </v-card-text>

            <!-- Image gallery dialog -->
            <v-layout row justify-center>
              <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <!-- Image gallery fab button -->
                <template v-slot:activator="{ on }">
                  <v-btn fab fixed bottom right color="primary lighten-3" v-on="on">
                    <v-icon color="primary lighten-1">panorama</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <!-- Dialog toolbar -->
                  <v-toolbar dark flat color="primary lighten-3">
                    <v-btn icon dark @click="dialog = false">
                      <v-icon color="primary lighten-1">close</v-icon>
                    </v-btn>
                    <v-toolbar-title><span class="headline primary--text text--lighten-1">Gallery</span></v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>

                  <v-card-actions>
                    <v-btn small flat color="secondary lighten-3">My Photos</v-btn>
                    <v-btn small flat color="secondary lighten-3">All Photos</v-btn>
                    <v-tooltip left>
                      <template v-slot:activator="{ on }">
                        <v-btn fab fixed bottom right color="success lighten-1" v-on="on" @click="onImagePick">
                          <v-icon>add_photo_alternate</v-icon>
                        </v-btn>
                      </template>
                      <span>Upload image</span>
                    </v-tooltip>
                    <!-- Input type file for uploading images -->
                    <input type="file"
                           style="display: none"
                           ref="inputFile"
                           accept="image/*"
                           @change="onFilePicked"
                           ></input>
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
                        <v-card flat tile class="galleryThumb" @click.stop="enlargeImage(n)">
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
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import FishStatCard from '@/components/FishStatCard'
import { mapState } from 'vuex'

export default {
  name: 'Fishpage',

  components: {
    Navigation,
    FishStatCard
  },

  data() {
    return {
      dialog: false,
      dialog2: false,
      imageUrl: null
    }
  },

  methods: {
    enlargeImage(n) {
      this.dialog2 = true
    },
    onImagePick() {
      this.$refs.inputFile.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      // Turn image to base64 string value
      const fileReader = new FileReader();

      // Async event to convert the image into base64
      fileReader.readAsDataURL(files)
      
      // Listen for load event after async task finishes
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result;
      })
    }
  },

  computed: {
    ...mapState([
      'fish'
    ])
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
