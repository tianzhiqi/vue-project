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
            <a>
                <i class="user-icon"></i>
            </a>
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
    }),
  },
  created() {
    this.$store.dispatch('getExhibDetail', { id: this.$route.params.pid })
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
}
.img-cover {
  width: 80px;
  height: 80px;
  margin-right: 6px;
}
</style>
