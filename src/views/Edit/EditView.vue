<template>
    <a-layout>
        <a-layout-content class="edit-content">
            <a-float-button shape="square" description="提交" style="left: 30px; padding:3px">
                <template #icon>
                    <CheckCircleOutlined/>
                </template>
            </a-float-button>
            <EditContent/>
        </a-layout-content>
    </a-layout>
</template>

<script>

import EditContent from "@/views/Edit/components/EditContent.vue";
import {CheckCircleOutlined} from "@ant-design/icons-vue";

export default {
    name: "EditView",
    components: {EditContent, CheckCircleOutlined},

    setup() {

    },

}
</script>

<style scoped>
.edit-content {
    margin: 100px 100px 50px 100px;
    height: 80%;
}
</style>