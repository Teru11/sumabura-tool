<!--【C】メニューヘッダ -->
<template>
  <div class="menu">
    <ul>
      <li><router-link to="/">対戦</router-link></li>
      <li><router-link to="/battle/history">戦績</router-link></li>
      <li><router-link to="/fighter/manager">プレイヤー管理</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
.menu {
  background-color: #c5c5c5;
  box-shadow: 0 0 2px 0 #0000001f, 0 1px 2px 0 #0000003d;
  border-bottom: 2px solid #000;
}
.menu > ul {
  display: flex;
  margin: 0 auto;
  text-align: center;
}
.menu > ul > li {
  cursor: pointer;
  flex-grow: 1;
}
.menu > ul > li > a {
  display: block;
  color: #444;
  font-weight: 700;
}
.menu > ul > li > a:focus,
.menu > ul > li > a:hover {
  background: #414141;
  color: white;
}
</style>