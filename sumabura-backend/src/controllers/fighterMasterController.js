import * as service from '../services/fighterMasterService.js';

/** ファイター全取得 */
export async function handleGetAllFighters(req, res) {
    try {
        const data = await service.fetchAllFighters();
        if (!data) {
            return res.status(404).json({ message: 'No data found' });
        }
        res.json(data);
    } catch (error) {
        console.error("handleGetAllFighters error:", error);
        res.status(500).json({ error: error.message });
    }
}