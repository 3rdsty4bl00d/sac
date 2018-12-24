<template>
  <md-card>
    <v-text class="text-xs-center text-sm-center text-md-center">
      <h1 class="display-1">Check out</h1>
      <h2 class="headline mb-4">Our Trending Albums</h2>
    </v-text>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
        <swiper-slide v-for="album in trendingAlbum" :key="album.albumName">
          <div
            class="title"
            data-swiper-parallax="-100"
            @click="navigateToAlbum"
          >{{album.albumName}}</div>
          <br>
          <div
            class="subtitle title"
            data-swiper-parallax="-200"
            @click="navigateToAlbum"
          >{{album.albumList}}</div>
          <div
            class="title"
            data-swiper-parallax="-200"
            @click="navigateToAlbum"
          >{{album.albumArtist}}</div>
          <div class="title" data-swiper-parallax="-300" @click="navigateToAlbum">
            <v-img :src="album.albumImg" height="200px" width="200px"></v-img>
          </div>
        </swiper-slide>
        <!-- <swiper-slide>
          <div class="title" data-swiper-parallax="-100" @click="navigateToAlbum">The Wall</div>
          <div class="subtitle" data-swiper-parallax="-200">12 Songs</div>
          <div class="artist" data-swiper-parallax="-200" @click="navigateToArtists">Eminem</div>
          <div class="text" data-swiper-parallax="-300">
            <v-img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Eminem_-_Kamikaze.jpg/220px-Eminem_-_Kamikaze.jpg"
              height="200px"
              width="200px"
            ></v-img>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="title" data-swiper-parallax="-100" @click="navigateToAlbum">Divide</div>
          <div class="subtitle" data-swiper-parallax="-200">16 Songs</div>
          <div class="artist" data-swiper-parallax="-200" @click="navigateToArtists">Eminem</div>
          <div class="text" data-swiper-parallax="-300">
            <v-img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Eminem_-_Kamikaze.jpg/220px-Eminem_-_Kamikaze.jpg"
              height="200px"
              width="200px"
            ></v-img>
          </div>
        </swiper-slide>-->
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
export default {
  data: () => ({
    swiperOption: {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  }),
  computed: {
    trendingAlbum () {
      return this.$store.getters.trendingAlbum
    }
  },
  methods: {
    navigateToAlbum () {
      return this.$router.push('/trending-album')
    }
  }
}
</script>

<style scoped>
.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
  background-color: transparent !important;
  justify-content: space-around !important;
}
.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.pexels.com/photos/1563332/pexels-photo-1563332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
}
.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}
.swiper-slide .title:hover {
  cursor: pointer;
}
.swiper-slide .subtitle {
  font-size: 21px;
}
.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}
</style>
