import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '../view/product/ProductList'
import ProductDetail from '../view/product/ProductDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'product',
      component: ProductList,
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: ProductDetail,
    },
  ],
  linkActiveClass: 'active',
})
