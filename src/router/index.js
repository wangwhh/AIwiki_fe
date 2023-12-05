import HomeView from "@/views/HomeView.vue";
import ToolsView from "@/views/ToolsView.vue";
import {createRouter, createWebHistory} from "vue-router";
import EntryView from "@/views/EntryView.vue";
import KitView from "@/views/KitView.vue";
import IndexView from "@/views/IndexView.vue";

const routes = [
    {
        path: '/',
        redirect: 'home',
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'AI百科全书系统',
        }
    },
    {
        path: '/index',
        name: 'index',
        component: IndexView,
        meta: {
            title: 'AI百科全书系统',
        }
    },
    {
        path: '/tools',
        name: 'tools',
        component: ToolsView,
        meta: {
            title: '实用工具',
        },
    },
    {
        path: '/entry',
        name: 'entry',
        props: true,
        component: EntryView,

    },
    {
        path: '/kit',
        name: 'kit',
        props: true,
        component: KitView,

    },

]
const router = new createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if(to.meta.title) {
        document.title = 'AIWiki - ' + to.meta.title;
    }
    next();
})
export default router;
