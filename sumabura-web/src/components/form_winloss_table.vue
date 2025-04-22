<!--【F】勝率表フレーム -->
<script setup>
import { useWinlossTable } from '@/composables/useWinlossTable.js';
import { calcWinRate, getFighterImage } from '@/assets/js/common.js';
const emit = defineEmits(['selected-useid']); // emit
const {
  useid,
  nickname,
  winlossTable,
  updateRate,
  isMainTopRoute,
  search,
  rateSaveUpdate,
  rateDeff
} = useWinlossTable(emit);
</script>

<template>
  <div class="from-win-loss-table">
    <div class="fighter-select">
      <div class="title">勝率表</div>
      <div class="search" v-if="isMainTopRoute">
        <!-- 略称検索 -->
        <form @submit.prevent="search">
          <input type="text" id="nickname" v-model="nickname" placeholder="略称検索" />
          <button type="submit" name="search">検索</button>
          <button type="submit" name="cancel">解除</button>
        </form>
      </div>
      <div class="rate-update" v-if="isMainTopRoute && useid">
        <!-- レート更新 -->
        <form @submit.prevent="rateSaveUpdate">
          <input type="text" id="rate" v-model="updateRate" />
          <button type="submit" name="update">更新</button>
          <button type="submit" name="save">保存</button>
        </form>
      </div>
    </div>

    <!-- 勝率テーブル -->
    <div class="fighter-table">
      <table class="table-scroll">
        <thead>
          <tr>
            <th colspan="2" class="th-fighter">ファイター</th>
            <th class="th-data">勝数</th>
            <th class="th-data">負数</th>
            <th class="th-data">勝率</th>
            <th class="th-data">現レート</th>
            <th class="th-data">増減値</th>
            <th class="th-data">前回</th>
            <th class="th-data">前々回</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in winlossTable" :key="row.useid">
            <td class="fighter-image">
              <img v-if="row.useid" :src="getFighterImage(row.useid)" />
            </td>
            <td class="fighter-name">{{ row.fname }}</td>
            <td>{{ row.win_cnt }}</td>
            <td>{{ row.loss_cnt }}</td>
            <td>{{ calcWinRate(row.win_cnt, row.loss_cnt) }}%</td>
            <td>{{ row.current_rate }}<br /><span>{{ row.current_rate_date }}</span></td>
            <td :class="rateDeff(row.current_rate, row.history_rate1).class">
              {{ rateDeff(row.current_rate, row.history_rate1).value }}
            </td>
            <td>{{ row.history_rate1 }}<br /><span>{{ row.history_rate1_date }}</span></td>
            <td>{{ row.history_rate2 }}<br /><span>{{ row.history_rate2_date }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.from-win-loss-table {
  margin-bottom: 20px;
}
.fighter-select {
  display: flex;
  white-space: nowrap;
}
.fighter-select .title {
  margin-top: 2px;
  font-weight: 700;
}
.fighter-select .rate-update {
  margin-left: 18%;
}
/** table */
.table-scroll {
  display: block;
  overflow-y: auto;
  max-height: 240px;
}
/** scrollしない（親がno-scrollクラスを持っている場合） */
.no-scroll .table-scroll {
  overflow-y: visible;
  max-height: none;
}
/** input */
#nickname {
  width: 120px;
}
#rate {
  width: 65px;
}
</style>
