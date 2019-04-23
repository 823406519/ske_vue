<template>
  <div class="row">
    <main class="col-md-8 bg-white rounded-lg border">
      <!-- 头部导航 -->
      <header class="mt-3 border-bottom pt-2 pb-3">
        <b-button variant="outline-danger" size="sm" @click="handleHot">热门</b-button>
        <b-button variant="outline-primary ml-3" size="sm" @click="handleNew">最新</b-button>
      </header>
      <!-- 动态资源列表 -->
      <ul class="list-unstyled mt-5 px-4">
        <li
          class="media mt-4 border-bottom"
          v-for="resource in recommendSourcesList"
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
      <!-- 静态资源列表 -->
      <ul class="list-unstyled mt-5 px-4">
        <li
          class="media mt-4 border-bottom"
          v-for="(n,index) in 3"
          :key="index"
          style="cursor: pointer"
          @click="routeToResource('testid')"
        >
          <img
            src="https://s.gravatar.com/avatar/485b00f4d6ee8f6f68f6c44856a08f88?s=200&r=pg&d=mm"
            class="mr-3"
            alt="..."
            style="width: 30px"
          >
          <div class="media-body">
            <div class="liu-font-size-sm text-muted">
              <a href="#" class="text-muted liu-link-hover">Liuyaohui</a> ·
              <span>10小时前</span> ·
              <a href="#" class="text-muted liu-link-hover">计算机科学</a>
            </div>
            <h5 class="mt-1 mb-1 font-weight-bold">如何学习前端</h5>
            <p class="text-muted liu-font-size-sm">
              前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
              工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个......
            </p>
          </div>
        </li>
      </ul>
    </main>
    <div class="col-md-4">
      <div class="row">
        <div class="col-1"></div>
        <Aside/>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "../components/Aside/Aside.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    Aside
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["recommendSourcesList"])
  },
  methods: {
    // 静态资源跳转
    routeToResource(id) {
      this.$router.push(`/resources/${id}`);
    },
    ...mapActions(["getRecommendResources"]),

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
    },

    // 点击热门
    handleHot() {
      this.getRecommendResources("hot");
    },
    handleNew() {
      this.getRecommendResources("newest");
    }
  },
  created() {
    this.getRecommendResources("hot");
  }
};
</script>