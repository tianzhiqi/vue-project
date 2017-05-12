import axios from 'axios'
import Qs from 'qs'

export default {
  getProduct(id) {
    return axios.get(`/api/products/${id}`).then(res => res.data)
  },
  getProductList(params) {
    return axios.get(`/api/products?${Qs.stringify(params)}`).then(res => res.data)
  },
  getTopBanner() {
    return axios.get('/api/productBanner').then(res => res.data)
  },
  getShopTopic() {
    return axios.get('/api/productBanner/center').then(res => res.data)
  },
  getBottomBanner() {
    return axios.get('/api/productBanner/bottom').then(res => res.data)
  },
  getHotList() {
    return axios.get('/api/productBanner/onlyProduct').then(res => res.data)
  },
  getTopicById(id, page) {
    return axios.get(`/api/productBanner/${id}?page=${page}`).then(res => res.data)
  },
  getShopProducts(ids) {
    return axios.get(`/api/shopProducts?ids=${ids}`).then(res => res.data)
  },
  getShopProDetail(id) {
    return axios.get(`/api/shopProducts/${id}`).then(res => res.data)
  },
  getProductSku(id) {
    return axios.get(`/api/shopProductPropertys/${id}`).then(res => res.data)
  },
}
