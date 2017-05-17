<template>
  <div class="category-item">
    <router-link :to="{name: 'productDetail',params: {id: product.id}}" class="category-item_pro">
      <div class="img-wrap">
        <img :src="product.orderImages.key | qiniu" alt="">
      </div>
      <p class="text-list category-item_name">{{product.name}}</p>
      <p class="category-item_info">
        <span class="font-theme">{{product.price | price}}</span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'product-item',
  props: {
    product: Object,
  },
}
</script>

<style lang="scss">
@import "../../assets/scss/_var.scss";
.category-item {
  position: relative;
  float: left;
  width: 50%;
  box-sizing: border-box;
  .category-item_pro {
    display: block;
    border-bottom: 1px solid $skuBack;
    .category-item_name {
      text-align: center;
    }
  }
}
</style>
