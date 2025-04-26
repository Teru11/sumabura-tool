# プロジェクト概要

## 環境概要
フロントエンド:Vue3<br>
バックエンド:node.js(Express.js)<br>
RDB:PostgreSQL<br>
リソース管理:Git・Github<br>
ブランチ:開発(dev)、本番(main)<br>
開発エディタ:VScode<br>

# 環境構築
1. [VScodeインストール](https://code.visualstudio.com/download)<br>
＜拡張機能＞
- Japanese Language Pack for Visual Studio Code（日本語）
- Git History（Git履歴）
- ESLint（JavaScriptとTypeScriptのコードエラーを検出）
- Vetur（Vue.jsの開発するときの定番拡張）
- Material Icon Theme（アイコン付与）
- Auto Rename Tag（開始タグ、終了タグのどちらかを変更した際に、タグの名前を自動で変換してくれる）
- Bracket Highlighter（タグ・括弧のフォーカス色）
- YAML（ymlファイル）
- Codeium（AI）

2. [Node.jsインストール](https://nodejs.org/ja)
3. [PostgreSQLインストール](https://www.postgresql.jp/download)

# サーバー実行
```shell
# バック&フロント
./server-open.bat
```
```shell
# バックのみ
cd sumabura-backend && npm run start:dev
```
```shell
# フロントのみ
cd sumabura-web && npm run dev
```