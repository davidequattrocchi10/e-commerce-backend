import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import RequestPassword from '../views/RequestPassword.vue';
import ResetPassword from '../views/ResetPassword.vue';
import AppLayout from '../components/AppLayout.vue';
import Products from '../views/Products.vue';

const routes = [
    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
            {
                path: 'products',
                name: 'app.products',
                component: Products
            },

        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword
    },
    {
        path: '/reset-password/:token',
        // :token is a dynamic segment in the route path. This route will match any URL that starts with /reset-password/ 
        // followed by any value (the token). Examples of matching URLs: /reset-password/abc123, /reset-password/1234.
        name: 'resetPassword',
        component: ResetPassword
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router;