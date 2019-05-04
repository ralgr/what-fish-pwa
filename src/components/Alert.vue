<template lang="html">
  <v-snackbar
    v-model="visibility"
    top
    :timeout="0"
    auto-height
    color="grey darken-4"
  >
  <v-layout row wrap text-xs-left>
    <v-icon color="success lighten-2">info</v-icon>
    <ul style="list-style: none;">
      <li v-for="msg in alertMessages" :key="msg">{{ msg }}</li>
    </ul>
  </v-layout>
  <v-btn flat color="error darken-2" @click.native="toCloseAlert">
    <v-icon>close</v-icon>
  </v-btn>
</v-snackbar>
</template>

<script>
export default {
  name: 'Alert',

  props: {
    alertMessages: {
      type: Array,
      required: true
    },
    visibility: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    toCloseAlert() {
      this.$emit('doCloseAlert')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
