export default [
    {
        path: '/',
        name: 'DashBoard',
        component: () => import( '../views/DashBoard.vue'),
        meta: {},
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import( '../views/Login.vue'),
        meta: {},
    },
    {
        path: '/user',
        name: 'User',
        component: () => import( '../views/User.vue'),
        meta: {},
    }
];