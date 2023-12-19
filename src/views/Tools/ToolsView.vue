<template>
    <a-layout>
        <a-layout-sider class="sider-menu" >
          <ToolsMenu/>
        </a-layout-sider>
        <a-layout>
            <a-layout-content class="content">
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
import TopBar from "@/components/TopBar.vue";
import ToolsMenu from "@/views/Tools/components/ToolsMenu.vue";
// import GoodEntry from "@/components/Home/GoodEntry.vue";
import RecTools from "@/views/Home/components/RecTools.vue";
import {ref} from "vue";
import ToolsEntries from "@/views/Tools/components/ToolsEntries.vue";

export default {
    name: "ToolsView",
    components: {ToolsEntries, TopBar, RecTools, ToolsMenu},

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
.content {
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