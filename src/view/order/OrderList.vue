<template>
  <div class="container">
    <nav-header>
      <div class="weui-flex" slot="nav">
          <div class="weui-flex__item">
              <a class="text-center font-theme">
                <label>{{$t("member.ticketOrder")}}</label>
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
        <div class="order-item" v-for="item in orderList.list">
          <router-link :to="{name: 'orderDetail', params: {id: item.id}}">
            <div class="order-view">
              <p class="order-list-title">
                <i class="show-badge">{{$t("product.product")}}</i>
                <i class="small-icon badge-icon"></i>
                <label class="pull-left"><span>{{$t("order.orderNo")}}</span>{{item.orderNo}}</label>
                <label class="pull-right">{{item.createdtime | date('YYYY-MM-DD HH:mm')}}</label>
              </p>
            </div>
            <div class="shop-order_pro">
              <div class="weui-cell">
                <div class="img-wrap">
                  <img :src="item.product.coverImage" alt="">
                </div>
                <div class="weui-cell__bd">
                  <p class="text-title text-list">{{item.product.name}}</p>
                  <p class="shop-order_price"><span class="font-theme">{{item.product.price | price}}</span><span>&times;</span>{{item.quantity}}</p>
                </div>
              </div>
            </div>
            <div class="shop-order_ft">
              <label>{{item.totalAmount | price}}</label>
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
  name: 'order-list',
  computed: {
    ...mapGetters({
      orderList: 'orderList',
    }),
  },
  created() {
    this.$store.dispatch('getOrderList', { page: 1 })
  },
  components: {
    NavHeader,
  },
}
</script>

<style lang="scss">
.order-list {
  .order-item {
    background: #fff;
    margin-bottom: 10px;
    padding:0 10px;
    .order-list-title {
      font-size: 12px;
      height: 24px;
      line-height: 24px;
      position: relative;
      border-bottom: 1px solid #eee;
    }
    .weui-cell__bd {
      min-height: 80px;
    }
  }
}
</style>
