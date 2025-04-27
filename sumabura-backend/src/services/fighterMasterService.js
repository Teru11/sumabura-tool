import withTransaction from '../utils/dbTransaction.js';
import {
  selectFighterList,
  selectFighterInfoByNickname,
  selectEnemyInfo,
  selectFighterId,
  selectEnemyListByUseId,
  selectEnemyListByALL
} from '../repositories/fighterMasterRepo.js';
import {
  selectUsedFighter,
  modifyUsedFighter,
  createUsedFighter,
  removeUsedFighter
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
  if (useid) {
    return await selectEnemyListByUseId(useid);
  } else {
    return await selectEnemyListByALL();
  }
}

/** 使用ファイター追加 */
export async function insertFighter(useid) {
  await withTransaction(async (client) => {
    // データの存在チェック
    const result = await selectUsedFighter(useid);
    if ( result ) {
      // 再度、使用可能にする場合、更新する
      await modifyUsedFighter(client, useid);
    } else {
      // 追加
      await createUsedFighter(client, useid);
      await createAllFighter(client, useid);
    }
  });
}

/** 使用ファイター削除 */
export async function deleteFighter(useid) {
  await withTransaction(async (client) => {
    await removeUsedFighter(client, useid);
  });
}