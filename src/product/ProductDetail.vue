<template>
  <div class="container">
    <nav-header>
        <div class="weui-flex" slot="nav">
            <div class="weui-flex__item">
                <a class="text-center">
                  <label>{{$t("product.intro")}}</label>
                </a>
            </div>
        </div>
        <div class="head-nav-icon" slot="icon">
            <a>
                <i class="user-icon"></i>
            </a>
        </div>
    </nav-header>
    <!-- detail -->
    <div class="weui-article">
      <h3 class="product-name">{{exhibdetail.name}}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavHeader from '../components/Header'

export default {
  name: 'product-detail',
  computed: mapGetters({
    exhibdetail: 'exhibDetail',
  }),
  created() {
    this.$store.dispatch('getExhibDetail', { id: this.$route.params.id })
  },
  components: {
    NavHeader,
  },
}
</script>

<style lang="scss">
</style>
