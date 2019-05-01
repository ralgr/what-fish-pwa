<template lang="html">
  <v-layout row justify-center>
    <v-dialog :value="uploadDialogState" persistent scrollable max-width="90vw">
      <v-card>
        <!-- Image upload toolbar -->
        <v-toolbar flat color="success lighten-2">
          <v-toolbar-title><span class="success--text">Selected Images</span></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="success" flat icon small @click="toCloseUploadDialog">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-divider></v-divider>

        <!-- Image previews -->
        <v-card-text style="height: 500px;" class="pa-0">
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex
                v-for="(image, index) in toUpload"
                :key="index"
                xs6 sm2 md2 lg1
              >
                <!-- Trigger for enlarge image dialog on card -->
                <v-card flat tile>
                  <v-img
                    :src="image"
                    max-height="100px"
                  >
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat>Add</v-btn>
          <v-btn color="success" flat>Upload</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ImageUpload',

  data() {
    return {
      toUpload: []
    }
  },

  methods: {
    ...mapActions([
      'closeUploadDialogAction'
    ]),
    toCloseUploadDialog() {
      this.closeUploadDialogAction()
    }
  },

  computed: {
    ...mapGetters([
      'uploadDialogState'
    ])
  }
}
</script>

<style lang="css" scoped>
</style>
