import HomeView from "@/views/Home/HomeView.vue";
import ToolsView from "@/views/Tools/ToolsView.vue";
import {createRouter, createWebHistory} from "vue-router";
import EntryView from "@/views/Detail/EntryView.vue";
import DictView from "@/views/Index/index/DictView.vue";
import ClassView from "@/views/Index/index/ClassView.vue";
import ChatView from "@/views/ChatView.vue";
import EditView from "@/views/Edit/EditView.vue";
import IndexView from "@/views/Index/IndexView.vue";

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
        path: '/edit',
        name: 'edit',
        props: true,
        component: EditView,
    },
    {
        path: '/chat',
        name: 'chat',
        props: true,
        component: ChatView,

    },
    {
        path: '/index',
        name: 'index',
        component: IndexView,
        children:[
            {
                path: 'dict',
                name: 'dict',
                component: DictView,
                meta: {
                    title: '字典索引',
                },
            },
            {
                path: 'class',
                name: 'class',
                component: ClassView,
                meta: {
                    title: '分类索引',
                },
            }
        ]
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
