import { selectTodayBattleHistory, selectAllMatchHistory } from '../repositories/historyMatchRepo.js';

/** 本日の対戦記録を取得 */
export async function fetchTodayBattleHistory(useid) {
  return await selectTodayBattleHistory(useid);
}

/** 全対戦記録を取得 */
export async function fetchAllMatchHistory(useid) {
  return await selectAllMatchHistory(useid);
}