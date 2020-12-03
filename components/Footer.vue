<template>
      <v-footer
    dark
    app
    padless
    absolute
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="brown darken-4">
        <strong class="subheading">Császló</strong> 
        <v-spacer></v-spacer>
  
      </v-card-title>

      <v-card-text class="py-2 white--text">
        <nuxt-link to="adatvedelem" class="mr-5">Adatvédelmi tájékoztató</nuxt-link>
        <nuxt-link to="cookie">Sütitájékoztató</nuxt-link>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>

<style>

</style>