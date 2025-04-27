/** 勝率計算 */
export function calcWinRate(win_cnt, loss_cnt) {
    if (win_cnt === 0 && loss_cnt === 0) return 0;
    return Math.round(win_cnt / (win_cnt + loss_cnt) * 100);
}
/** ファイター画像取得 */
export function getFighterImage(id, addPath = '') {
    return `${addPath}./fighter/${id}.png`;
};
/** 日付フォーマット変換 */
export function formatDate(dateString, withTime = false) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // 月は0始まり
    const dd = String(date.getDate()).padStart(2, '0');
    
    if (withTime) {
        const hh = String(date.getHours()).padStart(2, '0');
        const mi = String(date.getMinutes()).padStart(2, '0');
        return `${yyyy}/${mm}/${dd} ${hh}:${mi}`;
    } else {
        return `${yyyy}/${mm}/${dd}`;
    }
}