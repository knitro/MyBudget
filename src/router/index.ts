import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import HomePage from '../views/tabs/HomePage.vue'
import TransactionPage from '../views/tabs/TransactionPage.vue'
import HistoryPage from '../views/tabs/HistoryPage.vue'
import BudgetPage from '../views/tabs/BudgetPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        // component: () => import('@/views/tabs/HomePage.vue')
        component: HomePage
      },
      {
        path: 'transaction',
        // component: () => import('@/views/tabs/TransactionPage.vue')
        component: TransactionPage
      },
      {
        path: 'history',
        // component: () => import('@/views/tabs/HistoryPage.vue')
        component: HistoryPage
      },
      {
        path: 'budget',
        // component: () => import('@/views/tabs/BudgetPage.vue')
        component: BudgetPage
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
