<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 sm12 md12>
          <app-home-carousel></app-home-carousel>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm12 md12>
          <app-home-check-out></app-home-check-out>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm12 md12>
          <app-home-trending></app-home-trending>
        </v-flex>
      </v-layout>
      <v-layout row class="mt-5">
        <v-flex xs12 sm12 md12>
          <app-home-about-us></app-home-about-us>
        </v-flex>
      </v-layout>
      <v-layout row class="mt-5">
        <v-flex xs12 sm12 md12>
          <app-home-creators></app-home-creators>
        </v-flex>
      </v-layout>
      <v-layout row class="mt-5">
        <v-flex xs12 sm12 md12>
          <app-home-trending-album></app-home-trending-album>
        </v-flex>
      </v-layout>
    </v-container>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HomeCarousel from '@/components/homecomponents/HomeCarousel.vue'
import HomeTrending from '@/components/homecomponents/HomeTrending.vue'
import HomeCheckOut from '@/components/homecomponents/HomeCheckOut.vue'
import HomeAboutUs from '@/components/homecomponents/HomeAboutUs.vue'
import HomeCreators from '@/components/homecomponents/HomeCreators.vue'
import HomeTrendingAlbum from '@/components/homecomponents/HomeTrendingAlbum.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  components: {
    appHomeCarousel: HomeCarousel,
    appHomeTrending: HomeTrending,
    appHomeCheckOut: HomeCheckOut,
    appHomeAboutUs: HomeAboutUs,
    appHomeCreators: HomeCreators,
    appHomeTrendingAlbum: HomeTrendingAlbum,
    appFooter: Footer
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
