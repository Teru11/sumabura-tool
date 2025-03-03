import * as fighterMasterService from '../../src/services/fighterMasterService';
import pool from '../../src/utils/db';

afterAll(async () => {
  // データベース接続のクリーンアップ
  await pool.end();
});

// serviceのテスト
describe('ファイター全取得', () => {
  test('正常系 取得', async () => {
    const result = await fighterMasterService.fetchAllFighters();
    // データあり
    expect(result).toBeDefined();
    // 想定82件
    expect(result).toHaveLength(82);  
  });
});