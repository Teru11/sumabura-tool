import { ref, onMounted, onBeforeUnmount } from 'vue';
import { getFighterList } from '@/assets/js/request.js';
import { emitter } from '@/assets/js/eventBus.js';

export function useSideLeft() {
  const fighterListTable = ref([]);
  /** 初期化 */
  const initialize = async () => {
    fighterListTable.value = await getFighterList();
  }
  // 初期処理（マウント時に1回実行）
  onMounted(() => initialize());
  // 略称名変更時にEvent発火 → 表示を更新
  onMounted(() => {
    emitter.on('refresh-nickname-list', initialize);
  });
  // コンポーネントが破棄される時にイベントリスナを解除
  onBeforeUnmount(() => {
    emitter.off('refresh-nickname-list', initialize);
  });
  // 返却
  return {
    fighterListTable
  };
}