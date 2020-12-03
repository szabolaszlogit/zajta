<template>
  
    <v-btn
      :href='mhref'
      :target="mtarget"
      :color="mcolor"
      class="my-2 white--text"
      :loading="loading"
      :disabled="loading"
      @click="loader = 'loading'"      
    >
      Letöltés
        <v-icon
        right
        dark
      >
      {{ micon }}
        
      </v-icon>
    </v-btn>  
   
</template>

<script>
  export default {
    props: {
      mhref: {
        type: String,
      },
      micon: {
        type: String,
      },
      mcolor: {
        type: String,
        default: 'primary'
      },
      mtarget: {
        type: String,
        deafult: '_blank'
      }
    },
    data () {
      return {
        loader: null,
        loading: false,
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 1500)

        this.loader = null
    },
    },
  }
</script>
