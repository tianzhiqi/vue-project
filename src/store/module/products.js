import product from '../../api/product'
import * as types from '../mutation-types'

// initital state
const state = {
  productList: {},
}

// getters

const getters = {
  productList: res => res.productList,
  exhibDetail: res => res.exhibDetail,
}

// actions

const actions = {
  getProductList({ commit }) {
    product.getProductList().then((products) => {
      commit(types.ALL_PRODUCTS, { products })
    })
  },
  getExhibDetail({ commit }, params) {
    product.getProduct(params.id).then((exhibDetail) => {
      commit(types.EXHIB_DETAIL, { exhibDetail })
    })
  },
}

// mutations
const mutations = {
  [types.ALL_PRODUCTS](data, { products }) {
    state.productList = products
  },
  [types.EXHIB_DETAIL](data, { exhibDetail }) {
    state.exhibDetail = exhibDetail
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
