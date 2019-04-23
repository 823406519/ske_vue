<template>
  <!-- 导航开始 -->
  <b-navbar-nav>
    <b-nav-item to="/" exact-active-class="liu-link-exact-active" link-classes="liu-link-hover">首页</b-nav-item>
    <b-nav-item
      to="/classification"
      exact-active-class="liu-link-exact-active"
      link-classes="liu-link-hover"
    >分类</b-nav-item>
    <b-nav-item
      to="/about-us"
      exact-active-class="liu-link-exact-active"
      link-classes="liu-link-hover"
    >关于我们</b-nav-item>

    <!-- @todo 需要完善的响应式设计 -->
    <b-nav-item
      to="/search"
      exact-active-class="liu-link-exact-active"
      link-classes="liu-link-hover"
      class="d-block d-md-none"
    >搜索</b-nav-item>

    <!-- @todo 需要完善的响应式设计 -->
    <b-nav-item
      to="/login"
      exact-active-class="liu-link-exact-active"
      link-classes="liu-link-hover"
      class="d-block d-md-none"
      v-if="!this.$store.state.isLogin"
    >登陆</b-nav-item>

    <!-- @todo 需要完善的响应式设计 -->
    <b-nav-item
      to="/about-us"
      exact-active-class="liu-link-exact-active"
      link-classes="liu-link-hover"
      class="d-block d-md-none"
      v-if="!this.$store.state.isLogin"
    >注册</b-nav-item>

    <b-nav-item
      exact-active-class="liu-link-exact-active"
      link-classes="liu-link-hover"
      class="d-block d-md-none"
      v-if="this.$store.state.isLogin"
      @click="handleLogout"
    >注销</b-nav-item>
  </b-navbar-nav>
  <!-- 导航结束 -->
</template>

<script>
export default {
  methods: {
    handleLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>