<template>
  <div>
    <div class="text-center">
      <img
        src="https://s.gravatar.com/avatar/485b00f4d6ee8f6f68f6c44856a08f88?s=200&r=pg&d=mm"
        alt="avatar"
        class="rounded"
        style="width: 100px"
      >
    </div>

    <div class="d-flex flex-column mt-4">
      <div>
        <span>用户名：</span>
        <span class="text-muted">{{profile.username}}</span>
      </div>

      <div class="mt-3">
        <span>性别：</span>
        <span class="text-muted">{{profile.gender===0?'男':'女'}}</span>
      </div>

      <div class="mt-3">
        <span>年龄：</span>
        <span class="text-muted">{{profile.age?profile.age:'未填'}}</span>
      </div>

      <div class="mt-3">
        <span>常住地：</span>
        <span class="text-muted">{{profile.location?profile.location:'未填'}}</span>
      </div>

      <div class="mt-3">
        <span>个人简介：</span>
        <p class="text-muted ml-4 mt-2">{{profile.introduction?profile.introduction:'未填'}}</p>
      </div>

      <div class="mt-3">
        <span>座右铭：</span>
        <p class="text-muted ml-4 mt-2">{{profile.mtto?profile.mtto:'未填'}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["profile"])
  },
  created() {
    const _id = this.$route.params._id;
    this.$store.dispatch("getUserInfo", _id);
  }
};
</script>