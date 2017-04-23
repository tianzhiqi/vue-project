<template>
    <header class="header-bar">
        <div class="weui-flex">
          <div>
            <router-link :to="{name: 'product'}" class="global-logo" exact>
              <img src="../../assets/img/logo.png" class="global-logo-icon" alt="">
            </router-link>
          </div>
          <div class="weui-flex__item">
            <slot name="nav"></slot>
          </div>
          <slot name="icon"></slot>
        </div>
    </header>
</template>
<style lang="scss">
    @import "../../assets/scss/_var.scss";
    .header-bar {
        padding: 0 15px;
        height: 50px;
        background: #fff;
        &>.weui-flex {
          height: 50px;
          align-items: center;
          &>div:first-child {
            width: 25%;
          }
          .weui-flex__item a {
            display: block;
            height: 100%;
            line-height: 50px;
            text-align: center;
          }
        }
        .head-nav-icon {
          width: 25%;
          height: 50px;
          display: flex;
          justify-content: flex-end;
          a {
            position: relative;
            margin: 0 7px;
            display: flex;
            align-items: center;
            >b {
              position: absolute;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background-color: $theme;
            }
          }
        }
    }
    .user-icon {
      display: inline-block;
      width: 18.5px;
      height: 20px;
      vertical-align: middle;
      background: url('../../assets/img/user-icon.png') no-repeat 50%/100% 100%;
    }
    .global-logo {
      display: block;
      .global-logo-icon {
        height: 18px;
        width: auto;
        margin-left: -41px;
        vertical-align: middle;
      }
    }
</style>
