import { get, post } from "./axios.js";

// Mock
import fighterListMock from '../mock/fighterListMock.json';
import fighterInfoMock from '../mock/fighterInfoMock.json';
import enemyFighterInfoMock from '../mock/enemyFighterInfoMock.json';
import enemyFighterListMock from '../mock/enemyFighterListMock.json';
import winLossTableMock from '../mock/winLossTableMock.json';
import winLossSelectTableMock from '../mock/winLossSelectTableMock.json';
import todayBattleHistoryMock from '../mock/todayBattleHistoryMock.json';
import matchHistoryMock from '../mock/matchHistoryMock.json';
import matchSelectHistoryMock from '../mock/matchSelectHistoryMock.json';

/***************************** 取得 *****************************/
/** ファイターリストを取得 */
export async function getFighterList() {
  // Mock
  if (__USE_MOCK__) return fighterListMock;
  // API連携
  return await get('fighter/list');
}
/** ファイター情報を取得 */
export async function getFighterInfo(nickname) {
  // Mock
  if (__USE_MOCK__) return fighterInfoMock;
  // API連携
  return await get(`fighter/info/${nickname}`);
}
/** 相手情報を取得 */
export async function getEnemyFighterInfo(useid, nickname) {
  // Mock
  if (__USE_MOCK__) return enemyFighterInfoMock;
  // API連携
  return await get(`fighter/enemy/info/${useid}/${nickname}`);
}
/** 相手情報のリストを取得 */
export async function getEnemyFighterList(useid) {
  // Mock
  if (__USE_MOCK__) return enemyFighterListMock;
  // API連携
  const data = await get(`fighter/enemy/list/${useid}`);
  return data || [];
}
/** 勝率表を取得 */
export async function getWinLossTable(nickname) {
  // Mock
  if (__USE_MOCK__ && !nickname) return winLossTableMock;      // 使用キャラ選択前
  if (__USE_MOCK__ && nickname) return winLossSelectTableMock; // 使用キャラ選択後
  // API連携
  return await get(`winloss/table/${nickname}`);
}
/** 本日の対戦記録を取得 */
export async function getTodayBattleHistory() {
  // Mock
  if (__USE_MOCK__) { 
    // 乱数で表示数変更
    const randomCount = Math.floor(Math.random() * 11); // 1〜11件
    const shuffled = [...todayBattleHistoryMock].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
    // return todayBattleHistoryMock;
  }
  // API連携
  const data = await get(`history/battle/today`);
  return data || [];
}
/** 対戦記録を取得 */
export async function getMatchHistory(useid) {
  // Mock
  if (__USE_MOCK__ && !useid) return matchHistoryMock;      // 使用キャラ選択前
  if (__USE_MOCK__ && useid) return matchSelectHistoryMock; // 使用キャラ選択後
  // API連携
  const data = await get(`history/match/${useid}`);
  return data || [];
}

/***************************** 更新 *****************************/
/** 現在レートを更新 */
export async function updateCurrentRate(useid, current_rate) {
  // Mock
  if (__USE_MOCK__) return;
  
  const req = { useid: useid, current_rate: current_rate };
  return await post('update/current/rate', req);
}
/** レートを保存 */
export async function updateSaveRate(useid) {
  // Mock
  if (__USE_MOCK__) return;

  const req = { useid: useid };
  return await post('update/save/rate', req);
}
/** 相手情報のメモを更新 */
export async function updateFighterMemo(useid, fid, memo) {
  // Mock
  if (__USE_MOCK__) return;

  const req = { useid: useid, fid: fid, memo: memo };
  return await post('update/memo', req);
}
/** 相手情報の勝敗を更新 */
export async function updateFighterWinLoss(useid, fid, result) {
  // Mock
  if (__USE_MOCK__) return;

  const req = { useid: useid, fid: fid, result: result };
  return await post('update/winloss', req);
}
/** 略称名の変更 */
export async function updateNickName(fid, nickname) {
  // Mock
  if (__USE_MOCK__) return;

  const req = { fid: fid, nickname: nickname };
  return await post('update/nickname', req);
}

/***************************** 追加 *****************************/
/** 使用ファイターの追加 */
export async function insertUseFighter(useid) {
  // Mock
  if (__USE_MOCK__) return;

  const req = { useid: useid };
  return await post('insert/fighter', req);
}

/***************************** 削除 *****************************/
/** 使用ファイターの削除 */
export async function deleteUseFighter(useid) {
  // Mock
  if (__USE_MOCK__) return;

  const req = { useid: useid };
  return await post('delete/fighter', req);
}