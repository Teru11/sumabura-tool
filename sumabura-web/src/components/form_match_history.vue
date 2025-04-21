<!--【F】対戦記録フォーム -->
<script setup>
import { useMatchHistory } from '@/composables/useMatchHistory.js';
import { toRef } from 'vue';
const props = defineProps({ useid: String });
const useidRef = toRef(props, 'useid');
const {
  matchHistoryTable
} = useMatchHistory(useidRef);
</script>

<template>
  <div class="form-match-history" v-if="matchHistoryTable">
    <div class="match-history-table">
      <table class="table-scroll">
        <tbody>
          <tr v-for="row in matchHistoryTable" :key="row.key">
            <template v-if="row.type === 'dateline'">
              <td colspan="6"><div class="dateline"><!-- 日付変更線 --></div></td>
            </template>
            <template v-else>
              <td class="date">{{ row.history_date }}</td>
              <td class="fighter-name">{{ row.use_name }}</td>
              <td class="vs">VS</td>
              <td class="fighter-name">{{ row.enemy_name }}</td>
              <td :class="['result', row.resultClass]">{{ row.resultStr }}</td>
              <td :class="['result', row.resultClass]">{{ row.streakStr }}</td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.form-match-history {
  margin-bottom: 20px;
}
/** table */
.table-scroll {
  display: block;
  overflow-y: auto;
  max-height: 120px;
}
.match-history-table .date {
  width: 130px;
}
.match-history-table .fighter-name {
  width: 190px;
}
.match-history-table .vs {
  width: 40px;
}
.match-history-table .result {
  text-align: center;
  width: 80px;
}
.match-history-table .dateline {
  margin: 10px 0;
  border: 1px dashed #a8b7c5;
}
</style>
