<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm12 md12>
          <app-music-provider></app-music-provider>
        </v-flex>
      </v-layout>
      <v-layout row class="mt-4">
        <v-flex xs12 sm12 md12>
          <app-music-trending-songs></app-music-trending-songs>
        </v-flex>
      </v-layout>
      <v-layout row class="mt-4">
        <v-flex xs12 sm12 md12>
          <app-music-trending-Artists></app-music-trending-Artists>
        </v-flex>
      </v-layout>
      <v-layout row class="mt-4">
        <v-flex xs12 sm12 md12>
          <app-music-trending-Albums></app-music-trending-Albums>
        </v-flex>
      </v-layout>
    </v-container>
    <app-footer></app-footer>
  </div>
</template>

<script>
import MusicProvider from '@/components/musiccomponents/MusicProvider.vue'
import MusicTrendingSongs from '@/components/musiccomponents/MusicTrendingSongs.vue'
import MusicTrendingArtists from '@/components/musiccomponents/MusicTrendingArtists.vue'
import MusicTrendingAlbums from '@/components/musiccomponents/MusicTrendingAlbums.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  components: {
    appMusicProvider: MusicProvider,
    appMusicTrendingSongs: MusicTrendingSongs,
    appMusicTrendingArtists: MusicTrendingArtists,
    appMusicTrendingAlbums: MusicTrendingAlbums,
    appFooter: Footer
  }
}
</script>

<style>
</style>
