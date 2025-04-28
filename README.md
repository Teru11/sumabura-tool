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

# AI定型文
```text
front：Vue3（js）
backend：Express
DB：PostgreSQL
上記で個人のWeb開発をしています。
これからこの内容について質問していきます。
```

# 課題
1.  [Vue]faviconを追加する（タブの左側の画像部分の設定）
4.  [Vue]スクロールの大きさを調整(全体で画面サイズを指定できるようにしたい。他は%指定)
5.  [Vue]戦績画面のヘッダー押下で昇順降順を変更可能にする。
7.  [infra]データ移行ツール
・publicを本番スキーマ―に指定。（デフォルト）
・devはtest
・開発時に本番からdevにデータコピー

8. [infra]サーバー起動ツール
・DBは基本閉じてる状態にしておきたい。
・起動時にDBを起動（終了時は開いてる状態でいいかな）
・最後にEdgeで起動（アカウントに左右されないため）
・コンソールは出しておく方がいい。（起動してるかどうかわかりやすい）

9. [infra]定期的に本番データをCSV化し、GITに上げれるツール作成
・履歴テーブルをクリーンにする。（何行か残す）

10. [backend]使用していない略称検索の場合、勝率表全検索に変更する。