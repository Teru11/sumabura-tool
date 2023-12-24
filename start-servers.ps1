################################################################################
# サーバ起動ツール
# 実行コマンド：[.\start-servers.ps1]
################################################################################

## フォルダパスを取得
$currentDirectory = Get-Location

## PostgreSQL起動(コマンド)
# pg_ctl start -D "C:\Program Files\PostgreSQL\15\data"

## バックエンドサーバー起動
# URL:http://localhost:3000/sumabura/my-fighter-list
# Start-Process "node" -ArgumentList "./server.js" -WorkingDirectory "E:/development/sumabura-tool/sumabura-backend" -NoNewWindow
Start-Process "node" -ArgumentList "./server.js" -WorkingDirectory "$currentDirectory/sumabura-backend" -NoNewWindow

## フロントエンドサーバー起動
# URL:http://localhost:5173/
# Start-Process "npm" -ArgumentList "run dev" -WorkingDirectory "E:/development/sumabura-tool/sumabura-web" -NoNewWindow
Start-Process "npm" -ArgumentList "run dev" -WorkingDirectory "$currentDirectory/sumabura-web" -NoNewWindow


