<template lang="html">
  <div class="card">
    <v-container pa-0 text-xs-left>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card v-for="(data, index) in dataSet" :key="index" flat color="transparent">
            <!-- Data set title -->
            <v-card-title class="pt-5"><h4 class="title">{{ data.setName }}</h4></v-card-title>
            <v-divider class="pb-2"></v-divider>

            <!-- Data set data to display -->
            <v-card-text class="pa-0">
              <v-container pa-0>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat v-for="(info, index) in data.dataToShow" :key="index" color="transparent">
                      <!-- Data set normal data display -->
                      <!-- Shows only if popup is set to false -->
                      <v-card-text v-if="!info.popup" class="pt-1 pb-0">
                        {{ info.data }}
                        <span v-show="info.subdata" class="grey--text text--darken-1 font-weight-light">{{ info.subdata }}</span>
                      </v-card-text>
                      <!-- Data set data that shows another view or component -->
                      <!-- Shows only if popup is set to true -->
                      <v-card-actions v-else class="pt-0 pb-0 px-0">
                        <v-expansion-panel class="elevation-0">
                          <v-expansion-panel-content class="transparent">
                            <template v-slot:header>
                              <div>{{ info.data }}</div>
                            </template>
                            <v-card color="transparent">
                              <v-img
                                :src="fishState.img"
                                alt="Sommething"
                                aspect-ratio="1"
                                contain
                              ></v-img>
                              <v-card-text class="grey--text text--darken-1 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
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
import createDataSet from './mixin/createDataSet'
import { mapGetters } from 'vuex'

export default {
  name: 'FishStatCard',

  data() {
    return {

    }
  },

  computed: {
    ...mapGetters([
      'fishState'
    ]),
    dataSet() {
      return createDataSet(this.fishState);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
