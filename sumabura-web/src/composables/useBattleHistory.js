import { ref, onMounted } from 'vue';
import { getWinLossTable, getEnemyFighterList } from '@/assets/js/request.js';

export function useBattleHistory() {
  /** model */
  const useid = ref('');
  const nickname = ref('');
  const winlossTable = ref([]);
  const fighterTable = ref([]);
  /** 初期化 */
  const initialize = async () => {
    useid.value = '';
    nickname.value = '';
    winlossTable.value = [];
    // 戦績表取得API連携
    fighterTable.value = await getEnemyFighterList('');
  }
  /** [event]略称検索・解除 */
  const formSearch = async (event) => {
    if (!nickname.value) return;
    const action = event.submitter.name;
    if (action === 'search') {
      // 勝率表取得API連携（使用キャラ選択）
      winlossTable.value = await getWinLossTable(nickname.value);
      if (winlossTable.value.length > 0) {
        useid.value = winlossTable.value[0].useid;
        // 戦績表取得API連携
        fighterTable.value = await getEnemyFighterList(useid.value);
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
    formSearch
  };
}
