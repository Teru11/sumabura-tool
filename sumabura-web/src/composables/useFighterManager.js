import { ref } from 'vue';
import { getFighterInfo, insertUseFighter, deleteUseFighter, updateNickName } from '@/assets/js/request.js';
import { emitter } from '@/assets/js/eventBus.js';

export function useFighterManager() {
  /** model */
  const fid = ref('');
  const nickname = ref('');
  const fighterInfo = ref(null);
  const updateNickname = ref('');
  const message = ref('');
  /** [event]略称検索 */
  const formSearch = async () => {
    if (!nickname.value) return;
    fighterInfo.value = await getFighterInfo(nickname.value);
    if (fighterInfo.value) {
      fid.value = fighterInfo.value.fid;
    }
  }
  /** [event]プレイヤー管理（追加・削除） */
  const formUpdateManager = async (event) => {
    if (!fid.value || !fighterInfo.value) return;
    const action = event.submitter.name;
    if (action === 'add') {
      // 使用キャラ追加API連携
      await insertUseFighter(fid.value);
      message.value = `${fighterInfo.value.fname}を使用キャラに追加しました。`;
    } else if (action === 'delete') {
      // 使用キャラ削除API連携
      await deleteUseFighter(fid.value);
      message.value = `${fighterInfo.value.fname}を使用キャラから削除しました。`;
    }
    // 勝率表をリフレッシュ
    emitter.emit('refresh-winloss-table');
  }
  /** [event]略称変更 */
  const formUpdateNickname = async () => {
    if (!fid.value || !updateNickname.value) return;
    // 略称変更API連携
    await updateNickName(fid.value, updateNickname.value);
    message.value = `${fighterInfo.value.fname}の略称を「${updateNickname.value}」変更しました。`;
    // 略称名リストをリフレッシュ
    emitter.emit('refresh-nickname-list');
  }
  // 返却
  return {
    fid,
    nickname,
    fighterInfo,
    updateNickname,
    message,
    formSearch,
    formUpdateManager,
    formUpdateNickname
  };
}
