<template>
  <div class="row">
    <main class="col-md-8 bg-white rounded-lg border">
      <h1>搜索</h1>
    </main>
    <div class="col-md-4">
      <div class="row">
        <div class="col-1"></div>
        <Aside/>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "../components/Aside/Aside.vue";
export default {
  components: {
    Aside
  }
};
</script>