import withTransaction from '../db/dbTransaction.js';
import { 
  selectFighterList, 
  selectFighterInfoByNickname, 
  selectEnemyInfo, 
  selectEnemyList, 
  selectFighterId
} from '../repositories/fighterMasterRepository.js';
import { 
  createFighter,
  removeFighter
} from '../repositories/usedFightersRepo.js';
import {
  createAllFighter
} from '../repositories/winLossRepo.js';

/** ファイターリストを取得 */
export async function fetchFighterList() {
  return await selectFighterList();
}

/** ファイター情報を取得 */
export async function fetchFighterInfoByNickname(nickname) {
  return await selectFighterInfoByNickname(nickname);
}

/** 相手の情報を取得（useid + nickname） */
export async function fetchEnemyInfo(useid, nickname) {
  const fid = await selectFighterId(nickname);
  return await selectEnemyInfo(useid, fid);
}

/** 相手リストを取得（useid） */
export async function fetchEnemyList(useid) {
  return await selectEnemyList(useid);
}

/** 使用ファイター追加 */
export async function insertFighter(useid) {
  await withTransaction(async (client) => {
    await createFighter(client, useid);
    await createAllFighter(client, useid);
  });
}

/** 使用ファイター削除 */
export async function deleteFighter(useid) {
  await withTransaction(async (client) => {
    await removeFighter(client, useid);
  });
}