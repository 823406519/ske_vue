<template>
  <!-- no-stacking 设置modal不重叠 -->
  <b-modal id="login-modal" header-class="border-0 pt-2 pb-0 px-3" centered hide-footer>
    <!-- 标题部分 -->
    <div class="text-center">
      <a href="/" class="d-block text-decoration-none" style="font-size: 2.5rem">
        <i class="iconfont icon-fenxiang text-primary font-weight-bold" style="font-size: 2.5rem"></i>
        <span class="text-primary ml-2">SKE</span>
      </a>
      <span>Share More, Learn More</span>
    </div>
    <!-- 表单部分 -->

    <b-form class="mt-4 mx-auto" style="width: 20rem">
      <b-input type="email" id="email" placeholder="输入邮箱" v-model="email"></b-input>
      <b-input
        type="password"
        id="password"
        placeholder="输入密码"
        class="mt-4"
        v-model="password"
        autocomplete
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

      <button type="submit" class="btn btn-primary d-block w-100 mt-2" @click="onSubmit">登陆</button>
    </b-form>

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
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // 提交数据
    onSubmit() {
      this.email = "";
      this.password = "";
      this.isShow = false; // 清除验证状态
      // 在下一次更新还原isShow
      this.$nextTick(() => {
        this.isShow = true;
      });
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
