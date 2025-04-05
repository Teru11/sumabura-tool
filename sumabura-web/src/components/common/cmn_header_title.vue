<!--【C】タイトルヘッダ -->
<template>
  <div class="title">
    <router-link to="/" class="title-logo">
      <img src="@/assets/img/sumabura-logo-icon.ico" />
      <p>スマブラツール</p>
    </router-link>
  </div>
</template>

<style scoped>
.title {
  background-color: #000000;
}
.title-logo {
  display: flex;
  align-items: center;
}
.title-logo img {
  width: 40px;
  height: 40px;
}
.title-logo p {
  font-weight: 700;
  color: white;
  margin: 10px;
}
</style>