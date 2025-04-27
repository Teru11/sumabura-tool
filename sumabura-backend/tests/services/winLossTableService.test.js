import * as service from '../../src/services/winLossTableService.js';
import pool from '../../src/utils/db.js';

afterAll(async () => {
  // データベース接続のクリーンアップ
  await pool.end();
});

describe('winLossTableService 取得テスト', () => {
  test('勝率表を取得 正常系 略称検索なし', async () => {
    const result = await service.fetchWinLossTable();
    // データあり
    expect(result).toBeDefined();
    // 2件以上
    expect(result.length).toBeGreaterThanOrEqual(2);
  });

  test('勝率表を取得 正常系 略称検索あり', async () => {
    const result = await service.fetchWinLossTable('CF');
    // データあり
    expect(result).toBeDefined();
    // 想定1件
    expect(result).toHaveLength(1);
  });
});