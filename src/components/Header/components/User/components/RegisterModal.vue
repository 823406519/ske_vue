<template>
  <div>
    <b-modal
      ref="register-modal"
      id="register-modal"
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
        <b-input
          type="text"
          id="register-username"
          placeholder="输入用户名"
          v-model="username"
          class="mt-4"
        ></b-input>
        <b-input
          type="email"
          id="register-email"
          placeholder="输入邮箱"
          v-model="email"
          class="mt-4"
          autocomplete="email"
        ></b-input>
        <b-input
          type="password"
          id="register-password"
          placeholder="输入密码"
          class="mt-4"
          v-model="password"
          autocomplete="new-password"
        ></b-input>

        <b-input
          type="password"
          id="register-password2"
          placeholder="再次输入密码"
          class="mt-4"
          v-model="password2"
          autocomplete="new-password"
          @keyup.enter="handleRegister"
        ></b-input>

        <button class="btn btn-primary d-block w-100 mt-4" @click="handleRegister">注册</button>
      </div>

      <!-- footer部分 -->
      <footer class="text-center border-top mt-4 py-3">
        已有账号?
        <a
          href="#"
          v-b-tooltip
          title="欢迎回来!"
          class="mr-3"
          @click="showLoginModal"
          ref="showLoginBtn"
        >登陆</a>
      </footer>

      <b-modal ref="register-alert-modal" header-class="border-0 pb-0 " size="sm" hide-footer>
        <span class="text-center d-block font-weight-bold text-danger">{{alertMessage}}</span>
      </b-modal>
    </b-modal>
    <!-- 外部成功注册的modal -->
    <b-modal ref="register-success-modal" header-class="border-0 pb-0 " size="sm" hide-footer>
      <span class="text-center d-block font-weight-bold text-success">{{alertMessage}}</span>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
      isShow: true,
      alertMessage: "test"
    };
  },
  methods: {
    // 提交数据
    async handleRegister() {
      const { code, message } = await this.$store.dispatch("register", {
        username: this.username,
        email: this.email,
        password: this.password,
        password2: this.password2
      });

      // 注册失败
      if (code === 0) {
        this.alertMessage = message;
        this.$refs["register-alert-modal"].show();
        return;
      }

      // 成功注册
      if (code === 1) {
        this.alertMessage = message;
        this.$refs["register-success-modal"].show();
        this.$refs["register-modal"].hide();

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

    // 隐藏注册mdoal，显示登陆modal
    showLoginModal() {
      this.$root.$emit("bv::hide::modal", "register-modal", "#showLoginBtn");
      this.$root.$emit("bv::show::modal", "login-modal", "#showLoginBtn");
    }
  }
};
</script>
