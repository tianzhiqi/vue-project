import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '../view/product/ProductList'
import ProductActivity from '../view/product/ProductActivity'
import ProductDetail from '../view/product/ProductDetail'
import OrderConfirm from '../view/order/OrderConfirm'
import Member from '../view/member/Member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'product',
      component: ProductList,
    },
    {
      path: '/activity',
      name: 'activity',
      component: ProductActivity,
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
    {
      path: '/profile',
      name: 'profile',
      component: Member,
    },
  ],
  linkActiveClass: 'active',
})
