# フロントエンド
```shell
# Vueプロジェクト作成（最新）
npm init vue@latest
```
### 作成質問
Project name：`sumabura-web`
<table>
<tr>
    <td>typescript</td><td>no</td>
    <td>typescript使いたいか</td>
</tr>
<tr>
    <td>JSX</td><td>no</td>
    <td>javascriptにhtmlのタグを書くか?（Reactだと使用）</td>
</tr>
<tr>
    <td>Vue Router</td><td>yes</td>
    <td>SPAだと必須</td>
</tr>
<tr>
    <td>Pinia</td><td>no</td>
    <td>状態管理パッケージ。同様のツールとしてvuexなどがある</td>
</tr>
<tr>
    <td>Vitest</td><td>no</td>
    <td>単体テスト用（フロントは不要）</td>
</tr>
<tr>
    <td>ESLint</td><td>no</td>
    <td>構文解析（リンティング）ツール。jsコードを静的解析してくれる</td>
</tr>
<tr>
    <td>Prettier</td><td>no</td>
    <td>フォーマッター。js/ts以外にもhtmlとか色々対応してる。</td>
</tr>
</table>

# バックエンド
```shell
# プロジェクト作成
mkdir sumabura-backend
# 移動
cd sumabura-backend
# 「Express.js」フレームワークをプロジェクトにインストール
npm install express
# .gitignoreを作成
npx gitignore node
# ソースフォルダ作成
mkdir src
# src直下にapplication.js作成（サーバー起動用）
New-Item -ItemType File -Path ./src/application.js
# その他必要なNodeModuleのパッケージインストール
npm install --save body-parser cors pg js-yaml
# テストコードインストール
npm install --save-dev jest supertest

```

node src/application.js

NODE_ENV=production node src/application.js


# インフラ
```shell
# プロジェクト作成
mkdir sumabura-infra
```
