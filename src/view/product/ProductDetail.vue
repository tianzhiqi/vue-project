<template>
  <div class="container">
    <nav-header>
        <div class="weui-flex" slot="nav">
            <div class="weui-flex__item">
                <a class="text-center font-theme">
                  <label>{{$t("product.productDetail")}}</label>
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
      <div class="product-swiper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="slide in productDetail.imageLists">
            <img :src="slide.key|qiniu" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination">
          </div>
        </swiper>
      </div>
      <p class="text-list shop-product_name">{{productDetail.name}}</p>
      <a class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          {{$t("product.selectSku")}}
        </div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import NavHeader from '../components/Header'

export default {
  name: 'product-detail',
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
      },
    }
  },
  computed: {
    ...mapGetters({
      productDetail: 'productDetail',
      skuList: 'skuList',
    }),
  },
  created() {
    this.$store.dispatch('getProductDetail', { id: this.$route.params.id })
    this.$store.dispatch('getProSkuList', { id: this.$route.params.id })
  },
  components: {
    NavHeader,
    swiper,
    swiperSlide,
  },
}
</script>

<style lang="css">
</style>
