import axios from 'axios'
import Qs from 'qs'

export default {
    getProduct (id) {
        return axios.get('/api/products/' + id).then(res => res.data)
    },
    getProductList (params) {
        return axios.get('/api/products?' + Qs.stringify(params)).then(res => res.data);
    }
}