import * as service from '../services/winLossTableService.js';

/** 勝率表を取得 */
export async function handleGetWinLossTable(req, res) {
    try {
        const { nickname } = req.params;
        const data = await service.fetchWinLossTable(nickname);

        if (!data) {
            return res.status(404).json({ message: 'No data found for the given nickname' });
        }

        res.json(data);
    } catch (error) {
        console.error('handleGetWinLossTable error:', error);
        res.status(500).json({ error: error.message });
    }
}