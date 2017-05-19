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
            <a href="#">
              <i class="cart-icon"></i>
            </a>
            <router-link :to="{name: 'profile'}">
                <i class="user-icon"></i>
            </router-link>
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
      <div class="product-detail_info">
        <p class="text-list product-detail_name">{{productDetail.name}}</p>
        <div class="product-detail_price">
          <p class="font-theme" v-if="productDetail.startPrice == productDetail.endPrice">{{productDetail.price | price}}</p>
          <p class="font-theme" v-if="productDetail.startPrice != productDetail.endPrice">{{productDetail.startPrice | price}}~{{productDetail.endPrice | price}}</p>
        </div>
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            {{$t("product.selectSku")}}
          </div>
          <span class="weui-cell__ft"></span>
        </a>
      </div>
    </div>
    <div class="product-buy full-width_btn">
      <div class="weui-flex">
        <div class="weui-flex__item">
          <button type="button" class="btn btn-tocart">{{$t("product.addToCart")}}</button>
        </div>
      </div>
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

<style lang="scss">
@import "../../assets/scss/_var.scss";
.full-width_btn {
  .weui-flex {
    height: 100%;
    align-items: center;
  }
  .btn-tocart {
    width: 100%;
    height: 48px;
    line-height: 48px;
    border-radius: 0;
    background-color: $theme;
    color: #fff;
    padding: 0;
  }
}
.product-detail_info {
  .product-detail_name {
    padding: 0 10px;
    line-height: 30px;
  }
  .product-detail_price {
    padding: 0 10px;
  }
}
</style>
