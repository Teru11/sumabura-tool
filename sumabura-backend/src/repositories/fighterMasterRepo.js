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
                , case when ufm.useid is null or ufm.del_flg = true then '0' else '1' end as use_flg 
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
  return res.rows[0];
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

/** 相手リストを取得（useid指定） */
export async function selectEnemyListByUseId(useid) {
  const sql = `
              select 
                  wm.fid as fid,
                  fm.fname as fname,
                  wm.win_cnt as win_cnt,
                  wm.loss_cnt as loss_cnt,
                  wm.win_cnt + wm.loss_cnt as total,
                  case 
                      when (wm.win_cnt + wm.loss_cnt) > 0 
                      then round(wm.win_cnt * 1.0 / (wm.win_cnt + wm.loss_cnt), 3) 
                      else 0 
                  end as win_rate,
                  wm.memo as memo 
              from 
                  ${pool.options.schema}.win_loss_manager as wm 
                  inner join ${pool.options.schema}.fighter_master as fm 
                      on fm.id = wm.fid 
              where 
                  wm.useid = ${useid} 
              order by 
                  wm.fid;
              `;
  const res = await pool.query(sql);
  if (res.rows.length === 0) {
    return [];
  }
  return res.rows;
}

/** 相手リストを取得（全件取得） */
export async function selectEnemyListByALL() {
  const sql = `
              select 
                  wm.fid as fid,
                  fm.fname as fname,
                  sum(wm.win_cnt) as win_cnt,
                  sum(wm.loss_cnt) as loss_cnt,
                  sum(wm.win_cnt) + sum(wm.loss_cnt) as total,
                  case 
                      when sum(wm.win_cnt) + sum(wm.loss_cnt) > 0 
                      then round(sum(wm.win_cnt) * 1.0 / (sum(wm.win_cnt) + sum(wm.loss_cnt)), 3) 
                      else 0 
                  end as win_rate,
                  '' as memo 
              from 
                  ${pool.options.schema}.win_loss_manager as wm 
                  inner join ${pool.options.schema}.fighter_master as fm on fm.id = wm.fid 
              group by 
                  wm.fid,
                  fm.fname 
              order by 
                  wm.fid;
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