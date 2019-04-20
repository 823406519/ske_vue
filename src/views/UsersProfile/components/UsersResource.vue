<template>
  <div>
    <ul class="list-unstyled px-4">
      <li
        class="media mt-4 border-bottom"
        v-for="(n,index) in 5"
        :key="index"
        style="cursor: pointer"
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
  </div>
</template>