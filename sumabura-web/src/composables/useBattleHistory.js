import { ref, onMounted } from 'vue';
import { getWinLossTable, getEnemyFighterList } from '@/assets/js/request.js';

export function useBattleHistory() {
  /** model */
  const useid = ref('');
  const nickname = ref('');
  const winlossTable = ref([]);
  const fighterTable = ref([]);
  const sortKey = ref('');  // ソートキー
  const sortOrder = ref(1); // ソート順
  /** 初期化 */
  const initialize = async () => {
    useid.value = '';
    nickname.value = '';
    sortKey.value = '';
    sortOrder.value = 1;
    winlossTable.value = [];
    // 戦績表取得API連携
    fighterTable.value = await getEnemyFighterList('');
  }
  /** [event]略称検索・解除 */
  const formSearch = async (event) => {
    if (!nickname.value) {
      await initialize(); // 初期化
      return;
    }
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
  /** ソート関数 */
  const sortBy = (key) => {
    if (sortKey.value === key) {
      // 同じカラムなら昇順⇔降順を切り替え
      sortOrder.value = -sortOrder.value;
    } else {
      // 新しいカラムを押したら昇順
      sortKey.value = key;
      sortOrder.value = 1; 
    }
    // fighterTableをソート
    fighterTable.value.sort((a, b) => {
      const aVal = Number(a[sortKey.value]);
      const bVal = Number(b[sortKey.value]);
      return (aVal - bVal) * sortOrder.value;
    });
  };
  // 初期処理
  onMounted(() => initialize());
  // 返却
  return {
    useid,
    nickname,
    sortBy,
    sortKey,
    sortOrder,
    winlossTable,
    fighterTable,
    formSearch
  };
}
