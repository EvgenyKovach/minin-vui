import Vuelidate from "vuelidate";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/utills/message.plugin'
import dateFilter from "@/filters/date.filters"
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.use(Vuelidate)
Vue.use(messagePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')