<!-- プレイヤー管理画面 -->

<template>
  <div>
    <!-- トップヘッダー -->
    <TopHeader />
    <!-- メニューヘッダー -->
    <MenuHeader />

    <div class="main-block">
      <!-- 画面 -->
      <div class="display-main">
        ◆ ファイター登録・更新・削除<br />
        ◆ マイファイター表<br />
        <table>
          <thead>
            <tr>
              <th style="text-align: center" width="10">No</th>
              <th colspan="2" style="text-align: left">ファイター名</th>
              <th style="text-align: left">略称</th>
              <th style="text-align: center" width="100">現レート</th>
              <th style="text-align: center" width="100">前回レート</th>
              <th style="text-align: center" width="100">前々回レート</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="myfighter in my_fighter_datalist"
              :key="myfighter.fighter_no"
            >
              <td style="text-align: center">{{ myfighter.fighter_no }}</td>
              <td style="text-align: center" width="60">
                <img
                  :src="fighterImageSrc(myfighter.fighter_no)"
                  alt="画像なし"
                  width="60"
                  height="60"
                />
              </td>
              <td>{{ myfighter.fighter_name }}</td>
              <td>{{ myfighter.fighter_ryaku }}</td>
              <td style="text-align: center">{{ myfighter.current_rate }}</td>
              <td style="text-align: center">{{ myfighter.history_rate1 }}</td>
              <td style="text-align: center">{{ myfighter.history_rate2 }}</td>
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
import { InitDisplaytRequestData } from "../js/request.js";
import "../css/common.css";

export default {
  components: {
    TopHeader, // TopHeader コンポーネントの使用
    MenuHeader, // MenuHeader コンポーネントの使用
  },
  data() {
    return {
      my_fighter_datalist: [], // fighters データを追加
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
          "my-fighter-manager"
        );
      } catch (error) {
        console.error("Error fetching data:", error);
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
  margin: 50px auto;
}
</style>

