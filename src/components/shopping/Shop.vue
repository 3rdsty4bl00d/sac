<template>
  <div>
    <v-container>
      <v-layout row v-if="!load">
        <v-flex xs12 sm12 md12>
          <v-text class="text-xs-center text-sm-center text-ms-center">
            <p>You haven't selected any songs yet.</p>
            <p>Please! go back to 'Our Music' section to select your song.</p>
          </v-text>
        </v-flex>
      </v-layout>
      <v-layout row v-else="load">
        <v-flex xs12 sm12 md12>
          <h3 class="headline">Total: {{ cart }} items</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    cart () {
      return this.$store.getters.cart
    },
    load () {
      return this.$store.getters.load
    },
    trendingAlbum () {
      return this.$store.getters.trendingAlbum
    }
  }
}
</script>

<style>
</style>
