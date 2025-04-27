import pool from '../utils/db.js';

/** レートを保存 */
export async function modifySaveRate(client, useid) {
  const sql = `
              insert into ${pool.options.schema}.history_rate(history_rate_date, useid, rate) 
              select 
                now(), ${useid}, current_rate 
              from 
                ${pool.options.schema}.used_fighters_manager as ufm 
              where 
                ufm.useid = ${useid};
              `;
  await client.query(sql);
}