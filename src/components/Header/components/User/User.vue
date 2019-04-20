<template>
  <div class="ml-auto d-none d-md-block">
    <b-navbar-nav id="liu-user" v-if="isLogin">
      <b-nav-item-dropdown>
        <template slot="button-content">
          <i class="iconfont icon-yonghu liu-icon-sm text-primary font-weight-bold"></i>
        </template>
        <b-dropdown-item to="/users/test123456">个人中心</b-dropdown-item>
        <b-dropdown-item to="/write" target="_blank">写文章</b-dropdown-item>
        <b-dropdown-item to="/users/id/resources">我的资源</b-dropdown-item>
        <b-dropdown-item to="/users/id/collections">我的收藏</b-dropdown-item>
        <b-dropdown-item to="/users/id/logout">注销</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <div v-else>
      <b-button v-b-modal.login-modal size="sm" variant="outline-primary" class="mr-3">登陆</b-button>
      <b-button v-b-modal.register-modal size="sm" variant="primary" class="mr-3">加入SKE</b-button>

      <!-- 登陆modal -->
      <LoginModal/>
      <!-- 注册modal -->
      <RegisterModal/>
    </div>
  </div>
</template>

<script>
import LoginModal from "./components/LoginModal.vue";
import RegisterModal from "./components/RegisterModal.vue";
export default {
  data() {
    return {
      isLogin: true
    };
  },
  components: {
    LoginModal,
    RegisterModal
  }
};
</script>