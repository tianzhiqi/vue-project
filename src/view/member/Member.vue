<template>
  <div class="container">
    <nav-header>
      <div class="weui-flex" slot="nav">
          <div class="weui-flex__item">
              <a class="text-center font-theme">
                <label>{{$t("member.profile")}}</label>
              </a>
          </div>
      </div>
      <div class="head-nav-icon" slot="icon">

      </div>
    </nav-header>
    <div class="my-profile common-wrap">
      <div class="profile-card">
        <a href="#">

        </a>
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from '../components/Header'

export default {
  name: 'profile',
  components: {
    NavHeader,
  },
}
</script>

<style lang="css">
</style>
