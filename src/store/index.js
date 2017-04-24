import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import products from './module/products'
import order from './module/order'
import member from './module/member'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    products,
    order,
    member,
  },
  strict: debug,
})
