import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/global.css'
import './assets/css/color.css'

// Import Vue Material
// import { MdButton, MdMenu } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'



Vue.config.productionTip = false
Vue.use(VueAxios, axios)

// Vue.use(MdButton)
// Vue.use(MdMenu)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// Material components use in this project
