import * as service from '../services/updateService.js';

/** 現在レートを更新 */
export async function handleUpdateCurrentRate(req, res) {
    try {
        const { useid, current_rate } = req.body;
        await service.updateCurrentRate(useid, current_rate);
    } catch (error) {
        console.error('handleUpdateCurrentRate error:', error);
        res.status(500).json({ error: error.message });
    }
}

/** レートを保存 */
export async function handleSaveRate(req, res) {
    try {
        const { useid } = req.body;
        await service.saveRate(useid);
    } catch (error) {
        console.error('handleSaveRate error:', error);
        res.status(500).json({ error: error.message });
    }
}

/** メモを更新 */
export async function handleUpdateMemo(req, res) {
    try {
        const { useid, fid, memo } = req.body;
        await service.updateMemo(useid, fid, memo);
    } catch (error) {
        console.error('handleUpdateMemo error:', error);
        res.status(500).json({ error: error.message });
    }
}

/** 勝敗を更新 */
export async function handleUpdateWinLossResult(req, res) {
    try {
        const { useid, fid, result } = req.body;
        await service.updateWinLossResult(useid, fid, result);
    } catch (error) {
        console.error('handleUpdateWinLoss error:', error);
        res.status(500).json({ error: error.message });
    }
}

/** 略称名を変更 */
export async function handleUpdateNickname(req, res) {
    try {
        const { fid, nickname } = req.body;
        await service.updateNickname(fid, nickname);
    } catch (error) {
        console.error('handleUpdateNickname error:', error);
        res.status(500).json({ error: error.message });
    }
}