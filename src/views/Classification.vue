<template>
  <div class="row">
    <main class="col-md-8 bg-white rounded-lg border">
      <!-- 头部导航 -->
      <header class="mt-3 border-bottom pt-2 pb-3 d-flex">
        <b-button variant="outline-success ml-3" size="sm" @click="getClassificationA">计算机科学</b-button>
        <b-button variant="outline-success ml-3" size="sm" @click="getClassificationB">经济</b-button>
        <b-button variant="outline-success ml-3" size="sm" @click="getClassificationC">社会科学</b-button>
        <b-button variant="outline-success ml-3" size="sm" @click="getClassificationD">历史</b-button>
        <b-button variant="outline-success ml-3" size="sm" @click="getClassificationE">人文艺术</b-button>
      </header>
      <!-- 动态资源列表 -->
      <ul class="list-unstyled mt-5 px-4">
        <li
          class="media mt-4 border-bottom"
          v-for="resource in classificationList"
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

import { mapActions, mapState } from "vuex";
export default {
  components: {
    Aside
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["classificationList"])
  },
  methods: {
    ...mapActions(["getClassificationResources"]),

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
    },

    // 各分类的单击按钮获取
    getClassificationA() {
      this.getClassificationResources({
        classification: 0,
        sort: "hot"
      });
    },
    getClassificationB() {
      this.getClassificationResources({
        classification: 1,
        sort: "hot"
      });
    },
    getClassificationC() {
      this.getClassificationResources({
        classification: 2,
        sort: "hot"
      });
    },
    getClassificationD() {
      this.getClassificationResources({
        classification: 3,
        sort: "hot"
      });
    },
    getClassificationE() {
      this.getClassificationResources({
        classification: 4,
        sort: "hot"
      });
    }
  },
  created() {
    if (
      this.$route.path === "/classification" ||
      this.$route.path === "/classification/0"
    ) {
      console.log("hello");
      this.getClassificationResources({
        classification: 0,
        sort: "hot"
      });
      return;
    }

    if (this.$route.path === "/classification/1") {
      this.getClassificationResources({
        classification: 1,
        sort: "hot"
      });
      return;
    }

    if (this.$route.path === "/classification/2") {
      this.getClassificationResources({
        classification: 2,
        sort: "hot"
      });
      return;
    }

    if (this.$route.path === "/classification/3") {
      this.getClassificationResources({
        classification: 3,
        sort: "hot"
      });
      return;
    }

    if (this.$route.path === "/classification/4") {
      this.getClassificationResources({
        classification: 4,
        sort: "hot"
      });
      return;
    }
  }
};
</script>