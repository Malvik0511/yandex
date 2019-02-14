import "@babel/polyfill";

import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

import Store from "./store/";

Vue.use(Vuetify)


Vue.config.productionTip = false

new Vue({
  Store,
  render: h => h(App),
}).$mount('#app')
