import { ref, watch } from 'vue';
import { getEnemyFighterInfo, updateFighterWinLoss, updateFighterMemo } from '@/assets/js/request.js';
import { emitter } from '@/assets/js/eventBus.js';

export function useFighterInfo(useid) {
  /** model */
  const nickname = ref('');
  const fighterInfo = ref(null);
  const fighterMemo = ref('');
  const message = ref('');
  const showMessage = ref(false);
  /** 初期化 */
  const initialize = async () => {
    nickname.value = '';
    fighterMemo.value = '';
    fighterInfo.value = null;
    message.value = '';
  }
  /** [event]略称検索 */
  const formSearch = async () => {
    if (!nickname.value) return;
    fighterInfo.value = await getEnemyFighterInfo(useid.value, nickname.value);
    if (fighterInfo.value){
      fighterMemo.value = fighterInfo.value.memo; 
    } else {
      message.value = '存在しない略称です。';
      showMessage.value = true;
      setTimeout(() => {showMessage.value = false;}, 2000); // 2秒後に消える
    }
  }
  /** [event]結果更新 */
  const formUpdateResult = async (event) => {
    if (!fighterInfo.value) return;
    const action = event.submitter.name;

    let result = '';
    if (action === 'win') {
      result = await updateFighterWinLoss(useid.value, fighterInfo.value.fid, action);
    } else if (action === 'loss') {
      result = await updateFighterWinLoss(useid.value, fighterInfo.value.fid, action);
    }

    if (result){
      // 本日戦績をリフレッシュ
      emitter.emit('refresh-today-battle-data');
      // マッチング履歴をリフレッシュ
      emitter.emit('refresh-match-history');
      // 勝率表をリフレッシュ
      emitter.emit('refresh-winloss-table-selected');
      // 相手情報を更新
      formSearch();
      // メッセージ更新
      message.value = `${fighterInfo.value.fname}との対戦結果を勝利で更新しました。`;
      showMessage.value = true;
      setTimeout(() => {showMessage.value = false;}, 2000); // 2秒後に消える
    }
  }
  /** メモ更新 */
  const formUpdateMemo = async () => {
    if (!fighterInfo.value) return;
    const result = await updateFighterMemo(useid.value, fighterInfo.value.fid, fighterMemo.value);
    if (result){
      message.value = `${fighterInfo.value.fname}のメモを更新しました。`;
      showMessage.value = true;
      setTimeout(() => {showMessage.value = false;}, 2000); // 2秒後に消える
    }
  }
  // useidの変更を監視してinitializeを呼び出す
  watch(useid, () => {
    initialize();
  }, { immediate: true });
  // 返却
  return {
    nickname,
    fighterInfo,
    fighterMemo,
    message,
    showMessage,
    formSearch,
    formUpdateResult,
    formUpdateMemo
  };
}
