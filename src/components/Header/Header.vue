<template>
  <header class="bg-white rounded-bottom border-bottom fixed-top">
    <b-navbar toggleable="md" type="light" class="container">
      <!-- logo 开始  -->
      <b-navbar-brand to="/">
        <i class="iconfont icon-fenxiang liu-icon-sm text-primary font-weight-bold"></i>
        <span class="text-primary ml-2">SKE</span>
      </b-navbar-brand>
      <!-- logo结束 -->

      <!-- 缩略按钮 -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- flex-grow-0 让nav不尽可能占据宽度 -->
      <b-collapse id="nav-collapse" is-nav class="flex-grow-0">
        <!-- 导航 -->
        <Nav/>
      </b-collapse>
      <!-- 搜索 -->
      <Search/>
      <!-- 用户登陆注册 或者用户中心 -->
      <User/>
    </b-navbar>
  </header>
</template>

<script>
import Nav from "./components/Nav.vue"; // 导航
import Search from "./components/Search.vue"; // 搜索表单
import User from "./components/User/User.vue"; // 用户

export default {
  components: {
    Nav,
    Search,
    User
  }
};
</script>