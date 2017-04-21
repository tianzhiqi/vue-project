import Vue from 'vue'
import Router from 'vue-router'
import ProductMaster from '../view/product/ProductMaster'
import ProductList from '../view/product/ProductList'
import ProductActivity from '../view/product/ProductActivity'
import ProductDetail from '../view/product/ProductDetail'
import OrderConfirm from '../view/order/OrderConfirm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ProductMaster,
      children: [
        {
          path: 'product',
          name: 'product',
          component: ProductList,
        },
        {
          path: 'activity',
          name: 'activity',
          component: ProductActivity,
        },
      ],
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
