import "@babel/polyfill";

import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

import store from "./store/";
import router from "./router";

import 'vuetify/dist/vuetify.min.css'
import './stylus/main.css'


Vue.use(Vuetify)


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
