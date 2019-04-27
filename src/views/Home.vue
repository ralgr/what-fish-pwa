<template lang="html">
  <div class="home ocean" app>
    <v-container pa-0 fill-height>
      <v-layout row align-center justify-center fill-height wrap>
        <v-flex xs12>
          <v-card flat tile  color="transparent" class="default-grey-txt">
            <v-img
              src="/placeholders/Steamed Buns.png"
              aspect-ratio="1"
              max-height="200"
              contain
            >
            </v-img>

            <v-card-title primary-title>
              <v-spacer></v-spacer>
                <h1 class="text-uppercase">WhatFish <span class="font-weight-light">UK</span></h1>
              <v-spacer></v-spacer>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn
                  depressed round router to="/shape"
                  class="green-txt-aqua green accent-2">
                  Find by shape
                </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn
                  depressed round
                  class="green-txt-aqua green accent-2">
                  Find by name
                </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      crd: null
    }
  }
}
</script>

<style lang="css" scoped>
  .ocean {
    background-color: #A7FFF5;
    height: 100vh;
  }

  .default-grey-txt {
    color: #707070
  }

  .green-txt-aqua {
    color: #00BFA5
  }
</style>
