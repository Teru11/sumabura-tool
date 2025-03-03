/** 勝率管理テーブルのModel */
export default class WinLoss {
  constructor(winCnt, lossCnt, memo) {
    this.winCnt = winCnt;
    this.lossCnt = lossCnt;
    this.memo = memo;
  }
}