import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   redirect: '/tabs/tab1'
  // },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: () => import('@/views/tabs/HomePage.vue')
      },
      {
        path: 'custom-payment',
        component: () => import('@/views/tabs/TransactionPage.vue')
      },
      {
        path: 'history',
        component: () => import('@/views/tabs/HistoryPage.vue')
      },
      {
        path: 'set-budget',
        component: () => import('@/views/tabs/BudgetPage.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
