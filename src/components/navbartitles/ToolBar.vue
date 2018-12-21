<template>
  <v-toolbar app dark fixed>
    <v-toolbar-title v-text="title" class="clickTitle" @click="clickTitled"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      label="Search for songs, artists and albums"
      clearable
      color="black--text"
      class="mr-5"
    ></v-text-field>
    <v-toolbar-items v-for="navbar in navBarItems" :key="navbar">
      <v-btn flat :to="navbar.link">
        <v-icon left>{{ navbar.icon }}</v-icon>
        {{ navbar.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
      title: 'Sac Music',
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
      ]
    }
  },
  methods: {
    clickTitled () {
      return this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.clickTitle {
  cursor: pointer;
}
</style>
