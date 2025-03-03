import { getAllFighters } from '../repositories/fighterMasterRepository';

/** ファイター全リストを取得 */
export async function fetchAllFighters() {
  return await getAllFighters();
}