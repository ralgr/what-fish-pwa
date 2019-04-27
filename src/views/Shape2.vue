<template lang="html">
  <div class="shape sand" >
    <!-- Navigation component -->
    <Navigation :page="page"/>

    <v-container class="pa-0">
      <v-layout row wrap align-center justify-center fill-height>
        <v-flex xs12 sm8 md6 lg6 xl6>
          <v-card flat color="transparent" min-height="100vh">
            <!-- Text field for filter search -->
            <v-card-actions>
              <v-container >
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-text-field
                      label="Search"
                      prepend-icon="search"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-actions>

            <!-- Fish list container -->
            <v-container overflow-x-hidden>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card max-height="60vh" flat>
                    <!-- Fish list -->
                    <v-list two-line v-for="(spec, index) in fish" :key="index" class="pa-0">
                      <v-list-tile>
                        <v-list-tile-avatar tile>
                          <img
                            :src="spec.img"
                            aspect-ratio="1"
                            alt="avatar"
                            class="primary"
                          >
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                          <v-list-tile-title>{{ spec.name }}</v-list-tile-title>
                          <v-list-tile-sub-title>{{ spec.sname }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider></v-divider>
                    </v-list>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
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
  name: 'Shape2',

  components: {
    Navigation
  },

  data() {
    return {
      fish: [
        {
          name: 'Spongebob',
          sname: 'Spongebobus',
          shore: '28 cm',
          boat: '28 cm',
          recshore: '30 cm',
          recboat: '30 cm',
          specorder: 'Sponge',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img: '/placeholders/Snowball.png'
        },
        {
          name: 'Spongebob',
          sname: 'Spongebobus',
          shore: '28 cm',
          boat: '28 cm',
          recshore: '30 cm',
          recboat: '30 cm',
          specorder: 'Sponge',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img: '/placeholders/Snowball.png'
        },
        {
          name: 'Spongebob',
          sname: 'Spongebobus',
          shore: '28 cm',
          boat: '28 cm',
          recshore: '30 cm',
          recboat: '30 cm',
          specorder: 'Sponge',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img: '/placeholders/Snowball.png'
        },
        {
          name: 'Spongebob',
          sname: 'Spongebobus',
          shore: '28 cm',
          boat: '28 cm',
          recshore: '30 cm',
          recboat: '30 cm',
          specorder: 'Sponge',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img: '/placeholders/Snowball.png'
        },
        {
          name: 'Spongebob',
          sname: 'Spongebobus',
          shore: '28 cm',
          boat: '28 cm',
          recshore: '30 cm',
          recboat: '30 cm',
          specorder: 'Sponge',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img: '/placeholders/Snowball.png'
        },
        {
          name: 'Spongebob',
          sname: 'Spongebobus',
          shore: '28 cm',
          boat: '28 cm',
          recshore: '30 cm',
          recboat: '30 cm',
          specorder: 'Sponge',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img: '/placeholders/Snowball.png'
        },
        {
          name: 'Spongebob',
          sname: 'Spongebobus',
          shore: '28 cm',
          boat: '28 cm',
          recshore: '30 cm',
          recboat: '30 cm',
          specorder: 'Sponge',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img: '/placeholders/Snowball.png'
        },
        {
          name: 'Spongebob',
          sname: 'Spongebobus',
          shore: '28 cm',
          boat: '28 cm',
          recshore: '30 cm',
          recboat: '30 cm',
          specorder: 'Sponge',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img: '/placeholders/Snowball.png'
        },
        {
          name: 'Spongebob',
          sname: 'Spongebobus',
          shore: '28 cm',
          boat: '28 cm',
          recshore: '30 cm',
          recboat: '30 cm',
          specorder: 'Sponge',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img: '/placeholders/Snowball.png'
        }
      ]
    }
  },

  computed: {
    ...mapState([
      'page'
    ])
  }
}
</script>

<style lang="css" scoped>
  .oflow {
    overflow-y: scroll;
  }

  .sand {
    background-color: #F1F2BA;
  }
</style>
