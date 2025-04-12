import * as service from '../services/winLossManagerService.js';

/** 相手情報取得 */
export async function handleGetWinLossFighter(req, res) {
    const { useid, fid } = req.query;

    try {
        const data = await service.fetchWinLossFighter(useid, fid);
        if (!data) {
            return res.status(404).json({ message: 'No data found' });
        }
        res.json(data);
    } catch (error) {
        console.error("handleGetWinLossFighter error:", error);
        res.status(500).json({ error: error.message });
    }
}