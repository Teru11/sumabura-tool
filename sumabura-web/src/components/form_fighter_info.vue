<!--【F】戦績フォーム -->
<script setup>
import { useFighterInfo } from '@/composables/useFighterInfo.js';
import { calcWinRate, getFighterImage } from '@/assets/js/common.js';
import { toRef } from 'vue';
const props = defineProps({ useid: String });
const useidRef = toRef(props, 'useid');
const {
  nickname,
  fighterInfo,
  fighterMemo,
  message,
  showMessage,
  formSearch,
  formUpdateResult,
  formUpdateMemo
} = useFighterInfo(useidRef);
</script>

<template>
  <div class="from-fighter-info">
    <div class="fighter-info-select">
      <div class="title">相手情報</div>
      <div class="search">
        <!-- 略称検索 -->
        <form @submit.prevent="formSearch">
          <input type="text" id="nickname" v-model="nickname" placeholder="略称検索" />
          <button type="submit" name="search">検索</button>
        </form>
      </div>
      <div v-if="showMessage" class="message">{{ message }}</div>
    </div>

    <div class="fighter-info" v-if="fighterInfo">
      <div class="fighter-table">
        <table class="fighter-name-view">
          <tbody>
            <tr>
              <td class="fighter-image">
                <img :src="getFighterImage(fighterInfo.fid)" />
              </td>
              <td class="fighter-name">{{ fighterInfo.fname }}</td>
            </tr>
          </tbody>
        </table>
        <div class="winloss-table">
          <form @submit.prevent="formUpdateResult">
            <div class="data-row">
              <span>勝数</span>
              <span>{{ fighterInfo.win_cnt }}<button type="submit" class="win-btn" name="win">勝利</button></span>
            </div>
            <div class="data-row">
              <span>負数</span>
              <span>{{ fighterInfo.loss_cnt }}<button type="submit" class="loss-btn" name="loss">敗北</button></span>
            </div>
            <div class="data-row">
              <span>勝率</span>
              <span>{{ calcWinRate(fighterInfo.win_cnt, fighterInfo.loss_cnt) }}%</span>
            </div>
            <div class="data-row">
              <span>出現率</span>
              <span>{{ fighterInfo.encount }}%</span>
            </div>
          </form>
        </div>
      </div>

      <div class="memo">
        <form @submit.prevent="formUpdateMemo">
          <div class="memo-header">
            <div>ファイターメモ</div>
            <button type="submit" name="update">更新</button>
          </div>
          <textarea v-model="fighterMemo"></textarea>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.from-fighter-info {
  margin-bottom: 20px;
}
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
.fighter-name-view {
  width: 330px;
}
.winloss-table {
  margin-top: 10px;
  margin-left: 30px;
  width: 80%;
  white-space: nowrap;
}
.winloss-table .data-row {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.winloss-table .data-row span {
  flex: 1;
  align-items: center;
  color: black;
  margin-top: 4px;
  font-size: 14px;
}
.winloss-table .data-row button {
  align-items: center;
  vertical-align: baseline; /* middleをリセット */
  margin-left: 18px;
  height: 25px;
}
.winloss-table .data-row .win-btn {
  color: black;
  background-color: rgb(255, 136, 0);
}
.winloss-table .data-row .loss-btn {
  color: #fff;
  background-color: #007bff;
}
.message {
  color: red;
  margin-left: 20px;
}
.memo {
  width: 100%;
  margin-left: 20px;
}
.memo .memo-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.memo textarea {
  height: 200px;
}
/** input */
#nickname {
  width: 120px;
}
</style>
