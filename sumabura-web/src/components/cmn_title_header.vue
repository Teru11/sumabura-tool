<!-- トップヘッダー -->
<template>
  <div class="header">
    <div class="header-inner">
      <!-- ヘッダータイトル -->
      <div class="header-title">
        <img class="title-logo" src="/img/logo/icon.jpg" alt="画像" />
        <div class="title-text">スマブラツール</div>
      </div>
      <!-- トップヘッダーメニュー -->
      <ul class="header-menu">
        <li class="_item">
          <!-- データなし（仮置き）-->
        </li>
        <li class="_item"></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* 総合トップヘッダーブロックCSS */
.header {
  background: #000000;
  border-bottom: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
  font-size: 14px;
  height: 46px;
  line-height: 1.6;
  min-width: 980px;
}
.header-inner {
  align-items: center;
  display: flex;
  height: 100%;
  margin: 0 auto;
  position: relative;
  width: 980px;
}

/* 左側タイトル */
.header-title {
  flex-grow: 1;
  display: flex;
  align-items: center;
}
.header-title > .title-logo {
  width: 45px;
  margin-right: 10px;
}
.header-title > .title-text {
  font-size: 25px;
  color: #d9d9d9;
}

/* 右側リスト */
.header-menu {
  display: table;
}
.header-menu > .img {
  display: table-cell;
  position: relative;
  vertical-align: middle;
}
</style>