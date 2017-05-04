<template>
  <div class="container">
    <product-master></product-master>
    <div class="art-shop">
      <div class="banner">
        <swiper :options="swiperOption">
          <swiper-slide v-for="slide in bannerList.list">
            <a href="#">
              <img :src="slide.titleImage" alt="">
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ProductMaster from './ProductMaster'

export default {
  name: 'product-shop',
  computed: {
    ...mapGetters({
      bannerList: 'topBanner',
    }),
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
      },
    }
  },
  created() {
    this.$store.dispatch('getTopBanner')
  },
  components: {
    ProductMaster,
    swiper,
    swiperSlide,
  },
}
</script>

<style lang="css">
</style>
