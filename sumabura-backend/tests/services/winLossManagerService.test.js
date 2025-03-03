import * as usedFightersManagerService from '../../src/services/usedFightersManagerService';
import pool from '../../src/utils/db';

afterAll(async () => {
  // データベース接続のクリーンアップ
  await pool.end();
});

// serviceのテスト
describe('相手情報取得', () => {
  test('正常系', async () => {
    const result = await usedFightersManagerService.fetchUsedFighters(12, 1);
    // データあり
    expect(result).toBeDefined();
    // 想定1件
    expect(result).toHaveLength(1);
  });
});