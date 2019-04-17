<template>
  <header class="bg-white rounded-bottom border-bottom">
    <b-navbar toggleable="md" type="light" class="container p-3">
      <!-- logo 开始  -->
      <b-navbar-brand href="#">
        <span>图标</span> Logo
      </b-navbar-brand>
      <!-- logo结束 -->

      <!-- 缩略按钮 -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- 导航开始 -->
        <b-navbar-nav>
          <b-nav-item
            to="/"
            exact-active-class="liu-link-exact-active"
            link-classes="liu-link-hover"
          >首页</b-nav-item>
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
        </b-navbar-nav>
        <!-- 导航结束 -->

        <!-- 搜索表单开始 -->
        <!-- md或以上才显示 -->
        <b-nav-form class="ml-sm-5 d-none d-md-block">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="primary">搜索</b-button>
        </b-nav-form>
        <!-- 搜索表单结束 -->

        <!-- 用户区域 -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">个人中心</b-dropdown-item>
            <b-dropdown-item href="#">我的资源</b-dropdown-item>
            <b-dropdown-item href="#">我的收藏</b-dropdown-item>
            <b-dropdown-item href="#">注销</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

