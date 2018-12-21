<template>
  <v-app dark>
    <app-tool-bar></app-tool-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import ToolBar from '@/components/navbartitles/ToolBar.vue'
export default {
  data () {
    return {
      fixed: false,
      title: 'Sac Music'
    }
  },
  components: {
    appToolBar: ToolBar
  },
  name: 'App'
}
</script>

<style scoped>
</style>

