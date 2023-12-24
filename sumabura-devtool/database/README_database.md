### 環境構築
# システム環境変数の「PATH」に新規で追加
C:\Program Files\PostgreSQL\15\bin

# VScodeを再起動し、ターミナルで以下のコマンドで確認
psql --version

# PostgreSQLバージョン
・psql (PostgreSQL) 15.4

### 情報（ローカル環境）
サーバー名：localhost
ポート番号：5432
データベース名：sumabura
ユーザーID：postgres
パスワード：postgres
スキーマ―：sumabura
driver：org.postgresql.Driver
URL：jdbc:postgresql://localhost:5432/postgres?currentSchema=sumabura

# DB作成
CREATE DATABASE sumabura;

# スキーマ作成
CREATE SCHEMA IF NOT EXISTS sumabura AUTHORIZATION postgres;

# スキーマの削除
DROP SCHEMA IF EXISTS sumabura CASCADE;

# カレントディレクトリ変更(publicからの変更)
ALTER USER "postgres" SET search_path TO "sumabura";


# PostgreSQL起動(コマンド)
pg_ctl start -D "C:\Program Files\PostgreSQL\15\data"

# 停止(コマンド)
pg_ctl stop -D "C:\Program Files\PostgreSQL\15\data"