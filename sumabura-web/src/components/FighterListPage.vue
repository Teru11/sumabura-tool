<!-- ファイター一覧画面 -->

<template>
  <div>
    <!-- トップヘッダー -->
    <TopHeader />
    <!-- メニューヘッダー -->
    <MenuHeader />

    <div class="main-block">
      <!-- 画面 -->
      <div class="display-main">
        <table>
          <thead>
            <tr>
              <th style="text-align: center" width="10">No</th>
              <th colspan="2" style="text-align: left">ファイター名</th>
              <th style="text-align: left">略称</th>
              <th width="300">行動</th>
              <th width="300">弱点</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="fighter in fighter_datalist" :key="fighter.fighter_no">
              <td style="text-align: center">{{ fighter.fighter_no }}</td>
              <td style="text-align: center" width="60">
                <img
                  :src="fighterImageSrc(fighter.fighter_no)"
                  alt="画像なし"
                  width="60"
                  height="60"
                />
              </td>
              <td>{{ fighter.fighter_name }}</td>
              <td>{{ fighter.fighter_ryaku }}</td>
              <td>{{ fighter.action }}</td>
              <td>{{ fighter.weakness }}</td>
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
      fighter_datalist: [], // fighters データを追加
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
        this.fighter_datalist = await InitDisplaytRequestData("fighter-list");
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

