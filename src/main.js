import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import router from './router'
import App from './App'
import store from './store'
import messages from './translate/common'

Vue.use(VueI18n)

axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('token')
const i18n = new VueI18n({
  locale: 'zh',
  messages: messages
})
new Vue({
  el: '#app',
  store,
  i18n: i18n,
  router: router,
  render: h => h(App)
})
