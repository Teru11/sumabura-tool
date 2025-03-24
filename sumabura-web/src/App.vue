<script setup>
import { RouterView } from 'vue-router';
import HeaderTitle from './components/common/cmn_header_title.vue';
import HeaderMenu from './components/common/cmn_header_menu.vue';
import SideLeft from './components/common/cmn_side_left.vue';
import SideRight from './components/common/cmn_side_right.vue';
</script>

<template>
  <div>
    <header>
      <HeaderTitle />
      <HeaderMenu />
    </header>
    <main>
      <leftContent>
        <SideLeft />
      </leftContent>
      
      <mainContent>
        <RouterView />
      </mainContent>

      <rightContent>
        <SideRight />
      </rightContent>
    </main>
  </div>
</template>

<style scoped>
header {
  /*border: 1px solid #000;    /* [Debug用]1pxの黒い実線の枠 */
}
main {
  border: 1px solid #000;    /* [Debug用]1pxの黒い実線の枠 */
  display: flex;
}
</style>
