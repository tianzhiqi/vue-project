<template>
  <div class="container">
    <product-master></product-master>
    <div class="art-shop">
      <div class="top-banner">
        <swiper :options="swiperOption">
          <swiper-slide v-for="slide in bannerList.list">
            <a @click="turnTarget(slide.targetData)">
              <img :src="slide.titleImage" alt="">
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination">
          </div>
        </swiper>
      </div>
      <div class="shop-nav weui-flex">
        <div class="weui-flex__item">
          <router-link :to="{name: 'category'}"><span><i class="fa fa-list-ul"></i></span>{{$t("product.category")}}</router-link>
        </div>
        <div class="weui-flex__item">
          <a href="#"><span><i class="fa fa-search"></i></span>{{$t("product.search")}}</a>
        </div>
        <div class="weui-flex__item">
          <a href="#"><span><i class="fa fa-book"></i></span>{{$t("order.order")}}</a>
        </div>
        <div class="weui-flex__item">
          <a href="#"><span><i class="fa fa-volume-control-phone"></i></span>{{$t("product.service")}}</a>
        </div>
      </div>
      <div class="shop-topics" v-for="topic in topicList.list">
        <div class="weui-flex">
          <span class="topic-badge">{{topic.name}}</span>
          <router-link :to="{name: 'productTopic',params: {id: topic.id}}">
            <img :src="topic.titleImage" alt="">
          </router-link>
        </div>
        <div class="weui-flex" v-if="topic.ShopProduct">
          <div class="weui-flex__item" v-for="pro in topic.ShopProduct">
            <a href="#" v-if="pro">
              <img :src="pro.orderImages.key" alt="">
              <div class="pro-topic_name">
                <p>{{pro.name}}</p>
              </div>
            </a>
          </div>
          <div class="all-rec">
            <router-link :to="{name: 'productTopic',params: {id: topic.id}}">{{$t("product.rec")}}</router-link>
          </div>
        </div>
      </div>
      <div class="shop-hotlist">
        <div class="category-item">

        </div>
      </div>
      <div class="shop-banners" v-for="item in singleBanner.list">
        <div class="weui-flex">
          <a @click="turnTarget(item.targetData)">
            <img :src="item.titleImage" alt="">
          </a>
        </div>
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
      topicList: 'topicList',
      singleBanner: 'botBanner',
      hotList: 'hotList',
    }),
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
      },
    }
  },
  created() {
    this.$store.dispatch('getTopBanner')
    this.$store.dispatch('getTopicList')
    this.$store.dispatch('getBotBanner')
    this.$store.dispatch('getHotList')
  },
  methods: {
    turnTarget(id) {
      if (id && id !== 0 && id !== -1) {
        if (id.indexOf(',') > -1) {
          this.$router.push({ name: 'productBanner', params: { ids: id } })
        } else {
          this.$router.push({ name: 'productDetail', params: { id } })
        }
      }
    },
  },
  components: {
    ProductMaster,
    swiper,
    swiperSlide,
  },
}
</script>

<style lang="scss">
.shop-nav {
  padding: 10px 4px;
  margin: 10px 0;
  background-color: #fff;
  a {
    display: block;
    color: #8c8c8c;
    font-size: 14px;
    text-align: center;
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      text-align: center;
      border-radius: 50%;
      padding: 3px;
      line-height: 20px;
      margin-right: 5px;
    }
  }
}
.shop-topics {
  position: relative;
  color: #000;
  background-color: #fff;
  .topic-badge {
    position: absolute;
    top: -8px;
    left: 8px;
    background-color: #852c2b;
    color: #fff;
    width: 4em;
    font-size: 14px;
    text-align: center;
    padding: 5px 8px;
    z-index: 100;
    box-sizing: border-box;
  }
  .pro-topic_name {
    font-size: 12px;
    line-height: 20px;
    word-break: break-word;
    text-align: justify;
  }
  a {
    display: block;
    color: #969696;
    margin-bottom: 0;
    img {
      width: 100%;
    }
  }
  .all-rec {
    -webkit-writing-mode: vertical-lr;
    letter-spacing: 4px;
    a {
      font-size: 14px;
      padding-top: 10px;
    }
  }
}
.shop-banners {
  margin-top: 15px;
}
</style>
