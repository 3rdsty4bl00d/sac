<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm12 md12>
        <app-music-provider></app-music-provider>
      </v-flex>
    </v-layout>
    <v-layout row class="mt-5">
      <v-flex xs12 sm12 md12>
        <app-music-trending-songs></app-music-trending-songs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MusicProvider from '@/components/musiccomponents/MusicProvider.vue'
import MusicTrendingSongs from '@/components/musiccomponents/MusicTrendingSongs.vue'

export default {
  components: {
    appMusicProvider: MusicProvider,
    appMusicTrendingSongs: MusicTrendingSongs
  }
}
</script>

<style>
</style>
