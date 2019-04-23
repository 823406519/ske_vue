<template>
  <div class="p-4">
    <h4 class="border-bottom pb-3 font-weight-bold">修改密码</h4>

    <div class="mt-5">
      <!-- 邮箱 -->
      <div class="form-group row">
        <label for="profile-username" class="col-lg-3 col-form-label">邮箱</label>
        <div class="col-lg-6 mt-2 mt-lg-0">
          <input v-model="email" type="email" class="form-control" id="password-email" readonly>
        </div>
      </div>

      <!-- 旧密码 -->
      <div class="form-group row">
        <label for="password-password" class="col-lg-3 col-form-label">原始密码</label>
        <div class="col-lg-6 mt-2 mt-lg-0">
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password-password"
            placeholder="输入原密码..."
          >
        </div>
      </div>

      <!-- 新密码 -->
      <div class="form-group row">
        <label for="password-password2" class="col-lg-3 col-form-label">新密码</label>
        <div class="col-lg-6 mt-2 mt-lg-0">
          <input
            v-model="password2"
            type="password"
            class="form-control"
            id="password-password2"
            placeholder="输入新密码..."
          >
        </div>
      </div>

      <!-- 新密码重复 -->
      <div class="form-group row">
        <label for="password-password3" class="col-lg-3 col-form-label">确认新密码</label>
        <div class="col-lg-6 mt-2 mt-lg-0">
          <input
            v-model="password3"
            type="password"
            class="form-control"
            id="password-password3"
            placeholder="确认新密码..."
          >
        </div>
      </div>

      <!-- 提交修改 -->
      <button class="btn btn-primary my-3 d-block mx-auto" @click="handleModifyPsw">提交修改</button>
    </div>

    <!-- 外部修改密码成功的modal -->
    <b-modal
      ref="modify-password-success-modal"
      header-class="border-0 pb-0 "
      size="sm"
      hide-footer
    >
      <span class="text-center d-block font-weight-bold text-success">{{successMessage}}</span>
    </b-modal>

    <!-- 外部的修改密码失败的modal -->
    <b-modal ref="modify-password-fail-modal" header-class="border-0 pb-0 " size="sm" hide-footer>
      <span class="text-center d-block font-weight-bold text-danger">{{alertMessage}}</span>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      password2: "",
      password3: "",
      alertMessage: "",
      successMessage: ""
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    async handleModifyPsw() {
      const password = this.password;
      const password2 = this.password2;
      const password3 = this.password3;
      const { code, message } = await this.$store.dispatch("changePassword", {
        password,
        password2,
        password3
      });

      if (code === 0) {
        this.alertMessage = message;
        this.$refs["modify-password-fail-modal"].show();
        return;
      }

      if (code === 1) {
        this.successMessage = message;
        this.$refs["modify-password-success-modal"].show();

        // 置空输入框
        this.password = "";
        this.password2 = "";
        this.password3 = "";
      }
    }
  },
  created() {
    this.email = this.user.email;
  }
};
</script>