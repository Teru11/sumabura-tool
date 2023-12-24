// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// components フォルダ内のコンポーネントをインポート
import TopPage from '@/components/TopPage.vue';
import FighterWinLossPage from '@/components/FighterWinLossPage.vue';
import FighterListPage from '@/components/FighterListPage.vue';
import MyFighterManagerPage from '@/components/MyFighterManagerPage.vue';

//** メニューヘッダーによる画面遷移 */
const routes = [
  { path: '/', component: TopPage, meta: { title: 'スマブラツール' } },
  { path: '/fighter-win-loss', component: FighterWinLossPage, meta: { title: '勝率表' }  },
  { path: '/fighter-list', component: FighterListPage, meta: { title: 'ファイター一覧' }  },
  { path: '/my-fighter-manager', component: MyFighterManagerPage, meta: { title: 'マイファイター管理' }  }
];

// Vue Routerの設定
const router = createRouter({
  history: createWebHistory(),
  routes,
});

/* ブラウザのデフォルトタイトル設定 */ 
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'スマブラツール'; 
  next();
});

export default router;