// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({

  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  components,
  directives,

  aliases: {
    MyButton: VBtn,
  },
  defaults: {
    MyButton: {
      color: 'primary',
      variant: 'tonal',
    },
    VBtn: {
      color: 'secondary',
      variant: 'flat'
    },
    VCard: {
      MyButton: { color: 'secondary' },
      VBtn: { color: 'primary' },
    }
  }
})

