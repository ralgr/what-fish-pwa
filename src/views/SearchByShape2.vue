<template lang="html">
  <div class="shape sand" >
    <!-- Navigation component -->
    <Navigation :page="this.$route.params.id"/>

    <!-- FishList component -->
    <FishList :fish="fishCollectionState"/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import FishList from '@/components/FishList'
import { mapGetters } from 'vuex'
// import { db } from '@/config/Firebase'

export default {
  name: 'SBS2',

  components: {
    Navigation,
    FishList
  },

  data() {
    return {

    }
  },

  computed: {
    ...mapGetters([
      'fishCollectionState'
    ])
  },
}
</script>

<style lang="css" scoped>
  .sand {
    background-color: #F1F2BA;
  }
</style>
