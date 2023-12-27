<template>
    <a-float-button shape="square" description="提交" style="left: 30px; padding:3px" @click="onButtonClick">
        <template #icon>
            <CheckCircleOutlined/>
        </template>
    </a-float-button>
    <v-md-editor v-model="text" height="100%"></v-md-editor>
    <a-modal v-model:open="open" title="请输入词条标题" @ok="handleOk">
        <a-input v-model:value="title" style="margin-top: 10px"/>
    </a-modal>
</template>

<script>
import {ref} from "vue";
import {CheckCircleOutlined} from "@ant-design/icons-vue";
import {addEntry} from "@/api/contribute";
import {notification} from "ant-design-vue";

export default {
    name: "AddContent",
    components: {CheckCircleOutlined},
    setup() {
        const text= ref("");
        const open= ref(false);
        const title= ref("");


        function onButtonClick() {
            open.value = true;
        }

        function handleOk() {
            submit();
            open.value = false;
        }
        async function submit() {
            console.log("submit");
            const entry= {
                title: title.value,
                text: text.value,
            }
            const res = addEntry(entry);
            if (res.code === 20000) {
                openNotification('success', '提交成功', '感谢您的贡献');
            } else {
                openNotification('error', '提交失败', '请检查您的网络');
            }
        }

        const openNotification = (type, title, msg) => {
            notification[type]({
                message: title,
                description: msg,
            });
        };

        return {
            text, submit, open, title, onButtonClick, handleOk
        }
    }
}
</script>

<style scoped>

</style>