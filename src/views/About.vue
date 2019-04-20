<template>
  <div class="row">
    <main class="col-md-8 bg-white rounded-lg border pt-3 px-5" style="max-height: 500px">
      <!-- 图标 -->
      <div class="text-center">
        <i class="iconfont icon-fenxiang liu-font-size-xl text-primary font-weight-bold"></i>
        <span class="text-primary ml-2 liu-font-size-xl">SKE</span>
      </div>

      <!-- 内容 -->
      <div>
        <p>SKE，是英文 —— "Sharing Knowledge Everything" 的缩写，我们希望我们的社区用户可以随时随地分享知识。</p>
        <p>
          作为项目负责人，我真诚地告诉用户，社区的功能还不够完整，用户体验还不够优化，bug修复不够完善，可以保证的是，
          项目能够一直完善，这个过程，我希望更多志同道合的开发者能够
          <a
            href="https://github.com/823406519/ske"
            target="_blank"
          >参与项目</a> 中, 不胜感激！
        </p>
        <p>
          作为项目发起者，我不希望社区有任何收费内容，我不希望任何有侵犯知识产权的内容，
          所以，非原创内容，请社区的各位朋友能够得到原作者的转载承诺，谢谢配合
        </p>
        <p>最后，希望各位享受知识的快乐，享受分享的快乐，祝各位生活愉快!</p>

        <div class="text-right">
          项目负责人：
          <span>刘耀惠</span>
          <div class="mt-2">
            <span>2019 年 4 月 19 日</span>
          </div>
        </div>
      </div>
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
export default {
  components: {
    Aside
  }
};
</script>