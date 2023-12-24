<!-- トップ画面[勝率表]コンポーネント -->
<template>
  <div class="winloss-main-frame">
    <!-- タイトル・略称検索・レート更新 -->
    <div class="winloss-title-frame">
      <!-- タイトル -->
      <div class="winloss-title">◆ 勝率表</div>

      <!-- 略称検索 -->
      <div class="winloss-fryakuSearch">
        <form @submit.prevent="myInfoSearch">
          <label for="myfryaku">略称検索：</label>
          <input type="text" id="myfryaku" v-model="myryaku" />
          <button type="submit">検索</button>
        </form>
        <form @submit.prevent="filterCancel">
          <button type="submit" :disabled="filterCancelBtnHiddenFlg">
            解除
          </button>
        </form>
      </div>

      <!-- レート更新 -->
      <div class="winloss-updateRate">
        <form @submit.prevent="updateRate">
          <input
            type="text"
            :disabled="rateInputBoxHiddenFlg"
            v-model="myCurrentRate"
          />
          <button type="submit" :disabled="rateUpdateBtnHiddenFlg">更新</button>
        </form>
        <form @submit.prevent="saveRate">
          <button type="submit" :disabled="rateSaveBtnHiddenFlg">保存</button>
        </form>
      </div>
    </div>

    <!-- 勝率表 -->
    <div class="winloss-table-frame">
      <table>
        <thead>
          <tr>
            <th colspan="2">ファイター</th>
            <th width="10%">勝数</th>
            <th width="10%">負数</th>
            <th width="10%">勝率</th>
            <th width="10%">現レート</th>
            <th width="10%">増減値</th>
            <th width="10%">前回</th>
            <th width="10%">前々回</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="itemData in myfighters" :key="itemData.fnum">
            <td
              class="td-fighterImg"
              :style="{ backgroundColor: itemData.fcolor }"
            >
              <img
                :src="getFighterImageSrc(itemData.fnum)"
                alt="画像なし"
                width="60"
                height="60"
              />
            </td>
            <td class="td-fighterName">{{ itemData.fname }}</td>
            <td>{{ itemData.win }}</td>
            <td>{{ itemData.loss }}</td>
            <td>{{ getWinRate(itemData.win, itemData.loss) }}</td>
            <td>{{ itemData.current_rate }}</td>
            <td
              :style="{
                fontWeight: 'bold',
                color: getRateStatusChangeColor(
                  itemData.current_rate,
                  itemData.history_rate1
                ),
              }"
            >
              {{ getRateStatus(itemData.current_rate, itemData.history_rate1) }}
            </td>
            <td>{{ itemData.history_rate1 }}</td>
            <td>{{ itemData.history_rate2 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script>
import { eventBus } from "../../js/eventBus.js";
import {
  InitDisplaytRequestData,
  requestPostSearchData,
} from "../../js/request.js";
import { getCmnFighterImageSrc } from "../../js/imageUtils.js";
import { getCmnWinRate } from "../../js/common.js";
import "../../css/common.css";

export default {
  data() {
    return {
      /** 勝率表データ */
      myfighters: [],
      /** 略称名 */
      myryaku: "",
      /** 現レート */
      myCurrentRate: 0,
      /** ＜排他制御＞フィルター解除ボタン[初期値：押下不可] */
      filterCancelBtnHiddenFlg: false,
      /** ＜排他制御＞現レート入力[初期値：編集不可] */
      rateInputBoxHiddenFlg: false,
      /** ＜排他制御＞現レート更新[初期値：押下不可] */
      rateUpdateBtnHiddenFlg: false,
      /** ＜排他制御＞現レート保存ボタン[初期値：押下不可] */
      rateSaveBtnHiddenFlg: false,
    };
  },
  mounted() {
    /** 初期画面表示 */
    this.InitDisplaytRequestData();

    eventBus.on("myInfoSearch", () => {
      // 再度、略称検索（ロード）
      this.myInfoSearch();
    });
    
  },
  methods: {
    /** 初期画面データ取得 */
    async InitDisplaytRequestData() {
      // 初期情報設定
      this.myfighters = await InitDisplaytRequestData("top");
      this.myryaku = "";
      this.myCurrentRate = 0;

      // マイファイター情報設定：EnemyFighter.vue
      eventBus.emit("update-myryaku", this.myryaku, true);
      
      // 入力排他制御 押下不可
      eventBus.emit("enemy-search-hiddenFlg-on");
      this.filterCancelBtnHiddenFlg = true;
      this.rateInputBoxHiddenFlg = true;
      this.rateUpdateBtnHiddenFlg = true;
      this.rateSaveBtnHiddenFlg = true;
    },
    /** 略称検索 */
    async myInfoSearch() {

      // チェック処理
      if (this.myryaku == "") {
        console.log("略称検索を入力してください。");
        return;
      }

      // リクエスト情報設定と取得
      const req = { fryaku: this.myryaku };
      this.myfighters = await requestPostSearchData("top-myInfo", req);

      if (this.myfighters.length > 0) {
        // データが存在する場合

        // 現レート設定
        this.myCurrentRate = this.myfighters[0].current_rate;

        // マイファイター情報設定：EnemyFighter.vue
        eventBus.emit("update-myryaku", this.myryaku, false);

        // 入力排他制御 押下不可解除
        eventBus.emit("enemy-search-hiddenFlg-off");
        this.filterCancelBtnHiddenFlg = false;
        this.rateInputBoxHiddenFlg = false;
        this.rateUpdateBtnHiddenFlg = false;
        this.rateSaveBtnHiddenFlg = false;

      } else {
        // データが存在しない場合、初期画面表示
        this.myfighters = this.InitDisplaytRequestData();
      }
    },
    /** フィルター解除 */
    async filterCancel() {
      // 初期画面表示
      this.myfighters = this.InitDisplaytRequestData();
    },
    /** レート更新 */
    async updateRate() {
      // リクエスト情報設定と更新処理呼び出し
      const req = { fryaku: this.myryaku, currentRate: this.myCurrentRate };
      await requestPostSearchData("update-currentRate", req);

      // 再度、略称検索（ロード）
      await this.myInfoSearch();
    },
    /** レート保存 */
    async saveRate() {
      // リクエスト情報設定と更新処理呼び出し
      const req = { fryaku: this.myryaku };
      await requestPostSearchData("save-currentRate", req);

      // 再度、略称検索（ロード）
      await this.myInfoSearch();
    },
    /** 勝率算出 */
    getWinRate(win_count, loss_count) {
      return getCmnWinRate(win_count, loss_count);
    },
    /** 増減値算出 */
    getRateStatus(current_rate, history_rate1) {
      let difference = current_rate - history_rate1;
      if (difference < 0) {
        return "-" + Math.abs(difference);
      } else if (difference > 0) {
        return "+" + Math.abs(difference);
      } else {
        return "";
      }
    },
    /** 増減値による色変更 */
    getRateStatusChangeColor(current_rate, history_rate1) {
      let difference = current_rate - history_rate1;
      if (difference < 0) {
        // "-"の場合は青色
        return "blue";
      } else if (difference > 0) {
        // "+"の場合は赤色
        return "red";
      } else {
        // それ以外の場合はデフォルトの色を維持
        return "inherit";
      }
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
/* [勝率表] 大枠 */
.winloss-main-frame {
  /* 高さ */
  height: 92%;
  /* 横幅 */
  width: 95%;
  /* 外側 余白（左右自動調整-中央寄せ） */
  margin: 10px auto;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [勝率表] タイトル（枠） */
.winloss-title-frame {
  /* 分割 */
  display: flex;
  /* 外側 余白（左右自動調整-中央寄せ） */
  margin: 2px auto;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000;　*/
}

/* [勝率表][左枠] タイトル */
.winloss-title {
  /* 横幅 */
  width: 150px;
  /* 縮小時 横幅固定サイズ */
  min-width: 77px;
  /* 内側 余白 */
  padding: 4px 2px 2px 2px;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [勝率表][中央] 略称検索 */
.winloss-fryakuSearch {
  /* 分割 */
  display: flex;
  /* 横幅 */
  width: 45%;
  /* 縮小時 横幅固定サイズ */
  min-width: 265px;
  /* 内側 余白 */
  padding: 4px 2px 2px 4px;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [勝率表][中央] 略称検索＜入力＞  */
.winloss-fryakuSearch input {
  /* 横幅 */
  width: 70px;
  /* 外側 余白（右側） */
  margin: 2px 4px 2px 2px;
}

/* [勝率表][中央] 略称検索＜ボタン＞ */
.winloss-fryakuSearch button {
  /* 横幅 */
  width: 43px;
  /* 外側 余白 */
  margin: 2px;
}

/* [勝率表][右枠] レート更新 */
.winloss-updateRate {
  /* 分割 */
  display: flex;
  /* 横幅 */
  width: 300px;
  /* 縮小時 横幅固定サイズ */
  min-width: 170px;
  /* 内側 余白 */
  padding: 4px 2px 2px 4px;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [勝率表][右枠] レート更新＜入力＞ */
.winloss-updateRate input {
  /* 寄せ */
  text-align: center;
  /* 横幅 */
  width: 50px;
  /* 外側 余白（右側）*/
  margin: 2px 4px 2px 2px;
}

/* [勝率表][右枠] レート更新＜ボタン＞ */
.winloss-updateRate button {
  /* 横幅 */
  width: 43px;
  /* 外側 余白 */
  margin: 2px;
}

/* [勝率表] 勝率表 枠 */
.winloss-table-frame {
  /* 高さ(テーブル表示サイズを調整) */
  height: 90%;
  /* 横方向に内容がはみ出した場合に水平方向のスクロールバーを表示する */
  overflow-x: auto;
  /* テーブル外枠 */
  border: 1px solid #000000;
}
</style>
