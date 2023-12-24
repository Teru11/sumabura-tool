################################################################################
# サーバ停止ツール
# 実行コマンド：[.\end-servers.ps1]
################################################################################

# バックエンドサーバー停止
# (http://localhost:3000/sumabura/my-fighter-list の後に「ctrl+c」で停止可能)
Stop-Process -Name "node" -Force

# フロントエンドサーバー停止(「ctrl+c」で停止できるため、不要)
# Stop-Process -Name "npm" -Force

# PostgreSQLを停止(コマンド)
# pg_ctl stop -D "C:\Program Files\PostgreSQL\15\data"
