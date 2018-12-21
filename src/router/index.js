import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/navbar/Home'
import OurMusic from '@/components/navbar/OurMusic'
import SignIn from '@/components/navbar/SignIn'
import Shop from '@/components/shopping/Shop'
import TrendingAlbum from '@/components/albums/TrendingAlbum.vue'
import TrendingArtists from '@/components/artists/Artists.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ourmusic',
      name: 'OurMusic',
      component: OurMusic
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/addtocart',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/trending-album',
      name: 'TrendingAlbum',
      component: TrendingAlbum
    },
    {
      path: '/trending-artists',
      name: 'TrendingArtists',
      component: TrendingArtists
    }
  ]
})
