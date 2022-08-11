import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import BaseAppComponent from "./BaseAppComponent.vue";

// createApp(App).mount('#app')
// createApp(App).use(router).mount('#app')
createApp(BaseAppComponent).use(router).mount('#app')
