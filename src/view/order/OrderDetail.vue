<template>
  <div class="container">
    <nav-header>
      <div class="weui-flex" slot="nav">
          <div class="weui-flex__item">
              <a class="text-center font-theme">
                <label>{{$t("order.orderDetail")}}</label>
              </a>
          </div>
      </div>
      <div class="head-nav-icon" slot="icon">
        <router-link :to="{name: 'profile'}">
            <i class="user-icon"></i>
        </router-link>
      </div>
    </nav-header>
    <div class="common-wrap">
      <div class="order-detail">
        <div class="shop-order_pro">
          <div class="weui-cell" v-if="orderDetail.product">
            <div class="img-wrap">
              <img :src="orderDetail.product.coverImage" alt="">
            </div>
            <div class="weui-cell__bd">
              <p class="text-title text-list">{{orderDetail.product.name}}</p>
              <p class="text-list text-child">{{orderDetail.createdtime | date('YYYY-MM-DD HH:mm')}}</p>
              <p class="shop-order_price"><span class="font-theme">{{orderDetail.product.price | price}}</span><span>&times;</span>{{orderDetail.quantity}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavHeader from '../components/Header'

export default {
  name: 'order-detail',
  computed: {
    ...mapGetters({
      orderDetail: 'orderDetail',
    }),
  },
  created() {
    this.$store.dispatch('getOrderDetail', { id: this.$route.params.id })
  },
  components: {
    NavHeader,
  },
}
</script>

<style lang="scss">
.order-detail {
  .shop-order_pro {
    background: #fff;
  }
}
</style>
