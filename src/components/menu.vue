<template>
    <a-menu
            mode="inline"
            :style="{ borderRadius: '10px' }"
    >
        <router-link to="/topics">
            <a-menu-item key="0">
                专题管理
            </a-menu-item>
        </router-link>
        <router-link to="/entries">
            <a-menu-item key="1">
                词条管理
            </a-menu-item>
        </router-link>
        <router-link to="/tools">
            <a-menu-item key="2">
                实用工具管理
            </a-menu-item>
        </router-link>
        <router-link to="/contrib">
            <a-menu-item key="3">
                用户贡献审核
            </a-menu-item>
        </router-link>
        <router-link to="/error">
            <a-menu-item key="4">
                用户纠错审核
            </a-menu-item>
        </router-link>
    </a-menu>
</template>
<script>
import { ref } from 'vue';

export default {
    name: "menu",
    setup() {
        return {

        };
    },

};
</script>
<style scoped>
.menu {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: white;
}
</style>
