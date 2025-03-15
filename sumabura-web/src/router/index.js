import { createRouter, createWebHistory } from 'vue-router'
import MainTop from '../views/main_top.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 【M】対戦（トップ画面）画面
      path: '/',
      name: 'main_top',
      component: MainTop,
      meta: { title: 'スマブラツール - 対戦画面' }
    },
    {
      // 【M】戦績画面（遅延ローディング）
      path: '/battle/history',
      name: 'main_battle_history',
      component: () => import('../views/main_battle_history.vue'),
      meta: { title: 'スマブラツール - 戦績画面' }
    },
    {
      // 【M】ファイター管理画面（遅延ローディング）
      path: '/fighter/manager',
      name: 'main_fighter_manager',
      component: () => import('../views/main_fighter_manager.vue'),
      meta: { title: 'スマブラツール - ファイター管理画面' }
    },
  ],
})

// ページタイトルを変更
router.afterEach((to) => {
  document.title = to.meta.title || 'スマブラツール';
});

export default router;