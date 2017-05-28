import order from '../../api/order'
import router from '../../router'
import * as types from '../mutation-types'

// initital state
const state = {
  quantity: 1,
  preOrder: {},
  orderList: {},
  shopOrderList: {},
  orderDetail: {},
  shopOrderDetail: {},
}

// getters
const getters = {
  quantity: res => res.quantity,
  preOrder: res => res.preOrder,
  orderList: res => res.orderList,
  shopOrderList: res => res.shopOrderList,
  orderDetail: res => res.orderDetail,
  shopOrderDetail: res => res.shopOrderDetail,
}

// actions
const actions = {
  addQuantity({ commit }) {
    commit(types.NUMBER_ADD)
  },
  reduceQuantity({ commit }) {
    commit(types.NUMBER_REDUCE)
  },
  placeOrder({ commit }, params) {
    order.placeOrder(params).then((newOrder) => {
      commit(types.PLACE_ORDER, { newOrder })
    })
  },
  getPreOrder({ commit }, params) {
    order.getOrder(params.id).then((preOrder) => {
      commit(types.GET_ORDER, { preOrder })
    })
  },
  getOrderList({ commit }, params) {
    order.getOrderList(params).then((orderList) => {
      commit(types.ORDER_LIST, { orderList })
    })
  },
  getShopOrderList({ commit }, params) {
    order.getShopOrderList(params).then((shopOrderList) => {
      commit(types.SHOP_ORDER_LIST, { shopOrderList })
    })
  },
  getOrderDetail({ commit }, params) {
    order.getOrder(params.id).then((orderDetail) => {
      commit(types.ORDER_DETAIL, { orderDetail })
    })
  },
  getShopOrderDetail({ commit }, params) {
    order.getShopOrderDetail(params.id).then((sOrderDetail) => {
      commit(types.SHOP_ORDER_DETAIL, { sOrderDetail })
    })
  },
}

const mutations = {
  [types.NUMBER_ADD]() {
    state.quantity += 1
  },
  [types.NUMBER_REDUCE]() {
    if (state.quantity > 1) {
      state.quantity -= 1
    }
  },
  [types.PLACE_ORDER](data, { newOrder }) {
    router.push({ name: 'order', params: { id: newOrder.id } })
  },
  [types.GET_ORDER](data, { preOrder }) {
    state.preOrder = preOrder
  },
  [types.ORDER_LIST](data, { orderList }) {
    state.orderList = orderList
  },
  [types.SHOP_ORDER_LIST](data, { shopOrderList }) {
    state.shopOrderList = shopOrderList
  },
  [types.ORDER_DETAIL](data, { orderDetail }) {
    state.orderDetail = orderDetail
  },
  [types.SHOP_ORDER_DETAIL](data, { sOrderDetail }) {
    state.sOrderDetail = sOrderDetail
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
