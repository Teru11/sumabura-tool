import { get, post } from "./axios.js";

// Mock
import fighterListMock from '../mock/fighterList.json';
import fighterInfoMock from '../mock/fighterInfo.json';
import fighterInfoListMock from '../mock/fighterInfoList.json';
import winLossTableMock from '../mock/winLossTable.json';
import winLossSelectTableMock from '../mock/winLossSelectTable.json';
import todayBattleHistoryMock from '../mock/todayBattleHistory.json';
import matchHistoryMock from '../mock/matchHistory.json';
import matchSelectHistoryMock from '../mock/matchSelectHistory.json';

/***************************** 取得 *****************************/
/** ファイターリストを取得 */
export async function getFighterList() {
  // Mock
  if (__USE_MOCK__) return fighterListMock;
  // API連携
  const data = await get('fighter/list');
  return data || [];
}
/** 相手情報を取得 */
export async function getFighterInfo(useid, nickname) {
  // Mock
  if (__USE_MOCK__) return fighterInfoMock;
  // API連携
  return await get(`info/get/${useid}/${nickname}`);
}
/** 相手情報のリストを取得 */
export async function getFighterInfoList(useid) {
  // Mock
  if (__USE_MOCK__) return fighterInfoListMock;
  // API連携
  const data = await get(`info/list/${useid}`);
  return data || [];
}
/** 勝率表を取得 */
export async function getWinLossTable(nickname) {
  // Mock
  if (__USE_MOCK__ && !nickname) return winLossTableMock;      // 使用キャラ選択前
  if (__USE_MOCK__ && nickname) return winLossSelectTableMock; // 使用キャラ選択後

  // API連携
  const data = await get(`winloss/table/${nickname}`);
  return data || [];
}
/** 本日の対戦記録を取得 */
export async function getTodayBattleHistory(useid) {
  // Mock
  if (__USE_MOCK__) { 
    // 乱数で変更
    const randomCount = Math.floor(Math.random() * 11); // 1〜11件
    const shuffled = [...todayBattleHistoryMock].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
    // return todayBattleHistoryMock;
  }
  // API連携
  const data = await get(`history/battle/today/${useid}`);
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
  await post('update/current/rate', req);
}
/** レートを保存 */
export async function updateSaveRate(useid) {
  // Mock
  if (__USE_MOCK__) return;

  const req = { useid: useid };
  await post('update/save/rate', req);
}
/** 相手情報のメモを更新 */
export async function updateFighterMemo(useid, fid, memo) {
  // Mock
  if (__USE_MOCK__) return;

  const req = { useid: useid, fid: fid, memo: memo };
  await post('update/memo', req);
}
/** 相手情報の勝敗を更新 */
export async function updateFighterWinLoss(useid, fid, result) {
  // Mock
  if (__USE_MOCK__) return;

  const req = { useid: useid, fid: fid, result: result };
  await post('update/winloss', req);
}
/** 略称名の変更 */
export async function updateNickName(id, nickname) {
  // Mock
  if (__USE_MOCK__) return;

  const req = { id: id, nickname: nickname };
  await post('update/nickname', req);
}

/***************************** 追加 *****************************/
/** 使用ファイターの追加 */
export async function insertFighterInfo(useid) {
  // Mock
  if (__USE_MOCK__) return;

  const req = { useid: useid };
  await post('insert/fighter/info', req);
}

/***************************** 削除 *****************************/
/** 使用ファイターの削除 */
export async function deleteFighterInfo(useid) {
  // Mock
  if (__USE_MOCK__) return;

  const req = { useid: useid };
  await post('delete/fighter/info', req);
}