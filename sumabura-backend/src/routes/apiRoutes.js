import express from 'express';
import { handleGetAllFighters } from '../controllers/fighterMasterController.js'
import { handleGetUsedFighters } from '../controllers/usedFightersManagerController.js'
import { handleGetWinLossFighter } from '../controllers/winLossManagerController.js'

const router = express.Router();

// ファイターマスタ関連のエンドポイント
router.get('/getAllFighters', handleGetAllFighters);

// プレイヤー管理関連のエンドポイント
router.get('/getUsedFighters', handleGetUsedFighters);

// 勝率関連関連のエンドポイント
router.get('/getWinLossFighter', handleGetWinLossFighter);

export default router;