
/** プレイヤー管理テーブルのModel */
export default class UsedFighter {

  constructor({ useid, fname, winCnt, lossCnt, currentRate, historyRate1, historyRate2 }) {
    this.useid = useid;
    this.fname = fname;
    this.winCnt = winCnt;
    this.lossCnt = lossCnt;
    this.currentRate = currentRate;
    this.historyRate1 = historyRate1;
    this.historyRate2 = historyRate2;
  }

  /** 勝率を計算 */
  getWinRate() {
    const total = this.winCnt + this.lossCnt;
    return total > 0 ? (this.winCnt / total * 100).toFixed(2) : "N/A";
  }

  /** JSONに変換する際のフォーマット */
  toJSON() {
    return {
      useid: this.useid,
      fighter: this.fname,
      winCnt: this.winCnt,
      lossCnt: this.lossCnt,
      winRate: this.getWinRate(),
      currentRate: this.currentRate,
      historyRate1: this.historyRate1,
      historyRate2: this.historyRate2,
    };
  }
}