# プロジェクト概要

## 環境概要
フロントエンド:Vue<br>
バックエンド:node.js(Express.js)<br>
RDB:PostgreSQL<br>
リソース管理:Git・Github<br>
ブランチ:開発(dev)、本番(main)<br>
開発エディタ:VScode<br>

## DB接続情報
サーバー:localhost<br>
ポート:"5432"<br>
ユーザー名:"postgres"<br>
パスワード:"postgres"<br>
データベース名:"sumabura"<br>
スキーマ名:"sumabura"<br>

# 環境構築

## 前提
1. [VScodeインストール](https://code.visualstudio.com/download)
＜拡張機能＞
Japanese Language Pack for Visual Studio Code（日本語）
Git History（Git履歴）
ESLint（JavaScriptとTypeScriptのコードエラーを検出）
Vetur（Vue.jsの開発するときの定番拡張）
Material Icon Theme（アイコン付与）
Auto Rename Tag（開始タグ、終了タグのどちらかを変更した際に、タグの名前を自動で変換してくれる）
Bracket Highlighter（タグ・括弧のフォーカス色）
YAML（ymlファイル）
Codeium（AI）


2. [Node.jsインストール](https://nodejs.org/ja)
3. [PostgreSQLインストール](https://www.postgresql.jp/download)

## フロントエンド
プロジェクトとなるフォルダ作成し、フォルダ移動<br>
「sumabura-web」

```shell
### プロジェクト作成（ sumabura-tool ）
npm init vue@latest

### npm インストール（ sumabura-tool\sumabura-web ）
npm install

axios インストール
npm install axios

### 画面遷移(Vue Routerをインストール) 
npm install vue-router@next
# ※Vue Routerの設定ファイル router/index.js を作成

# イベントバス（状態設定）インストール
npm install mitt

## 開発サーバを起動（ http://localhost:5173/ ）
npm run dev
# ※「npm run serve」と違うが、処理内容は同じ。プロジェクトの作成手順の違いらしい...?

## 補足コマンド
# 本番用ビルド(distフォルダ作成)
npm run build
# 本番用ビルドの内容確認
npm run preview
```

----------------------------------------------------------
# 環境構築（バックエンド）
プロジェクトとなるフォルダ作成し、フォルダ移動<br>
「sumabura-backend」

```shell
#　package.json作成（後から変更可能）
npm init

# Express.js フレームワークをプロジェクトにインストール
npm install express

# [app.js]作成（ダミーファイル？）

#　PostgreSQL連携インストール[関連ファイル：dbAccess.js]
npm install pg
## フロント連携インストール
npm install cors

# サーバー起動（バックエンド）（URL：http://localhost:3000）
node server.js
```


