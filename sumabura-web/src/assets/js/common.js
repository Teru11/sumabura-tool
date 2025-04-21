/** 勝率計算 */
export function calcWinRate(win_cnt, loss_cnt) {
    if (win_cnt === 0 && loss_cnt === 0) return 0;
    return Math.round(win_cnt / (win_cnt + loss_cnt) * 100);
}
/** ファイター画像取得 */
export function getFighterImage(id) {
    return `./fighter/${id}.png`;
};