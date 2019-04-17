<template>
  <div id="app">
    <Header/>

    <!-- 内容区域 -->
    <section class="container liu-content-section">
      <div class="row">
        <main class="col-md-8 bg-white rounded-lg border">
          <router-view></router-view>
        </main>
        <div class="col-md-4">
          <div class="row">
            <div class="col-1"></div>
            <!-- aside 内容-->
            <Aside/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Aside from "./components/Aside/Aside.vue";

export default {
  components: {
    Header,
    Aside
  }
};
</script>


<style lang="scss">
</style>
