<template>
  <v-card>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <v-text>
            <h2 class="display-1 mb-5">Trending Songs</h2>
          </v-text>
          <md-card>
            <md-card-media>
              <!-- swiper -->
              <swiper :options="swiperOption">
                <swiper-slide v-for="src in trendingSongs" :key="src.name">
                  <v-img :src="src.src" height="200px" width="200px" class="songsTrending">
                    <v-btn class="listen" fab>
                      <v-icon>{{ icon }}</v-icon>
                    </v-btn>
                  </v-img>
                  <v-text class="text-xs-center text-sm-center text-md-center">
                    <p style="margin-bottom: 0px;">{{ src.song }}</p>
                    <p style="margin-bottom: 0px; opacity: 0.2;">{{ src.name }}</p>
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
    icon: 'fas fa-play'
  }),
  computed: {
    trendingSongs () {
      return this.$store.getters.srcs
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
  top: 30%;
  left: 50%;
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
