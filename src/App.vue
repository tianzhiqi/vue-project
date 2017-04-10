<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import ProductList from './product/ProductList'

export default {
  name: 'app',
  components: {
    ProductList,
  },
}
</script>
