import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '../view/product/ProductList'
import ProductActivity from '../view/product/ProductActivity'
import ProductShop from '../view/product/ProductShop'
import ProductIndex from '../view/product/ProductIndex'
import OrderConfirm from '../view/order/OrderConfirm'
import Order from '../view/order/Order'
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
      name: 'productIndex',
      component: ProductIndex,
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
    {
      path: '/shop',
      name: 'shop',
      component: ProductShop,
    },
    {
      path: '/order/:id',
      name: 'order',
      component: Order,
    },
  ],
  linkActiveClass: 'active',
})
