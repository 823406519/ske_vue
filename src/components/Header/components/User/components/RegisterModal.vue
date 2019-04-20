<template>
  <b-modal id="register-modal" header-class="border-0 pt-2 pb-0 px-3" centered hide-footer>
    <!-- 标题部分 -->
    <div class="text-center">
      <a href="/" class="d-block text-decoration-none" style="font-size: 2.5rem">
        <i class="iconfont icon-fenxiang text-primary font-weight-bold" style="font-size: 2.5rem"></i>
        <span class="text-primary ml-2">SKE</span>
      </a>
      <span>Share More, Learn More</span>
    </div>
    <!-- 表单部分 -->

    <b-form class="mt-4 mx-auto" style="width: 20rem" v-show="isShow">
      <b-input type="email" id="register-email" placeholder="输入邮箱" v-model="email"></b-input>
      <b-input
        type="password"
        id="register-password"
        placeholder="输入密码"
        class="mt-4"
        v-model="password"
        autocomplete
      ></b-input>

      <b-input
        type="password"
        id="register-password2"
        placeholder="再次输入密码"
        class="mt-4"
        v-model="password2"
        autocomplete
      ></b-input>

      <button type="submit" class="btn btn-primary d-block w-100 mt-4" @click="onSubmit">注册</button>
    </b-form>

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
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      password2: "",
      isShow: true
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

    // 隐藏注册mdoal，显示登陆modal
    showLoginModal() {
      this.$root.$emit("bv::hide::modal", "register-modal", "#showLoginBtn");
      this.$root.$emit("bv::show::modal", "login-modal", "#showLoginBtn");
    }
  }
};
</script>
