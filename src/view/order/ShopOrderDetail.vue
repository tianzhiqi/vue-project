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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavHeader from '../components/Header'

export default {
  name: 'shoporder-detail',
  computed: {
    ...mapGetters({
      orderDetail: 'shopOrderDetail',
    }),
  },
  created() {
    this.$store.dispatch('getShopOrderDetail', { id: this.$route.params.orderno })
  },
  components: {
    NavHeader,
  },
}
</script>

<style lang="css">
</style>
