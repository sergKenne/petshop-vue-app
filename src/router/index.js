import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Shop from '@/views/Shop.vue';
import Blog from '@/views/Blog.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
