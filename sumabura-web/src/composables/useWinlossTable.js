import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { getWinLossTable, updateCurrentRate, updateSaveRate } from '@/assets/js/request.js';
import { emitter } from '@/assets/js/eventBus.js';

export function useWinlossTable(emit) {
  /** model */
  const useid = ref('');
  const nickname = ref('');
  const winlossTable = ref([]);
  const updateRate = ref('');
  // ルートによるフラグ設定 
  const route = useRoute();
  const isMainTopRoute = computed(() => route.name === 'main_top');
  /** 初期化 */
  const initialize = async () => {
    useid.value = '';
    nickname.value = '';
    updateRate.value = '';
    emit('selected-useid', useid.value);
    winlossTable.value = await getWinLossTable();
  }
  /** [event]略称検索・解除 */
  const formSearch = async (event) => {
    if (!nickname.value) return;
    const action = event.submitter.name;
    if (action === 'search') {
      winlossTable.value = await getWinLossTable(nickname.value);
      if (winlossTable.value.length === 1) {
        useid.value = winlossTable.value[0].useid;
        updateRate.value = winlossTable.value[0].current_rate;
        emit('selected-useid', useid.value);
      }
    } else if (action === 'cancel') {
      await initialize();
    }
  }
  /** [event]レート更新・保存 */
  const formRateSaveUpdate = async (event) => {
    if (!useid.value) return;
    const action = event.submitter.name;
    let result = '';
    if (action === 'update') {
      result = await updateCurrentRate(useid.value, updateRate.value);
    } else if (action === 'save') {
      result = await updateSaveRate(useid.value);
    }
    if (result) {
      winlossTable.value = await gethWinLossTable(nickname.value);
    }
  }
  /** レート差分 */
  const rateDeff = (current_rate, history_rate1) => {
    if (!current_rate || !history_rate1) return { value: '', class: '' };
    const diff = current_rate - history_rate1;
    return {
      value: diff === 0 ? '' : (diff > 0 ? '+' + diff : '-' + Math.abs(diff)),
      class: diff === 0 ? '' : (diff > 0 ? 'win' : 'loss')
    };
  };
  const refreshWinLossTable = () => formSearch({ submitter: { name: 'search' } });
  // 初期処理
  onMounted(() => {
    initialize(); // 初期化
    emitter.on('refresh-winloss-table', initialize); // 使用キャラ追加・削除時
    emitter.on('refresh-winloss-table-selected', refreshWinLossTable); // 勝敗更新時
  });
  // コンポーネントが破棄される時にイベントリスナを解除
  onBeforeUnmount(() => {
    emitter.off('refresh-winloss-table', initialize);
    emitter.off('refresh-winloss-table-selected', refreshWinLossTable);
  });
  // 返却
  return {
    useid,
    nickname,
    winlossTable,
    updateRate,
    isMainTopRoute,
    formSearch,
    formRateSaveUpdate,
    rateDeff
  };
}
