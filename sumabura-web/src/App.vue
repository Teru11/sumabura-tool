<script setup>
import { RouterView } from 'vue-router';
import HeaderTitle from './components/common/cmn_header_title.vue';
import HeaderMenu from './components/common/cmn_header_menu.vue';
import SideLeft from './components/common/cmn_side_left.vue';
import SideRight from './components/common/cmn_side_right.vue';
</script>

<template>
  <div>
    <header>
      <HeaderTitle />
      <HeaderMenu />
    </header>
    <main>
      <leftContent>
        <SideLeft />
      </leftContent>
      
      <centerContent>
        <RouterView />
      </centerContent>

      <rightContent>
        <SideRight />
      </rightContent>
    </main>
  </div>
</template>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
}
centerContent {
  margin: 20px;
  margin-right: auto;
}
rightContent {
  background-color: #c5c5c5;
}
leftContent {
  background-color: #c5c5c5;
}
</style>
