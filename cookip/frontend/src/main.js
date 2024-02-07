import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app')
