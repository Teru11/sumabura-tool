<!--【C】対戦記録フレーム（右サイド） -->
<template>
  <div class="right-side">
    <div class="right-side-inner">
      <div class="right-side-header">
        <p>本日の成績</p>
        <span>勝敗:12</span>
        <span>負数:5</span>
        <span>勝率:100%</span>
      </div>
      <table class="side-battle-history">
        <tbody>
          <tr>
            <td><img src="@/assets/img/fighter/12.png" class="fighter-image" /></td>
            <td><img src="@/assets/img/vs.png" class="vs-image" /></td>
            <td><img src="@/assets/img/fighter/1.png" class="fighter-image" /></td>
            <td><span class="result win">2連勝</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/** main-css */
.right-side {
  width: 350px;
}
.right-side-inner {
  margin: 20px;
}
/** header-css */
.right-side-header {
  display: flex;
  height: 30px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #ff7f50, white);
}
.right-side-header p {
  font-weight: bold;
}
.right-side-header span {
  margin-left: 10px;
}
/** table-css */
.side-battle-history {
  text-align: center;
}
.vs-image {
  width: 60px;
  width: 60px;
}
.fighter-image {
  width: 60px;
  height: 60px;
}
.result {
  margin: 0 20px;
  width: 60px;
  font-size: 20px;
  font-weight: 700;
}
</style>
