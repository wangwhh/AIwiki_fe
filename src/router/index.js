import HomeView from "@/views/HomeView.vue";
import ToolsView from "@/views/ToolsView.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: 'home',
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/tools',
        name: 'tools',
        component: ToolsView,
    },
]
const router = new createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
