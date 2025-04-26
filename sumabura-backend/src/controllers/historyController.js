import * as service from '../services/historyService.js';

/** 本日の対戦記録を取得 */
export async function handleGetTodayBattleHistory(req, res) {
    const { useid } = req.params;
    try {
        const data = await service.fetchTodayBattleHistory(useid);
        res.json(data);
    } catch (error) {
        console.error('handleGetTodayBattleHistory error:', error);
        res.status(500).json({ error: error.message });
    }
}

/** 全対戦記録を取得 */
export async function handleGetMatchHistory(req, res) {
    const { useid } = req.params;
    try {
        const data = await service.fetchAllMatchHistory(useid);
        res.json(data);
    } catch (error) {
        console.error('handleGetMatchHistory error:', error);
        res.status(500).json({ error: error.message });
    }
}
