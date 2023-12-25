<!--UserView.vue-->
<template>
    <a-layout>
        <a-layout-content class="home-content">
            <UserInfo/>
        </a-layout-content>
    </a-layout>
</template>

<script>
import UserMenu from "@/views/User/components/UserMenu.vue";
import {provide, ref} from "vue";
import UserInfo from "@/views/User/index/UserInfo.vue";


export default {
    name: "HomeView",
    components: {UserInfo},

    setup() {
        let selectedKeys = ref(['home']);
        provide('selectedKeys', selectedKeys); // 向子组件提供状态
        return {
            selectedKeys,
        };
    },

}
</script>

<style scoped>
.sider-menu {
    height: 100%;
    width: 230px !important;
    max-width: 300px !important;
    margin: 100px 0 10px 20px;
    border-radius: 10px;
    background-color: white;
    position: fixed;
}

.home-content {
    /*background: #fff;*/
    /*margin-top: 72px;*/
    
    overflow: initial ;
    /*border-radius: 10px;*/
    text-align: center;
    /*padding: 24px;*/
}

.right-bar {
    min-width: 300px !important;
    max-width: 300px !important;
    width: 300px !important;
    position: fixed;
    right: 0;
    margin: 100px 20px 16px 0;
}

.ant-layout-header {
    background: white;

}
.ant-layout-sider {
    background: #FFFFFF00;
}

</style>