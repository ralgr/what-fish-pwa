<template lang="html">
  <v-footer height="auto" class="sand">
    <v-spacer></v-spacer>
    <v-card
       flat
       color="transparent"
       class="default-grey-txt font-weight-light text-xs-center"
     >

       <!-- Buttons -->
       <v-card-text >
         <v-tooltip v-for="(icon, index) in icons" :key="index" bottom nudge-top="8">
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                class="sand-shd mx-3"
                icon
              >
               <v-icon color="yellow lighten-4">{{ icon.icon }}</v-icon>
              </v-btn>
            </template>
            <span class="yellow--text text--lighten-4">{{ icon.tip }}</span>
          </v-tooltip>
       </v-card-text>

       <!-- Copyright -->
       <v-card-text>
         &copy; {{ copyright }}— <strong class="text-uppercase font-weight-light">{{ app }}</strong>
       </v-card-text>
     </v-card>
     <v-spacer></v-spacer>
 </v-footer>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      copyright: new Date().getFullYear(),
      app: 'WhatFish UK',
      icons: [
        {icon: 'info', tip: 'About'},
        {icon: 'people', tip: 'Credits'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
  .sand {
    background-color: #F1F2BA
  }

  .sand-shd {
    background-color: #D0D1A0
  }

  .default-grey-txt {
    color: #707070
  }
</style>
