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

# AI定型文
```text
front：Vue3（js）
backend：Express
DB：PostgreSQL
上記で個人のWeb開発をしています。
これからこの内容について質問していきます。
```

# 課題
1. [Vue]スクロールの大きさを調整(全体で画面サイズを指定できるようにしたい。他は%指定)
2. [infra]サーバー起動ツール
    - DBは基本閉じてる状態にしておきたい。
    - 起動時にDBを起動（終了時は開いてる状態でいいかな）
3. [infra]定期的に本番データ{publicスキーマ}をCSV化し、GiTに上げれるツール作成
    - 履歴テーブルをクリーンにする。（何行か残す）
    - batかps1かな
    - 場所はsumabura-infra/database/backup/
    - メッセージは[日付]定期データバックアップ
    - ファイル名はテーブル名.csv