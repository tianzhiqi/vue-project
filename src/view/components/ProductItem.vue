<template>
  <a href="#" class="category-item_pro">
    <!-- <div class="img-wrap">
      <img :src="product.orderImages.key | qiniu" alt="">
    </div>
    <p class="text-list category-item_name">{{product.name}}</p>
    <p class="category-item_info">
      <span class="font-theme">{{product.price | price}}</span>
    </p> -->
  </a>
</template>

<script>
export default {
  name: 'product-item',
  props: {
    product: Object,
  },
}
</script>

<style lang="css">
</style>
