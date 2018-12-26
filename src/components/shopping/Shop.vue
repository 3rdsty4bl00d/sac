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
                  <v-img
                    :src="trendingAlbum[trendingNumber[i]].albumImg"
                    height="200px"
                    width="200px"
                  ></v-img>
                </v-flex>
                <v-flex xs12 sm6 md8>
                  <p
                    class="display-1"
                  >Number of items: {{ trendingAlbum[trendingNumber[i]].albumShop }}</p>
                  <p class="headline">{{ trendingAlbum[trendingNumber[i]].albumName }}</p>
                  <p>{{ trendingAlbum[trendingNumber[i]].albumArtist }}</p>
                  <v-btn fab @click="addToCart(trendingNumber[i])">
                    <v-icon>fas fa-plus</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    @click="minusToCart(trendingNumber[i])"
                    :disabled="button"
                    :id="buttonId"
                  >
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
    times: 0,
    value: true,
    trendingNumber: [],
    button: false,
    buttonId: ''
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
      this.addCartPlus()
      this.addCartSpecific(index)
      if (this.button === true) {
        for (var i = 0; i < this.trendingNumber.length; i++) {
          console.log('0')
          if (this.trendingNumber[i] === index) {
            console.log('1')
            if (this.trendingAlbum[this.trendingNumber[i]].albumShop !== 0) {
              this.button = !this.button
            }
          }
        }
      }
    },
    addCartPlus () {
      this.$store.dispatch('addToCart')
    },
    addCartSpecific (index) {
      this.$store.dispatch('addToTrendingAlbumCart', index)
    },
    minusToCart (index) {
      this.minusToCartSub()
      this.minusToSpecific(index)
      for (let i = 0; i < this.trendingNumber.length; i++) {
        if (this.trendingNumber[i] === index) {
          if (this.trendingAlbum[this.trendingNumber[i]].albumShop === 0) {
            this.button = !this.button
          }
        }
      }
    },
    minusToCartSub () {
      this.$store.dispatch('minusToCart')
    },
    minusToSpecific (index) {
      this.$store.dispatch('minusToSpecific', index)
    }
  },
  created () {
    for (var i = 0; i < this.trendingAlbum.length; i++) {
      if (this.trendingAlbum[i].albumShop > 0) {
        this.trendingNumber.push(i)
        this.times++
      }
    }
  }
}
</script>

<style>
</style>
