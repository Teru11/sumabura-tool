<script setup>
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";
import HeaderTitle from "./components/common/cmn_header_title.vue";
import HeaderMenu from "./components/common/cmn_header_menu.vue";
import SideLeft from "./components/common/cmn_side_left.vue";
import SideRight from "./components/common/cmn_side_right.vue";

// 現在のルートを取得し、右サイドの表示有無を設定
const route = useRoute();
const isMainTopRoute = computed(() => route.name === "main_top");
</script>

<template>
  <div>
    <div class="header">
      <HeaderTitle />
      <HeaderMenu />
    </div>
    <div class="main">
      <div class="left">
        <SideLeft />
      </div>

      <div class="center">
        <RouterView />
      </div>

      <div class="right" v-if="isMainTopRoute">
        <SideRight />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  height: 92vh;
}
.center {
  margin: 20px;
}
.left,
.right {
  background-color: #c5c5c5;
}
/* 画面半分サイズの場合、サイド非表示 */
@media (max-width: 1300px) {
  .left,
  .right {
    display: none;
  }
}
</style>
