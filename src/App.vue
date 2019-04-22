<template>
  <div id="app">
    <Header v-show="$route.meta.showHeader"/>
    <!-- 内容区域 -->
    <section :class="[$route.meta.showHeader?'container liu-content-section':'']">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";

import { mapActions } from "vuex";
export default {
  components: {
    Header
  },
  methods: {
    ...mapActions(["validateToken"])
  },

  mounted() {
    this.validateToken();
  }
};
</script>


<style lang="scss">
</style>
