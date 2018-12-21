<template>
  <v-card>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <md-card>
            <md-card-media>
              <!-- swiper -->
              <swiper :options="swiperOption">
                <swiper-slide v-for="src in trendingSongs" :key="src.name">
                  <v-img :src="src.src" height="200px" width="200px"></v-img>
                  <v-text class="text-xs-center text-sm-center text-md-center">
                    <p style="margin-bottom: 0px;">{{ src.song }}</p>
                    <p style="margin-bottom: 0px;">{{ src.name }}</p>
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
    }
  }),
  computed: {
    trendingSongs () {
      return this.$store.state.srcs
    }
  }
}
</script>

<style scoped>
</style>
