import request from 'supertest';
import app from '../src/application.js';
import pool from '../src/utils/db';

afterAll(async () => {
  // データベース接続のクリーンアップ
  await pool.end();
});

// エンドポイントのテスト
describe('API Routes', () => {
  /**************************** GET *****************************/
  test('GET ファイターリスト取得Handler 正常系', async () => {
    const response = await request(app).get(`/sumabura/fighter/list`);
    expect(response.statusCode).toBe(200);
  });
  test('GET ファイター情報取得Handler 正常系', async () => {
    const nickname = 'CF';
    const response = await request(app).get(`/sumabura/fighter/info/${nickname}`);
    expect(response.statusCode).toBe(200);
  });
  test('GET 相手情報取得Handler 正常系', async () => {
    const useid = 12;
    const nickname = 'M';
    const response = await request(app).get(`/sumabura/fighter/enemy/info/${useid}/${nickname}`);
    expect(response.statusCode).toBe(200);
  });
  test('GET 相手リスト取得Handler 正常系', async () => {
    const response1 = await request(app).get(`/sumabura/fighter/enemy/list/`);
    expect(response1.statusCode).toBe(200);

    const useid = 12;
    const response2 = await request(app).get(`/sumabura/fighter/enemy/list/${useid}`);
    expect(response2.statusCode).toBe(200);
  });
  test('GET 勝率表取得Handler 正常系', async () => {
    const response1 = await request(app).get(`/sumabura/winloss/table/`);
    expect(response1.statusCode).toBe(200);

    const nickname = 'CF';
    const response2 = await request(app).get(`/sumabura/winloss/table/${nickname}`);
    expect(response2.statusCode).toBe(200);
  });
  test('GET 本日の対戦記録を取得Handler 正常系', async () => {
    const response = await request(app).get(`/sumabura/history/battle/today`);
    expect(response.statusCode).toBe(200);
  });
  test('GET 全対戦記録を取得を取得Handler 正常系', async () => {
    const response1 = await request(app).get(`/sumabura/history/match/`);
    expect(response1.statusCode).toBe(200);

    const useid = 12;
    const response2 = await request(app).get(`/sumabura/history/match/${useid}`);
    expect(response2.statusCode).toBe(200);
  });

  /**************************** POST *****************************/
  test('POST 現在レート更新Handler 異常系', async () => {
    const response = await request(app).post(`/sumabura/update/current/rate`).send({});
    expect(response.statusCode).toBe(400);
  });
  test('POST レート保存Handler 異常系', async () => {
    const response = await request(app).post(`/sumabura/update/save/rate`).send({});
    expect(response.statusCode).toBe(400);
  });
  test('POST メモ更新Handler 異常系', async () => {
    const response = await request(app).post(`/sumabura/update/memo`).send({});
    expect(response.statusCode).toBe(400);
  });
  test('POST 勝敗更新Handler 異常系', async () => {
    const response = await request(app).post(`/sumabura/update/winloss`).send({});
    expect(response.statusCode).toBe(400);
  });
  test('POST 略称名更新Handler 異常系', async () => {
    const response = await request(app).post(`/sumabura/update/nickname`).send({});
    expect(response.statusCode).toBe(400);
  });
  test('POST 使用ファイター追加Handler 異常系', async () => {
    const response = await request(app).post(`/sumabura/insert/fighter`).send({});
    expect(response.statusCode).toBe(400);
  });
  test('POST 使用ファイター削除Handler 異常系', async () => {
    const response = await request(app).post(`/sumabura/delete/fighter`).send({});
    expect(response.statusCode).toBe(400);
  });

  // 存在しないルート
  test('存在しないルートにアクセスすると 404 を返す', async () => {
    const response = await request(app).get(`/sumabura/not_found`);
    expect(response.statusCode).toBe(404);
  });
});