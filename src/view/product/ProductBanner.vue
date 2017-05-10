<template>
  <div class="container">
    <nav-header>
        <div class="weui-flex" slot="nav">
            <div class="weui-flex__item">
                <a class="text-center font-theme">
                  <label>{{topicDetail.name}}</label>
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
      <div class="category-item">

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavHeader from '../components/Header'

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
  component: {
    NavHeader,
  },
}
</script>

<style lang="css">
</style>
