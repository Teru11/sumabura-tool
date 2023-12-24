<!-- トップ画面 -->
<template>
  <div>
    <!-- トップヘッダー -->
    <TopHeader />
    <!-- メニューヘッダー -->
    <MenuHeader />

    <!-- トップ画面 -->
    <div class="top-page-frame">
      
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
/* [トップ画面] 大枠 */
.top-page-frame {
  /* 縮小時 横幅固定サイズ */
  min-width: 400px;  
  /* 内側 余白 */     
  padding: 20px;
  /* 外側 余白（横幅） */
  margin: 0 25%;
  /* [Debug用]1pxの黒い実線の枠 */
  border: 1px solid #000; 
}

/* 4分割(3/4)サイズの場合 */
@media (max-width: 2000px) {
  .top-page-frame {
  /* 外側 余白（横幅） */
  margin: 0 18%;
  }
}

/* 画面より大きいサイズの場合 */
@media (max-width: 1800px) {
  .top-page-frame {
  /* 外側 余白（横幅） */
  margin: 0 10%;
  }
}

/* 画面半分サイズの場合(本当は1200px) */
@media (max-width: 1300px) {
  .top-page-frame {
  /* 外側 余白（横幅） */
  margin: 0 0%;
  }
}

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

