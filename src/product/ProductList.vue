<template>
    <div class="container">
        <nav-header>
            <div class="weui-flex" slot="nav">
                <div class="weui-flex__item">
                    <router-link :to="{name: 'product'}">
                      <label>{{$t("home.buyTicket")}}</label>
                    </router-link>
                </div>
                <div class="weui-flex__item">
                    <a>
                        <label>{{$t("home.activity")}}</label>
                    </a>
                </div>
                <div class="weui-flex__item">
                    <a>
                        <label>{{$t("home.shop")}}</label>
                    </a>
                </div>
            </div>
            <div class="head-nav-icon" slot="icon">
                <a>
                    <i class="user-icon"></i>
                </a>
            </div>
        </nav-header>
        <div class="product-list-wrap">
            <div class="product-item" v-for="item in products.list">
                <router-link :to="{name: 'productDetail',params: {id: item.id}}">
                    <div class="img-wrap">
                        <img :src="item.titleImage">
                    </div>
                    <div>
                        <p class="text-list text-title">{{item.name}}</p>
                        <p class="text-list text-child text-sm-desc" v-show="item.productType == 1">{{$t("product.voucher")}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import NavHeader from '../components/Header'
  import identity from '../api/identity'

  export default {
    name: 'product',
    computed: mapGetters({
      products: 'productList',
    }),
    created() {
      if (!localStorage.token) {
        identity.login('o-UbJv6eJfqN0PkyvN0RiMXaPW3U').then((data) => {
          if (data.isEnrolled) {
            localStorage.setItem('token', data.token)
          }
        })
      }
      this.$store.dispatch('getProductList', { page: 1 })
    },
    components: {
      NavHeader,
    },
  }
</script>
<style lang="scss">
   @import '../assets/scss/index.scss';
   .product-item {
       display:block;
       font-size: 14px;
       color: #333;
       padding-bottom: 10px;
       margin-top: 10px;
       background: #fff;
       >a {
           display: block;
       }
       .img-wrap {
           padding-bottom: 0;
           img {
               display: block;
               width: 100%;
               height: auto;
               border-bottom: 1px solid #eee;
               border-top: 1px solid #eee;
           }
       }
       .text-list {
           margin-bottom: 0;
       }
       .text-child {
           line-height: 20px;
           color: #999;
       }
   }
   .img-wrap {
       box-sizing: border-box;
       padding: 4px;
   }
</style>
