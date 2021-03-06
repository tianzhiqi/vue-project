import axios from 'axios'

export default {
  login(openid) {
    return axios.post('/api/login', { openid, tenantId: 95 }).then(res => res.data)
  },
  getMemberInfo() {
    return axios.get('/api/member').then(res => res.data)
  },
}
