<template>
  <div class="row no-gutters">
    <div class="col-8 bg-white rounded-lg border liu-min-height-300 mb-5">
      <b-nav class="border-bottom p-2">
        <b-nav-item
          link-classes="text-muted liu-link-hover"
          to="/users/:id/settings/profile"
          active
          active-class="text-primary"
        >个人资料设置</b-nav-item>
        <b-nav-item
          link-classes="text-muted liu-link-hover"
          to="/users/:id/settings/password"
          active
          active-class="text-primary"
        >修改密码设置</b-nav-item>
      </b-nav>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>