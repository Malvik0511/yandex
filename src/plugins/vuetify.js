import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import ru from "vuetify/es5/locale/ru";
import "../stylus/style.styl";

Vue.use(Vuetify, {
  iconfont: 'md',
  customProperties: true,
  lang: {
    locales: { ru },
    current: "ru"
  }
})
