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
            <a href="#">
              <i class="cart-icon"></i>
            </a>
        </div>
    </nav-header>
    <div class="common-wrap">
      <div class="banner-pro_list clearfix">
        <product-item v-for="item in bannerPro" :product="item"></product-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavHeader from '../components/Header'
import ProductItem from '../components/ProductItem'

export default {
  name: 'product-banner',
  computed: {
    ...mapGetters({
      bannerPro: 'bannerProList',
    }),
  },
  created() {
    this.$store.dispatch('getBannerProList', this.$route.params.ids)
  },
  components: {
    NavHeader,
    ProductItem,
  },
}
</script>

<style lang="css">
</style>
