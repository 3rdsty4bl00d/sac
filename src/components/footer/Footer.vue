<template>
  <v-footer dark height="auto">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 sm12 md12>
          <v-card flat tile class="grey darken-3 white--text text-xs-center">
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-3 white--text"
                icon
                :href="icon.link"
              >
                <v-icon size="24px">{{ icon.icon }}</v-icon>
              </v-btn>
            </v-card-text>
            <v-card-text
              class="white--text pt-0"
            >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus.</v-card-text>
            <v-divider></v-divider>
            <v-card-text class="white--text">
              &copy;2018 —
              <strong>Segona tech</strong>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
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
    ]
  })
}
</script>

<style>
</style>
