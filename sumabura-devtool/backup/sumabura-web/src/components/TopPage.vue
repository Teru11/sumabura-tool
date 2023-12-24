<!-- トップ画面 -->

<template>
  <div>
    <!-- トップヘッダー -->
    <TopHeader />
    <!-- メニューヘッダー -->
    <MenuHeader />

    <!-- 画面 -->
    <div class="main-block">
      <!--　勝率表コンポーネント -->
      <div class="top-winloss-table"></div>

      <!-- 使用キャラと相手の対戦枠 -->
      <div class="top-bottom-frame">
        <div class="top-left-frame">
          ◆ 自分<br/>
        </div>
        <div class="top-right-frame">
          ◆ 相手<br/>
          <input type="text" v-model="inputText" /><br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "./common/TopHeader.vue";
import MenuHeader from "./common/MenuHeader.vue";
import { InitDisplaytRequestData } from "../js/request.js";
import "../css/common.css";

export default {
  components: {
    TopHeader,
    MenuHeader,
  },
  data() {
    return {
      my_fighter_datalist: [], // myfighters データを追加
      playerfighter: "",
    };
  },
  mounted() {
    // 初期画面表示
    this.InitDisplaytRequestData();
  },
  methods: {
    // 初期画面データ取得
    async InitDisplaytRequestData() {
      try {
        // request.jsのメソッド呼び出し
        this.my_fighter_datalist = await InitDisplaytRequestData(
          "my-fighter-list"
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    // 勝率
    WinningRate(win_count, loss_count) {
      let totalcount = win_count + loss_count;
      let rate = 0;
      if (totalcount > 0) {
        rate = Math.round((win_count / totalcount) * 100);
      }
      return rate + "%";
    },
    // 増減値
    IncreaseDecreaseValue(current_rate, history_rate1) {
      let difference = current_rate - history_rate1;
      if (difference < 0) {
        return "-" + Math.abs(difference);
      } else if (difference > 0) {
        return "+" + Math.abs(difference);
      } else {
        return "";
      }
    },
  },
  computed: {
    // 画像のパスを生成する computed プロパティ
    fighterImageSrc() {
      return function (fighterNum) {
        // ファイター名を元にファイル名を生成
        const paddedFighterNum = String(fighterNum).padStart(2, "0");
        return `/img/fighter/${paddedFighterNum}.png`;
      };
    },
  },
};
</script>

<style scoped>
/* 画面枠 */
.main-block {
  flex-grow: 1;
  width: 100%;
}
.display-main {
  width: 80%;
  margin: 20px auto;
}

/* <!-- 使用キャラと相手の対戦枠 --> */
.container {
  margin: 30px auto;
  display: flex; /* flexboxを使用して要素を並べる */
  height: 100vh; /* 画面の高さいっぱいにする */
}
.left {
  width: 50%; /* 左側のdivの幅を50%に設定 */
  background-color: lightblue; /* 見やすいように背景色を追加 */
}

.right {
  width: 50%; /* 右側のdivの幅を50%に設定 */
  background-color: lightgreen; /* 見やすいように背景色を追加 */
}
</style>

