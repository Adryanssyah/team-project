import { createRouter, createWebHistory } from 'vue-router';
import landing from '../views/Landing.vue';
import detail from '../views/Detail.vue';
import contributor from '../views/Contributor.vue';

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes: [
          {
               path: '/',
               name: 'landing',
               component: landing,
               meta: {
                    title: 'Selamat Datang',
               },
          },
          {
               path: '/detail/:aplikasi',
               name: 'detail',
               component: detail,
               meta: {
                    title: 'Detail',
               },
               props: true,
          },
          {
               path: '/team',
               name: 'team',
               component: contributor,
               meta: {
                    title: 'Team',
               },
          },
     ],
});

router.beforeEach((to, from, next) => {
     document.title = `${to.meta.title}`;
     next();
});

export default router;
