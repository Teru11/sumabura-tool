/** ファイターマスタテーブルのModel */
export default class Fighter {
  constructor({ id, fname, nickname }) {
    this.id = id;
    this.name = fname;
    this.nickname = nickname;
  }

  /** ニックネームがない場合にデフォルト値を設定 */
  getDisplayName() {
    return this.nickname ? this.nickname : this.name;
  }

  /**　JSONに変換する際のフォーマット */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      nickname: this.nickname,
    };
  }
}