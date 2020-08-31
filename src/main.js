import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";
import axios from "axios";

App.use(VueAxios, axios);
createApp(App).mount('#app')
