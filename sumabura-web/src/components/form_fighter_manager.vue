<!--【F】ファイター管理フォーム -->
<script setup>
import { useFighterManager } from '@/composables/useFighterManager.js';
import { getFighterImage } from '@/assets/js/common.js';
const {
  fid,
  nickname,
  fighterInfo,
  updateNickname,
  message,
  formSearch,
  formUpdateManager,
  formUpdateNickname
} = useFighterManager();
</script>

<template>
  <div class="from-fighter-manager">
    <div class="fighter-info-select">
      <!-- 略称検索 -->
      <form @submit.prevent="formSearch">
        <input type="text" id="nickname" v-model="nickname" placeholder="略称検索" />
        <button type="submit" name="search">検索</button>
      </form>
      <div class="message">{{ message }}</div>
    </div>

    <div class="fighter-table fighter-info" v-if="fighterInfo">
      <table class="fighter-name-view">
        <tbody>
          <tr>
            <td class="fighter-image">
              <img :src="`.${getFighterImage(fighterInfo.fid)}`" />
            </td>
            <td class="fighter-name">{{ fighterInfo.fname }}</td>
          </tr>
        </tbody>
      </table>
      <form @submit.prevent="formUpdateManager">
        <button type="submit" name="add">追加</button>
        <button type="submit" name="delete">削除</button>
      </form>
    </div>

    <div class="nickname-form" v-if="fighterInfo">
      <span style="margin-right: 20px">略称名</span>
      <span>:</span>
      <span style="margin-left: 20px">{{ fighterInfo.nickname }}</span>
      <form @submit.prevent="formUpdateNickname">
        <input type="text" id="updateNickname" v-model="updateNickname" />
        <button type="submit" name="update">略称名変更</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.from-fighter-manager {
  margin-bottom: 20px;
}
.fighter-info-select {
  display: flex;
  white-space: nowrap;
}
.fighter-info-select input {
  margin-left: 0px;
}
.message {
  color: red;
  margin-left: 20px;
}
.fighter-info {
  display: flex;
  margin-bottom: 30px;
}
.fighter-info .fighter-name-view {
  width: 400px;
}
.fighter-info .fighter-info-view {
  margin-left: 30px;
  width: 200px;
}
.fighter-info form {
  margin-top: 4px;
  margin-left: 30px;
  display: flex;
  flex-direction: column; /* ボタンを縦に並べる */
  gap: 8px;               /* ボタン間の隙間を調整 */
}
.nickname-form {
  display: flex;
}
.nickname-form form {
  margin-left: 150px;
}
/** input */
#nickname {
  width: 120px;
}
#updateNickname {
  width: 120px;
}
</style>
