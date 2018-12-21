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
    ]
  },
  mutations: {},
  actions: {},
  getters: {}
})
