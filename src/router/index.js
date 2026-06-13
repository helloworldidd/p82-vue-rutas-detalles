import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CatalogAView from '../views/CatalogAView.vue'
import CatalogBView from '../views/CatalogBView.vue'
import ProductDetailAView from '../views/ProductDetailAView.vue'
import ProductDetailBView from '../views/ProductDetailBView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/catalog-a',
    component: CatalogAView
  },
  {
    path: '/catalog-b',
    name: 'catalog-b',
    component: CatalogBView
  },
  {
      path: '/catalog-a/:id',
      name: 'product-detail-a',
      component: ProductDetailAView,
      props: true
    },
  {
      path: '/catalog-b/:id',
      name: 'product-detail-b',
      component: ProductDetailBView,
      props: true
    },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router