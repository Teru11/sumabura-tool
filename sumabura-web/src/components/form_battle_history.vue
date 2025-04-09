<!--【F】ファイター情報フレーム -->
<template>
  <div class="from-battle-history">
    <div class="fighter-info-select">
      <div class="title">戦績表</div>
      <div class="search">
        <!-- 略称検索 -->
        <form>
          <input type="text" id="nickname" placeholder="略称検索" />
          <button type="submit" name="search">検索</button>
          <button type="submit" name="cancel">解除</button>
        </form>
      </div>
    </div>

    <!-- 検索結果 -->
    <div class="fighter-table fighter-info">
      <table class="fighter-name-view">
        <tbody>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
          </tr>
        </tbody>
      </table>
      <table class="fighter-info-view">
        <tbody>
          <tr><td>勝数</td><td>487</td></tr>
          <tr><td>負数</td><td>364</td></tr>
          <tr><td>出現率</td><td>57%</td></tr>
        </tbody>
      </table>
    </div>

    <!-- 戦績表テーブル -->
    <div class="fighter-table">
      <table class="table-scroll">
        <thead>
          <tr>
            <th colspan="2" class="th-fighter">ファイター</th>
            <th class="th-data">出現数</th>
            <th class="th-data">勝数</th>
            <th class="th-data">負数</th>
            <th class="th-data">勝率</th>
            <th class="th-memo">ファイターメモ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>54</td>
            <td>36</td>
            <td>18</td>
            <td>67%</td>
            <td class="memo">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>54</td>
            <td>36</td>
            <td>18</td>
            <td>67%</td>
            <td class="memo">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>54</td>
            <td>36</td>
            <td>18</td>
            <td>67%</td>
            <td class="memo">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>54</td>
            <td>36</td>
            <td>18</td>
            <td>67%</td>
            <td class="memo">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>54</td>
            <td>36</td>
            <td>18</td>
            <td>67%</td>
            <td class="memo">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>54</td>
            <td>36</td>
            <td>18</td>
            <td>67%</td>
            <td class="memo">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>54</td>
            <td>36</td>
            <td>18</td>
            <td>67%</td>
            <td class="memo">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>54</td>
            <td>36</td>
            <td>18</td>
            <td>67%</td>
            <td class="memo">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>54</td>
            <td>36</td>
            <td>18</td>
            <td>67%</td>
            <td class="memo">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>54</td>
            <td>36</td>
            <td>18</td>
            <td>67%</td>
            <td class="memo">メモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモメモ</td>
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
  white-space: normal; /* 自動で折り返し */
  overflow: visible;   /* 溢れた部分を表示 */
  text-overflow: clip; /* ellipsis効果を無効に */
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