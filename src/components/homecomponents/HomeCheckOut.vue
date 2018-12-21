<template>
  <v-img :src="src" class="mt-3" height="500px">
    <v-text class="text-xs-center">
      <div class="check-text">
        <h3 class="headline">Check out</h3>
        <h2 class="headline">our Trending songs</h2>
      </div>
      <p
        class="display-1"
      >Connect with us to get daily updates about new songs available in the market.</p>
      <p class="display-1">Don't hesitate to sign up for free!!!</p>
    </v-text>
    <div class="sign-btn">
      <v-btn class="pa-4">Sign up for free</v-btn>
    </div>
  </v-img>
</template>

<script>
export default {
  data: () => ({
    src:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/NkzqDhfneildzktre/grunge-dark-background-4k-uhd_bsvpysqu__F0000.png'
  })
}
</script>

<style scoped>
.check-text {
  margin-top: 50px;
}
.sign-btn {
  margin-top: 50px;
  text-align: center;
}
</style>
