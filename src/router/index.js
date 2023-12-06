import HomeView from "@/views/HomeView.vue";
import ToolsView from "@/views/ToolsView.vue";
import {createRouter, createWebHistory} from "vue-router";
import EntryView from "@/views/EntryView.vue";
import KitView from "@/views/KitView.vue";
import DictView from "@/views/DictView.vue";
import ClassView from "@/views/ClassView.vue";

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
    {
        path: '/dict',
        name: 'dict',
        component: DictView,
        meta: {
            title: '词典索引',
        },
    },
    {
        path: '/class',
        name: 'class',
        component: ClassView,
        meta: {
            title: '分类索引',
        },
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
