import product from '../../api/product'
import * as types from '../mutation-types'

// initital state
const state = {
  productList: {},
}

// getters

const getters = {
  productList: res => res.productList,
}

// actions

const actions = {
  getProductList({ commit }) {
    product.getProductList().then((products) => {
      commit(types.ALL_PRODUCTS, { products })
    })
  },
}

// mutations
const mutations = {
  [types.ALL_PRODUCTS](data, { products }) {
    state.productList = products
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
