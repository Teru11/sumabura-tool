<!-- 勝率表画面 -->
<template>
  <div>
    <!-- トップヘッダー -->
    <TopHeader />
    <!-- メニューヘッダー -->
    <MenuHeader />

    <!-- ページ -->
    <div class="page-frame">
      <!-- タイトル -->
      <div class="winloss-title-frame">
        <!-- タイトル -->
        <div class="winloss-title">◆ ファイター一覧</div>
        <form @submit.prevent="sortEncount">
          <button type="submit">出現数</button>
        </form>
      </div>

      <!-- ファイター一覧 -->
      <div class="winloss-table-frame">
        <table>
          <thead>
            <tr>
              <th colspan="2" width="70px">ファイター</th>
              <th width="70px">勝数</th>
              <th width="70px">負数</th>
              <th width="70px">勝率</th>
              <th width="70px">出現数</th>
              <th width="550px">行動</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="itemData in fighterList" :key="itemData.fnum">
              <td class="td-fighterImg">
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
              <td>{{ itemData.total }}</td>
              <td class="winloss-act">{{ itemData.fact }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "./common/TopHeader.vue";
import MenuHeader from "./common/MenuHeader.vue";
import { requestPostSearchData } from "../js/request.js";
import { getCmnFighterImageSrc } from "../js/imageUtils.js";
import { getCmnWinRate } from "../js/common.js";
import "../css/page.css";
import "../css/common.css";

export default {
  components: {
    TopHeader,
    MenuHeader,
  },
  data() {
    return {
      /** ファイター一覧 */
      fighterList: [],
    };
  },
  mounted() {
    /** 初期画面表示 */
    this.requestPostSearchData();
  },
  methods: {
    /** 初期画面データ取得 */
    async requestPostSearchData() {
      // 初期情報設定
      const req = { sort: "fnum" };
      this.fighterList = await requestPostSearchData("fighter-list", req);
    },
    /** ソート：出現数 */
    async sortEncount() {
      // リクエスト情報設定と取得
      const req = { sort: "total" };
      this.fighterList = await requestPostSearchData("fighter-list", req);
    },
    /** 勝率算出 */
    getWinRate(win_count, loss_count) {
      return getCmnWinRate(win_count, loss_count);
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
/* [勝率表画面] 勝率表（枠）*/
.top-winloss-frame {
  /* 高さ */
  height: 300px;
  /* 横幅 */
  width: 100%;
  /* 外側 余白（左右自動調整-中央寄せ） */
  margin: 0 auto;
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
  /* border: 1px solid #000; */
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

/* [勝率表ページ][マイファイター情報] 左枠 */
.winloss-left-outframe {
  /* 横幅 */
  width: 350px;
  /* 内側 余白 */
  padding: 10px;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [相手情報][左枠] 相手名（テーブル） */
.winloss-myinfo-name table {
  /* 黒い実線の枠 */
  border: 1px solid #000000;
}

/* [勝率表ページ][マイファイター情報] 右枠 */
.winloss-right-outframe {
  /* 内側 余白 */
  padding: 10px;
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}

/* [勝率表ページ][マイファイター情報] 総合情報 */
.winloss-right-outframe table {
  /* 横幅 */
  width: 200px;
  /* 黒い実線の枠 */
  border: 1px solid #000;
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

/* [勝率表] 勝率表 対策 */
.winloss-act {
  /* 寄せ */
  text-align: left;
}
</style>

