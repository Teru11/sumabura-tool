###　環境構築
プロジェクトとなるフォルダ作成し、フォルダ移動
「sumabura-web」

# プロジェクト作成（ sumabura-tool ）
npm init vue@latest

# npm インストール（ sumabura-tool\sumabura-web ）
npm install

# axios インストール
npm install axios

# 画面遷移(Vue Routerをインストール) 
npm install vue-router@next
-> Vue Routerの設定ファイル router/index.js を作成

# イベントバス（状態設定）インストール
npm install mitt

## 開発サーバを起動（ http://localhost:5173/ ）
npm run dev
-> 「npm run serve」と違うが、処理内容は同じ。プロジェクトの作成手順の違いらしい...?

## 補足コマンド
# 本番用ビルド(distフォルダ作成)
npm run build
# 本番用ビルドの内容確認
npm run preview