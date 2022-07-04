import { createApp } from 'vue'
import store from '../src/store'
import App from './App.vue'

createApp(App)
    .use(store)
    .mount('#app')
