<template>
  <div class="w-50 bg-white border rounded mx-auto mt-5 p-5">
    <h3 class="text-center mt-3 text-muted">重置密码</h3>

    <div class="form-inline">
      <div class="form-group mx-auto mt-3">
        <label for="reset-password">密码</label>
        <input
          type="password"
          id="reset-password"
          class="form-control mx-sm-3 w-75"
          v-model="password"
          placeholder="输入重置密码"
          autocomplete="new-password"
          @keyup.enter="handleResetPsw"
        >
      </div>
      <button class="btn btn-primary d-block mx-auto mt-3" @click="handleResetPsw">提交密码重置</button>
    </div>

    <!-- 外部重置密码成功的modal -->
    <b-modal ref="reset-password-success-modal" header-class="border-0 pb-0 " size="sm" hide-footer>
      <span class="text-center d-block font-weight-bold text-success">{{successMessage}}, 即将跳转回首页</span>
    </b-modal>

    <!-- 外部的重置密码失败的modal -->
    <b-modal ref="reset-password-fail-modal" header-class="border-0 pb-0 " size="sm" hide-footer>
      <span class="text-center d-block font-weight-bold text-danger">{{alertMessage}}</span>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      alertMessage: "",
      successMessage: ""
    };
  },
  methods: {
    async handleResetPsw() {
      const token = this.$route.params.token;
      const password = this.password;
      const { code, message } = await this.$store.dispatch("resetPassword", {
        token,
        password
      });

      if (code === 0) {
        this.alertMessage = message;
        this.$refs["reset-password-fail-modal"].show();
        return;
      }

      if (code === 1) {
        this.successMessage = message;
        this.$refs["reset-password-success-modal"].show();

        // 置空输入框
        this.password = "";
        setTimeout(() => {
          this.$refs["reset-password-success-modal"].hide();
          this.$router.push("/");
        }, 2000);
      }
    }
  }
};
</script>

