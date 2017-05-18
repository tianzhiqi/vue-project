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
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 1px;
    color: #e6e6e6;
    border-right:1px solid #e6e6e6;
  }
  &:nth-child(odd):after {
    display: none;
  }
  .category-item_pro {
    display: block;
    border-bottom: 1px solid $skuBack;
    .category-item_name {
      padding: 0 10px;
      color: #4a4a4a;
      height: 40px;
      line-height: 20px;
      overflow: hidden;
      margin-bottom: 5px;
    }
    .category-item_info {
      padding: 0 10px;
    }
  }
}
</style>
