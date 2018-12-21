<template>
  <v-card>
    <v-layout row>
      <v-flex xs12 sm12 md12 class="text-xs-center text-sm-center text-md-center mt-5">
        <h1 class="display-1">Our Trending Songs!!!</h1>
      </v-flex>
    </v-layout>
    <v-container grid-list-sm fluid>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center text-sm-center text-md-center">
          <md-card>
            <md-card-media>
              <!-- swiper -->
              <swiper :options="swiperOption">
                <swiper-slide v-for="src in trendingSongs" :key="src">
                  <v-img :src="src.src" class="songsTrending" height="200px" width="300px">
                    <v-btn class="listen" fab>
                      <v-icon>{{ icon }}</v-icon>
                    </v-btn>
                  </v-img>
                  <v-text style="text-align: center;">{{ src.song }}</v-text>
                  <br>
                  <v-text class="artist-name">{{ src.name }}</v-text>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </md-card-media>
          </md-card>
          <!-- <v-img :src="src.src" class="songsTrending" height="200px" width="300px">
            <v-btn class="listen" fab>
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
          </v-img>
          <v-text>{{ src.song }}</v-text>
          <br>
          <v-text class="artist-name">{{ src.name }}</v-text>-->
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout row>
      <v-flex xs12 sm12 md12 class="text-xs-center text-sm-center text-md-center mb-3">
        <v-btn>Explore Trending Songs</v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    swiperOption: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },
    icon: 'fas fa-play'
  }),
  computed: {
    trendingSongs () {
      return this.$store.state.srcs
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
  transform: translateY(-50%);
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
.artist-name {
  opacity: 0.2;
}
.swiper-pagination {
  position: absolute;
  top: 95%;
}
</style>
