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
                <swiper-slide v-for="src in srcs" :key="src">
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
    icon: 'fas fa-play',
    srcs: [
      {
        src: 'https://picsum.photos/200/300/?gravity=center',
        name: 'Shivam Shrestha',
        song: 'Venom'
      },
      {
        src: 'https://picsum.photos/510/300?random',
        name: 'Hell Boy',
        song: 'Hell Bells'
      },
      {
        src: 'https://picsum.photos/200/300/?gravity=east',
        name: 'Anne Hathaway',
        song: 'Barbie'
      },
      {
        src: 'https://picsum.photos/510/300?random',
        name: 'Emily Blunt',
        song: 'Blessed'
      },
      {
        src: 'https://picsum.photos/200/300/?gravity=west',
        name: 'Sylvester Stallone',
        song: 'Big Name'
      },
      {
        src: 'https://picsum.photos/200/300?image=0',
        name: 'John Krasinski',
        song: 'Enemy Force'
      },
      {
        src: 'https://picsum.photos/510/300?random',
        name: 'Leonardo Dicaprio',
        song: 'No Oscar'
      },
      {
        src: 'https://picsum.photos/200/300?image=0',
        name: 'Brie Larson',
        song: 'Avengers'
      },
      {
        src: 'https://picsum.photos/200/300/?gravity=center',
        name: 'Johnny Depp',
        song: 'Animations'
      },
      {
        src: 'https://picsum.photos/510/300?random',
        name: 'Brad Pitt',
        song: 'Hot Hot'
      },
      {
        src: 'https://picsum.photos/200/300?image=0',
        name: 'Maisie Williams',
        song: 'Game Of Thrones'
      },
      {
        src: 'https://picsum.photos/510/300?random',
        name: 'Emma Watson',
        song: 'This is the end'
      }
    ]
  })
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
