<template>
  <aside class="col mt-3 mt-md-0">
    <!-- 创作者中心 -->
    <section class="bg-white rounded-lg border">
      <!-- 标题部分 -->
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <i class="iconfont icon-chuangzuozhongxin liu-icon-sm text-primary font-weight-bold"></i>
          <span class="ml-3">参与创作</span>
        </li>
      </ul>
      <!-- 内容部分  -->
      <div class="card-body">
        <p class="card-text">您的每一份创作，我们都倍感感激！</p>
        <router-link to="/write" target="_blank" class="ml-3 mr-4 text-decoration-none">
          <i class="iconfont icon-combinedshapecopy2 text-primary font-weight-bold"></i>
          <span class="ml-2">写文章</span>
        </router-link>
      </div>
    </section>

    <!-- 加入我们 -->
    <section class="bg-white rounded-lg border mt-3">
      <!-- 标题部分 -->
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <i class="iconfont icon-jiarubanji liu-icon-sm text-primary font-weight-bold"></i>
          <span class="ml-3">加入我们</span>
        </li>
      </ul>
      <!-- 内容部分  -->
      <div class="card-body">
        <p class="card-text">
          作为项目的负责人，我希望大家能够加入到项目，
          共同打造一个功能更加齐全，内容更加丰富的知识交流社区
        </p>
        <a href="https://github.com/823406519/ske_vue" class="card-link text-dark" target="_blank">
          <i class="iconfont icon-github liu-icon-sm"></i> ske_vue
        </a>
        <a
          href="https://github.com/823406519/ske_server"
          class="card-link text-dark"
          target="_blank"
        >
          <i class="iconfont icon-github liu-icon-sm"></i> ske_server
        </a>
        <a
          href="https://github.com/823406519/ske"
          target="_blank"
          class="btn btn-primary d-block mt-4"
        >参与项目</a>
      </div>
    </section>

    <!-- 热门标签 -->
    <section class="bg-white rounded-lg border mt-3">
      <!-- 标题部分 -->
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <i class="iconfont icon-fuhao-biaoqian liu-icon-sm text-primary font-weight-bold"></i>
          <span class="ml-3">热门标签</span>
        </li>
      </ul>
      <!-- 内容部分 -->
      <div class="card-body">
        <div class="justify-content-between d-flex">
          <a href="#" class="liu-badge">Html</a>
          <a href="#" class="liu-badge">Css</a>
        </div>
        <div class="justify-content-between d-flex mt-3">
          <a href="#" class="liu-badge">Vue</a>
          <a href="#" class="liu-badge">React</a>
        </div>
        <div class="justify-content-between d-flex mt-3">
          <a href="#" class="liu-badge">JavaScript</a>
          <a href="#" class="liu-badge">TypeScript</a>
        </div>

        <a href="#" class="btn btn-primary d-block mt-4">全部标签</a>
      </div>
    </section>

    <!-- 关注我们 -->
    <div class="mt-3">
      <p class="text-center text-muted">关注我们</p>
      <div class="d-flex justify-content-around">
        <a
          href="https://github.com/823406519"
          target="_blank"
          class="iconfont icon-github liu-icon-md text-dark text-decoration-none"
        ></a>
        <a
          href="https://www.zhihu.com/people/liu-yao-hui-da-ge-86/activities"
          target="_blank"
          class="iconfont icon-zhihu-circle-fill liu-icon-md text-primary text-decoration-none"
        ></a>
        <a
          href="https://twitter.com/liuyaohui2"
          target="_blank"
          class="iconfont icon-twitter liu-icon-md text-primary font-weight-bold text-decoration-none"
        ></a>
      </div>
    </div>

    <!-- 联系我们 -->
    <div class="mt-3">
      <p class="text-center text-muted">联系我们</p>
      <div>
        <i class="iconfont icon-weibiaoti- liu-icon-sm"></i> 13416390073
      </div>
      <div>
        <i class="iconfont icon-youxiang liu-icon-sm"></i> 823406519@qq.com
      </div>
    </div>

    <!-- 网站信息 -->
    <div class="mt-3 text-muted liu-font-size-sm">
      <a
        href="http://www.12377.cn"
        target="_blank"
        class="text-muted text-decoration-none liu-link-hover"
      >网上有害信息举报</a>
      <span class="ml-2">©2019 SKE</span>
      <div style="margin-bottom: 150px"></div>
    </div>
  </aside>
</template>