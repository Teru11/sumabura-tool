import { ref, onMounted } from 'vue';
import { getWinLossTable, getFighterInfoList } from '@/assets/js/request.js';

export function useBattleHistory(emit) {
  const useid = ref('');
  const nickname = ref('');
  const winlossTable = ref([]);
  const fighterTable = ref([]);
  /** 初期化 */
  const initialize = async () => {
    useid.value = '';
    nickname.value = '';
    winlossTable.value = [];
    fighterTable.value = await getFighterInfoList();
  }
  /** 略称検索・解除 */
  const search = async (event) => {
    if (!nickname.value) return;
    const action = event.submitter.name;
    if (action === 'search') {
      winlossTable.value = await getWinLossTable(nickname.value);
      if ( winlossTable.value.length > 0 ) {
        useid.value = winlossTable.value[0].useid;
        fighterTable.value = await getFighterInfoList(useid.value);
      }
    } else if (action === 'cancel') {
      await initialize();
    }
  }
  // 初期処理
  onMounted(() => initialize());
  // 返却
  return {
    useid,
    nickname,
    winlossTable,
    fighterTable,
    search
  };
}
