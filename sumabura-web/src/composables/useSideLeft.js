import { ref, onMounted, onBeforeUnmount } from 'vue';
import { getFighterList } from '@/assets/js/request.js';
import { emitter } from '@/assets/js/eventBus.js';

export function useSideLeft() {
  const fighterListTable = ref([]);
  /** 初期化 */
  const initialize = async () => {
    fighterListTable.value = await getFighterList();
  }
  // 初期処理
  onMounted(() => {
    initialize(); // 初期化
    emitter.on('refresh-nickname-list', initialize); // 略称名変更時
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