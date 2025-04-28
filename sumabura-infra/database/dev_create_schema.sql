-- devスキーマの削除と作成
DROP SCHEMA IF EXISTS dev CASCADE;
CREATE SCHEMA IF NOT EXISTS dev;

-- デフォルトスキーマの設定
ALTER USER postgres SET search_path TO public;
-- 開発
-- ALTER USER postgres SET search_path TO dev;