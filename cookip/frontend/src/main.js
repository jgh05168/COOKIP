import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import { createPinia } from 'pinia'
const app = createApp(App)
const pinia = createPinia()
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
pinia.use(piniaPluginPersistedstate)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

app.use(pinia)
app.use(router)
app.use(vuetify)
app.mount('#app')
// createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app')
