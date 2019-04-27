<template lang="html">
  <div class="fishlist">
    <v-container class="pa-0">
      <v-layout row wrap align-center justify-center fill-height>
        <v-flex xs12 sm8 md6 lg6 xl6>
          <v-card flat color="transparent" min-height="100vh">
            <!-- Text field for filter search -->
            <v-card-actions class="pa-0">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-text-field
                      label="Search"
                      prepend-icon="search"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-actions>

            <!-- Fish list container -->
            <v-container pa-3 overflow-x-hidden>
              <v-layout row wrap>
                <v-flex xs12>
                  <!-- Controls how long the list appears -->
                  <v-card max-height="60vh" flat color="transparent">
                    <!-- Fish list -->
                    <v-list two-line class="pa-0 clam" v-for="(spec, index) in fish" :key="index">
                      <!-- Fish tile for each fish -->
                      <v-list-tile  class="my-1" @click="openFishInfo(spec.name, index)">
                        <!-- Fish image -->
                        <v-list-tile-avatar tile>
                          <img
                            :src="spec.img"
                            aspect-ratio="1"
                            alt="avatar"
                          >
                        </v-list-tile-avatar>
                        <!-- Fish name and scientific name -->
                        <v-list-tile-content>
                          <v-list-tile-title class="deep-orange--text text--lighten-3">{{ spec.name }}</v-list-tile-title>
                          <v-list-tile-sub-title class="brown--text text--lighten-2 font-weight-regular">{{ spec.sname }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Fishlist',

  props: {
    fish: {
      type: Array,
      required: true
    }
  },

  methods: {
    ...mapActions([
      'setFishAction'
    ]),
    openFishInfo(fishName, index) {
      // Set fish to be viewed in fishpage
      this.setFishAction(this.fish[index])

      let fromId = this.$route.params.id;
      this.$router.push({name: 'fishpage', params:{ fromId: fromId, fish: fishName }})
    }
  }
}
</script>

<style lang="css" scoped>
  .clam {
    background-color: #F5DDCD;
  }
</style>
