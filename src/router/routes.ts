import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/home/IndexPage.vue') }],
  },
  {
    path: '/about',
    component: () => import('layouts/SubLayout.vue'),
    children: [{ path: '', component: () => import('pages/about/AboutPage.vue') }],
  },
  {
    path: '/projects',
    component: () => import('layouts/SubLayout.vue'),
    children: [{ path: '', component: () => import('pages/projects/ProjectsPage.vue') }],
  },
  {
    path: '/yami',
    component: () => import('layouts/SubLayout.vue'),
    children: [{ path: '', component: () => import('pages/about/YamiPage.vue') }],
  },
  {
    path: '/notable-contributors',
    component: () => import('layouts/SubLayout.vue'),
    children: [{ path: '', component: () => import('pages/about/NotableContributorsPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/home/ErrorPage.vue'),
  },
];

export default routes;
