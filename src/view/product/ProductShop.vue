<template>
  <div class="container">
    <product-master></product-master>
    <div class="art-shop">

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductMaster from './ProductMaster'

export default {
  name: 'product-shop',
  computed: {
    ...mapGetters({
      bannerList: 'topBanner',
    }),
  },
  created() {
    this.$store.dispatch('getTopBanner')
  },
  components: {
    ProductMaster,
  },
}
</script>

<style lang="css">
</style>
