import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './utils/readConfig';
import apiRoutes from './routes/apiRoutes';

const app = express();

// 設定
const PORT = config.server.port || 3000;
const BASE_PATH = config.server.basePath || '/sumabura';

app.use(cors());
app.use(bodyParser.json());

// ルーティング（ベースパス）
app.use(BASE_PATH, apiRoutes);

// Not Found ハンドリング
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// エラーハンドリングミドルウェア
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// 通常実行時はサーバー起動
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
}

// アプリケーション終了時にDB接続をクローズ
process.on('SIGINT', async () => {
  console.log('Closing database connection...');
  await pool.end();
  console.log('Database connection closed.');
  process.exit(0);
});

// Jestテスト用にエクスポート
export default app;