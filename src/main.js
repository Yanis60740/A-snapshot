import { createApp } from 'vue'
import App from './App.vue'
import ".//css/global.scss";
createApp(App).mount('#app')
window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}