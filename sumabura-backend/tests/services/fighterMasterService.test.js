import * as service from '../../src/services/fighterMasterService.js';
import pool from '../../src/utils/db.js';

afterAll(async () => {
  // データベース接続のクリーンアップ
  await pool.end();
});

describe('fighterMasterService 取得テスト', () => {
  test('ファイターリストを取得 正常系', async () => {
    const result = await service.fetchFighterList();
    // データあり
    expect(result).toBeDefined();
    // 想定82件
    expect(result).toHaveLength(82);  
  });

  test('ファイター情報を取得 正常系', async () => {
    const result = await service.fetchFighterInfoByNickname('M');
    // データあり
    expect(result).toBeDefined();
  });

  test('相手の情報を取得（useid + nickname） 正常系', async () => {
    const result = await service.fetchEnemyInfo(12, 'M');
    // データあり
    expect(result).toBeDefined();
  });

  test('相手リストを取得（useid） 正常系', async () => {
    const result = await service.fetchEnemyList(12);
    // データあり
    expect(result).toBeDefined();
    // 想定82件
    expect(result).toHaveLength(82);  
  });
});