<!--【F】勝率表フレーム -->
<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
// 現在のルートを取得し、略称検索・レート更新の表示有無を設定
const route = useRoute();   
const isMainTopRoute = computed(() => route.name === 'main_top');
</script>

<template>
  <div class="from-win-loss-table">

    <div class="fighter-select">
      <div class="title">勝率表</div>
      <div class="search" v-if="isMainTopRoute">
        <!-- 略称検索 -->
        <form>
          <input type="text" id="nickname" placeholder="略称検索" />
          <button type="submit" name="search">検索</button>
          <button type="submit" name="cancel">解除</button>
        </form>
      </div>
      <div class="rate-update" v-if="isMainTopRoute">
        <!-- レート更新 -->
        <form>
          <input type="text" id="rate" />
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
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>356</td>
            <td>220</td>
            <td>40%</td>
            <td>1390<br><span>2025/3/10</span></td>
            <td class="win">+200</td>
            <td>1000<br><span>2025/3/10</span></td>
            <td>2000<br><span>2025/3/10</span></td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>356</td>
            <td>220</td>
            <td>40%</td>
            <td>1390<br><span>2025/3/10</span></td>
            <td class="win">+200</td>
            <td>1000<br><span>2025/3/10</span></td>
            <td>2000<br><span>2025/3/10</span></td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>356</td>
            <td>220</td>
            <td>40%</td>
            <td>1390<br><span>2025/3/10</span></td>
            <td class="win">+200</td>
            <td>1000<br><span>2025/3/10</span></td>
            <td>2000<br><span>2025/3/10</span></td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>356</td>
            <td>220</td>
            <td>40%</td>
            <td>1390<br><span>2025/3/10</span></td>
            <td class="win">+200</td>
            <td>1000<br><span>2025/3/10</span></td>
            <td>2000<br><span>2025/3/10</span></td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>356</td>
            <td>220</td>
            <td>40%</td>
            <td>1390<br><span>2025/3/10</span></td>
            <td class="win">+200</td>
            <td>1000<br><span>2025/3/10</span></td>
            <td>2000<br><span>2025/3/10</span></td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>356</td>
            <td>220</td>
            <td>40%</td>
            <td>1390<br><span>2025/3/10</span></td>
            <td class="win">+200</td>
            <td>1000<br><span>2025/3/10</span></td>
            <td>2000<br><span>2025/3/10</span></td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>356</td>
            <td>220</td>
            <td>40%</td>
            <td>1390<br><span>2025/3/10</span></td>
            <td class="win">+200</td>
            <td>1000<br><span>2025/3/10</span></td>
            <td>2000<br><span>2025/3/10</span></td>
          </tr>
          <tr>
            <td class="fighter-image"><img src="@/assets/img/fighter/12.png"></td>
            <td class="fighter-name">キャプテン・ファルコン</td>
            <td>356</td>
            <td>220</td>
            <td>40%</td>
            <td>1390<br><span>2025/3/10</span></td>
            <td class="win">+200</td>
            <td>1000<br><span>2025/3/10</span></td>
            <td>2000<br><span>2025/3/10</span></td>
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
/** input */
#nickname {
  width: 120px;
}
#rate {
  width: 65px;
}
</style>
