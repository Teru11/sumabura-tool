<!--【F】ファイター情報フレーム -->
<script setup>
import { useBattleHistory } from '@/composables/useBattleHistory.js';
import { calcWinRate, getFighterImage } from '@/assets/js/common.js';
const {
  useid,
  nickname,
  sortBy,
  sortKey,
  sortOrder,
  winlossTable,
  fighterTable,
  formSearch
} = useBattleHistory();
</script>

<template>
  <div class="from-battle-history">
    <div class="fighter-info-select">
      <div class="title">戦績表</div>
      <div class="search">
        <!-- 略称検索 -->
        <form @submit.prevent="formSearch">
          <input type="text" id="nickname" v-model="nickname" placeholder="略称検索" />
          <button type="submit" name="search">検索</button>
          <button type="submit" name="cancel">解除</button>
        </form>
      </div>
    </div>

    <!-- 検索結果 -->
    <div class="fighter-table fighter-info" v-if="winlossTable.length > 0">
      <table class="fighter-name-view">
        <tbody>
          <tr>
            <td class="fighter-image">
              <img :src="getFighterImage(winlossTable[0].useid, '.')" />
            </td>
            <td class="fighter-name">{{ winlossTable[0].fname }}</td>
          </tr>
        </tbody>
      </table>
      <table class="fighter-info-view">
        <tbody>
          <tr><td>勝数</td><td>{{ winlossTable[0].win_cnt }}</td></tr>
          <tr><td>負数</td><td>{{ winlossTable[0].loss_cnt }}</td></tr>
          <tr><td>勝率</td><td>{{ calcWinRate(winlossTable[0].win_cnt, winlossTable[0].loss_cnt) }}%</td></tr>
        </tbody>
      </table>
    </div>

    <!-- 戦績表テーブル -->
    <div class="fighter-table">
      <table class="table-scroll">
        <thead>
          <tr>
            <th colspan="2" class="th-fighter">ファイター</th>
            <th class="th-data" @click="sortBy('total')">出現数&nbsp;<span>▼</span>
              <span v-if="sortKey === 'total'">
                <span v-if="sortOrder === 1">↑</span><!-- 昇順 -->
                <span v-if="sortOrder === -1">↓</span><!-- 降順 -->
              </span>
            </th>
            <th class="th-data">勝数</th>
            <th class="th-data">負数</th>
            <th class="th-data" @click="sortBy('win_rate')">勝率&nbsp;<span>▼</span>
              <span v-if="sortKey === 'win_rate'">
                <span v-if="sortOrder === 1">↑</span><!-- 昇順 -->
                <span v-if="sortOrder === -1">↓</span><!-- 降順 -->
              </span>
            </th>
            <th class="th-memo">ファイターメモ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in fighterTable" :key="row.fid">
            <td class="fighter-image"><img v-if="row.fid" :src="getFighterImage(row.fid, '.')" /></td>
            <td class="fighter-name">{{ row.fname }}</td>
            <td>{{ Number(row.total) }}</td>
            <td>{{ row.win_cnt }}</td>
            <td>{{ row.loss_cnt }}</td>
            <td>{{ Math.round(Number(row.win_rate) * 100) }}%</td>
            <td class="memo">{{ row.memo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.fighter-info-select {
  display: flex;
  white-space: nowrap;
}
.fighter-info-select .title {
  margin-top: 2px;
  font-weight: 700;
}
.fighter-info {
  display: flex;
}
.fighter-info .fighter-name-view {
  width: 400px;
}
.fighter-info .fighter-info-view {
  margin-left: 30px;
  width: 200px;
}
.fighter-table .th-memo {
  text-align: left;
  width: 800px;
  padding-left: 12px;
}
.fighter-table .memo {
  text-align: left;
  font-size: 12px;
  padding-left: 8px;
  padding-right: 8px;
  white-space: normal;  /* 自動で折り返し */
  overflow: visible;    /* 溢れた部分を表示 */
  text-overflow: clip;  /* ellipsis効果を無効に */
}
/** table */
.table-scroll {
  display: block;
  overflow-y: auto;
  max-height: 455px;
}
/** input */
#nickname {
  width: 120px;
}
</style>