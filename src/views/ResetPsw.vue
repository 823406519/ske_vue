<template>
  <div class="w-50 bg-white border rounded mx-auto mt-5 p-5">
    <h3 class="text-center mt-3 text-muted">重置密码</h3>

    <form class="form-inline">
      <div class="form-group mx-auto mt-3">
        <label for="reset-emial">邮箱</label>
        <input
          type="password"
          id="reset-email"
          class="form-control mx-sm-3 w-75"
          placeholder="823406519@qq.com"
          readonly
        >
      </div>

      <div class="form-group mx-auto mt-3">
        <label for="reset-password">密码</label>
        <input type="password" id="reset-password" class="form-control mx-sm-3 w-75">
      </div>
    </form>
    <button class="btn btn-primary d-block mx-auto mt-3">提交密码修改</button>
  </div>
</template>