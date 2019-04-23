<template>
  <!-- no-stacking 设置modal不重叠 -->
  <b-modal
    ref="fotgetPsw-modal"
    id="fotgetPsw-modal"
    header-class="border-0 pt-2 pb-0 px-3"
    centered
    hide-footer
  >
    <!-- 标题部分 -->
    <div class="text-center">
      <a href="/" class="d-block text-decoration-none" style="font-size: 2.5rem">
        <i class="iconfont icon-fenxiang text-primary font-weight-bold" style="font-size: 2.5rem"></i>
        <span class="text-primary ml-2">SKE</span>
      </a>
      <span>Share More, Learn More</span>
    </div>
    <!-- 表单部分 -->

    <div class="mt-3 px-5">
      <div class="form-group">
        <label for="inputPassword6">发送重置密码链接到邮箱：</label>
        <input
          v-model="email"
          type="email"
          id="forget-password-email"
          class="form-control"
          placeholder="输入邮箱..."
          aria-describedby="passwordHelpInline"
        >
      </div>

      <button class="d-block mx-auto btn btn-primary" @click="handleForgetPsw">发送</button>
    </div>

    <!-- 外部发送邮箱成功的modal -->
    <b-modal
      ref="forget-password-success-modal"
      header-class="border-0 pb-0 "
      size="sm"
      hide-footer
    >
      <span class="text-center d-block font-weight-bold text-success">{{successMessage}}</span>
    </b-modal>

    <!-- 外部的修改用户信息失败的modal -->
    <b-modal ref="forget-password-fail-modal" header-class="border-0 pb-0 " size="sm" hide-footer>
      <span class="text-center d-block font-weight-bold text-danger">{{alertMessage}}</span>
    </b-modal>
  </b-modal>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      email: "",
      alertMessage: "",
      successMessage: ""
    };
  },
  methods: {
    async handleForgetPsw() {
      const email = this.email;
      const { code, message } = await this.$store.dispatch(
        "forgetPassword",
        email
      );

      if (code === 0) {
        this.alertMessage = message;
        this.$refs["forget-password-fail-modal"].show();
        return;
      }

      if (code === 1) {
        this.successMessage = message;
        this.$refs["forget-password-success-modal"].show();
        this.email = "";
        setTimeout(() => {
          this.$refs["forget-password-success-modal"].hide();
          this.$refs["fotgetPsw-modal"].hide();
        }, 2000);
      }
    }
  }
};
</script>