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
          <label class="font-light-gray"><em>{{$t("order.orderNo")}}:</em>{{order.orderNo}}</label>
        </p>
        <div class="weui-flex">
          <div class="img-cover">
            <img :src="order.product.coverImage" alt="" v-if="order.product">
          </div>
          <div class="weui-flex__item pro-info">
            <p class="text-list font-theme" v-if="order.product">{{order.product.name}}</p>
            <!-- <p class="text-child text-sm-desc" v-show="exhibdetail.productType == 1">{{$t("product.voucher")}}</p> -->
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

<style lang="css">
</style>
