<!--【F】対戦記録フォーム -->
<template>
  <div class="form-match-history">
    <div class="match-history-table">
      <table class="table-scroll">
        <tbody>
          <tr>
            <td class="date">2025/3/10 23:01</td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td class="vs">VS</td>
            <td class="fighter-name">ルフレ</td>
            <td class="result win">勝利</td>
            <td class="result win">２連勝</td>
          </tr>
          <tr>
            <td colspan="6"><div class="dateline"><!-- 日付変更線 --></div></td>
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
