<template>
  <div>
    <v-container>
      <div v-if="!load">
        <v-layout row>
          <v-flex xs12 sm12 md12>
            <v-text class="text-xs-center text-sm-center text-ms-center">
              <p>You haven't selected any songs yet.</p>
              <p>Please! go back to 'Our Music' section to select your song.</p>
            </v-text>
          </v-flex>
        </v-layout>
      </div>
      <div v-else="load">
        <v-layout row>
          <v-flex xs12 sm12 md12>
            <h3 class="display-1">Total: {{ cart }} items</h3>
          </v-flex>
        </v-layout>
        <v-layout row v-for="(time, i) in times" :key="time">
          <v-card width="100%" class="mt-4">
            <v-container>
              <v-layout row wrap>
                <v-flex xs12 sm6 md4>
                  <v-img :src="shoppingUrl[i]" height="200px" width="200px"></v-img>
                </v-flex>
                <v-flex xs12 sm6 md8>
                  <p class="display-1">Number of items: {{ addingShoppingCart(i) }}</p>
                  <p class="headline">{{ shoppingAlbum[i] }}</p>
                  <p>{{ shoppingArtists[i] }}</p>
                  <v-btn fab @click.prevent="addToCart(i)">
                    <v-icon>fas fa-plus</v-icon>
                  </v-btn>
                  <v-btn fab>
                    <v-icon>fas fa-minus</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    /* addingShoppingCart: [], */
    shoppingArtists: [],
    shoppingAlbum: [],
    shoppingUrl: [],
    times: 0
  }),
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
  },
  methods: {
    addToCart (index) {
      this.$store.commit('addToCart', index)
    },
    addingShoppingCart (index) {
      return this.trendingAlbum[index].albumShop
    }
  },
  created () {
    for (var i = 0; i < this.trendingAlbum.length; i++) {
      if (this.trendingAlbum[i].albumShop > 0) {
        /* this.addingShoppingCart.push(this.trendingAlbum[i].albumShop) */
        this.shoppingArtists.push(this.trendingAlbum[i].albumArtist)
        this.shoppingAlbum.push(this.trendingAlbum[i].albumName)
        this.shoppingUrl.push(this.trendingAlbum[i].albumImg)
        this.times++
      }
    }
  },
  updated () {
    for (var j = 0; j < this.addingShoppingCart.length; j++) {
      this.addingShoppingCart[j] = this.trendingAlbum[j].albumShop
    }
  }
}
</script>

<style>
</style>
