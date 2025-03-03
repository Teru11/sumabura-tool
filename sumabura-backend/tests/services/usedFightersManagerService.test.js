import * as usedFightersManagerService from '../../src/services/usedFightersManagerService';
import pool from '../../src/utils/db';

afterAll(async () => {
  // データベース接続のクリーンアップ
  await pool.end();
});

// serviceのテスト
describe('勝率表取得', () => {
  test('正常系 キャラ指定なし', async () => {
    const result = await usedFightersManagerService.fetchUsedFighters();
    // データあり
    expect(result).toBeDefined();
    // 2件以上
    expect(result.length).toBeGreaterThanOrEqual(2);
  });

  test('正常系 キャラ指定あり', async () => {
    const result = await usedFightersManagerService.fetchUsedFighters(12);
    // データあり
    expect(result).toBeDefined();
    // 想定1件
    expect(result).toHaveLength(1);  
  });
});