<template lang="html">
  <v-layout row justify-center>
    <!-- Error alert for upload -->
    <Alert :alertMessages="alertMessages" :visibility="hasError" @doCloseAlert="toCloseAlert"/>

    <v-dialog :value="uploadDialogState" persistent scrollable max-width="90vw">
      <v-card color="grey lighten-4">
        <!-- Image upload toolbar -->
        <v-toolbar flat color="success lighten-2">
          <v-toolbar-title><span class="success--text">Selected Images</span></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="success" flat icon small @click="toCloseUploadDialog">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-divider></v-divider>

        <!-- Image previews container -->
        <v-card-text style="height: 500px;" class="pa-0">
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex
                v-for="(image, index) in imgsToUpload"
                :key="index"
                xs6 sm2 md2 lg1
              >
                <!-- Image previews -->
                  <v-card flat tile min-height="100px" color="grey lighten-2">
                  <v-img
                    :src="image"
                    max-height="100px"
                    aspect-ratio="1"
                  >

                  <!-- Remove image button and progress display -->
                  <v-layout row wrap fill-height>
                    <v-flex xs12>
                      <!-- Remove button -->
                      <v-btn class="ma-0 error lighten-1" icon small flat @click="toRemoveImage(index)">
                        <v-icon small>remove_circle</v-icon>
                      </v-btn>
                    </v-flex>
                    <v-flex xs12 style="z-index: -2;">
                      <div class="text-xs-center">
                        <!-- Progress display -->
                        <v-progress-circular
                          indeterminate
                          color="success lighten-2"
                        ></v-progress-circular>
                      </div>
                    </v-flex>
                  </v-layout>
                  </v-img>
                </v-card>
                <!-- Image name taken from raw images -->
                <div class="pt-2 text-truncate caption font-weight-light">
                  {{ rawImgsToUpload[index].name }}
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- Input type element that accepts only images -->
          <input type="file"
                 multiple
                 style="display: none;"
                 ref="fileInput"
                 accept="image/*"
                 @change="onImagePicked"/>
          <!-- Input element button trigger -->
          <v-btn color="primary lighten-2" flat @click="onImagePick">Add</v-btn>

          <!-- Upload images to database -->
          <v-btn color="success lighten-2" flat @click="toUpload">Upload</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import Alert from './Alert'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ImageUpload',

  components: {
    Alert
  },

  data() {
    return {
      imgsToUpload: [],
      rawImgsToUpload: [],
      alertMessages: []
    }
  },

  methods: {
    ...mapActions([
      'closeUploadDialogAction',
      'uploadImageAction'
    ]),
    toCloseUploadDialog() {
      this.closeUploadDialogAction()
    },
    toCloseAlert() {
      // Clear alertMessages variable
      // [*Note*] Alert shows when there is an error data in alertMessages
      this.alertMessages = []
    },
    toRemoveImage(index) {
      // Remove image in the base64 image array: imgsToUpload
      this.imgsToUpload.splice(index, 1)

      // Remove image in the raw image array: rawImgsToUpload
      this.rawImgsToUpload.splice(index, 1)
    },
    onImagePick() {
      // Reset the value of input to detect change every click
      this.$refs.fileInput.value = null

      // Trigger click event on hidden input type: file
      this.$refs.fileInput.click();
    },
    onImagePicked(event) {
      // All attached files put in "files" const
      const files = event.target.files;

      // Check all images for their extensions
      for (var i = 0; i < files.length; i++) {
        // Check if file has an extension stated
        if (files[i].name.lastIndexOf('.') <= 0) {
          // Push error message to upload error
          this.alertMessages.push('File/files not valid. File extension required')
          return
        }
        // Turn image to base64 string value
        // One needed for each image
        const fileReader = new FileReader();
        // Listen for load event after async task finishes
        fileReader.addEventListener('load', () => {
          // The result is a base64 value of the image
          // Used for image previews
          this.imgsToUpload.push(fileReader.result);
        })
        // Async event to convert the image into base64
        fileReader.readAsDataURL(files[i])

        // Actual images to be uploaded to database
        this.rawImgsToUpload.push(files[i])
      }
    },
    toUpload() {
      // Check if there are images selected
      if (this.imgsToUpload.length <= 0 && this.rawImgsToUpload <= 0) {
        // Return an error if there are no images, activating the Alert component
        this.alertMessages.push('No image/s selected.')
        return
      }

      // Build image details to properly tag the image to the correct fish
      const imgDetails = this.rawImgsToUpload;
      // Send to Firebase Storage
      this.uploadImageAction(imgDetails)

      // Close the ImageUpload components
      this.closeUploadDialogAction()

      // Clear the images from the local store
      this.imgsToUpload = []
      this.rawImgsToUpload = []

      // Alert the user of upload completion.
      this.alertMessages.push('Upload successful')
    }
  },

  computed: {
    ...mapGetters([
      'uploadDialogState',
      'fishState',
      'userState'
    ]),
    hasError() {
      // The length of alertMessages determines when the alert will show
      return this.alertMessages.length ? true : false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
