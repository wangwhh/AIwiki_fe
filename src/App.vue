<script setup>
import Menu from "@/components/menu.vue";
import './assets/global.css'
</script>

<template>
    <a-layout style="height: 100%;">
        <a-layout-header class="layout-header">
            <img src="@/assets/logo.png" alt="" style="height: 50px; position: relative;">
        </a-layout-header>
        <a-layout-content>
            <a-layout style="height: 100%">
                <a-layout-sider v-if="!$route.meta.isLogin" class="layout-sider">
                    <Menu/>
                </a-layout-sider>
                <a-layout-content>
                    <router-view />
                </a-layout-content>
            </a-layout>
        </a-layout-content>
    </a-layout>
</template>

<style scoped>
.layout-header {
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1)
}
.layout-sider {
    width: 230px !important;
    max-width: 300px !important;
    margin: 10px 0 10px 20px;
    border-radius: 10px;
    background-color: white;
}
</style>
