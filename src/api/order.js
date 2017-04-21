import axios from 'axios'
import Qs from 'qs'

export default {
  getEnabledCoupon(id, pid) {
    return axios.get(`/api/preferentialCardMembers/${id}/${pid}`).then(res => res.data)
  },
}
