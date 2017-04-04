import axios from 'axios'

export default {
    login (openid) {
        return axios.post("/api/login",{openid: openid, tenantId: 95}).then(res => res.data)
    }
}
