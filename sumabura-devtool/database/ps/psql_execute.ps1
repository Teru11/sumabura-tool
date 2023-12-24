################################################################################
# PostgreSQL起動ツール[作成中]
# 実行コマンド：[./psql_execute.ps1]
################################################################################

# PostgreSQLのデータディレクトリ
$pgDataDirectory = "C:\Program Files\PostgreSQL\15\data"

### 本処理 
# PostgreSQLの起動状態を確認
function Get-PostgreSQLStatus {
    $status = pg_ctl status -D $pgDataDirectory 2>&1
    if ($status -match "server is running") {
        return "running"
    } elseif ($status -match "no server running") {
        return "stopped"
    } else {
        return "unknown"
    }
}

# PostgreSQLを起動する関数
function Start-PostgreSQL {
    # PostgreSQLを起動
    pg_ctl start -D $pgDataDirectory
}

# PostgreSQLを停止する関数
function Stop-PostgreSQL {
    # PostgreSQLを停止
    pg_ctl stop -D $pgDataDirectory
}

# PostgreSQLの状態を取得
$pgStatus = Get-PostgreSQLStatus

# PostgreSQLが起動しているか確認
if ($pgStatus -eq "running") {
    Write-Host "PostgreSQLサーバーは起動しています。"
} else {
    Write-Host "PostgreSQLサーバーが起動していません。"

    # PostgreSQL起動
    Start-PostgreSQL

    # 起動完了待機
    Start-Sleep -s 10

    # 再度確認
    if ((Get-PostgreSQLStatus) -eq "running") {
        Write-Host "PostgreSQLサーバーが起動しました。"
    } else {
        Write-Host "PostgreSQLサーバーの起動に失敗しました。"
        exit 1
    }
}
