<script setup>
import { RouterView } from 'vue-router';
import TitleHeader from './components/cmn_title_header.vue';
import MenuHeader from './components/cmn_menu_header.vue';
</script>

<template>
  <div>
    <header>
      <TitleHeader />
      <MenuHeader />
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
