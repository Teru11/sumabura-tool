<!--【C】対戦記録フレーム（右サイド） -->
<script setup>
import { useSideRight } from '@/composables/useSideRight.js';
import { calcWinRate, getFighterImage } from '@/assets/js/common.js';
const {
  win_cnt,
  loss_cnt,
  todayBattleHistoryTable
} = useSideRight();
</script>

<template>
  <div class="right-side">
    <div class="right-side-inner">
      <div class="right-side-header">
        <p>本日の成績</p>
        <span>勝敗:{{ win_cnt }}</span>
        <span>負数:{{ loss_cnt }}</span>
        <span>勝率:{{ calcWinRate(win_cnt, loss_cnt) }}%</span>
      </div>
      <table class="side-battle-history table-scroll">
        <tbody>
          <tr v-for="row in todayBattleHistoryTable" :key="row.history_date">
            <td><img v-if="row.useid" :src="getFighterImage(row.useid)" /></td>
            <td><img v-if="row.useid && row.fid" src="@/assets/img/vs.png" /></td>
            <td><img v-if="row.fid" :src="getFighterImage(row.fid)" /></td>
            <td><span :class="['result', row.resultClass]">{{ row.streakStr }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/** main-css */
.right-side {
  width: 350px;
}
.right-side-inner {
  margin: 20px;
}
/** header-css */
.right-side-header {
  display: flex;
  height: 30px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #ff7f50, white);
}
.right-side-header p {
  font-weight: bold;
}
.right-side-header span {
  margin-left: 10px;
}
/** table-css */
.side-battle-history {
  text-align: center;
}
.side-battle-history img {
  width: 60px;
  width: 60px;
}
.result {
  margin: 0 20px;
  width: 60px;
  font-size: 20px;
  font-weight: 700;
}
/** table */
.table-scroll {
  display: block;
  overflow-y: auto;
  max-height: 80vh;
}
/* スクロールバー全体 */
.table-scroll::-webkit-scrollbar {
  width: 8px;              /* スクロールバーの幅を調整 */
  background: transparent; /* 背景を透明にする */
}
/* スクロールバーのスライダー部分 */
.table-scroll::-webkit-scrollbar-thumb {
  background-color: #888; /* スライダーの色 */
  border-radius: 4px;         /* 角丸にする */
}
/* スクロールバーのスライダー部分のホバー状態 */
.table-scroll::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* ホバー時の色 */
}
</style>
