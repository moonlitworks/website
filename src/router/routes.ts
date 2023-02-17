import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/about',
    component: () => import('layouts/SubLayout.vue'),
    children: [{ path: '', component: () => import('pages/AboutPage.vue') }],
  },
  {
    path: '/projects',
    component: () => import('layouts/SubLayout.vue'),
    children: [{ path: '', component: () => import('pages/ProjectsPage.vue') }],
  },
  {
    path: '/yami',
    component: () => import('layouts/SubLayout.vue'),
    children: [{ path: '', component: () => import('pages/YamiPage.vue') }],
  },
  {
    path: '/notable-contributors',
    component: () => import('layouts/SubLayout.vue'),
    children: [{ path: '', component: () => import('pages/NotableContributorsPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorPage.vue'),
  },
];

export default routes;
