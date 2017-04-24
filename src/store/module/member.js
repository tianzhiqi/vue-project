import identity from '../../api/identity'
import * as types from '../mutation-types'

// initital state
const state = {
  member: {},
}

// getters
const getters = {
  member: res => res.member,
}

// actions
const actions = {
  getMemberInfo({ commit }) {
    identity.getMemberInfo().then((member) => {
      commit(types.MEMBER_INFO, { member })
    })
  },
}

// mutations

const mutations = {
  [types.MEMBER_INFO](data, { member }) {
    state.member = member
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
