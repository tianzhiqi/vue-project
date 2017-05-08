<template>
  <div class="container">
    <product-master></product-master>
    <div class="product-list-wrap">
        <div class="product-item" v-for="item in products.list">
            <router-link :to="{name: 'productIndex',params: {id: item.id}}">
                <div class="img-wrap">
                    <img :src="item.titleImage">
                </div>
                <div class="product-info">
                    <p class="text-list text-title">{{item.name}}</p>
                    <p class="text-list text-child text-sm-desc" v-show="item.productType == 1">{{$t("product.voucher")}}</p>
                    <div class="product-brief" v-html="item.briefIntroduction">
                    </div>
                    <div class="weui-flex">
                      <p class="product-price weui-flex__item">
                        <span class="font-theme price-member">{{item.memberPrice|price}}</span>
                        <span class="price-prime">{{item.price|price}}</span>
                      </p>
                      <a class="btn buy-now">{{$t("product.buyNow")}}</a>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ProductMaster from './ProductMaster'

  export default {
    name: 'product-activity',
    computed: mapGetters({
      products: 'productList',
    }),
    created() {
      this.$store.dispatch('getProductList', { page: 1, isActivity: true })
    },
    components: {
      ProductMaster,
    },
  }
</script>
