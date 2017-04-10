<template>
  <div class="container">
    <nav-header>
        <div class="weui-flex" slot="nav">
            <div class="weui-flex__item">
                <router-link :to="" class="text-center">
                  <label>{{$t("home.buyTicket")}}</label>
                </router-link>
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
      <h3 class="product-name"></h3>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
