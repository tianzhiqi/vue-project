import product from '../../api/product'
import * as types from '../mutation-types'

// initital state
const state = {
  productList: {},
  exhibDetail: {},
  topBanner: {},
  topicList: {},
  botBanner: {},
  hotList: {},
  topicDetail: {},
  bannerProList: {},
  productDetail: {},
  skuList: {},
}

// getters

const getters = {
  productList: res => res.productList,
  exhibDetail: res => res.exhibDetail,
  topBanner: res => res.topBanner,
  topicList: res => res.topicList,
  botBanner: res => res.botBanner,
  hotList: res => res.hotList,
  topicDetail: res => res.topicDetail,
  bannerProList: res => res.bannerProList,
  productDetail: res => res.productDetail,
  skuList: res => res.skuList,
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
  getTopicList({ commit }) {
    product.getShopTopic().then((topic) => {
      commit(types.SHOP_TOPICS, { topic })
    })
  },
  getBotBanner({ commit }) {
    product.getBottomBanner().then((bot) => {
      commit(types.BOT_BANNER, { bot })
    })
  },
  getHotList({ commit }) {
    product.getHotList().then((hot) => {
      commit(types.HOT_LIST, { hot })
    })
  },
  getTopicDetail({ commit }, params) {
    product.getTopicById(params.id, params.page).then((detail) => {
      commit(types.TOPIC_DETAIL, { detail })
    })
  },
  getBannerProList({ commit }, params) {
    product.getShopProducts(params).then((bannerPro) => {
      commit(types.BANNER_PRODUCTS, { bannerPro })
    })
  },
  getProductDetail({ commit }, params) {
    product.getShopProDetail(params.id).then((proDetail) => {
      commit(types.PRODUCT_DETAIL, { proDetail })
    })
  },
  getProSkuList({ commit }, params) {
    product.getProductSku(params.id).then((sku) => {
      commit(types.SKU_LIST, { sku })
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
  [types.SHOP_TOPICS](data, { topic }) {
    state.topicList = topic
  },
  [types.BOT_BANNER](data, { bot }) {
    state.botBanner = bot
  },
  [types.HOT_LIST](data, { hot }) {
    state.hotList = hot
  },
  [types.TOPIC_DETAIL](data, { detail }) {
    state.topicDetail = detail
  },
  [types.BANNER_PRODUCTS](data, { bannerPro }) {
    state.bannerProList = bannerPro
  },
  [types.PRODUCT_DETAIL](data, { proDetail }) {
    state.productDetail = proDetail
  },
  [types.SKU_LIST](data, { sku }) {
    state.skuList = sku
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
