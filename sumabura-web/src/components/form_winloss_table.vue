<!--【F】勝率表フレーム -->
<script setup>
import { useWinlossTable } from '@/composables/useWinlossTable.js';
import { calcWinRate, getFighterImage } from '@/assets/js/common.js';
/** emit */
const emit = defineEmits(['selected-useid']);
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
          <tr v-for="item in winlossTable" :key="item.useid">
            <td class="fighter-image">
              <img v-if="item.useid" :src="getFighterImage(item.useid)" />
            </td>
            <td class="fighter-name">{{ item.fname }}</td>
            <td>{{ item.win_cnt }}</td>
            <td>{{ item.loss_cnt }}</td>
            <td>{{ calcWinRate(item.win_cnt, item.loss_cnt) }}%</td>
            <td>{{ item.current_rate }}<br /><span>{{ item.current_rate_date }}</span></td>
            <td :class="rateDeff(item.current_rate, item.history_rate1).class">
              {{ rateDeff(item.current_rate, item.history_rate1).value }}
            </td>
            <td>{{ item.history_rate1 }}<br /><span>{{ item.history_rate1_date }}</span></td>
            <td>{{ item.history_rate2 }}<br /><span>{{ item.history_rate2_date }}</span></td>
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
