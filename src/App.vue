<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import ProductMaster from './view/product/ProductMaster'

export default {
  name: 'app',
  components: {
    ProductMaster,
  },
}
</script>
