import { ref, onMounted } from 'vue';
import { getFighterList } from '@/assets/js/request.js';

export function useSideLeft() {
  const fighterListTable = ref([]);
  /** 初期化 */
  const initialize = async () => {
    fighterListTable.value = await getFighterList();
  }
  // 初期処理
  onMounted(() => initialize());
  // 返却
  return {
    fighterListTable
  };
}