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
```

### 実行
```sh
npm run dev
```

### Compile and Minify for Production
```sh
npm run build
```
