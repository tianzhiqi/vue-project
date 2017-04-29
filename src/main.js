import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'
import App from './App'
import messages from './translate/common'
import filter from './utility/filter'

Vue.use(VueI18n)

axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`
const i18n = new VueI18n({
  locale: 'zh',
  messages,
})
// filter
Object.keys(filter).forEach(k => Vue.filter(k, filter[k]))
sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  router,
  render: h => h(App),
})
