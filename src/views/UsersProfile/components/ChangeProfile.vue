<template>
  <div class="p-4">
    <h4 class="border-bottom pb-3 font-weight-bold">修改个人资料</h4>
    <div class="mt-5">
      <!-- 用户名 -->
      <div class="form-group row">
        <label for="profile-username" class="col-sm-2 col-form-label">用户名</label>
        <div class="col-sm-6">
          <input v-model="username" type="text" class="form-control" id="profile-username">
        </div>
      </div>

      <!-- 性别 -->
      <div class="form-group row">
        <legend class="col-form-label col-sm-2 pt-0">性别：</legend>
        <div class="col-sm-6">
          <div class="form-check">
            <input
              v-model="selected"
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
              v-model="selected"
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
          <input v-model="age" type="text" class="form-control" id="profile-age">
        </div>
      </div>

      <!-- 常住地 -->
      <div class="form-group row">
        <label for="profile-location" class="col-sm-2 col-form-label">常住地</label>
        <div class="col-sm-6">
          <input v-model="location" type="text" class="form-control" id="profile-location">
        </div>
      </div>

      <!-- 个人简介 -->
      <div class="form-group row">
        <label for="profile-intorduction" class="col-sm-2 col-form-label">个人简介</label>
        <div class="col-sm-8">
          <textarea v-model="introduction" class="form-control" id="profile-intorduction" rows="8"></textarea>
        </div>
      </div>

      <!-- 座右铭 -->
      <div class="form-group row">
        <label for="profile-intorduction" class="col-sm-2 col-form-label">座右铭</label>
        <div class="col-sm-8">
          <textarea v-model="mtto" class="form-control" id="profile-intorduction" rows="4"></textarea>
        </div>
      </div>

      <button class="btn btn-primary my-3 d-block mx-auto" @click="saveProfileInfo">保存</button>
    </div>

    <!-- 外部修改用户信息成功的modal -->
    <b-modal ref="modify-profile-success-modal" header-class="border-0 pb-0 " size="sm" hide-footer>
      <span class="text-center d-block font-weight-bold text-success">{{successMessage}}</span>
    </b-modal>

    <!-- 外部的修改用户信息失败的modal -->
    <b-modal ref="modify-profile-fail-modal" header-class="border-0 pb-0 " size="sm" hide-footer>
      <span class="text-center d-block font-weight-bold text-danger">{{alertMessage}}</span>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      username: "",
      selected: "0",
      age: "",
      location: "",
      introduction: "",
      mtto: "",
      successMessage: "",
      alertMessage: ""
    };
  },
  methods: {
    async saveProfileInfo() {
      const username = this.username;
      const gender = this.selected;
      const age = this.age;
      const location = this.location;
      const introduction = this.introduction;
      const mtto = this.mtto;
      const result = await this.$store.dispatch("setUserInfo", {
        username,
        gender,
        age,
        location,
        introduction,
        mtto
      });

      const { code, message } = result;
      if (code === 0) {
        this.alertMessage = message;
        this.$refs["modify-profile-fail-modal"].show();
        return;
      }

      if (code === 1) {
        this.successMessage = message;
        this.$refs["modify-profile-success-modal"].show();
      }
    }
  },
  computed: {
    ...mapState(["profile"])
  },
  async created() {
    const _id = this.$route.params._id;
    await this.$store.dispatch("getUserInfo", _id);
    this.username = this.profile.username;
    this.selected = this.profile.gender;
    this.age = this.profile.age ? this.profile.age : "";
    this.location = this.profile.location ? this.profile.location : "";
    this.introduction = this.profile.introduction
      ? this.profile.introduction
      : "";
    this.mtto = this.profile.mtto ? this.profile.mtto : "";
  }
};
</script>
