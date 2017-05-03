import product from '../../api/product'
import * as types from '../mutation-types'

// initital state
const state = {
  productList: {},
  exhibDetail: {},
  topBanner: {},
}

// getters

const getters = {
  productList: res => res.productList,
  exhibDetail: res => res.exhibDetail,
  topBanner: res => res.topBanner,
}

// actions

const actions = {
  getProductList({ commit }, params) {
    product.getProductList(params).then((products) => {
      commit(types.ALL_PRODUCTS, { products })
    })
  },
  getExhibDetail({ commit }, params) {
    product.getProduct(params.id).then((exhibDetail) => {
      commit(types.EXHIB_DETAIL, { exhibDetail })
    })
  },
  getTopBanner({ commit }) {
    product.getTopBanner().then((banner) => {
      commit(types.TOP_BANNER, { banner })
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
  [types.TOP_BANNER](data, { banner }) {
    state.topBanner = banner
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
