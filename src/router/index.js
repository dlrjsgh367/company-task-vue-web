// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorldView from "@/views/HelloWorldView.vue";

const routes = [
    {
        path: '/hello-world',
        name: 'greeting',
        component: HelloWorldView,
    },
];
const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;