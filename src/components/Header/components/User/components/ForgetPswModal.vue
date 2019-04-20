<template>
  <!-- no-stacking 设置modal不重叠 -->
  <b-modal id="fotgetPsw-modal" header-class="border-0 pt-2 pb-0 px-3" centered hide-footer>
    <!-- 标题部分 -->
    <div class="text-center">
      <a href="/" class="d-block text-decoration-none" style="font-size: 2.5rem">
        <i class="iconfont icon-fenxiang text-primary font-weight-bold" style="font-size: 2.5rem"></i>
        <span class="text-primary ml-2">SKE</span>
      </a>
      <span>Share More, Learn More</span>
    </div>
    <!-- 表单部分 -->

    <form class="mt-3 px-5">
      <div class="form-group">
        <label for="inputPassword6">发送重置密码链接到邮箱：</label>
        <input
          type="password"
          id="inputPassword6"
          class="form-control"
          placeholder="输入邮箱..."
          aria-describedby="passwordHelpInline"
        >
      </div>

      <button class="d-block mx-auto btn btn-primary">发送</button>
    </form>
  </b-modal>
</template>

