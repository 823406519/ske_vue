<template>
  <div class="row">
    <!-- 评论，点赞，收藏列 -->
    <div class="col-md-1">
      <div style="position: fixed; top: 200px" class="d-flex flex-column align-items-center">
        <!-- 评论 -->
        <span
          v-b-modal.my-modal.resources-comments
          class="rounded-circle bg-white text-center"
          style="width: 40px;height: 40px;line-height: 40px;cursor: pointer"
        >
          <i class="iconfont icon-pinglun text-muted font-weight-bold liu-link-hover liu-icon-sm">
            <sup class="liu-icon-xs">{{resource.comments && resource.comments.length}}</sup>
          </i>
        </span>

        <!-- 点赞 -->
        <span
          id="like-counts"
          class="rounded-circle bg-white text-center mt-3"
          style="width: 40px;height: 40px;line-height: 40px;cursor: pointer"
          @click="handleLikeCount"
        >
          <i class="iconfont icon-dianzan text-muted liu-link-hover liu-icon-sm">
            <sup class="liu-icon-xs">{{resource.like_counts}}</sup>
          </i>
        </span>

        <!-- 收藏 -->
        <span
          class="rounded-circle bg-white text-center mt-3"
          style="width: 40px;height: 40px;line-height: 40px;cursor: pointer"
          @click="handleCollectionCount"
        >
          <i class="iconfont icon-shoucang text-muted liu-link-hover liu-icon-sm">
            <sup class="liu-icon-xs">{{resource.collection_counts}}</sup>
          </i>
        </span>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <main class="col-md-7 bg-white rounded-lg border liu-min-height-600">
      <div class="mt-5 px-4">
        <img
          src="https://s.gravatar.com/avatar/485b00f4d6ee8f6f68f6c44856a08f88?s=200&r=pg&d=mm"
          class="mr-3"
          alt="..."
          style="width: 40px"
        >
        <router-link
          :to="`/users/${resource.author_id}`"
          class="text-muted liu-link-hover"
        >{{resource.author_name}}</router-link>·
        <span>{{getResourceTime(resource.last_update_time)}}</span> ·
        <router-link
          :to="`/classification/${resource.classification}`"
          class="text-muted liu-link-hover"
        >{{getClassificationName(resource.classification)}}</router-link>
        <span>
          <span v-show="user && user._id===resource.author_id">
            ·
            <router-link :to="`/resources/${resource._id}/edit`" target="_blank">编辑</router-link>
          </span>
        </span>
        <div class="mt-4 border-bottom">
          <h3>{{resource.title}}</h3>
          <p class="text-muted mt-3">{{resource.content}}</p>
        </div>
      </div>
    </main>

    <!-- 侧边栏 作者介绍 区域 -->
    <div class="col-md-4">
      <div class="row">
        <div class="col-1"></div>
        <ResourceAside :profile="profile"/>
      </div>
    </div>

    <!-- 评论modal -->
    <b-modal
      id="resources-comments"
      header-class="border-0 pt-2 pb-0 px-3"
      scrollable
      hide-footer
      size="xl"
    >
      <div class="text-center">
        <input
          v-model="comment"
          type="text"
          name="resource-comment"
          id="resources-comment"
          class="form-control w-50 d-inline-block"
          placeholder="输入评论..."
        >
        <br>
        <button class="btn btn-primary ml-2 col-form-label mt-2" @click="handleComment">提交评论</button>
      </div>

      <!-- 评论列表 -->
      <ul class="list-unstyled px-5">
        <li class="media mt-4" v-for="comment in resource.comments" :key="comment._id">
          <img
            src="https://s.gravatar.com/avatar/485b00f4d6ee8f6f68f6c44856a08f88?s=200&r=pg&d=mm"
            class="mr-3"
            alt="..."
            style="width: 30px"
          >

          <div class="media-body">
            <router-link
              :to="`/users/${comment.commenter_id}`"
              class="text-muted liu-link-hover"
            >{{resource.author_name}}</router-link>·
            <!-- 重复利用方法，不再重复定义 -->
            <span>{{getResourceTime(comment.comment_time)}}</span>
            <p class="mt-2">{{comment.comment}}</p>
          </div>
        </li>
      </ul>
    </b-modal>
    <!-- 评论成功modal -->
    <b-modal ref="comment-success-modal" header-class="border-0 pb-0 " size="sm" hide-footer>
      <span class="text-center d-block font-weight-bold text-success">{{successMessage}}</span>
    </b-modal>

    <!-- 评论失败modal -->
    <b-modal ref="comment-fail-modal" header-class="border-0 pb-0 " size="sm" hide-footer>
      <span class="text-center d-block font-weight-bold text-danger">{{alertMessage}}</span>
    </b-modal>
  </div>
</template>

<script>
import ResourceAside from "../components/ResourceAside/ResourceAside.vue";

import { mapState } from "vuex";
export default {
  components: {
    ResourceAside
  },
  data() {
    return {
      // comment modal
      alertMessage: "",
      successMessage: "",
      comment: ""
    };
  },
  computed: {
    ...mapState(["resource", "profile", "user", "isLogin"])
  },
  methods: {
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

    // 提交评论
    async handleComment() {
      const _id = this.resource._id;
      const comment = this.comment;
      const { code, message } = await this.$store.dispatch("comment", {
        _id,
        comment
      });

      if (code === 0) {
        this.alertMessage = message;
        this.$refs["comment-fail-modal"].show();

        return;
        // this.$refs["comment-success-modal"].show();
      }
      if (code === 1) {
        this.successMessage = message;
        this.$refs["comment-success-modal"].show();
        // 更新resource
        const _id = this.$route.params._id;
        await this.$store.dispatch("getResource", _id);
      }
    },

    async handleLikeCount() {
      if (!this.isLogin) {
        this.$root.$emit("bv::show::modal", "login-modal", "#like-counts");
        return;
      }

      const _id = this.resource._id;
      const { code, message } = await this.$store.dispatch(
        "addLikeCounts",
        _id
      );

      // 重复利用
      if (code === 0) {
        this.alertMessage = message;
        this.$refs["comment-fail-modal"].show();

        return;
        // this.$refs["comment-success-modal"].show();
      }
      if (code === 1) {
        this.successMessage = message;
        this.$refs["comment-success-modal"].show();
        // 更新resource
        const _id = this.$route.params._id;
        await this.$store.dispatch("getResource", _id);
      }
    },

    // 处理增加收藏
    async handleCollectionCount() {
      if (!this.isLogin) {
        this.$root.$emit("bv::show::modal", "login-modal", "#like-counts");
        return;
      }

      const _id = this.resource._id;
      const { code, message } = await this.$store.dispatch(
        "addCollectionCounts",
        _id
      );

      // 重复利用
      if (code === 0) {
        this.alertMessage = message;
        this.$refs["comment-fail-modal"].show();

        return;
        // this.$refs["comment-success-modal"].show();
      }
      if (code === 1) {
        this.successMessage = message;
        this.$refs["comment-success-modal"].show();
        // 更新resource
        const _id = this.$route.params._id;
        await this.$store.dispatch("getResource", _id);
      }
    }
  },
  async created() {
    const _id = this.$route.params._id;
    await this.$store.dispatch("getResource", _id);
    await this.$store.dispatch("getUserInfo", this.resource.author_id);
  }
};
</script>