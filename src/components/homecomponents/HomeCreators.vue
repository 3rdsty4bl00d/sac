<template>
  <v-card>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <v-text class="text-xs-center text-sm-center text-md-center">
            <h1 class="display-1">Some Famous artists!</h1>
            <h3
              class="headline mb-5"
            >Join our community now to get a chance to collaborate with them.</h3>
          </v-text>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <md-card>
            <md-card-media class="swiper-inner">
              <swiper :options="swiperOption">
                <swiper-slide v-for="(imgS, i) in imageSrc" :key="imgS">
                  <v-img :src="imgS.src"></v-img>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </md-card-media>
          </md-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      imageSrc: [
        {
          src: 'https://picsum.photos/200/300/?gravity=center'
        },
        {
          src: 'https://picsum.photos/200/300/?gravity=east'
        },
        {
          src: 'https://picsum.photos/200/300?image=0'
        },
        {
          src: 'https://picsum.photos/g/200/300'
        },
        {
          src: 'https://picsum.photos/200/300/?random'
        },
        {
          src: 'https://picsum.photos/200/300'
        },
        {
          src: 'https://picsum.photos/200/300/?gravity=west'
        },
        {
          src: 'https://picsum.photos/200/300/?gravity=south'
        }
      ],
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style scoped>
.swiper-inner {
  width: 100%;
  height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 150px;
  height: 150px;
}
</style>
