<template>
  <div class="row no-gutters">
    <div class="col-8 bg-white rounded-lg border liu-min-height-300">
      <div class="d-flex h-100">
        <div class="col-3 flex-column border-right p-0">
          <div class="list-group border-0">
            <router-link
              :to="`/users/${this.$route.params._id}/basic-info`"
              append
              class="list-group-item list-group-item-action border-0"
              :class="{active: $route.path === `/users/${this.$route.params._id}` || $route.path === `/users/${this.$route.params._id}/basic-info` }"
            >基本信息</router-link>

            <router-link
              :to="`/users/${this.$route.params._id}/resources`"
              append
              class="list-group-item list-group-item-action border-0"
              :class="{active: $route.path === `/users/${this.$route.params._id}/resources`}"
            >个人资源</router-link>

            <router-link
              :to="`/users/${this.$route.params._id}/collections`"
              append
              class="list-group-item list-group-item-action border-0"
              :class="{active: $route.path === `/users/${this.$route.params._id}/collections`}"
            >个人收藏</router-link>
          </div>
        </div>
        <div class="col-9 p-5">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="row">
        <div class="col-1"></div>
        <UserAside/>
      </div>
    </div>
  </div>
</template>

<script>
import UserAside from "../../components/UserAside/UserAside.vue";

export default {
  components: {
    UserAside
  }
};
</script>