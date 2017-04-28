<template>
  <div class="container">
    <nav-header>
        <div class="weui-flex" slot="nav">
            <div class="weui-flex__item">
                <a class="text-center font-theme">
                  <label>{{$t("order.paying")}}</label>
                </a>
            </div>
        </div>
        <div class="head-nav-icon" slot="icon">
          <router-link :to="{name: 'profile'}">
              <i class="user-icon"></i>
          </router-link>
        </div>
    </nav-header>
    <div class="pay-wrap">
      <div class="pay-product">
        <div class="weui-flex">
          <div class="img-cover">
            <img :src="exhibdetail.coverImage" alt="">
          </div>
          <div class="weui-flex__item pro-info">
            <p class="text-list font-theme">{{exhibdetail.name}}</p>
            <p class="text-child text-sm-desc" v-show="exhibdetail.productType == 1">{{$t("product.voucher")}}</p>
          </div>
        </div>
      </div>
      <div class="pay-item">
        <div class="weui-flex">
          <p class="font-gray weui-flex__item">{{$t("order.price")}}</p>
          <div class="pay-price">
            {{exhibdetail.price|price}}
          </div>
        </div>
      </div>
      <div class="pay-item">
        <div class="weui-flex">
          <p class="font-gray weui-flex__item">{{$t("order.quantity")}}</p>
          <div class="price-quantity">
            <button class="weui-btn weui-btn_mini weui-btn_default" @click="reduce">-</button>
            <span class="font-gray">{{quantity}}</span>
            <button class="weui-btn weui-btn_mini weui-btn_default" @click="add">+</button>
          </div>
        </div>
      </div>
      <div class="pay-item">
        <div class="weui-flex">
          <p class="font-gray weui-flex__item">{{$t("order.discount")}}</p>
          <div class="price-discount">

          </div>
        </div>
      </div>
      <!-- friend tips -->
      <div class="friend-tips" v-show="exhibdetail.prompt">
        <p class="tips-title">{{$t("product.tips")}}</p>
        <div class="tips-content font-gray">
          <p v-for="tip in tips">{{tip}}</p>
        </div>
      </div>
    </div>
    <div class="product-buy">
      <div class="weui-flex">
        <div class="weui-flex__item">
          <p class="exhib-price font-theme">{{exhibdetail.price|price}}</p>
        </div>
        <div class="buy-wrap">
          <a  class="buy-btn" @click="placeOrder">{{$t("order.submitOrder")}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavHeader from '../components/Header'

export default {
  name: 'order-confirm',
  computed: {
    ...mapGetters({
      exhibdetail: 'exhibDetail',
      quantity: 'quantity',
    }),
    tips() {
      return this.exhibdetail.prompt && this.exhibdetail.prompt.split('\n')
    },
  },
  created() {
    this.$store.dispatch('getExhibDetail', { id: this.$route.params.pid })
  },
  methods: {
    add() {
      this.$store.dispatch('addQuantity')
    },
    reduce() {
      this.$store.dispatch('reduceQuantity')
    },
    placeOrder() {
      let orderParam = {
        quantity: this.quantity,
        channel: 1,
        productId: this.exhibdetail.id,
      }
      this.$store.dispatch('placeOrder', orderParam)
    },
  },
  components: {
    NavHeader,
  },
}
</script>

<style lang="scss">
.pay-wrap {
  margin-top: 10px;
  padding: 0 10px;
  .pay-product {
    padding: 10px 0;
    .pro-info {
      padding-left: 15px;
      .text-list {
        line-height: 20px;
        margin-bottom: 4px;
      }
      .text-child {
        color: #999;
        font-size: 12px;
      }
    }
  }
  .pay-item {
    height: 40px;
    line-height: 40px;
    border-top: 1px dashed #ddd;
    font-size: 14px;
    color: #333;
  }
}
.img-cover {
  width: 80px;
  height: 80px;
  margin-right: 6px;
}
</style>
