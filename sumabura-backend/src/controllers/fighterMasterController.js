import * as service from '../services/fighterMasterService.js';

/** ファイターリストを取得 */
export async function handleGetFighterList(req, res) {
  try {
    const data = await service.fetchFighterList();
    if (!data) return res.status(404).json({ message: 'No data found' });
    res.json(data);
  } catch (error) {
    console.error("handleGetFighterList error:", error);
    res.status(500).json({ error: error.message });
  }
}

/** ファイター情報を取得 */
export async function handleGetFighterInfo(req, res) {
  const { nickname } = req.params;
  try {
    const data = await service.fetchFighterInfoByNickname(nickname);
    if (!data) return res.status(404).json({ message: 'Fighter not found' });
    res.json(data);
  } catch (error) {
    console.error("handleGetFighterInfo error:", error);
    res.status(500).json({ error: error.message });
  }
}

/** 相手の情報を取得（useid + nickname） */
export async function handleGetEnemyInfo(req, res) {
  const { useid, nickname } = req.params;
  try {
    const data = await service.fetchEnemyInfo(useid, nickname);
    if (!data) return res.status(404).json({ message: 'Enemy not found' });
    res.json(data);
  } catch (error) {
    console.error("handleGetEnemyInfo error:", error);
    res.status(500).json({ error: error.message });
  }
}

/** 相手リストを取得（useid） */
export async function handleGetEnemyList(req, res) {
  const { useid } = req.params;
  try {
    const data = await service.fetchEnemyList(useid);
    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No enemy found' });
    }
    res.json(data);
  } catch (error) {
    console.error("handleGetEnemyList error:", error);
    res.status(500).json({ error: error.message });
  }
}

/** 使用ファイター追加 */
export async function handleInsertFighter(req, res) {
  try {
    const { useid } = req.body;

    if (!useid) {
      // parameter error
      return res.status(400).json({ error: 'useidの指定がありません' });
    }

    await service.insertFighter(useid);
    
    res.status(200).json({ message: '使用ファイターを追加しました' });
  } catch (error) {
    console.error("handleInsertFighter error:", error);
    res.status(500).json({ error: error.message });
  }
}

/** 使用ファイター削除 */
export async function handleDeleteFighter(req, res) {
  try {
    const { useid } = req.body;

    if (!useid) {
      // parameter error
      return res.status(400).json({ error: 'useidの指定がありません' });
    }

    await service.deleteFighter(useid);

    res.status(200).json({ message: '使用ファイターを削除しました' });
  } catch (error) {
    console.error("handleDeleteFighter error:", error);
    res.status(500).json({ error: error.message });
  }
}
