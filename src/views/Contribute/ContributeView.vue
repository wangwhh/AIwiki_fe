<template>
    <a-layout>
        <a-layout-content class="edit-content">
            <router-view/>
        </a-layout-content>
    </a-layout>
</template>

<script>

import EditContent from "@/views/Contribute/components/EditContent.vue";
import {CheckCircleOutlined} from "@ant-design/icons-vue";

export default {
    name: "ContributeView",
    components: {EditContent, CheckCircleOutlined},

    setup() {

    },

}
</script>

<style scoped>
.edit-content {
    margin: 100px 100px 0 100px;
    height: calc(100vh - 150px)
}
</style>