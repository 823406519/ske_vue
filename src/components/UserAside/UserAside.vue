<template>
  <aside class="col mt-3 mt-md-0">
    <!-- 创作者中心 -->
    <section class="bg-white rounded-lg border">
      <!-- 标题部分 -->
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <i class="iconfont icon-gongxian liu-icon-sm text-primary font-weight-bold"></i>
          <span class="ml-3">个人成就</span>
        </li>
      </ul>
      <!-- 内容部分  -->
      <div class="card-body">
        <div>
          <i class="iconfont icon-dianzan liu-icon-normal text-primary font-weight-bold"></i>
          <span class="ml-2">获得{{profile.like_counts_sum}}次赞同</span>
        </div>
        <div class="mt-3">
          <i class="iconfont icon-yuedu liu-icon-normal text-primary font-weight-bold"></i>
          <span class="ml-2">文章被阅读{{profile.read_counts_sum}}次</span>
        </div>
      </div>
    </section>

    <div class="mt-3">
      <div class="text-muted border-bottom py-3">
        <span>已写文章：</span>
        <span class="ml-3">{{profile.resources_sum}} 篇</span>
      </div>

      <div class="text-muted border-bottom py-3">
        <span>收藏文章：</span>
        <span class="ml-3">{{profile.collections_sum}} 篇</span>
      </div>

      <div class="text-muted border-bottom py-3">
        <span>加入时间：</span>
        <span class="ml-3">{{getTime(profile.create_time)}}</span>
      </div>
    </div>
  </aside>
</template>


<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["profile"])
  },

  // 时间计算
  methods: {
    getTime(time) {
      const date = new Date(time);
      return `${date.getFullYear()}年${date.getMonth() +
        1}月${date.getDate()}日`;
    }
  }
};
</script>