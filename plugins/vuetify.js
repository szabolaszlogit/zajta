import Vue from 'vue'
import Vuetify from 'vuetify'

const vuetify = new Vuetify({
  theme: {
    themes: {
        light: {
          primary: colors.amber.base,
          secondary: colors.purple.base,
          accent: colors.red.base,
          error: colors.blue.base,
          warning: colors.light-blue.base,
          info: colors.teal.base,
          success: colors.green.base
          },
    },
  },
})

export default vuetify


