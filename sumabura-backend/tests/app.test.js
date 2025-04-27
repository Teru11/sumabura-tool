import request from 'supertest';
import app from '../src/application';
import pool from '../src/utils/db';

afterAll(async () => {
  // データベース接続のクリーンアップ
  await pool.end();
});

// エンドポイントのテスト
describe('API Routes', () => {
  // // ファイター全取得
  // test('GET /sumabura/getAllFighters は 200 を返す', async () => {
  //   const response = await request(app).get('/sumabura/getAllFighters');
  //   expect(response.statusCode).toBe(200);
  // });

  // 存在しないルート
  test('存在しないルートにアクセスすると 404 を返す', async () => {
    const response = await request(app).get('/sumabura/not_found');
    expect(response.statusCode).toBe(404);
  });
});