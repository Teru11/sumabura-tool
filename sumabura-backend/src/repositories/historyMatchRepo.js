import pool from '../utils/db.js';

/** 本日の対戦記録を取得 */
export async function selectTodayBattleHistory() {
  const sql = `
              select 
                to_char(hm.history_match_date, 'YYYY-MM-DD HH24:MI') as history_date
                , hm.useid as useid
                , hm.fid as fid
                , hm.result as result 
              from 
                ${pool.options.schema}.history_match as hm 
              where
                  hm.history_match_date >= current_date 
                  and hm.history_match_date < current_date + interval '1 day' 
              order by 
                hm.history_match_date desc;
              `;
  const res = await pool.query(sql);
  if (res.rows.length === 0) {
    return null;
  }
  return res.rows;
}

/** 全対戦記録を取得（useid=nullの場合は全件取得）*/
export async function selectAllMatchHistory(useid) {
  let wheresql = '';
  if (useid) {
    wheresql = `where hm.useid = ${useid} `;
  }

  const sql = `
              select 
                to_char(hm.history_match_date, 'YYYY-MM-DD HH24:MI') as history_date
                , fm_useid.fname as use_name
                , fm_fid.fname as enemy_name
                , hm.result as result 
              from 
                ${pool.options.schema}.history_match hm 
                inner join ${pool.options.schema}.fighter_master fm_useid 
                  on fm_useid.id = hm.useid 
                inner join ${pool.options.schema}.fighter_master fm_fid 
                  on fm_fid.id = hm.fid 
              ${wheresql}
              order by 
                hm.history_match_date desc;
              `;
  const res = await pool.query(sql);
  if (res.rows.length === 0) {
    return null;
  }
  return res.rows;
}

/** マッチング履歴を追加 */
export async function createHistoryMatch(client, useid, fid, result) {
  const sql = `
              insert 
              into ${pool.options.schema}.history_match(history_match_date, useid, fid, result) 
              values (now(), ${useid}, ${fid}, '${result}');
              `;
  await client.query(sql);
}