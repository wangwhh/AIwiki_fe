<template>
    <a-layout>
        <a-layout-sider class="sider-menu" >
          <ToolsMenu/>
        </a-layout-sider>
        <a-layout>
            <a-layout-content class="fcontent">
                <ToolsEntries/>
            </a-layout-content>            

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
    margin: 100px 340px 16px 270px;
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