<!--【C】ファイター：略称名リスト（左サイド） -->
<script setup>
import { useSideLeft } from '@/composables/useSideLeft.js';
const { fighterListTable } = useSideLeft();
</script>

<template>
  <div class="left-side">
    <div class="left-side-inner">
      <table class="fighter-list table-scroll">
        <tbody>
          <tr v-for="row in fighterListTable" :key="row.id">
            <td>{{ row.name }}</td><td>:</td><td>{{ row.nickname }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.left-side {
  width: 350px;
}
.left-side-inner {
  margin: 20px;
}
.fighter-list {
  font-size: 12px;
}
/** table */
.table-scroll {
  display: block;
  overflow-y: auto;
  max-height: 500px;
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