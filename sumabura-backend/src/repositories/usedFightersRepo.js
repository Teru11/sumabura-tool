import pool from '../utils/db.js';

/** 使用ファイター存在チェック */
export async function selectUsedFighter(useid) {
  const sql = `
              select
                ufm.useid as useid
              from 
                ${pool.options.schema}.used_fighters_manager as ufm
              where
                ufm.useid = ${useid};
              `;
  const res = await pool.query(sql);
  if (res.rows.length === 0) {
    return null;
  }
  return res.rows[0];
}

/** 使用ファイター追加するよう更新 */
export async function modifyUsedFighter(client, useid) {
  const sql = `
              update ${pool.options.schema}.used_fighters_manager 
              set del_flg = false 
              where useid = ${useid};
              `;
  await client.query(sql);
}

/** 使用ファイター追加 */
export async function createUsedFighter(client, useid) {
  const sql = `
              insert 
              into ${pool.options.schema}.used_fighters_manager(useid) 
              values (${useid});
              `;
  await client.query(sql);
}

/** 使用ファイター削除 */
export async function removeUsedFighter(client, useid) {
  const sql = `
              update ${pool.options.schema}.used_fighters_manager 
              set del_flg = true 
              where useid = ${useid};
              `;
  await client.query(sql);
}

/** 現在レートを更新 */
export async function modifyCurrentRate(client, useid, current_rate) {
  const sql = `
              update ${pool.options.schema}.used_fighters_manager 
              set current_rate = ${current_rate}, update_date = now() 
              where useid = ${useid};
              `;
  await client.query(sql);
}