
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import Store from './store'
import uView from "uview-ui";
Vue.config.productionTip = false
Vue.prototype.$store = Store
App.mpType = 'app'
Vue.use(uView);
const app = new Vue({
		Store,
		uView,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif