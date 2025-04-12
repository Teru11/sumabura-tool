import { getAllFighters } from '../repositories/fighterMasterRepository.js';

/** ファイター全リストを取得 */
export async function fetchAllFighters() {
  return await getAllFighters();
}