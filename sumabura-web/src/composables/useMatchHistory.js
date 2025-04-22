import { ref, watch } from 'vue';
import { getMatchHistory } from '@/assets/js/request.js';

export function useMatchHistory(useidRef) {
  /** model */
  const matchHistoryTable = ref([]);
  /** 初期化 */
  const initialize = async (useid) => {
    const resultTable = await getMatchHistory(useid);
    const reversed = resultTable.slice().reverse(); // 新しい順で処理
    const tempList = []; // 最終 push 用

    let streakCount = 0;
    let streakType = ''; // 'win' or 'loss'
    let beforeUseName = '';
    for (let i = 0; i < reversed.length; i++) {
      const item = reversed[i];
      const prev = reversed[i - 1];

      // 日付変更線フラグを挿入（新→古の順でチェック）
      if (i > 0 && item.history_date.split(' ')[0] !== prev.history_date.split(' ')[0]) {
        tempList.push({ type: 'dateline', key: `dateline-${i}` });
        streakCount = 0;  // 連勝カウントを初期化
      }

      // 連勝・連敗判定（新→古の順で連勝数を数える）
      if (item.result === streakType && item.use_name === beforeUseName) {
        streakCount++;
      } else {
        streakType = item.result;
        streakCount = 1;
        beforeUseName = item.use_name;  // キャラが異なったらカウントも初期化
      }

      tempList.push({
        ...item,
        type: 'record',
        resultClass: streakType === 'win' ? 'win' : 'loss',
        resultStr: streakType === 'win' ? '勝利' : '敗北',
        streakStr: `${streakCount}連${streakType === 'win' ? '勝' : '敗'}`,
        key: `record-${i}`
      });
    }

    // 最終結果を元の表示順（古い順）に戻して反映
    matchHistoryTable.value = tempList.reverse();
  }
  // useidの変更を監視してinitializeを呼び出す
  watch(useidRef, (useid) => {
    initialize(useid);
  }, { immediate: true });
  // 返却
  return {
    matchHistoryTable
  };
}
