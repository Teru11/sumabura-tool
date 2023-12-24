<!-- トップ画面[相手情報] -->
<template>
  <div class="echar-main-frame">
    <!-- タイトルと略称検索 -->
    <div class="echar-title-frame">
      <div style="width: 140px">◆相手キャラ</div>
      <form @submit.prevent="enemyInfoSearch">
        <label for="enemyfryaku">略称検索：</label>
        <input
          type="text"
          id="enemyfryaku"
          :disabled="fryakuInputHiddenFlg"
          v-model="fryaku"
        />
        <button type="submit" :disabled="fryakuBtnHiddenFlg">検索</button>
      </form>
    </div>

    <!-- 相手のキャラ基本情報 -->
    <div style="display: flex">
      <div class="echar-left-outframe">
        <div class="echar-info-name">
          <!-- [相手情報] 名前 -->
          <table>
            <tbody>
              <td class="td-fighterImg">
                <img
                  :src="getFighterImageSrc(resultData.fnum || '1')"
                  alt="画像なし"
                  width="60"
                  height="60"
                />
              </td>
              <td class="td-fighterName">{{ resultData.fname || "マリオ" }}</td>
            </tbody>
          </table>
        </div>

        <form @submit.prevent="updateEnemyInfo">
          <!-- [相手情報] 勝率表 -->
          <div class="enemy-info-winloss">
            <table>
              <tbody>
                <tr>
                  <td>勝数</td>
                  <td>
                    <input
                      type="text"
                      :disabled="winInputHiddenFlg"
                      v-model="win"
                    />
                  </td>
                </tr>
                <tr>
                  <td>負数</td>
                  <td>
                    <input
                      type="text"
                      :disabled="lossInputHiddenFlg"
                      v-model="loss"
                    />
                  </td>
                </tr>
                <tr>
                  <td>勝率</td>
                  <td>
                    {{
                      getWinRate(resultData.win || "0", resultData.loss || "0")
                    }}
                  </td>
                </tr>
                <tr>
                  <td>出現率</td>
                  <td>{{ encountRate }} %</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="enemy-info-update">
            <button type="submit" :disabled="enemyInfoBtnHiddenFlg">
              更新
            </button>
          </div>
        </form>
      </div>

      <div class="echar-right-outframe">
        <!-- [相手情報] ファイター行動情報 -->
        <div class="echar-active-outframe">
          <form @submit.prevent="updateMemo">
            <div class="echar-text-edit">
              <div style="width: 140px">○ファイターメモ</div>
              <button type="submit" :disabled="memoTxtHiddenFlg">更新</button>
            </div>
            <textarea :disabled="memoTxtHiddenFlg" v-model="memo"></textarea>
          </form>
        </div>
        <!-- [相手情報] ファイター対策情報 -->
        <div class="echar-taisaku-outframe">
          <form @submit.prevent="updateTaisaku">
            <div class="echar-text-edit">
              <div style="width: 90px">○対策メモ</div>
              <button type="submit" :disabled="taisakuTxtHiddenFlg">
                更新
              </button>
            </div>
            <textarea
              :disabled="taisakuTxtHiddenFlg"
              v-model="taisaku"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { eventBus } from "../../js/eventBus.js";
import { requestPostSearchData } from "../../js/request.js";
import { getCmnWinRate } from "../../js/common.js";
import { getCmnFighterImageSrc } from "../../js/imageUtils.js";
import "../../css/common.css";

