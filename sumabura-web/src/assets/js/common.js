 // 汎用JS
 
 /** 勝率算出 */
 export function getCmnWinRate(win_count, loss_count) {
    let totalcount = Number(win_count) + Number(loss_count);
    let rate = 0;
    if (totalcount > 0) {
      rate = Math.round((win_count / totalcount) * 100);
    }
    return rate + " %";
  }