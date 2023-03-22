import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
store.dispatch('getData')

createApp(App).use(store).mount('#app')
