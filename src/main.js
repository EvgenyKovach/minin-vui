import Vuelidate from "vuelidate";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/utills/message.plugin'
import dateFilter from "@/filters/date.filters"
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.use(Vuelidate)
Vue.use(messagePlugin)

let app

firebase.initializeApp({
    apiKey: "AIzaSyCdS0obVnmigaJrArnfpLA8tTDza5cuTfk",
    authDomain: "vue-crm-m.firebaseapp.com",
    projectId: "vue-crm-m",
    storageBucket: "vue-crm-m.appspot.com",
    messagingSenderId: "755688030991",
    appId: "1:755688030991:web:13a29ce995f12f7d39347a"
})

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})