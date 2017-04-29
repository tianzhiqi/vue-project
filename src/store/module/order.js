import order from '../../api/order'
import router from '../../router'
import * as types from '../mutation-types'

// initital state
const state = {
  quantity: 1,
}

// getters
const getters = {
  quantity: res => res.quantity,
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
}

export default {
  state,
  getters,
  actions,
  mutations,
}
