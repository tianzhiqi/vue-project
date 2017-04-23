<template>
  <!-- <div class="container"> -->
    <nav-header>
        <div class="weui-flex" slot="nav">
            <div class="weui-flex__item">
                <router-link :to="{name: 'product'}" exact>
                  <label>{{$t("home.buyTicket")}}</label>
                </router-link>
            </div>
            <div class="weui-flex__item">
                <router-link :to="{name: 'activity'}">
                    <label>{{$t("home.activity")}}</label>
                </router-link>
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
</template>

<script>
import NavHeader from '../components/Header'

export default {
  name: 'product-master',
  components: {
    NavHeader,
    // ProductList,
  },
}
</script>
