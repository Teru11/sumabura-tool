import { getUsedFighters } from '../repositories/usedFightersManagerRepository.js';

/** 勝率表取得 */
export async function fetchUsedFighters(useid) {
  return await getUsedFighters(useid);
}