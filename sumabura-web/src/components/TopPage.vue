<!-- トップ画面 -->
<template>
  <div>
    <!-- トップヘッダー -->
    <TopHeader />
    <!-- メニューヘッダー -->
    <MenuHeader />

    <!-- ページ -->
    <div class="page-frame">
      
      <!-- 勝率表 -->
      <div class="top-winloss-frame">
        <WinLossTable />
      </div>

      <!-- 相手情報 -->
      <div class="top-echar-frame">
          <EnemyFighter />
      </div>

    </div>

  </div>
</template>

<script>
import TopHeader from "./common/TopHeader.vue";
import MenuHeader from "./common/MenuHeader.vue";
import WinLossTable from "./view/WinLossTable.vue";
import EnemyFighter  from "./view/EnemyFighter.vue";
import "../css/page.css";

export default {
  components: {
    TopHeader,
    MenuHeader,
    WinLossTable,
    EnemyFighter
}
};
</script>

<style scoped>
/* [トップ画面] 勝率表（枠）*/
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

/* [トップ画面] 相手情報（枠）*/
.top-echar-frame {
  /* 外側 余白（左右自動調整-中央寄せ） */  
  margin: 0 auto; 
  /* [Debug用]1pxの黒い実線の枠 */
  /* border: 1px solid #000; */
}
</style>

