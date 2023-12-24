$OutputEncoding = [System.Text.Encoding]::UTF8
################################################################################
# テーブル作成 & データ挿入ツール[作成中]
# 実行コマンド：[./insert_table_data.ps1 -Encoding UTF8]
################################################################################

### 情報設定 ###
# PostgreSQLの接続情報
$pgHost = "localhost"
$pgPort = "5432"
$pgUser = "postgres"
$pgPass = "postgres"
$pgDatabase = "sumabura"

# SQLファイルのパス一覧
$sqlFiles = @(
    "..\sql\CREATE_TABLE_fighterList.sql",
    "..\sql\CREATE_TABLE_playerManager.sql",
    "..\sql\CREATE_TABLE_WinLossManager.sql"
)

# 各SQLファイルを実行
foreach ($sqlFile in $sqlFiles) {
    psql -h $pgHost -p $pgPort -U $pgUser -d $pgDatabase -f $sqlFile 
    Write-Host ("complete" + $sqlFile)
}