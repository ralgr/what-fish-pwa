<template lang="html">
  <div class="shape sand" >
    <!-- Navigation component -->
    <Navigation :page="this.$route.params.id"/>

    <Fishlist :fish="fish"/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Fishlist from '@/components/Fishlist'

export default {
  name: 'Shape2',

  components: {
    Navigation,
    Fishlist
  },

  data() {
    return {
      pageName: null,
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
          img: '/placeholders/Free Pig.png'
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
          img: '/placeholders/Watching.png'
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
          img: '/placeholders/Leek.png'
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
          img: '/placeholders/Steamed Buns.png'
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
          img: '/placeholders/Diving.png'
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

  // beforeRouteUpdate (to, from, next) {
  //   // react to route changes...
  //   // don't forget to call next()
  // }
}
</script>

<style lang="css" scoped>
  .sand {
    background-color: #F1F2BA;
  }
</style>
