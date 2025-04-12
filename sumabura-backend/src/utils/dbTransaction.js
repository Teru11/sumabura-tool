import pool from './db.js';

/**
 * 更新処理（トランザクション）
 * @param {*} callback 
 * @returns 
 */
export default async function withTransaction(callback) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}