export default {
  data() {
    return {
      myryaku: "",
      fryaku: "",
      resultData: {},
      win: 0,
      loss: 0,
      encountRate: 0,
      memo: "",
      taisaku: "",
      /** ＜排他制御＞略称検索入力[初期値：編集不可] */
      fryakuInputHiddenFlg: true,
      /** ＜排他制御＞略称検索ボタン[初期値：押下不可] */
      fryakuBtnHiddenFlg: true,
      /** ＜排他制御＞勝数入力[初期値：編集不可 */
      winInputHiddenFlg: true,
      /** ＜排他制御＞負数入力[初期値：編集不可 */
      lossInputHiddenFlg: true,
      /** ＜排他制御＞勝率更新ボタン[初期値：押下不可] */
      enemyInfoBtnHiddenFlg: true,
      /** ＜排他制御＞行動更新ボタン[初期値：押下不可] */
      memoUpdateBtnHiddenFlg: true,
      /** ＜排他制御＞行動テキスト[初期値：編集不可] */
      memoTxtHiddenFlg: true,
      /** ＜排他制御＞対策更新ボタン[初期値：押下不可] */
      taisakuUpdateBtnHiddenFlg: true,
      /** ＜排他制御＞対策テキスト[初期値：編集不可] */
      taisakuTxtHiddenFlg: true,
    };
  },
  mounted() {
    eventBus.on("update-myryaku", (myryaku) => {
      // ファイター設定
      /* console.log("マイファイター設定:" + myryaku); */
      this.myryaku = myryaku;
    });

    eventBus.on("enemy-search-hiddenFlg-on", () => {
      // 入力排他制御 押下不可
      this.fryakuInputHiddenFlg = true;
      this.fryakuBtnHiddenFlg = true;
      this.winInputHiddenFlg = true;
      this.lossInputHiddenFlg = true;
      this.enemyInfoBtnHiddenFlg = true;
      this.memoUpdateBtnHiddenFlg = true;
      this.memoTxtHiddenFlg = true;
      this.taisakuUpdateBtnHiddenFlg = true;
      this.taisakuTxtHiddenFlg = true;
    });

    eventBus.on("enemy-search-hiddenFlg-off", () => {
      // 入力排他制御　押下不可　解除
      this.fryakuInputHiddenFlg = false;
      this.fryakuBtnHiddenFlg = false;

      // 入力排他制御 更新ボタン 押下不可
      this.enemyInfoBtnHiddenFlg = true;
    });
  },
  methods: {
    /** 略称検索 */
    async enemyInfoSearch() {
      // チェック処理
      if (this.myryaku == "") {
        // 念のため制御
        console.log("勝率表で略称検索していません。");

        // データが存在しない場合、入力排他制御 押下不可
        this.winInputHiddenFlg = false;
        this.lossInputHiddenFlg = false;
        this.enemyInfoHiddenBtn = false;

        this.memoUpdateBtnHiddenFlg = true;
        this.memoTxtHiddenFlg = true;
        this.taisakuUpdateBtnHiddenFlg = true;
        this.taisakuTxtHiddenFlg = true;

        return;
      }

      // リクエスト情報設定と取得
      const req = { myryaku: this.myryaku, fryaku: this.fryaku };
      const resData = await requestPostSearchData("top-enemy-info", req);

      // データの設定
      this.resultData = resData[0];

      if (typeof this.resultData !== "undefined") {
        // データが存在する場合

        // 編集項目は別設定
        this.win = resData[0].win;
        this.loss = resData[0].loss;
        this.memo = resData[0].fact;
        this.taisaku = resData[0].taisaku;

        // 出現率　取得
        const resEncount = await requestPostSearchData("encount-rate", req);
        // データの設定
        this.encountRate = resEncount.resultEncount;

        // 入力排他制御 押下不可　解除
        this.winInputHiddenFlg = false;
        this.lossInputHiddenFlg = false;
        this.enemyInfoBtnHiddenFlg = false;

        this.memoUpdateBtnHiddenFlg = false;
        this.memoTxtHiddenFlg = false;
        this.taisakuUpdateBtnHiddenFlg = false;
        this.taisakuTxtHiddenFlg = false;
      } else {
        // データが存在しない場合、入力排他制御 押下不可
        this.winInputHiddenFlg = true;
        this.lossInputHiddenFlg = true;
        this.enemyInfoBtnHiddenFlg = true;

        this.memoUpdateBtnHiddenFlg = true;
        this.memoTxtHiddenFlg = true;
        this.taisakuUpdateBtnHiddenFlg = true;
        this.taisakuTxtHiddenFlg = true;
      }
    },
    /** 勝率算出 */
    getWinRate(win_count, loss_count) {
      return getCmnWinRate(win_count, loss_count);
    },
    /** 勝敗数更新 */
    async updateEnemyInfo() {
      // チェック処理
      if (this.enemyInfoHiddenBtn) {
        // 押下不可状態は更新しないよう、念のため制御
        return;
      }

      // リクエスト情報設定と更新処理呼び出し
      const req = {
        myryaku: this.myryaku,
        fryaku: this.fryaku,
        win: this.win,
        loss: this.loss,
      };
      await requestPostSearchData("top-enemy-info-update", req);

      // 再度、略称検索（ロード）
      eventBus.emit("myInfoSearch");
    },
    /** ファイターメモ更新 */
    async updateMemo() {

      // チェック処理
      if (this.memoUpdateBtnHiddenFlg) {
        // 押下不可状態は更新しないよう、念のため制御
        return;
      }

      // リクエスト情報設定と更新処理呼び出し
      const req = {
        fnum: this.resultData.fnum,
        fact: this.memo,
      };
      await requestPostSearchData("top-updateMemo", req);
    },
    /** ファイターメモ更新 */
    async updateTaisaku() {
      // チェック処理
      if (this.taisakuUpdateBtnHiddenFlg) {
        // 押下不可状態は更新しないよう、念のため制御
        return;
      }

      // リクエスト情報設定と更新処理呼び出し
      const req = {
        mynum: this.resultData.mynum,
        fnum: this.resultData.fnum,
        taisaku: this.taisaku
      };
      await requestPostSearchData("top-updateTaisaku", req);
    },
  },
  computed: {
    /** 画像のパスを生成する */
    getFighterImageSrc() {
      return function (fnum) {
        return getCmnFighterImageSrc(fnum);
      };
    },
  },
};
</script>

