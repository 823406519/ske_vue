<template>
  <div class="p-4">
    <h4 class="border-bottom pb-3 font-weight-bold">修改密码</h4>
    <div class="mt-5">
      <div class="form-group row">
        <label for="profile-username" class="col-sm-2 col-form-label">邮箱</label>
        <div class="col-sm-6">
          <input
            type="email"
            class="form-control"
            id="password-email"
            placeholder="qq823406519@qq.com"
            readonly
          >
        </div>
      </div>

      <div class="form-group row">
        <label for="password-password" class="col-sm-2 col-form-label">原始密码</label>
        <div class="col-sm-6">
          <input
            type="password"
            class="form-control"
            id="password-password"
            placeholder="输入原始密码..."
          >
        </div>
      </div>

      <div class="form-group row">
        <label for="password-password2" class="col-sm-2 col-form-label">新密码</label>
        <div class="col-sm-6">
          <input
            type="password"
            class="form-control"
            id="password-password2"
            placeholder="输入新密码..."
          >
        </div>
      </div>
      <button class="btn btn-primary my-3 d-block mx-auto">提交修改</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>