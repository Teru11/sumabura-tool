# 環境構築
```shell
# .gitignoreを作成
npx gitignore node
# ソースフォルダ作成
mkdir src
# src直下にapplication.js作成（サーバー起動用）
New-Item -ItemType File -Path ./src/application.js
# 「Express.js」フレームワークをプロジェクトにインストール
npm install express
# その他必要なNodeModuleのパッケージインストール
npm install body-parser cors pg js-yaml
# テストコードインストール（開発時だけ必要なパッケージ）
npm install --save-dev jest supertest
```

# テスト実行
```shell
npm test
```

# 開発環境実行
```shell
npm run start:dev
```

# 本番環境実行
```shell
npm run start:prd
```

