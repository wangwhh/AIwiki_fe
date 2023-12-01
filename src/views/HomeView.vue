<template>
    <a-layout>
        <a-layout-sider class="sider-menu" >
          <Menu/>
        </a-layout-sider>
        <a-layout>
            <a-layout-content class="home-content">
                <Entries/>
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
import TopBar from "@/components/Menu/TopBar.vue";
import Menu from "@/components/Menu/Menu.vue";
import GoodEntry from "@/components/Home/GoodEntry.vue";
import RecTools from "@/components/Home/RecTools.vue";
import {ref} from "vue";
import Entries from "@/components/Home/Entries.vue";

export default {
    name: "HomeView",
    components: {Entries, RecTools, GoodEntry, TopBar, Menu},

    setup() {

    },

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