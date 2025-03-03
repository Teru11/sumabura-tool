import express from 'express';
import { handleGetAllFighters } from '../controllers/fighterMasterController'
import { handleGetUsedFighters } from '../controllers/usedFightersManagerController'
import { handleGetWinLossFighter } from '../controllers/winLossManagerController'

const router = express.Router();

// ファイターマスタ関連のエンドポイント
router.get('/getAllFighters', handleGetAllFighters);

// プレイヤー管理関連のエンドポイント
router.get('/getUsedFighters', handleGetUsedFighters);

// 勝率関連関連のエンドポイント
router.get('/getWinLossFighter', handleGetWinLossFighter);

export default router;