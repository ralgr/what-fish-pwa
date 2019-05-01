<template lang="html">
  <div class="shape">
    <!-- Navigation component -->
    <Navigation :page="page"/>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6 sm4 md4 lg2 v-for="shape in fishapes" :key="shape.type">
          <v-card flat class="pointer clam" @click="shapeClick(shape.type)">
            <v-img
              :src="shape.shape"
              aspect-ratio="1"
              max-height="100"
              contain
            >
            </v-img>
            <v-card-text class="px-0 deep-orange--text text--lighten-3">{{ shape.type }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'SBS',

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
    shapeClick(type) {
      // Push to Shape2
      this.$router.push({name: 'shape2', params:{ id: type }})
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

  .clam {
    background-color: #F5DDCD;
  }
</style>
