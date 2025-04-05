<!--【M】対戦（トップ画面）画面 -->
<script setup>
import Winloss from '../components/form_winloss_table.vue';
import FighterInfo from '../components/form_fighter_info.vue';
import MatchHistory from '../components/form_match_history.vue';
</script>

<template>
  <div class="main-top">
    <Winloss />
    <FighterInfo />
    <MatchHistory />
  </div>
</template>
