# 環境構築
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

```sh
# moduleインストール
npm install
# backend連携用
npm install axios
# イベントバス（状態設定）インストール
npm install mitt
# 本番サーバー起動用
npm install -g serve
```

### 実行
```sh
# サーバー起動（http://localhost:5173/)
npm run dev
```

### 本番
```sh
# ビルド
npm run build
# サーバー起動（http://localhost:8080/)
serve -l 8080 dist
```
