import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import router from './router'
import store from './store'

import Vue from 'vue';
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

loadFonts()

createApp(App).use(store).use(router).use(router).use(createPinia())
  .use(vuetify)
  .use(VCalendar, {
    componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
                // ...other defaults
  })
  .mount('#app')
  


