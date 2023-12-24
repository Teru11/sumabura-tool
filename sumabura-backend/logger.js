// ログシステム

/** このモジュールでエクスポートする関数を指定 */ 
module.exports = {
    info,
    error
};

/** [INFO] */
async function info(message) {
    const currentDate = new Date();                  // 現在の日時を取得
    const formattedDate = currentDate.toISOString(); // ISO 8601 形式での文字列に変換
     // 改行文字を削除してログに出力
    console.log("[" + formattedDate + "]" + "[INFO]"+ " " + message);
}

/** [ERROR] */
async function error(message) {
    const currentDate = new Date();                  // 現在の日時を取得
    const formattedDate = currentDate.toISOString(); // ISO 8601 形式での文字列に変換
    
    console.log("[" + formattedDate + "]" + "[ERROR]"+ " " + message);
}