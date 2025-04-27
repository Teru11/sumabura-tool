import * as service from '../services/updateService.js';

/** 現在レートを更新 */
export async function handleUpdateCurrentRate(req, res) {
    try {
        const { useid, current_rate } = req.body;

        if (!useid || !current_rate) {
            // parameter error
            return res.status(400).json({ error: 'useidまたはcurrent_rateの指定がありません' });
        }

        await service.updateCurrentRate(useid, current_rate);

        res.status(200).json({ message: '現在レートを更新しました' });
    } catch (error) {
        console.error('handleUpdateCurrentRate error:', error);
        res.status(500).json({ error: error.message });
    }
}

/** レートを保存 */
export async function handleSaveRate(req, res) {
    try {
        const { useid } = req.body;

        if (!useid) {
            // parameter error
            return res.status(400).json({ error: 'useidの指定がありません' });
        }

        await service.saveRate(useid);

        res.status(200).json({ message: 'レートを保存しました' });
    } catch (error) {
        console.error('handleSaveRate error:', error);
        res.status(500).json({ error: error.message });
    }
}

/** メモを更新 */
export async function handleUpdateMemo(req, res) {
    try {
        const { useid, fid, memo } = req.body;

        if (!useid || !fid) {
            // parameter error
            return res.status(400).json({ error: 'useidまたはfidの指定がありません' });
        }

        await service.updateMemo(useid, fid, memo);

        res.status(200).json({ message: 'メモを更新しました' });
    } catch (error) {
        console.error('handleUpdateMemo error:', error);
        res.status(500).json({ error: error.message });
    }
}

/** 勝敗を更新 */
export async function handleUpdateWinLossResult(req, res) {
    try {
        const { useid, fid, result } = req.body;

        if (!useid || !fid) {
            // parameter error
            return res.status(400).json({ error: 'useidまたはfidの指定がありません' });
        }

        await service.updateWinLossResult(useid, fid, result);

        res.status(200).json({ message: '勝敗を更新しました' });
    } catch (error) {
        console.error('handleUpdateWinLoss error:', error);
        res.status(500).json({ error: error.message });
    }
}

/** 略称名を変更 */
export async function handleUpdateNickname(req, res) {
    try {
        const { fid, nickname } = req.body;


        if (!fid || !nickname) {
            // parameter error
            return res.status(400).json({ error: 'fidまたはnicknameの指定がありません' });
        }

        await service.updateNickname(fid, nickname);

        res.status(200).json({ message: '略称名を変更しました' });
    } catch (error) {
        console.error('handleUpdateNickname error:', error);
        res.status(500).json({ error: error.message });
    }
}