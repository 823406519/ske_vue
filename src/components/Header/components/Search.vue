<template>
  <!-- 搜索表单开始 -->
  <!-- md或以上才显示 -->
  <b-nav-form class="ml-3 d-none d-md-block">
    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
    <b-button to="/search/:title" size="sm" class="my-2 my-sm-0" type="submit" variant="primary">搜索</b-button>
  </b-nav-form>
  <!-- 搜索表单结束 -->
</template>