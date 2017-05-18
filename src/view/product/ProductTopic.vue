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
    <div class="topic-list_wrap">
      <div class="img-wrap">
        <img :src="topicDetail.titleImage" alt="">
      </div>
      <div class="topic-info">
        {{topicDetail.description}}
      </div>
      <div class="topic-list clearfix" v-if="topicDetail.ShopProduct">
        <product-item v-for="item in topicDetail.ShopProduct.list[0]" :product="item"></product-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavHeader from '../components/Header'
import ProductItem from '../components/ProductItem'

export default {
  name: 'topic-detail',
  computed: {
    ...mapGetters({
      topicDetail: 'topicDetail',
    }),
  },
  created() {
    this.$store.dispatch('getTopicDetail', { id: this.$route.params.id, page: 1 })
  },
  components: {
    NavHeader,
    ProductItem,
  },
}
</script>

<style lang="scss">
</style>
