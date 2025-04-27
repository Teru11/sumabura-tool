import pool from '../utils/db.js';

/** メモを更新 */
export async function modifyMemo(client, useid, fid, memo) {
    const sql = `
                update ${pool.options.schema}.win_loss_manager 
                set 
                    memo = '${memo}' 
                where 
                    useid = ${useid} 
                    and fid = ${fid};
                `;
    await client.query(sql);
}

/** 勝敗を更新 */
export async function modifyWinLossResult(client, useid, fid, result) {
    let updateParm;
    if (result === 'win') {
        updateParm = 'win_cnt = win_cnt + 1 ';
    } else {
        updateParm = 'loss_cnt = loss_cnt + 1 ';
    }

    const sql = `
                update ${pool.options.schema}.win_loss_manager 
                set 
                    ${updateParm}
                where 
                    useid = ${useid} 
                    and fid = ${fid};
                `;
    await client.query(sql);
}

/** 使用ファイター追加 */
export async function createAllFighter(client, useid) {
    const sql = `
                insert 
                into ${pool.options.schema}.win_loss_manager(useid, fid) 
                select ${useid}, id from ${pool.options.schema}.fighter_master;
                `;
    await client.query(sql);
}