<template>
  <div>
    <!-- 动态收藏列表 -->
    <ul class="list-unstyled mt-5 px-4">
      <li
        class="media mt-4 border-bottom"
        v-for="resource in profile.resourcesList"
        :key="resource._id"
        style="cursor: pointer"
      >
        <img
          src="https://s.gravatar.com/avatar/485b00f4d6ee8f6f68f6c44856a08f88?s=200&r=pg&d=mm"
          class="mr-3"
          alt="..."
          style="width: 30px"
        >
        <div class="media-body">
          <div class="liu-font-size-sm text-muted">
            <router-link
              :to="`/users/${resource.author_id}`"
              class="text-muted liu-link-hover"
            >{{resource.author_name}}</router-link>·
            <span>{{getResourceTime(resource.last_update_time)}}</span> ·
            <router-link
              :to="`/classification/${resource.classification}`"
              class="text-muted liu-link-hover"
            >{{getClassificationName(resource.classification)}}</router-link>
          </div>
          <div @click="routeToResource(resource._id)">
            <h5 class="mt-1 mb-1 font-weight-bold">{{resource.title}}</h5>
            <p class="text-muted liu-font-size-sm">{{resource.content}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["profile"])
  },
  methods: {
    // 静态资源跳转
    routeToResource(id) {
      this.$router.push(`/resources/${id}`);
    },
    // 计算资源时间
    getResourceTime(time) {
      const result = new Date(time);
      return `${result.getFullYear()}年${result.getMonth() +
        1}月${result.getDate()}日`;
    },

    // 计算分类名
    getClassificationName(num) {
      if (num === 0) return "计算机科学";
      if (num === 1) return "经济";
      if (num === 2) return "社会科学";
      if (num === 3) return "历史";
      if (num === 4) return "人文艺术";
    }
  },
  created() {
    const _id = this.$route.params._id;
    this.$store.dispatch("getUserInfo", _id);
  }
};
</script>