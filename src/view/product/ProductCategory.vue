<template>
  <div class="container">
    <nav-header>
        <div class="weui-flex" slot="nav">
            <div class="weui-flex__item">
                <a class="text-center font-theme">
                  <label>{{$t("product.category")}}</label>
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
      <div class="shop-pro_list clearfix">
        <product-item v-for="item in productCategory.list" :product="item"></product-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavHeader from '../components/Header'
import ProductItem from '../components/ProductItem'

export default {
  name: 'product-category',
  computed: {
    ...mapGetters({
      productCategory: 'productCatList',
    }),
  },
  created() {
    this.$store.dispatch('getProductCategoryList', { productCategoryId: this.$route.params.id, page: 1 })
  },
  components: {
    NavHeader,
    ProductItem,
  },
}
</script>

<style lang="css">
</style>
