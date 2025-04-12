@echo off
chcp 65001

REM sumabura-web の起動
start "sumabura-web" cmd /k "cd sumabura-web && npm run dev"

REM sumabura-backend の起動
start "sumabura-backend" cmd /k "cd sumabura-backend && npm run start:dev"

exit