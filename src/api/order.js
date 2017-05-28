import axios from 'axios'
import Qs from 'qs'

export default {
  getEnabledCoupon(id, pid) {
    return axios.get(`/api/preferentialCardMembers/${id}/${pid}`).then(res => res.data)
  },
  placeOrder(params) {
    return axios.post('/api/orders', params).then(res => res.data)
  },
  getOrder(id) {
    return axios.get(`/api/orders/${id}`).then(res => res.data)
  },
  getOrderList(params) {
    return axios.get(`/api/orders?${Qs.stringify(params)}`).then(res => res.data)
  },
  getShopOrderList(params) {
    return axios.get(`/api/shopOrders?${Qs.stringify(params)}`).then(res => res.data)
  },
  getShopOrderDetail(id) {
    return axios.get(`/api/shopOrders?orderNo=${id}`).then(res => res.data)
  },
}
