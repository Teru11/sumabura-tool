<!--【F】ファイター管理フォーム -->
<template>
  <div class="from-fighter-manager">
    <div class="fighter-info-select">
      <!-- 略称検索 -->
      <form>
        <input type="text" id="nickname" placeholder="略称検索" />
        <button type="submit" name="search">検索</button>
      </form>
      <div class="message">*****の略称を「」変更しました。</div>
    </div>

    <div class="fighter-table fighter-info">
      <table class="fighter-name-view">
        <tbody>
          <tr>
            <td class="fighter-image">
              <img src="@/assets/img/fighter/12.png" />
            </td>
            <td class="fighter-name">キャプテン・ファルコン</td>
          </tr>
        </tbody>
      </table>
      <form>
        <button type="submit" name="add">追加</button>
        <button type="submit" name="delete">削除</button>
      </form>
    </div>

    <div class="nickname-form">
      <span style="margin-right: 20px">略称名</span>
      <span>:</span>
      <span style="margin-left: 20px">M</span>
      <form>
        <input type="text" id="updateNickname" value="M" />
        <button type="submit" name="update">略称名変更</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.from-fighter-manager {
  margin-bottom: 20px;
}
.fighter-info-select {
  display: flex;
  white-space: nowrap;
}
.fighter-info-select input {
  margin-left: 0px;
}
.message {
  color: red;
  margin-left: 20px;
}
.fighter-info {
  display: flex;
  margin-bottom: 30px;
}
.fighter-info .fighter-name-view {
  width: 400px;
}
.fighter-info .fighter-info-view {
  margin-left: 30px;
  width: 200px;
}
.fighter-info form {
  margin-top: 4px;
  margin-left: 30px;
  display: flex;
  flex-direction: column; /* ボタンを縦に並べる */
  gap: 8px;               /* ボタン間の隙間を調整 */
}
.nickname-form {
  display: flex;
}
.nickname-form form {
  margin-left: 150px;
}
/** input */
#nickname {
  width: 120px;
}
#updateNickname {
  width: 120px;
}
</style>
