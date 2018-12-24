<template>
  <v-card>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <v-text>
            <h2 class="display-1 mb-5">Trending Artists</h2>
          </v-text>
          <md-card>
            <md-card-media>
              <!-- swiper -->
              <swiper :options="swiperOption">
                <swiper-slide v-for="src in imageSrc" :key="src.name">
                  <v-img
                    :src="src.src"
                    height="200px"
                    width="200px"
                    class="songsTrending"
                    @click="navigateToArtists"
                  ></v-img>
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
    icon: 'fas fa-play'
  }),
  methods: {
    navigateToArtists () {
      return this.$router.push('/trending-artists')
    }
  },
  computed: {
    imageSrc () {
      return this.$store.getters.imageSrc
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
</style>
