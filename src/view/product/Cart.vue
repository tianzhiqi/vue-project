<template>
<div class="container">
  <nav-header>
      <div class="weui-flex" slot="nav">
          <div class="weui-flex__item">
              <a class="text-center font-theme">
                <label>{{$t("product.cart")}}</label>
              </a>
          </div>
      </div>
      <div class="head-nav-icon" slot="icon">
          <router-link :to="{name: 'profile'}">
              <i class="user-icon"></i>
          </router-link>
      </div>
  </nav-header>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
