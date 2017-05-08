<template>
    <div class="container">
      <product-master></product-master>
      <div class="product-list-wrap">
          <div class="product-item" v-for="item in products.list">
              <router-link :to="{name: 'productIndex',params: {id: item.id}}">
                  <div class="img-wrap">
                      <img :src="item.titleImage">
                  </div>
                  <div class="product-info">
                      <p class="text-list text-title">{{item.name}}</p>
                      <p class="text-list text-child text-sm-desc" v-show="item.productType == 1">{{$t("product.voucher")}}</p>
                      <div class="product-brief" v-html="item.briefIntroduction">
                      </div>
                      <div class="weui-flex">
                        <p class="product-price weui-flex__item">
                          <span class="font-theme price-member">{{item.memberPrice|price}}</span>
                          <span class="price-prime">{{item.price|price}}</span>
                        </p>
                        <a class="btn buy-now">{{$t("product.buyNow")}}</a>
                      </div>
                  </div>
              </router-link>
          </div>
      </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ProductMaster from './ProductMaster'
  import identity from '../../api/identity'

  export default {
    name: 'product',
    computed: mapGetters({
      products: 'productList',
    }),
    created() {
      if (!localStorage.token) {
        // o-UbJv6eJfqN0PkyvN0RiMXaPW3U
        identity.login('o-UbJv6eJfqN0PkyvN0RiMXaPW3U').then((data) => {
          if (data.isEnrolled) {
            localStorage.setItem('token', data.token)
          }
        })
      }
      this.$store.dispatch('getProductList', { page: 1, tenantId: 1 })
    },
    components: {
      ProductMaster,
    },
  }
</script>
<style lang="scss">
   @import '../../assets/scss/index.scss';
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
       .product-info {
         padding: 0 10px;
         .product-brief {
           font-size: 12px;
           margin-top: 4px;
           line-height: 20px;
           color: #999;
         }
         .weui-flex {
           margin-top: 6px;
           .weui-flex__item {
             display: flex;
             align-items: center;
           }
         }
         .buy-now {
           padding: 0 10px;
           border-radius: 0;
           background: $theme;
           border-color: $theme;
           color: #fff;
           line-height: 32px;
         }
       }
   }
   .img-wrap {
       box-sizing: border-box;
       padding: 4px;
   }
   .price-member {
     font-size: 18px;
   }
   .price-prime {
     color: #bbb;
     margin-left: 4px;
     font-size: 12px;
     text-decoration: line-through;
   }
</style>
