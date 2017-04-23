import order from '../../api/order'
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
}

export default {
  state,
  getters,
  actions,
  mutations,
}
