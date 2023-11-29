<template>
    <a-layout>
        <a-layout-header class="layout-header" :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
            <TopBar/>
        </a-layout-header>
        <a-layout-sider class="sider-menu" >
          <Menu/>
        </a-layout-sider>
        <a-layout>
            <a-layout-content class="home-content">
                <div>
                    content
                    <div v-for="i in 100">
                        <p>content</p>
                    </div>
                </div>
            </a-layout-content>
            <a-layout-sider class="right-bar">
                <a-flex gap="middle" vertical>
                    <GoodEntry/>
                    <RecTools/>
                </a-flex>

            </a-layout-sider>
        </a-layout>

    </a-layout>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import Menu from "@/components/Menu.vue";
import GoodEntry from "@/components/Home/GoodEntry.vue";
import RecTools from "@/components/Home/RecTools.vue";

export default {
    name: "HomeView",
    components: {RecTools, GoodEntry, TopBar, Menu}
}
</script>

<style scoped>
.sider-menu {
    height: 100%;
    width: 200px;
    margin-top: 80px;
    border-radius: 10px;
    background-color: white;
    position: fixed;

}
.layout-header {
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1)
}
.home-content {
    background: #fff;
    /*margin-top: 72px;*/
    margin: 80px 320px 16px 210px;
    overflow: initial ;
    border-radius: 10px;
    text-align: center;
    padding: 24px;
}

.right-bar {
    min-width: 300px !important;
    max-width: 300px !important;
    width: 300px !important;
    position: fixed;
    right: 0;
    margin-right: 10px;
    margin-top: 80px;
}

.ant-layout-header {
    background: white;

}
.ant-layout-sider {
    background: #FFFFFF00;
}

</style>