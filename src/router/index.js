import HomeView from "@/views/Home/HomeView.vue";
import ToolsView from "@/views/Tools/ToolsView.vue";
import {createRouter, createWebHistory} from "vue-router";
import EntryView from "@/views/Entry/EntryView.vue";
import DictView from "@/views/Index/index/DictView.vue";
import ClassView from "@/views/Index/index/ClassView.vue";
import ChatView from "@/views/Chat/ChatView.vue";
import ContributeView from "@/views/Contribute/ContributeView.vue";
import IndexView from "@/views/Index/IndexView.vue";
import UserView from "@/views/User/UserView.vue";
import UserInfo from "@/views/User/index/UserInfo.vue";
import EditContent from "@/views/Contribute/index/EditContent.vue";
import AddContent from "@/views/Contribute/index/AddContent.vue";
import SearchView from "@/views/Search/SearchView.vue";

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
        path: '/contrib',
        name: 'contrib',
        props: true,
        component: ContributeView,
        children: [
            {
                path: 'edit',
                name: 'edit',
                component: EditContent,
                meta: {
                    title: '编辑词条',
                },
            },
            {
                path: 'add',
                name: 'add',
                component: AddContent,
                meta: {
                    title: '添加词条',
                },
            },
        ]
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
    {
        path: '/user',
        name: 'user',
        component: UserView,
        children:[
            {
                path: 'info',
                name: 'info',
                component: UserInfo,
                meta: {
                    title: '用户信息',
                },
            },
        ]
    },
    {
        path: '/search',
        name: 'search',
        component: SearchView,
        props: true,
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
