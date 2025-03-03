import pool from '../utils/db';
import Fighter from '../models/fighterMasterModel';

/** ファイター全リストを取得 */
export async function getAllFighters() {
  const sql = `select
                    fm.id
                    , fm.fname
                    , fm.nickname 
                from
                    ${pool.options.schema}.fighter_master as fm 
                order by
                    fm.id;
                `;

  const res = await pool.query(sql);

  if (res.rows.length === 0) {
    return [];
  }

  return res.rows.map(row => new Fighter(row.id, row.fname, row.nickname));
}
