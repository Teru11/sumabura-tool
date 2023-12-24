const { Pool } = require('pg');         // pg ライブラリから Pool クラスをインポート
const fs = require('fs');               // ファイルシステムをインポート
const logger = require('./logger');     // logger.jsファイルをインポート

/** SQLファイルからクエリを取得 */
const sqlFilePath = './sql/';

/** PostgreSQLの接続設定を指定して、Pool インスタンスを生成 */
const pool = new Pool({
    user: 'postgres',     //ユーザーID
    host: 'localhost',    // サーバー名
    database: 'sumabura', // データベース名
    password: 'postgres', // パスワード
    port: 5432,           // ポート番号(デフォルトポート)
});

/** このモジュールでエクスポートする関数を指定 */
module.exports = {
    getSelectDataList,
    UpdateQuery
};

/** SQLファイル読み込み */
function readSQLFile(fileName, params) {
    try {
        // SQLファイル読み込み
        const sqlTempleate = fs.readFileSync(sqlFilePath + fileName + ".sql", 'utf8');
        // SQL整形
        const sql = replaceQuery(sqlTempleate, params);
        // SQLログ出力
        logger.info('SQL -> ' + sql);
        return sql;
    } catch (error) {
        logger.error('Error reading SQL file:' + error);
        throw error;
    }
}

/** SQL整形 */
function replaceQuery(sqlQuery, params) {
    let replacedQuery = sqlQuery;

    try {

        // コメント削除、改行削除
        replacedQuery = replacedQuery.replace(/(--.*)|(\n)/g, '').replace(/\s+/g, ' ');

        // パラメータ置換
        let index = 0;
        const regex = /\?/g; // ? を正規表現でマッチさせる
        replacedQuery = replacedQuery.replace(regex, () => {
            const value = params[index];
            index++;
            return "'" + value + "'";
        });

        return replacedQuery;
    } catch (error) {
        logger.error('Error formatting SQL:' + error);
        throw error;
    }
}

/** [SELECT] データ取得 */
async function getSelectDataList(sqlKey, params) {
    logger.info('[ SELECT ]データベース接続 開始');
    // DB接続情報
    const client = await pool.connect();
    try {
        // SQL取得
        const sqlQuery = await readSQLFile("select-" + sqlKey, params);
        // SQL実行
        const result = await client.query(sqlQuery);
        // データ返却
        return result.rows;
    } catch (error) {
        logger.error('Error database access:' + error);
        throw error;
    } finally {
        // 解放
        client.release();
        logger.info('[ SELECT ]データベース接続 終了');
    }
}

/** [Update] 更新処理 */
async function UpdateQuery(sqlKey, params) {
    logger.info('[ UPDATE ]データベース接続 開始');
    // DB接続情報
    const client = await pool.connect();
    try {
        // トランザクション開始
        await client.query('BEGIN'); 
        // SQL取得
        const sqlQuery = await readSQLFile("update-" + sqlKey, params);
        // SQL実行
        await client.query(sqlQuery);
         // トランザクションのコミット
        await client.query('COMMIT');
    } catch (error) {
        // エラーがあればロールバック
        await client.query('ROLLBACK'); 
        logger.error('トランザクション処理 エラー:' + error);
        throw error;
    } finally {
        // 解放
        client.release();
        logger.info('[ UPDATE ]データベース接続 終了');
    }
}