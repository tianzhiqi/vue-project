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
      <div class="category-list clearfix">
        <router-link :to="{name: 'productCat', params:{id: item.id}}" class="category-item" v-for="item in categoryList.list">
          <div class="img-wrap">
            <img :src="item.Image.key | qiniu" alt="">
          </div>
          <p class="category-name">{{item.categoryName}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavHeader from '../components/Header'

export default {
  name: 'category-list',
  computed: {
    ...mapGetters({
      categoryList: 'categoryList',
    }),
  },
  created() {
    this.$store.dispatch('getCategoryList')
  },
  components: {
    NavHeader,
  },
}
</script>

<style lang="scss">
.category-list {
  >a {
    float: left;
    width: 50%;
    padding:10px;
    box-sizing: border-box;
  }
  .category-name {
    color: #4a4a4a;
    text-align: center;
  }
}
</style>
