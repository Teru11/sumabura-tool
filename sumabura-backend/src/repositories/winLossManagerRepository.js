import pool from '../utils/db.js';
import WinLoss from '../models/winLossManagerModel.js';

/** 相手情報取得 */
export async function getWinLossFighter(useid, fid) {
    const sql = `SELECT
                    wm.win_cnt, wm.loss_cnt, wm.memo
                FROM
                    ${pool.options.schema}.win_loss_manager AS wm 
                WHERE
                    wm.useid = $1
                    AND wm.fid = $2;
                `;

    const res = await pool.query(sql, [useid, fid]);

    if (res.rows.length === 0) {
        return null;
    }

    const { win_cnt, loss_cnt, memo } = res.rows[0];
    return new WinLoss(win_cnt, loss_cnt, memo);
}