<template>
  <div class="ml-auto d-none d-md-block">
    <b-navbar-nav id="liu-user" v-if="isLogin">
      <b-nav-item-dropdown>
        <template slot="button-content">
          <i class="iconfont icon-yonghu liu-icon-sm text-primary font-weight-bold"></i>
        </template>
        <b-dropdown-item :to="`/users/${user._id}`">个人中心</b-dropdown-item>
        <b-dropdown-item to="/write" target="_blank">写文章</b-dropdown-item>
        <b-dropdown-item :to="`/users/${user._id}/resources`">我的资源</b-dropdown-item>
        <b-dropdown-item :to="`/users/${user._id}/collections`">我的收藏</b-dropdown-item>
        <b-dropdown-item :to="`/users/${user._id}/settings`">设置</b-dropdown-item>
        <b-dropdown-item @click="handleLogout">注销</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <div v-else>
      <b-button v-b-modal.login-modal size="sm" variant="outline-primary" class="mr-3">登陆</b-button>
      <b-button v-b-modal.register-modal size="sm" variant="primary" class="mr-3">加入SKE</b-button>

      <!-- 登陆modal -->
      <LoginModal/>
      <!-- 注册modal -->
      <RegisterModal/>
      <!-- 忘记密码modal -->
      <ForgetPswModal/>
    </div>
  </div>
</template>

<script>
import LoginModal from "./components/LoginModal.vue";
import RegisterModal from "./components/RegisterModal.vue";
import ForgetPswModal from "./components/ForgetPswModal.vue";

import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    LoginModal,
    RegisterModal,
    ForgetPswModal
  },
  computed: {
    ...mapState(["isLogin", "user"])
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>