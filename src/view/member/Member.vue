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
          <div class="profile-card_img">
            <img src="../../assets/img/profile-card-bg.jpg" alt="">
            <div class="card-mask"></div>
            <div class="profile-info">
              <img src="../../assets/img/userphoto.png" alt="">
              <p class="profile-nickname">{{member.name}}</p>
            </div>
          </div>
        </a>
      </div>
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p>{{$t("member.ticketOrder")}}</p>
          </div>
          <div class="weui-cell__ft">
          </div>
        </a>
        <router-link :to="{name: 'shopOrderList'}" class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p>{{$t("member.shopOrder")}}</p>
          </div>
          <div class="weui-cell__ft">
          </div>
        </router-link >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavHeader from '../components/Header'

export default {
  name: 'profile',
  computed: {
    ...mapGetters({
      member: 'member',
      orderList: 'orderList',
    }),
  },
  created() {
    this.$store.dispatch('getMemberInfo')
    this.$store.dispatch('getOrderList', { page: 1 })
  },
  components: {
    NavHeader,
  },
}
</script>

<style lang="scss">
.profile-card {
  .profile-card_img {
    position: relative;
    >img {
      display: block;
    }
    .card-mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,.3);
      z-index: 10;
    }
    .profile-info {
      position: absolute;
      top: 20%;
      height: 40%;
      z-index: 100;
      text-align: center;
      width: 100%;
      left: 0;
      img {
        height: 100%;
        width: auto;
        border-radius: 50%;
      }
      .profile-nickname {
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-size: 14px;
      }
    }
  }
}
</style>
