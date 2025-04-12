import * as service from '../services/usedFightersManagerService.js';

/** 勝率表取得 */
export async function handleGetUsedFighters(req, res) {
    const { useid } = req.body;
    try {
        const data = await service.fetchUsedFighters(useid);
        if (!data) {
            return res.status(404).json({ message: 'No data found' });
        }
        res.json(data);
    } catch (error) {
        console.error("handleGetUsedFighters error:", error);
        res.status(500).json({ error: error.message });
    }
}