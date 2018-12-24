import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
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
    ],
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    ],
    trendingAlbum: [
      {
        albumName: 'Kamikaze',
        albumList: '14 Songs',
        albumArtist: 'Eminem',
        albumShop: 0,
        albumImg:
          'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Eminem_-_Kamikaze.jpg/220px-Eminem_-_Kamikaze.jpg'
      },
      {
        albumName: 'Multiply',
        albumList: '12 Songs',
        albumArtist: 'Ed Sheeran',
        albumShop: 0,
        albumImg:
          'https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/X_cover.png/220px-X_cover.png'
      },
      {
        albumName: 'The Boy Who Cried Wolf',
        albumList: '8 Songs',
        albumArtist: 'Passenger',
        albumShop: 0,
        albumImg:
          'https://images-na.ssl-images-amazon.com/images/I/71uIvPHD44L._SX355_.jpg'
      },
      {
        albumName: 'Never Mind',
        albumList: '12 Songs',
        albumArtist: 'Nirvana',
        albumShop: 0,
        albumImg:
          'https://www.billboard.com/files/styles/900_wide/public/media/Nirvana-Nevermind-album-covers-billboard-1000x1000.jpg'
      },
      {
        albumName: 'True Blue',
        albumList: '12 Songs',
        albumArtist: 'Madonna',
        albumShop: 0,
        albumImg:
          'https://www.billboard.com/files/styles/900_wide/public/media/Madonna-True-Blue-album-covers-billboard-1000x1000.jpg'
      },
      {
        albumName: 'MotherShip',
        albumList: '14 Songs',
        albumArtist: 'Led Zeppelin',
        albumShop: 0,
        albumImg:
          'https://www.billboard.com/files/styles/900_wide/public/media/Led-Zeppelin-Led-Zeppelin-greatest-album-covers-billboard-1000x1000.jpg'
      },
      {
        albumName: 'Holy Diver',
        albumList: '14 Songs',
        albumArtist: 'Dio',
        albumShop: 0,
        albumImg:
          'https://www.revolvermag.com/sites/default/files/styles/original_image__844px_x_473px_/public/media/section-media/screen_shot_2017-08-14_at_12.18.16_pm.png?itok=SmNPE1gU&timestamp=1508359501'
      },
      {
        albumName: 'Just For Life',
        albumList: '8 Songs',
        albumArtist: 'Lana Del Rey',
        albumShop: 0,
        albumImg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMp3aGoybGES5e9vmfUDzSLRkKB7JkX5lqGDPFQet_Vl-NHM2K'
      }
    ],
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
    iconsFooter: [
      {
        icon: 'fab fa-facebook',
        link: 'https://www.facebook.com/'
      },
      {
        icon: 'fab fa-twitter',
        link: 'https://twitter.com/'
      },
      {
        icon: 'fab fa-google-plus',
        link: 'https://plus.google.com'
      },
      {
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/'
      },
      {
        icon: 'fab fa-instagram',
        link: 'https://www.instagram.com/'
      }
    ],
    navBarItems: [
      {
        title: 'Home',
        link: '/',
        icon: 'home'
      },
      {
        title: 'Our Music',
        link: '/ourmusic',
        icon: 'home'
      },
      {
        title: 'Sign In',
        link: '/signin',
        icon: 'home'
      },
      {
        title: '',
        link: '/addtocart',
        icon: 'shopping_cart'
      }
    ],
    load: false,
    cart: 0
  },
  mutations: {
    addToCart: (state, index) => {
      state.cart++
      if (state.load === false) {
        state.load = !state.load
      }
      const key = index
      state.trendingAlbum[key].albumShop++
    }
  },
  getters: {
    cart (state) {
      return state.cart
    },
    load (state) {
      return state.load
    },
    navBarItems (state) {
      return state.navBarItems
    },
    iconsFooter (state) {
      return state.iconsFooter
    },
    imageSrc (state) {
      return state.imageSrc
    },
    srcs (state) {
      return state.srcs
    },
    items (state) {
      return state.items
    },
    trendingAlbum (state) {
      return state.trendingAlbum
    }
  }
})
