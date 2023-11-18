import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'
import '@lottiefiles/lottie-player'
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
