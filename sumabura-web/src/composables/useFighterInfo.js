import { ref } from 'vue';
import { getFighterInfo, updateFighterWinLoss, updateFighterMemo } from '@/assets/js/request.js';
import { emitter } from '@/assets/js/eventBus.js';

export function useFighterInfo(useid) {
  /** model */
  const nickname = ref('');
  const fighterInfo = ref(null);
  const message = ref('');
  const fighterMemo = ref('');
  /** 略称検索 */
  const search = async (event) => {
    if (!nickname.value) return;
    const action = event.submitter.name;
    if (action === 'search') {
      fighterInfo.value = await getFighterInfo(useid, nickname.value);
      if (fighterInfo.value){
        fighterMemo.value = fighterInfo.value.memo; 
      }
    }
  }
  /** 結果更新 */
  const updateResult = async (event) => {
    if (!fighterInfo.value) return;
    const action = event.submitter.name;
    if (action === 'win') {
      await updateFighterWinLoss(useid, fighterInfo.value.fid, 1);
    } else if (action === 'loss') {
      await updateFighterWinLoss(useid, fighterInfo.value.fid, -1);
    }
    // 本日戦績をリフレッシュ
    emitter.emit('refresh-today-battle-data');
    message.value = `${fighterInfo.value.fname}との対戦結果を勝利で更新しました。`;
  }
  /** メモ更新 */
  const updateMemo = async (event) => {
    if (!fighterInfo.value) return;
    await updateFighterMemo(useid, fighterInfo.value.fid, fighterMemo.value);
    message.value = `${fighterInfo.value.fname}のメモを更新しました。`;
  }
  // 返却
  return {
    nickname,
    fighterInfo,
    search,
    updateResult,
    updateMemo,
    message,
    fighterMemo
  };
}
