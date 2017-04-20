<template>
  <div class="container">
    <nav-header>
        <div class="weui-flex" slot="nav">
            <div class="weui-flex__item">
                <a class="text-center font-theme">
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
          <a class="font-theme" :href="exhibdetail.productMoreDetail">{{$t("product.more")}}</a>
        </p>
      </div>
    </div>
    <!-- friend tips -->
    <div class="exhib-tips">
      <div class="friend-tips" v-show="exhibdetail.prompt">
        <p class="tips-title">{{$t("product.tips")}}</p>
        <div class="tips-content font-gray">
          <p v-for="tip in tips">{{tip}}</p>
        </div>
      </div>
    </div>
    <div class="product-buy">
      <div class="weui-flex">
        <div class="weui-flex__item">
          <p class="exhib-price font-theme">{{exhibdetail.price|price}}</p>
        </div>
        <div class="buy-wrap">
          <router-link :to="{name: 'orderConfirm',params:{pid: exhibdetail.id}}" class="buy-btn">{{$t("product.buyNow")}}</router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import NavHeader from '../components/Header'

export default {
  name: 'product-detail',
  computed: {
    ...mapGetters({
      exhibdetail: 'exhibDetail',
    }),
    tips() {
      return this.exhibdetail.prompt && this.exhibdetail.prompt.split('\n')
    },
  },
  created() {
    this.$store.dispatch('getExhibDetail', { id: this.$route.params.id })
  },
  components: {
    NavHeader,
  },
}
</script>

<style lang="scss">
@import "../../assets/scss/_var.scss";
.exhib-detail {
  padding: 10px;
  font-size: 14px;
  background: #fff;
  margin-top: -8px;
  box-sizing: border-box;
}
.more-desc {
  color: #666;
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
      border-color: $theme;
      border-style: solid;
      transform: matrix(.71,.71,-.71,.71,0,0);
      position: absolute;
      top: 50%;
      margin-top: -4px;
      right: 2px;
    }
  }
}
.exhib-tips {
  padding: 0 10px;
}
.friend-tips {
  padding: 10px 0;
  background-color: #fff;
  margin-top: 10px;
}
.tips-title {
  margin-bottom: 10px;
  color: #777;
  font-size: 14px;
  margin-top: 6px;
}
.tips-content {
  font-size: 14px;
  >p {
    line-height: 20px;
    font-size: 12px;
    &:before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      margin-right: 6px;
      border-radius: 50%;
      background: $theme;
    }
  }
}
.product-buy {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  height: 48px;
  box-shadow: 1px 0 5px #bbb;
  z-index: 100;
  .buy-wrap {
    font-size: 14px;
    width: 30%;
    text-align: center;
    >a {
      display: block;
      line-height: 48px;
      color: #fff;
    }
  }
  .weui-flex__item {
    .exhib-price {
      line-height: 48px;
      padding-left: 10px;
      font-size: 24px;
    }
  }
  .buy-btn {
    background-color: $theme;
  }
}
</style>
