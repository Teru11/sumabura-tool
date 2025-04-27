import pool from '../utils/db.js';

/** ファイターリストを取得 */
export async function selectFighterList() {
  const sql = `
              select
                fm.id as id
                , fm.fname as name
                , fm.nickname as nickname 
              from 
                ${pool.options.schema}.fighter_master as fm 
              order by 
                fm.id;
              `;
  const res = await pool.query(sql);
  if (res.rows.length === 0) {
    return [];
  }
  return res.rows;
}

/** ファイターIDを取得 */
export async function selectFighterId(nickname) {
  const sql = `
              select 
                fm.id as id 
              from 
                ${pool.options.schema}.fighter_master as fm 
              where 
                fm.nickname = '${nickname}';
              `;
  const res = await pool.query(sql);
  if (res.rows.length === 0) {
    return null;
  }
  return res.rows[0].id;
}

/** ファイター情報を取得 */
export async function selectFighterInfoByNickname(nickname) {
  const sql = `
              select 
                fm.id as fid
                , fm.fname as fname
                , fm.nickname as nickname
                , case when ufm.useid is null then '0' else '1' end as use_flg 
              from 
                ${pool.options.schema}.fighter_master as fm 
                left join ${pool.options.schema}.used_fighters_manager as ufm 
                  on ufm.useid = fm.id 
              where 
                fm.nickname = '${nickname}';
              `;
  const res = await pool.query(sql);
  if (res.rows.length === 0) {
    return null;
  }
  return res.rows;
}

/** 相手の情報を取得 */
export async function selectEnemyInfo(useid, fid) {
  const sql = `
              select 
                fm.id as fid
                , fm.fname as fname
                , wm.win_cnt as win_cnt
                , wm.loss_cnt as loss_cnt
                , en.encount as encount
                , wm.memo as memo 
              from 
                ${pool.options.schema}.win_loss_manager as wm 
                inner join ${pool.options.schema}.fighter_master as fm 
                  on fm.id = wm.fid 
                inner join (
                  select 
                    fid
                    , sum(win_cnt + loss_cnt) as encount 
                  from 
                    ${pool.options.schema}.win_loss_manager 
                  group by 
                    fid
                ) as en 
                  on en.fid = wm.fid 
              where
                wm.useid = ${useid} 
                and wm.fid = ${fid};
              `;
  const res = await pool.query(sql);
  if (res.rows.length === 0) {
    return null;
  }
  return res.rows[0];
}

/** 相手リストを取得（useid=nullの場合は全件取得） */
export async function selectEnemyList(useid) {
  let wheresql = '';
  if (useid) {
    wheresql = `where wm.useid = ${useid}`;
  }

  const sql = `
              select 
                wm.fid as fid
                , wm.win_cnt as win_cnt
                , wm.loss_cnt as loss_cnt
                , wm.memo as memo 
              from 
                ${pool.options.schema}.win_loss_manager as wm 
              ${wheresql};
              `;
  const res = await pool.query(sql);
  if (res.rows.length === 0) {
    return [];
  }
  return res.rows;
}

/** 略称名を変更 */
export async function modifyNickname(client, fid, nickname) {
  const sql = `
              update ${pool.options.schema}.fighter_master 
              set nickname = '${nickname}' 
              where id = ${fid};
              `;
  await client.query(sql);
}