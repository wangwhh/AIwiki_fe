<template>
    <a-layout>
        <a-layout-sider class="sider-menu" >
          <ToolsMenu/>
        </a-layout-sider>
        <a-layout>
            <a-layout-sider class="fcontent">
                <a-flex gap="middle" vertical>
                    <ToolsEntries/>
                </a-flex>
            </a-layout-sider>
            <a-layout-sider class="scontent">
                <a-flex gap="middle" vertical>
                    <FKit/>
                </a-flex>
            </a-layout-sider>
            <a-layout-sider class="tcontent">
                <a-flex gap="middle" vertical>
                    <SKit/>
                </a-flex>
            </a-layout-sider>
            <a-layout-sider class="right-bar">
                <a-flex gap="middle" vertical>
                    <RecTools/>
                </a-flex>
            </a-layout-sider>
        </a-layout>

    </a-layout>
</template>

<script>
import TopBar from "@/components/Menu/TopBar.vue";
import ToolsMenu from "@/components/Tools/ToolsMenu.vue";
// import GoodEntry from "@/components/Home/GoodEntry.vue";
import RecTools from "@/components/Home/RecTools.vue";
import {ref} from "vue";
import ToolsEntries from "@/components/Tools/ToolsEntries.vue";
import FKit from "@/components/Tools/FKit.vue";
import SKit from "@/components/Tools/SKit.vue";

export default {
    name: "ToolsView",
    components: {FKit, SKit, ToolsEntries, TopBar, RecTools, ToolsMenu},

    setup() {

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

.fcontent {
    min-width: 300px !important;
    max-width: 300px !important;
    width: 300px !important;
    position: fixed;
    right: 0;
    margin-right: 900px;
    margin-top: 100px;
} 

.scontent {
    min-width: 300px !important;
    max-width: 300px !important;
    width: 300px !important;
    position: fixed;
    right: 0;
    margin-right: 600px;
    margin-top: 100px;
} 

.tcontent {
    min-width: 300px !important;
    max-width: 300px !important;
    width: 300px !important;
    position: fixed;
    right: 0;
    margin-right: 300px;
    margin-top: 100px;
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