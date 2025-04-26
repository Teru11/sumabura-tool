import withTransaction from '../utils/dbTransaction.js';
import { modifyCurrentRate } from '../repositories/usedFightersRepo.js';
import { modifySaveRate } from '../repositories/historyRateRepo.js';
import { modifyMemo, modifyWinLossResult } from '../repositories/winLossRepo.js';
import { createHistoryMatch } from '../repositories/historyMatchRepo.js';
import { modifyNickname } from '../repositories/fighterMasterRepo.js';

/** 現在レートを更新 */
export async function updateCurrentRate(useid, current_rate) {
  await withTransaction(async (client) => {
    await modifyCurrentRate(client, useid, current_rate);
  });
}

/** レートを保存 */
export async function saveRate(useid) {
  await withTransaction(async (client) => {
    await modifySaveRate(client, useid);
  });
}

/** メモを更新 */
export async function updateMemo(useid, fid, memo) {
  await withTransaction(async (client) => {
    await modifyMemo(client, useid, fid, memo);
  });
}

/** 勝敗を更新 */
export async function updateWinLossResult(useid, fid, result) {
  await withTransaction(async (client) => {
    // 勝敗を更新
    await modifyWinLossResult(client, useid, fid, result);
    // マッチング履歴を追加
    await createHistoryMatch(client, useid, fid, result);
  });
}

/** 略称名を変更 */
export async function updateNickname(fid, nickname) {
  await withTransaction(async (client) => {
    await modifyNickname(client, fid, nickname);
  });
}