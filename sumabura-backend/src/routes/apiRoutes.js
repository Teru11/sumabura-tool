import express from 'express';
import {
  handleGetFighterList,
  handleGetFighterInfo,
  handleGetEnemyInfo,
  handleGetEnemyList,
  handleInsertFighter,
  handleDeleteFighter,
} from '../controllers/fighterManageController.js';
import {
  handleGetWinLossTable,
} from '../controllers/winLossTableController.js';
import {
  handleGetTodayBattleHistory,
  handleGetMatchHistory,
} from '../controllers/historyController.js';
import {
  handleUpdateCurrentRate,
  handleSaveRate,
  handleUpdateMemo,
  handleUpdateWinLossResult,
  handleUpdateNickname,
} from '../controllers/updateController.js';

const router = express.Router();

// 取得
router.get('/fighter/list', handleGetFighterList);                                // ファイターリスト取得
router.get('/fighter/info/:nickname', handleGetFighterInfo);                      // ファイター情報取得
router.get('/fighter/enemy/:useid/:nickname', handleGetEnemyInfo);               // 相手情報取得
router.get('/fighter/enemy/list/:useid', handleGetEnemyList);                    // 相手リスト取得
router.get('/winloss/table/:nickname', handleGetWinLossTable);                   // 勝率表取得
router.get('/history/battle/today/:useid', handleGetTodayBattleHistory);         // 本日の対戦記録
router.get('/history/match/:useid', handleGetMatchHistory);                      // 対戦記録

// 更新
router.post('/update/current/rate', handleUpdateCurrentRate);    // 現在レート更新
router.post('/update/save/rate', handleSaveRate);                // レート保存
router.post('/update/memo', handleUpdateMemo);                   // メモ更新
router.post('/update/winloss', handleUpdateWinLossResult);       // 勝敗更新
router.post('/update/nickname', handleUpdateNickname);           // 略称名更新

// 追加・削除
router.post('/insert/fighter', handleInsertFighter);             // 使用ファイター追加
router.post('/delete/fighter', handleDeleteFighter);             // 使用ファイター削除

export default router;
