@echo off

REM ######################################################################################
REM ## スマブラツール サーバー起動
REM ######################################################################################

REM プロジェクトパス
SET PROJECT_PATH=E:\development\sumabura-tool
REM システムブランチ環境(dev/main)
SET ENV=dev
REM 起動用Scriptパス
SET PROJECT_NAME=sumabura-tool

REM パス設定
SET BACKEND_PROJECT_PATH=%PROJECT_PATH%\%ENV%\%PROJECT_NAME%\sumabura-backend
SET INFRA_PROJECT_PATH=%PROJECT_PATH%\%ENV%\%PROJECT_NAME%\sumabura-infra\server
SET FRONT_PROJECT_PATH=%PROJECT_PATH%\%ENV%\%PROJECT_NAME%\sumabura-web

REM ## 非同期実行 バックエンドOPEN ##
SET BACKEND_PS1_FILE=sumabura-tool-backend-open.ps1
start powershell.exe -ExecutionPolicy Bypass -File "%INFRA_PROJECT_PATH%\%BACKEND_PS1_FILE%" "%BACKEND_PROJECT_PATH%"

REM ## 非同期実行 フロントエンドOPEN ##
SET FRONT_PS1_FILE=sumabura-tool-web-open.ps1
start powershell.exe -ExecutionPolicy Bypass -File "%INFRA_PROJECT_PATH%\%FRONT_PS1_FILE%" "%FRONT_PROJECT_PATH%"

REM ## スマブラツールを開く ##
Start-Sleep 2
start chrome.exe "http://localhost:5173/"