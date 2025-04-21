<!--【M】対戦（トップ画面）画面 -->
<script setup>
import { ref } from 'vue';
import Winloss from '../components/form_winloss_table.vue';
import FighterInfo from '../components/form_fighter_info.vue';
import MatchHistory from '../components/form_match_history.vue';
/** useid（初期値null） */
const useid = ref('');
const setUseid = (id) => { useid.value = id; };
</script>

<template>
  <div class="main-top">
    <Winloss @selected-useid="setUseid"/>
    <FighterInfo :class="{ hidden: !useid }" :useid="String(useid)" />
    <MatchHistory :useid="String(useid)" />
  </div>
</template>