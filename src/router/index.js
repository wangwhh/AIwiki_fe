import { createRouter, createWebHistory } from 'vue-router';
import EntriesView from '@/views/EntriesView.vue';
import LoginView from "@/views/LoginView.vue";
import ContribView from "@/views/ContribView.vue";
import TopicsView from "@/views/TopicsView.vue";
import ToolsView from "@/views/ToolsView.vue";
import ErrorView from "@/views/ErrorView.vue";


const routes = [
    {
        path: '/',
        redirect: 'login',
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: {
            isLogin: true,
        }
    },
    {
        path: '/topics',
        name: 'topics',
        component: TopicsView,
    },
    {
        path: '/entries',
        name: 'entries',
        component: EntriesView,
    },
    {
        path: '/tools',
        name: 'tools',
        component: ToolsView,
    },
    {
        path: '/contrib',
        name: 'contrib',
        component: ContribView,
    },
    {
        path: '/error',
        name: 'error',
        component: ErrorView,
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes,
})

export default router;