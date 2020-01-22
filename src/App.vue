<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <!-- <v-content> -->
      <router-view/>
    <!-- </v-content> -->
  </v-app>
</template>

<script>
import './global.scss'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
};
</script>
<style lang="scss">
</style>
