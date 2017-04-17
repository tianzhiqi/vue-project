import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '../view/product/ProductList'
import ProductDetail from '../view/product/ProductDetail'
import OrderConfirm from '../view/order/OrderConfirm'

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
    {
      path: '/neworder/:pid',
      name: 'orderConfirm',
      component: OrderConfirm,
    },
  ],
  linkActiveClass: 'active',
})
