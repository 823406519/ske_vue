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
            <sup class="liu-icon-xs">9</sup>
          </i>
        </span>

        <!-- 点赞 -->
        <span
          class="rounded-circle bg-white text-center mt-3"
          style="width: 40px;height: 40px;line-height: 40px;cursor: pointer"
        >
          <i class="iconfont icon-dianzan text-muted liu-link-hover liu-icon-sm">
            <sup class="liu-icon-xs">7</sup>
          </i>
        </span>

        <!-- 收藏 -->
        <span
          class="rounded-circle bg-white text-center mt-3"
          style="width: 40px;height: 40px;line-height: 40px;cursor: pointer"
        >
          <i class="iconfont icon-shoucang text-muted liu-link-hover liu-icon-sm">
            <sup class="liu-icon-xs">5</sup>
          </i>
        </span>
      </div>
    </div>
    <!-- 主要内容区域 -->
    <main class="col-md-7 bg-white rounded-lg border">
      <div class="mt-5 px-4">
        <img
          src="https://s.gravatar.com/avatar/485b00f4d6ee8f6f68f6c44856a08f88?s=200&r=pg&d=mm"
          class="mr-3"
          alt="..."
          style="width: 30px"
        >

        <a href="#" class="text-muted liu-link-hover">Liuyaohui</a> ·
        <span>10小时前</span> ·
        <a href="#" class="text-muted liu-link-hover">计算机科学</a>
        <span>
          ·
          <router-link to="/resources/:id/edit">编辑</router-link>
        </span>
        <div class="mt-4 border-bottom">
          <h3>如何学习前端</h3>
          <p class="text-muted mt-3">
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。 前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。 前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。 前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
            前端工程师最首要的任务就是把设计师的设计图切好并翻译成代码，所以我们要学习一些设计软件的基础操作和切图方法。
            工欲善其事，必先利其器。可以用的编辑器和IDE有很多，在这里我只推荐最棒的两个。
          </p>
        </div>
      </div>
      <!--  <ul class="list-unstyled mt-5 px-4">
        <li class="media mt-4 border-bottom" style="cursor: pointer">
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
      </ul>-->
    </main>

    <!-- 侧边栏 作者介绍 区域 -->
    <div class="col-md-4">
      <div class="row">
        <div class="col-1"></div>
        <ResourceAside/>
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
          type="text"
          name="resource-comment"
          id="resources-comment"
          class="form-control w-50 d-inline-block"
          placeholder="输入评论..."
        >
        <br>
        <button class="btn btn-primary ml-2 col-form-label mt-2">提交评论</button>
      </div>

      <!-- 评论列表 -->
      <ul class="list-unstyled px-5">
        <li class="media mt-4" v-for="n in 100" :key="n">
          <img
            src="https://s.gravatar.com/avatar/485b00f4d6ee8f6f68f6c44856a08f88?s=200&r=pg&d=mm"
            class="mr-3"
            alt="..."
            style="width: 30px"
          >
          <div class="media-body">全世界最好的大番薯</div>
        </li>
      </ul>
    </b-modal>
  </div>
</template>

<script>
import ResourceAside from "../components/ResourceAside/ResourceAside.vue";
export default {
  components: {
    ResourceAside
  },
  data() {
    return {};
  }
};
</script>