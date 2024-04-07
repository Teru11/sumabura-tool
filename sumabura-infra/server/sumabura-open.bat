@echo off

REM ######################################################################################
REM ## �X�}�u���c�[�� �T�[�o�[�N��
REM ######################################################################################

REM �v���W�F�N�g�p�X
SET PROJECT_PATH=E:\development\sumabura-tool
REM �V�X�e���u�����`��(dev/main)
SET ENV=dev
REM �N���pScript�p�X
SET PROJECT_NAME=sumabura-tool

REM �p�X�ݒ�
SET BACKEND_PROJECT_PATH=%PROJECT_PATH%\%ENV%\%PROJECT_NAME%\sumabura-backend
SET INFRA_PROJECT_PATH=%PROJECT_PATH%\%ENV%\%PROJECT_NAME%\sumabura-infra\server
SET FRONT_PROJECT_PATH=%PROJECT_PATH%\%ENV%\%PROJECT_NAME%\sumabura-web

REM ## �񓯊����s �o�b�N�G���hOPEN ##
SET BACKEND_PS1_FILE=sumabura-tool-backend-open.ps1
start powershell.exe -ExecutionPolicy Bypass -File "%INFRA_PROJECT_PATH%\%BACKEND_PS1_FILE%" "%BACKEND_PROJECT_PATH%"

REM ## �񓯊����s �t�����g�G���hOPEN ##
SET FRONT_PS1_FILE=sumabura-tool-web-open.ps1
start powershell.exe -ExecutionPolicy Bypass -File "%INFRA_PROJECT_PATH%\%FRONT_PS1_FILE%" "%FRONT_PROJECT_PATH%"

REM ## �X�}�u���c�[�����J�� ##
Start-Sleep 2
start chrome.exe "http://localhost:5173/"