<template>
  <div class="header-title">
    <router-link to="/" class="header-logo">
      <img src="@/assets/img/sumabura-logo-icon.ico" />
      <p>スマブラツール</p>
    </router-link>
  </div>
</template>

<style scoped>
.header-title {
  background-color: #000000;
}
.header-logo {
  display: flex;
  align-items: center;
}
.header-logo > img {
  width: 40px;
  height: 40px;
}
.header-logo > p {
  font-weight: 700;
  color: white;
  margin: 10px;
}
</style>