import { ref, onMounted, onBeforeUnmount } from 'vue';
import { getTodayBattleHistory } from '@/assets/js/request.js';
import { emitter } from '@/assets/js/eventBus.js';

export function useSideRight() {
  /** model */
  const win_cnt = ref(0);
  const loss_cnt = ref(0);
  const todayBattleHistoryTable = ref([]);
  /** 初期化 */
  const initialize = async () => {
    const resultTable = await getTodayBattleHistory();
    const reversed = resultTable.slice().reverse(); // 新しい順で処理
    const tempList = []; // 最終 push 用
    let tempWinCnt = 0;
    let tempLossCnt = 0;

    let streakCount = 0;
    let streakType = ''; // 'win' or 'loss'
    for (let i = 0; i < reversed.length; i++) {
      const item = reversed[i];

      // 連勝・連敗判定（新→古の順で連勝数を数える）
      if (item.result === streakType) {
        streakCount++;
      } else {
        streakType = item.result;
        streakCount = 1;
      }

      if (item.result === 'win') {
        tempWinCnt++;
      } else {
        tempLossCnt++;
      }

      tempList.push({
        ...item,
        resultClass: streakType === 'win' ? 'win' : 'loss',
        streakStr: `${streakCount}連${streakType === 'win' ? '勝' : '敗'}`
      });
    }

    // 勝敗結果反映
    win_cnt.value = tempWinCnt;
    loss_cnt.value = tempLossCnt;
    // 最終結果を元の表示順（古い順）に戻して反映
    todayBattleHistoryTable.value = tempList.reverse();
  };
  // 初期処理（マウント時に1回実行）
  onMounted(() => initialize());
  // 勝敗結果更新時にEvent発火 → 表示を更新
  onMounted(() => {
    emitter.on('refresh-today-battle-data', initialize);
  });
  // コンポーネントが破棄される時にイベントリスナを解除
  onBeforeUnmount(() => {
    emitter.off('refresh-today-battle-data', initialize);
  });
  // 返却
  return {
    win_cnt,
    loss_cnt,
    todayBattleHistoryTable
  };
}