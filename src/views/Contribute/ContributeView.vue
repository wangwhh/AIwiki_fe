<template>
    <a-layout>
        <a-layout-content class="edit-content">
            <router-view/>
        </a-layout-content>
    </a-layout>
</template>

<script>

import EditContent from "@/views/Contribute/index/EditContent.vue";
import {CheckCircleOutlined} from "@ant-design/icons-vue";
import isLogin from "@/store/isLogin";
import router from "@/router";
import openNotification from "@/components/notification";
import loginModalOpen from "@/store/loginModalOpen";

export default {
    name: "ContributeView",
    components: {EditContent, CheckCircleOutlined},

    setup() {
        if(!isLogin.value) {
            openNotification('warning', '请先登录');
            loginModalOpen.value = true;
        }
    },

}
</script>

<style scoped>
.edit-content {
    margin: 100px 100px 0 100px;
    height: calc(100vh - 150px)
}
</style>