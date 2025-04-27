import express from 'express';
import {
  handleGetFighterList,
  handleGetFighterInfo,
  handleGetEnemyInfo,
  handleGetEnemyList,
  handleInsertFighter,
  handleDeleteFighter,
} from '../controllers/fighterMasterController.js';
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

/**************************** 取得 ****************************/
// ファイターリスト取得
router.get('/fighter/list', handleGetFighterList);
// ファイター情報取得                       
router.get('/fighter/info/:nickname', handleGetFighterInfo);
// 相手情報取得            
router.get('/fighter/enemy/info/:useid/:nickname', handleGetEnemyInfo);
// 相手リスト取得（nullの場合、指定がある場合）             
router.get('/fighter/enemy/list/', handleGetEnemyList);
router.get('/fighter/enemy/list/:useid', handleGetEnemyList);
// 勝率表取得（nullの場合、指定がある場合）      
router.get('/winloss/table/', handleGetWinLossTable);
router.get('/winloss/table/:nickname', handleGetWinLossTable);
// 本日の対戦記録
router.get('/history/battle/today', handleGetTodayBattleHistory);
// 対戦記録（nullの場合、指定がある場合）   
router.get('/history/match/', handleGetMatchHistory);
router.get('/history/match/:useid', handleGetMatchHistory);

/**************************** 更新 ****************************/
// 現在レート更新
router.post('/update/current/rate', handleUpdateCurrentRate);
// レート保存
router.post('/update/save/rate', handleSaveRate);
// メモ更新
router.post('/update/memo', handleUpdateMemo);
// 勝敗更新           
router.post('/update/winloss', handleUpdateWinLossResult);
// 略称名更新
router.post('/update/nickname', handleUpdateNickname);

/**************************** 追加・削除 ****************************/
// 使用ファイター追加
router.post('/insert/fighter', handleInsertFighter);
// 使用ファイター削除   
router.post('/delete/fighter', handleDeleteFighter);

export default router;
