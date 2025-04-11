<!--【M】ファイター管理画面 -->
<script setup>
import FighterManager from "../components/form_fighter_manager.vue";
import Winloss from "../components/form_winloss_table.vue";
</script>

<template>
  <div class="fighter-manager">
    <FighterManager />
    <Winloss class="no-scroll" />
  </div>
</template>
