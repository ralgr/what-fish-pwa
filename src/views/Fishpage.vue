<template lang="html">
  <div class="fishpage">
    <Navigation :page="this.$route.params.fromId"/>

    <v-container text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-text>
              {{fish.name}}
            </v-card-text>

            <v-img
              :src="fish.img"
              aspect-ratio="1"
              contain
            ></v-img>

            <v-card-text>
              
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import { mapState } from 'vuex'

export default {
  name: 'Fishpage',

  components: {
    Navigation
  },

  data() {
    return {

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
</style>
