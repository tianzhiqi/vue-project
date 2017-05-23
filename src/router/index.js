import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '../view/product/ProductList'
import ProductActivity from '../view/product/ProductActivity'
import ProductShop from '../view/product/ProductShop'
import ProductTopic from '../view/product/ProductTopic'
import ProductBanner from '../view/product/ProductBanner'
import ProductIndex from '../view/product/ProductIndex'
import ProductDetail from '../view/product/ProductDetail'
import ProductCategory from '../view/product/ProductCategory'
import Category from '../view/product/Category'
import OrderConfirm from '../view/order/OrderConfirm'
import Order from '../view/order/Order'
import ShopOrderList from '../view/order/ShopOrderList'
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
      path: '/topic/:id',
      name: 'productTopic',
      component: ProductTopic,
    },
    {
      path: '/banner/:ids',
      name: 'productBanner',
      component: ProductBanner,
    },
    {
      path: '/shopproduct/:id',
      name: 'productDetail',
      component: ProductDetail,
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    },
    {
      path: '/category/:id',
      name: 'productCat',
      component: ProductCategory,
    },
    {
      path: '/neworder/:pid',
      name: 'orderConfirm',
      component: OrderConfirm,
    },
    {
      path: '/shoporder',
      name: 'shopOrderList',
      component: ShopOrderList,
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
