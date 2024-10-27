import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/styles.scss'
import '@/assets/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.app-dark',
    },
  },
})
app.mount('#app')
