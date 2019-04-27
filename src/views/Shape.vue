<template lang="html">
  <div class="shape">
    <!-- Navigation component -->
    <Navigation :page="page"/>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6 v-for="shape in fishapes" :key="shape.type">
          <v-card elevation="5" class="pointer red lighten-4" @click="shapeClick(shape.type)">
            <v-img
              :src="shape.shape"
              aspect-ratio="1"
              max-height="100"
              contain
            >
            </v-img>
            <v-card-text class="px-0">{{ shape.type }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import { mapActions } from 'vuex'

export default {
  name: 'Shape',

  components: {
    Navigation
  },

  data() {
    return {
      page: 'Shapes',
      fishapes: [
        {type: 'Rays', shape: '/placeholders/Snowball.png'},
        {type: 'Flatfish', shape: '/placeholders/Watching.png'},
        {type: 'Eels', shape: '/placeholders/Steamed Buns.png'},
        {type: 'Round Fish', shape: '/placeholders/Free Pig.png'},
        {type: 'Mini Species', shape: '/placeholders/Leek.png'},
        {type: 'Sharks', shape: '/placeholders/Diving.png'}
      ]
    }
  },

  methods: {
    ...mapActions([
      'setPageAction'
    ]),
    shapeClick(type) {
      this.setPageAction(type)
      this.$router.push({name: 'shape2', params:{ id: type}})
    }
  }
}
</script>

<style lang="css" scoped>
  .shape {
    background-color: #F1F2BA;
    min-height: 100vh;
  }

  .pointer {
    cursor: pointer;
  }
</style>
