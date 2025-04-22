import { ref } from 'vue';
import { getEnemyFighterInfo, updateFighterWinLoss, updateFighterMemo } from '@/assets/js/request.js';
import { emitter } from '@/assets/js/eventBus.js';

export function useFighterInfo(useid) {
  /** model */
  const nickname = ref('');
  const fighterInfo = ref(null);
  const fighterMemo = ref('');
  const message = ref('');

  /** [event]略称検索 */
  const formSearch = async () => {
    if (!nickname.value) return;
    fighterInfo.value = await getEnemyFighterInfo(useid, nickname.value);
    if (fighterInfo.value){
      fighterMemo.value = fighterInfo.value.memo; 
    }
  }
  /** [event]結果更新 */
  const formUpdateResult = async (event) => {
    if (!fighterInfo.value) return;
    const action = event.submitter.name;
    if (action === 'win') {
      await updateFighterWinLoss(useid, fighterInfo.value.fid, 1);
    } else if (action === 'loss') {
      await updateFighterWinLoss(useid, fighterInfo.value.fid, -1);
    }
    message.value = `${fighterInfo.value.fname}との対戦結果を勝利で更新しました。`;
    // 本日戦績をリフレッシュ
    emitter.emit('refresh-today-battle-data');
  }
  /** メモ更新 */
  const formUpdateMemo = async () => {
    if (!fighterInfo.value) return;
    await updateFighterMemo(useid, fighterInfo.value.fid, fighterMemo.value);
    message.value = `${fighterInfo.value.fname}のメモを更新しました。`;
  }
  // 返却
  return {
    nickname,
    fighterInfo,
    fighterMemo,
    message,
    formSearch,
    formUpdateResult,
    formUpdateMemo
  };
}