<style scoped>
/* [相手情報] 大枠 */
.echar-main-frame {
  /* 高さ */
  height: 92%;
  /* 横幅 */
  width: 95%;
  /* 外側 余白（中央寄せ） */
  margin: 10px auto;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [相手情報] タイトルバー */
.echar-title-frame {
  /* 分割 */
  display: flex;
  /* 外側 余白（中央寄せ） */
  margin: 10px auto;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [相手情報] 略称検索 入力 */
.echar-title-frame input {
  /* 横幅 */
  width: 100px;
}

/* [相手情報] 略称検索 ボタン */
.echar-title-frame button {
  /* 横幅 */
  width: 60px;
  /* 外側 余白 */
  margin: 2px 4px;
}

/* [相手情報] 左枠 */
.echar-left-outframe {
  /* 横幅 */
  width: 600px;
  /* 内側 余白 */
  padding: 10px;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [相手情報][左枠] 相手名（テーブル） */
.echar-info-name table {
  /* 黒い実線の枠 */
  border: 1px solid #000000;
}

/* [相手情報][左枠] 勝率情報（枠） */
.enemy-info-winloss {
  /* 外側 余白 */
  margin: 10px auto;
  /* 内側 余白 */
  padding: 10px;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [相手情報][左枠] 勝率情報（テーブル） */
.enemy-info-winloss table {
  /* 寄せ */
  text-align: center;
  /* フォントサイズ */
  font-size: 14px;
  /* 黒い実線の枠 */
  border: 1px solid #000;
}

/* [相手情報][左枠] 勝率情報（テーブル 入力）*/
.enemy-info-winloss input {
  /* 寄せ */
  text-align: center;
  /* 横幅 */
  width: 30px;
}

/* [相手情報][左枠] 更新ボタン（枠） */
.enemy-info-update {
  /* 寄せ */
  text-align: center;
  /* 外側 余白（中央寄せ） */
  margin: 10px auto;
  /* 内側 余白 */
  padding: 10px;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [相手情報][左枠] 更新ボタン */
.enemy-info-update button {
  /* 横幅 */
  width: 70%;
}

/* [相手情報] 右枠 */
.echar-right-outframe {
  /* 横幅 */
  width: 100%;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [相手情報][右枠] 行動枠 */
.echar-active-outframe {
  /* 高さ */
  height: 200px;
  /* 外側 余白 */
  margin: 10px 20px;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [相手情報][右枠] 対策（枠）(=.echar-active-outframe と同一) */
.echar-taisaku-outframe {
  /* 高さ */
  height: 200px;
  /* 外側 余白 */
  margin: 10px 20px;
  /* [DEBUG用]黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [相手情報][右枠] 対策（枠）(=.echar-active-outframe と同一) */
.echar-text-edit {
  /* 分割 */
  display: flex;
  /* [DEBUG用]黒い実線の枠 */
  /* border: 1px solid #000;*/
}

.echar-text-edit div {
  /* 外側 余白*/
  margin: 4px 2px 2px 2px;
}

.echar-text-edit button {
  /* 横幅 */
  width: 100px;
  /* 外側 余白（右寄せ） */
  margin: 2px 2px 6px auto;
  /* [DEBUG用]黒い実線の枠 */
  /* border: 1px solid #000;*/
}

/* [相手情報][右枠] テキストエリア */
textarea {
  /* リサイズを禁止 */
  resize: none;
  /* 縮小時 横幅固定サイズ */
  min-width: 100%;
  /* 高さ */
  height: 140px;
  /* フォントサイズ */
  font-size: 16px;
  /* 横方向に内容がはみ出した場合に水平方向のスクロールバーを表示する */
  overflow-x: auto;
}
</style>