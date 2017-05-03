<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ProductList from './view/product/ProductList'

export default {
  name: 'app',
  components: {
    ProductList,
  },
}
</script>
