# プロジェクト概要
フロントエンド<sumabura-web>：Vue<br>
バックエンド<sumabura-backend>：node.js(Express.js)<br>
RDB：PostgreSQL<br>
リソース管理：Git・Github<br>
ブランチ：開発(dev)　本番(main)<br>
開発エディタ：VScode<br>

### DB接続情報
サーバー:localhost<br>
ポート:"5432"<br>
ユーザー名:"postgres"<br>
パスワード:"postgres"<br>
データベース名:"sumabura"<br>
スキーマ名:"sumabura"<br>

---------------------------------------------------------- 
# 課題管理
<li>try-catchは必要か？</li>
<li>メソッド名は小文字か？</li>
<li>横幅が勿体ない。自分のコンボ集だしてもいい？</li>
<li>勝率表を隠す？</li>
<li>上下でコンポーネントを分ける。</li>
<li>小さくすると横の空白が消えるようにしたい</li>
<li>git管理</li>
<li>Redmainか</li>
<li>AWS移行</li>
<li>略称検索：フォーカスを当てたらリストが表示されるようにしたい。</li>
<li>VARCHARではなく、CHAR型の方が速い。</li>
<li>解除したら下の相手キャラの更新ボタンは全部不可状態にしたい。</li>
<li>VueX</li>


タスク<br>
・Git連携
・ブランチ作成
・マークダウンファイル修正
・バックエンドのSQL修正
・リソース管理をymlファイルに切り替え
・ログ出力切り替え
・Web修正

----------------------------------------------------------
# Git連携
[Github](https://github.com/Teru11/sumabura-tool)

### リポジトリ連携設定
```shell
git remote add origin git@github.com:Teru11/sumabura-tool.git
```
git remote add: リモートリポジトリを追加するGitのコマンド。<br>
origin: リモートリポジトリに対する通常の名前。<br>
git@github.com:Teru11/sumabura-tool.git: GitHub上のリモートリポジトリのURL。<br>

```shell
### リモートリポジトリに接続する際にフィンガープリントを確認
ssh-keyscan github.com

### SSHキーに設定する。
ssh-keygen -t rsa -b 2048
```
ssh-keygen: SSHキーを生成するコマンド。<br>
-t rsa: RSAアルゴリズムを使用して鍵を生成するオプション。<br>
-b 2048: 2048ビットの鍵を生成するオプション。<br>

----------------------------------------------------------
# 環境構築（WEB）
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

# mocha パッケージをインストール(なんかうまくいかなかったのでスルーした)
npm install mocha --save-dev
npm install supertest --save-dev
# →バージョンアップ：npm install supertest@latest --save-dev
# ※インストール確認：npm ls mocha
# ※「--save-dev」で「package.json」に記載される
# 「npm test」を実行してテストを再試行。

# ポート占領確認：netstat -ano | findstr :3000
# →全部：netstat -ano
# （ローカル アドレスの「:」の後がポート番号）

# サーバー起動（バックエンド）（URL：http://localhost:3000）
node server.js
```

----------------------------------------------------------
# ショートカットキー（ナレッジ）
<table>
<th><td>内容</td><td>キー</td></th>
<tr><td>自動整形</td><td>Shift + Alt + F</td></tr>
</table>



