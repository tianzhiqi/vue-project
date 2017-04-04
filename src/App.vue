<template>
  <div id="app">
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from './product/ProductList'
export default {
  name: 'app',
  components: {
    ProductList
  }
}
</script>

