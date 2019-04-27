<template>
  <v-app>
    <v-content>
      <v-container class="pa-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- Footer component -->
    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
