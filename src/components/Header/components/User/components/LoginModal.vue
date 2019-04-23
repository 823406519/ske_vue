<template>
  <!-- no-stacking 设置modal不重叠 -->
  <b-modal
    ref="login-modal"
    id="login-modal"
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

    <div class="mt-4 mx-auto" style="width: 20rem" v-show="isShow">
      <b-input type="email" id="email" placeholder="输入邮箱" v-model="email"></b-input>
      <b-input
        type="password"
        id="password"
        placeholder="输入密码"
        class="mt-4"
        v-model="password"
        autocomplete="new-password"
        @keyup.enter="onLogin"
      ></b-input>

      <div class="text-right mt-2">
        <a
          href="#"
          class="text-muted text-decoration-none liu-link-hover"
          style="font-size: 14px"
          @click="showForgetModal"
          ref="showForgetModalBtn"
        >忘记密码？</a>
      </div>

      <button class="btn btn-primary d-block w-100 mt-2" @click="onLogin">登陆</button>
    </div>

    <!-- footer部分 -->
    <footer class="text-center border-top mt-4 py-3">
      没有账号?
      <a
        href="#"
        v-b-tooltip
        title="欢迎加入我们!"
        @click="showRegisterModal"
        class="mr-3"
        ref="showRegisterBtn"
      >注册</a>
    </footer>

    <!-- 内部modal -->
    <b-modal ref="alert-modal" header-class="border-0 pb-0 " size="sm" hide-footer>
      <span class="text-center d-block font-weight-bold text-danger">{{alertMessage}}</span>
    </b-modal>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      isShow: true,
      alertMessage: ""
    };
  },
  methods: {
    async onLogin() {
      // 通过action提交表单数据，获取数据，mutation更新state
      const { code, message } = await this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });

      // 登陆失败
      if (code === 0) {
        this.alertMessage = message;
        this.$refs["alert-modal"].show();
      }

      // 成功登陆
      if (code === 1) {
        // this.$refs["alert-modal"].show();
        // 置空数据
        this.email = "";
        this.password = "";
        this.isShow = false; // 清除验证状态
        // 在下一次更新还原isShow
        this.$nextTick(() => {
          this.isShow = true;
        });
      }
    },

    // 隐藏登陆mdoal，显示注册modal
    showRegisterModal() {
      this.$root.$emit("bv::hide::modal", "login-modal", "#showRegisterBtn");
      this.$root.$emit("bv::show::modal", "register-modal", "#showRegisterBtn");
    },

    showForgetModal() {
      this.$root.$emit("bv::hide::modal", "login-modal", "#showForgetModalBtn");
      this.$root.$emit(
        "bv::show::modal",
        "fotgetPsw-modal",
        "#showForgetModalBtn"
      );
    }
  }
};
</script>
