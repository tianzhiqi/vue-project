import order from '../../api/order'
import router from '../../router'
import * as types from '../mutation-types'

// initital state
const state = {
  quantity: 1,
  preOrder: {},
}

// getters
const getters = {
  quantity: res => res.quantity,
  preOrder: res => res.preOrder,
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
    order.placeOrder(params).then((orderDetail) => {
      commit(types.PLACE_ORDER, { orderDetail })
    })
  },
  getPreOrder({ commit }, params) {
    order.getOrder(params.id).then((preOrder) => {
      commit(types.GET_ORDER, { preOrder })
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
  [types.PLACE_ORDER](data, { orderDetail }) {
    router.push({ name: 'order', params: { id: orderDetail.id } })
  },
  [types.GET_ORDER](data, { preOrder }) {
    state.preOrder = preOrder
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
