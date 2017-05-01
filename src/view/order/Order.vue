<template>
  <div class="container">
    <nav-header>
      <div class="weui-flex" slot="nav">
          <div class="weui-flex__item">
              <a class="text-center font-theme">
                <label></label>
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
      <div class="order-info">
        <p class="order-info_title">
          <label class="order-info_no">{{$t("order.orderNo")}}: {{order.orderNo}}</label>
        </p>
        <div class="weui-flex">
          <div class="img-cover">
            <img :src="order.product.coverImage" alt="" v-if="order.product">
          </div>
          <div class="weui-flex__item pro-info">
            <p class="text-list font-theme" v-if="order.product">{{order.product.name}}</p>
            <p class="text-list text-child">{{order.createdtime | date('YYYY-MM-DD HH:mm')}}</p>
            <p class="text-list font-gray" v-if="order.product">{{order.product.price | price}}</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <p class="text-list text-title">{{$t("order.quantity")}}: {{order.quantity}}</p>
          </div>
          <div class="weui-cell__bd">
          </div>
          <div class="weui-cell__ft">
            <p class="text-list text-title">{{$t("order.total")}}: {{order.totalAmount | price}}</p>
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
  name: 'order',
  computed: {
    ...mapGetters({
      order: 'preOrder',
    }),
  },
  created() {
    this.$store.dispatch('getPreOrder', { id: this.$route.params.id })
  },
  components: {
    NavHeader,
  },
}
</script>

<style lang="scss">
.order-info {
  padding: 0 10px;
  .order-info_title {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    border-bottom: 1px solid #eee;
    .order-info_no {
      color: #999;
    }
  }
  .weui-flex {
    padding: 10px 0;
    .text-list {
      line-height: 24px;
      margin: 0;
    }
    .text-child {
      color: #999;
    }
  }
  .weui-cell {
    padding: 10px 0;
    .text-list {
      color: #666;
    }
  }
}
</style>
