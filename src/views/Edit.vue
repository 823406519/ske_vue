<template>
  <div>
    <header class="bg-white rounded-bottom border-bottom fixed-top p-3">
      <div class="container">
        <div class="row">
          <h5 class="col-10 text-primary">编辑文章</h5>
          <div class="col-2">
            <b-button v-b-toggle.post variant="primary" size="sm">修改</b-button>
          </div>
        </div>
      </div>
    </header>

    <main class="rounded-lg bg-white" style="margin-top: 65px; min-height: 1000px">
      <div class="d-flex align-items-center flex-column pt-5">
        <!-- 分类选择 -->
        <b-form-radio-group
          id="edit-classification"
          v-model="selected"
          :options="options"
          buttons
          button-variant="outline-primary"
          size="md"
          name="edit-classification"
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
            id="edit-article"
            placeholder="输入正文..."
            rows="100"
            style="width: 50rem"
            class="mt-3 border-0 p-4"
          ></b-form-textarea>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Aside from "../components/Aside/Aside.vue";
export default {
  components: {
    Aside
  },
  data() {
    return {
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
      title: ""
    };
  }
};
</script>