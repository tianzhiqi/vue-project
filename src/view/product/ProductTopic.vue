<template>
  <div class="container">
    <nav-header>
        <div class="weui-flex" slot="nav">
            <div class="weui-flex__item">
                <a class="text-center font-theme">
                  <label></label>
                </a>
            </div>
        </div>
        <div class="head-nav-icon" slot="icon">
            <router-link :to="{name: 'profile'}">
                <i class="user-icon"></i>
            </router-link>
            <a href="#">
              <i class="cart-icon"></i>
            </a>
        </div>
    </nav-header>
    <div class="topic-list_wrap">
      <div class="img-wrap">
        <img src="" alt="">
      </div>
      <div class="topic-info">

      </div>
      <div class="topic-list">
        <div class="category-item">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavHeader from '../components/Header'

export default {
  name: 'topic-detail',
  computed: {
    ...mapGetters({
      topicDetail: 'topicDetail'
    }),
  },
  beforeCreated() {
    this.$store.dispatch('getTopicDetail')
  },
  components: {
    NavHeader,
  },
}
</script>

<style lang="scss">
</style>
