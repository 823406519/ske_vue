<template>
  <div class="p-4">
    <h4 class="border-bottom pb-3 font-weight-bold">修改个人资料</h4>
    <div class="mt-5">
      <div class="form-group row">
        <label for="profile-username" class="col-sm-2 col-form-label">用户名</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="profile-username" placeholder="刘耀惠">
        </div>
      </div>

      <div class="form-group row">
        <legend class="col-form-label col-sm-2 pt-0">性别：</legend>
        <div class="col-sm-6">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="profile-gender"
              id="profile-gender-0"
              value="0"
              checked
            >
            <label class="form-check-label" for="profile-gender-0">男</label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="profile-gender"
              id="profile-gender-1"
              value="1"
            >
            <label class="form-check-label" for="profile-gender-1">女</label>
          </div>
        </div>
      </div>

      <!-- 年龄 -->
      <div class="form-group row">
        <label for="profile-age" class="col-sm-2 col-form-label">年龄</label>
        <div class="col-sm-2">
          <input type="text" class="form-control" id="profile-age" placeholder="24">
        </div>
      </div>

      <!-- 常住地 -->
      <div class="form-group row">
        <label for="profile-location" class="col-sm-2 col-form-label">常住地</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="profile-location" placeholder="非洲东非大裂谷">
        </div>
      </div>

      <!-- 个人简介 -->
      <div class="form-group row">
        <label for="profile-intorduction" class="col-sm-2 col-form-label">个人简介</label>
        <div class="col-sm-8">
          <textarea
            class="form-control"
            id="profile-intorduction"
            placeholder="我是一个来自非洲的黑鬼，我热爱编程，热爱分享知识"
            rows="8"
          ></textarea>
        </div>
      </div>

      <!-- 座右铭 -->
      <div class="form-group row">
        <label for="profile-intorduction" class="col-sm-2 col-form-label">个人简介</label>
        <div class="col-sm-8">
          <textarea class="form-control" id="profile-intorduction" placeholder="1+1只能等于2" rows="4"></textarea>
        </div>
      </div>

      <button class="btn btn-primary my-3 d-block mx-auto">保存</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>