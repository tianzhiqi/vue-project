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
    <div class="exhib-img">
      <img :src="exhibdetail.titleImage" alt="">
    </div>
    <div class="weui-article exhib-detail">
      <h3 class="product-name font-theme">{{exhibdetail.name}}</h3>
      <div class="more-desc" v-html="exhibdetail.description">
      </div>
      <div class="desc-link">
        <p class="text-right">
          <a class="font-theme" :href="exhibdetail.productMoreDetail">{{$t("product.more")}} <i class="right-arrow"></i> </a>

        </p>
      </div>
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
.exhib-detail {
  padding: 10px;
  font-size: 14px;
  background: #fff;
  margin-top: -8px;
  box-sizing: border-box;
}
.desc-link {
  a {
    position: relative;
    padding-right: 13px;
    &:after {
      content: "";
      display: inline-block;
      height: 6px;
      width: 6px;
      border-width: 2px 2px 0 0;
      border-color: #c8c8cd;
      border-style: solid;
      transform: matrix(.71,.71,-.71,.71,0,0);
      position: absolute;
      top: 50%;
      margin-top: -4px;
      right: 2px;
    }
  }
}
</style>
