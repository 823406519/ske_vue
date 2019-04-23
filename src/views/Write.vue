<template>
  <div>
    <header class="bg-white rounded-bottom border-bottom fixed-top p-3">
      <div class="container">
        <div class="row">
          <h5 class="col-10 text-primary">写文章</h5>
          <div class="col-2">
            <b-button v-b-toggle.post variant="primary" size="sm" @click="handlePost">发布</b-button>
          </div>
        </div>
      </div>
    </header>

    <main class="rounded-lg bg-white" style="margin-top: 65px; min-height: 1000px">
      <div class="d-flex align-items-center flex-column pt-5">
        <!-- 分类选择 -->
        <b-form-radio-group
          id="write-classification"
          v-model="selected"
          :options="options"
          buttons
          button-variant="outline-primary"
          size="md"
          name="write-classification"
        ></b-form-radio-group>

        <!-- 标题 -->
        <b-form-input
          v-model="title"
          placeholder="输入文章标题..."
          class="p-4 border-0 font-weight-bold mt-3"
          style="font-size: 30px; width: 50rem"
        ></b-form-input>

        <div>
          <b-form-textarea
            placeholder="输入正文..."
            v-model="content"
            rows="100"
            style="width: 50rem"
            class="mt-3 border-0 p-4"
          ></b-form-textarea>
        </div>
      </div>
    </main>

    <!-- 外部发表文章成功的modal -->
    <b-modal ref="post-success-modal" header-class="border-0 pb-0 " size="sm" hide-footer>
      <span class="text-center d-block font-weight-bold text-success">
        {{successMessage}}
        <button class="btn btn-sm btn-primary ml-2" @click="handleBack">关闭窗口</button>
      </span>
    </b-modal>

    <!-- 外部的发表失败modal -->
    <b-modal ref="post-fail-modal" header-class="border-0 pb-0 " size="sm" hide-footer>
      <span class="text-center d-block font-weight-bold text-danger">{{alertMessage}}</span>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      successMessage: "",
      alertMessage: "",
      // 分类按钮的数据设置
      selected: "0",
      options: [
        { text: "计算机科学", value: "0" },
        { text: "经济", value: "1" },
        { text: "社会科学", value: "2" },
        { text: "历史", value: "3" },
        { text: "人文艺术", value: "4" }
      ],

      // 标题数据
      title: "",
      content: ""
    };
  },
  methods: {
    async handlePost() {
      if (!this.title) {
        this.alertMessage = "标题不能为空";
        this.$refs["post-fail-modal"].show();
        return;
      }

      if (!this.content) {
        this.alertMessage = "文章正文不能为空";
        this.$refs["post-fail-modal"].show();
        return;
      }

      const classification = this.selected;
      const title = this.title;
      const content = this.content;
      this.successMessage = await this.$store.dispatch("write", {
        classification,
        title,
        content
      });
      this.$refs["post-success-modal"].show();

      // 还原数据
      this.selected = "0";
      this.title = "";
      this.content = "";
    },
    handleBack() {
      window.close();
    }
  }
};
</script>