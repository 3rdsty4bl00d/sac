<template>
  <v-card>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <v-text>
            <h2 class="display-1 mb-5">Trending Albums</h2>
          </v-text>
          <md-card>
            <md-card-media>
              <!-- swiper -->
              <swiper :options="swiperOption">
                <swiper-slide v-for="(src, i) in trendingAlbum" :key="src.name">
                  <v-img :src="src.albumImg" height="200px" width="200px" class="songsTrending">
                    <v-btn class="listen" fab @click="addToCart(i)">
                      <v-icon>{{ plus }}</v-icon>
                    </v-btn>
                  </v-img>
                  <v-text class="text-xs-center text-sm-center text-md-center">
                    <p style="margin-bottom: 0px;">{{ src.albumName }}</p>
                    <p style="margin-bottom: 0px; opacity: 0.2;">{{ src.albumArtist }}</p>
                    <p>{{ cart }}</p>
                    <p>{{ src.albumShop }}</p>
                  </v-text>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
            </md-card-media>
          </md-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    swiperOption: {
      slidesPerView: 5,
      spaceBetween: 30,
      freeMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    plus: 'fas fa-plus'
  }),
  computed: {
    trendingAlbum () {
      return this.$store.getters.trendingAlbum
    },
    cart () {
      return this.$store.getters.cart
    }
  },
  methods: {
    addToCart (index) {
      this.addCartPlus()
      this.addCartSpecific(index)
    },
    addCartPlus () {
      this.$store.dispatch('addToCart')
    },
    addCartSpecific (index) {
      this.$store.dispatch('addToTrendingAlbumCart', index)
    }
  }
}
</script>

<style scoped>
.songsTrending {
  cursor: pointer;
  transition: all 1s ease;
}
.songsTrending:hover {
  opacity: 0.5;
}
.listen {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-60%);
  visibility: hidden;
  opacity: 0;
  transition: all 1s ease;
  z-index: 99;
}
.songsTrending:hover .listen {
  visibility: visible;
  opacity: 1;
}
</style>
