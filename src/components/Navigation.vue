<template lang="html">
  <div class="navbar">
    <v-toolbar flat class="ocean">
      <!-- Back button -->
      <v-btn
        flat icon
        @click="$router.go(-1)"
        color="teal accent-4">
        <v-icon>chevron_left</v-icon>
      </v-btn>

      <!-- Toolbar title -->
      <!-- Supplied via props -->
      <v-toolbar-title class="headline text-capitalize teal--text text--accent-4">
        <span>{{ page }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat icon router to="/"
        color="teal accent-4" >
        <v-icon>home</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Navigation',

  props: {
    page: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
  .ocean {
    background-color: #A7FFF5;
  }
</style>
