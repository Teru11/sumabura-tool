import * as service from '../../src/services/historyService.js';
import pool from '../../src/utils/db.js';

afterAll(async () => {
  // データベース接続のクリーンアップ
  await pool.end();
});

describe('historyManagerService 取得テスト', () => {
  test('本日の対戦記録を取得 正常系', async () => {
    const result = await service.fetchTodayBattleHistory();
    // データあり
    expect(result).toBeDefined();
  });

  test('全対戦記録を取得 正常系', async () => {
    const result = await service.fetchAllMatchHistory(12);
    // データあり
    expect(result).toBeDefined();
  });
});