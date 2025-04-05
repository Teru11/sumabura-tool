<script setup>
import { RouterView } from 'vue-router';
import HeaderTitle from './components/common/cmn_header_title.vue';
import HeaderMenu from './components/common/cmn_header_menu.vue';
import SideLeft from './components/common/cmn_side_left.vue';
import SideRight from './components/common/cmn_side_right.vue';
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

      <div class="right">
        <SideRight />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
}
.center {
  width: 100%;
  margin: 20px;
}
.right {
  background-color: #c5c5c5;
}
.left {
  background-color: #c5c5c5;
}
/* 画面半分サイズの場合、サイド非表示 */
@media (max-width: 1300px) {
  .left,.right {
    display: none;
  }
}
</style>
