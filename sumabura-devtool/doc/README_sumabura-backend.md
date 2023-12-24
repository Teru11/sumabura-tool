###　環境構築
プロジェクトとなるフォルダ作成し、フォルダ移動
「sumabura-backend」

#　package.json作成（後から変更可能）
npm init

# Express.js フレームワークをプロジェクトにインストール
npm install express

# [app.js]作成（ダミーファイル？）

# mocha パッケージをインストール(なんかうまくいかなかったのでスルーした)
npm install mocha --save-dev
npm install supertest --save-dev
→バージョンアップ：npm install supertest@latest --save-dev
※インストール確認：npm ls mocha
※「--save-dev」で「package.json」に記載される
「npm test」を実行してテストを再試行。

ポート占領確認：netstat -ano | findstr :3000
→全部：netstat -ano
（ローカル アドレスの「:」の後がポート番号）

関連ファイル：test/app.test.js、app.js
→でもサーバー起動は「node server.js」でできた。
サーバー起動：http://localhost:3000

#　PostgreSQL連携インストール
npm install pg
関連ファイル：dbAccess.js

## フロント連携インストール
npm install cors

