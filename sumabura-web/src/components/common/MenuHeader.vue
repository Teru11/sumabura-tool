<!-- メニューヘッダー -->
<template>
  <!-- メニューヘッダー -->
  <div class="header-menu">
    <div class="header-menu_inner">
      <ul class="header-menu_inne_ul">
        <li class="menu-item">
          <!-- トップページに画面遷移[TopPage.vue] -->
          <router-link class="menu-value" to="/">トップ</router-link>
        </li>
        <li class="menu-item">
          <!-- 勝率表ページに画面遷移[FighterWinLossPage.vue] -->
          <router-link class="menu-value" to="/fighter-win-loss"
            >勝率表</router-link
          >
        </li>
        <li class="menu-item">
          <!-- ファイター一覧ページに画面遷移[FighterListPage.vue] -->
          <router-link class="menu-value" to="/fighter-list"
            >ファイター一覧</router-link
          >
        </li>
        <li class="menu-item">
          <!-- プレイヤー管理ページに画面遷移[MyFighterManagerPage.vue] -->
          <router-link class="menu-value" to="/my-fighter-manager"
            >プレイヤー管理</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* 総合メニューヘッダーブロックCSS */
.header-menu {
  background: #ffffff;
  box-shadow: 0 0 2px 0 #0000001f, 0 1px 2px 0 #0000003d;
  display: flex;
  position: relative;
  justify-content: center; /* 中央寄せ */
  min-width: 980px;
}
.header-menu_inner {
  display: flex;
  position: relative;
}
.header-menu_inne_ul {
  margin: 0 auto;
  padding: 0px;
}
.menu-item {
  cursor: pointer;
  display: block;
  float: left;
  height: 48px;
  position: relative;
  text-align: center;
  width: 150px;
}
.menu-item a:focus {
  /* リンクにフォーカス時のスタイル */
  background: #d7d6dc;
}
.menu-value {
  color: #444;
  display: block;
  font-weight: 700;
  padding: 14px 4px 10px;
}
.menu-value > a {
  /* メニュー文字設定 */
  color: #444;
  font-size: 16px;
  text-decoration: none;
}
</style>