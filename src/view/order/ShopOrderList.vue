<template>
  <div class="container">
    <nav-header>
      <div class="weui-flex" slot="nav">
          <div class="weui-flex__item">
              <a class="text-center font-theme">
                <label>{{$t("member.shopOrder")}}</label>
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
      <div class="order-list">
        <div class="order-item" v-for="item in shoporderList.list">
          <router-link :to="{name: 'shoporderDetail',params: {orderno: item.orderNo}}">
            <div class="order-view">
              <p class="order-list-title">
                <i class="show-badge">{{$t("product.product")}}</i>
                <i class="small-icon badge-icon"></i>
                <label class="pull-left"><span>{{$t("order.orderNo")}}</span>{{item.orderNo}}</label>
                <label class="pull-right">{{item.createdTime | date('YYYY-MM-DD HH:mm')}}</label>
              </p>
            </div>
            <div class="shop-order_pro">
              <div class="weui-cell" v-for="sub in item.orderDetails">
                <div class="img-wrap">
                  <img :src="sub.shopProduct.orderImages.key | qiniu" alt="">
                </div>
                <div class="weui-cell__bd">
                  <p class="text-title text-list">{{sub.shopProduct.name}}</p>
                  <p class="shop-order_price"><span class="font-theme">{{sub.price | price}}</span><span>&times;</span>{{sub.goodsCount}}</p>
                </div>
              </div>
            </div>
            <div class="shop-order_ft">
              <label>{{item.sumTotal | price}}</label>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavHeader from '../components/Header'

export default {
  name: 'shoporder-list',
  computed: {
    ...mapGetters({
      shoporderList: 'shopOrderList',
    }),
  },
  created() {
    this.$store.dispatch('getShopOrderList', { page: 1 })
  },
  components: {
    NavHeader,
  },
}
</script>

<style lang="scss">
.shop-order_pro {
  .img-wrap {
    width: 80px;
    margin-right: 8px;
    img {
      vertical-align: middle;
    }
  }
}
</style>
