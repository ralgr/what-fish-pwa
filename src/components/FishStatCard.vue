<template lang="html">
  <div class="card">
    <v-container pa-0 text-xs-left>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card v-for="(data, index) in dataSet" :key="index" flat>
            <!-- Data set title -->
            <v-card-title><h4 class="title">{{ data.setName }}</h4></v-card-title>
            <v-divider class="pb-2"></v-divider>

            <!-- Data set data to display -->
            <v-card-text class="pa-0">
              <v-container pa-0>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat v-for="(info, index) in data.dataToShow" :key="index">
                      <!-- Data set normal data display -->
                      <!-- Shows only if popup is set to false -->
                      <v-card-text v-if="!info.popup" class="pt-1 pb-0">
                        {{ info.data }}
                        <span v-show="info.subdata" class="grey--text font-weight-light">{{ info.subdata }}</span>
                      </v-card-text>
                      <!-- Data set data that shows another view or component -->
                      <!-- Shows only if popup is set to true -->
                      <v-card-actions v-else class="pt-0 pb-0 px-0">
                        <v-expansion-panel class="elevation-0">
                          <v-expansion-panel-content>
                            <template v-slot:header>
                              <div>{{ info.data }}</div>
                            </template>
                            <v-card>
                              <v-img
                                :src="fish.img"
                                alt="Sommething"
                                aspect-ratio="1"
                                contain
                              ></v-img>
                              <v-card-text class="grey--text font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                            </v-card>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FishStatCard',

  data() {
    return {

    }
  },

  computed: {
    ...mapState([
      'fish'
    ]),
    dataSet() {
      var dataSet = [
        {
          setName: 'Information',
          dataToShow: [
            {
              data: 'Scientific Name',
              subdata: this.fish.sname,
            },
            {
              data: 'Minimum Shore Size',
              subdata: this.fish.shore,
            }
          ]
        },
        {
          setName: 'Species Order',
          dataToShow: [
            {
              data: this.fish.specorder,
              subdata: false
            }
          ]
        },
        {
          setName: 'Species Description',
          dataToShow: [
            {
              data: null,
              subdata: this.fish.desc
            }
          ]
        },
        {
          setName: 'Suggested Bait and Rigs',
          dataToShow: [
            {
              data: 'Shore Bait',
              subdata: false,
              popup: true
            },
            {
              data: 'Shore Rig',
              subdata: false,
              popup: true
            },
            {
              data: 'Boat/Kayak Bait',
              subdata: false,
              popup: true
            },
            {
              data: 'Boat/Kayak Rig',
              subdata: false,
              popup: true
            }
          ]
        }
      ]
      return dataSet
    }
  }
}
</script>

<style lang="css" scoped>
</style>
