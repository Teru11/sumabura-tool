<!-- 勝率表画面 -->

<template>
  <div>
    <!-- トップヘッダー -->
    <TopHeader />
    <!-- メニューヘッダー -->
    <MenuHeader />

    <div class="main-block">
      <!-- 画面 -->
      <div class="display-main">
        ◆ ファイター検索<br />
        ◆ 勝率表
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "./common/TopHeader.vue";
import MenuHeader from "./common/MenuHeader.vue";

export default {
  components: {
    TopHeader,
    MenuHeader,
  },
};
</script>

<style scoped>
/* 画面枠 */
.main-block {
  flex-grow: 1;
  width: 100%;
}
.display-main {
  width: 80%;
  margin: 50px auto;
}
</style>

