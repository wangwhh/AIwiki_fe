<template>
    <a-float-button shape="square" description="提交" style="left: 30px; padding:3px" @click="submit">
        <template #icon>
            <CheckCircleOutlined/>
        </template>
    </a-float-button>
    <v-md-editor v-model="text" height="100%"></v-md-editor>
</template>

<script>
import {onMounted, ref} from "vue";
import router from "@/router";
import axios from "axios";
import {fetchEntry} from "@/api/entry";
import {CheckCircleOutlined} from "@ant-design/icons-vue";
import {postEdit} from "@/api/contribute";
import {notification} from "ant-design-vue";
export default {
    name: "EditContent",
    components: {CheckCircleOutlined},
    setup() {
        const text = ref("");
        const entry = ref({});
        const id = router.currentRoute.value.query.id;
        async function fetchText() {
            entry.value = await fetchEntry(id);
            text.value = entry.value.text;
        }
        onMounted(() => {
            fetchText();
        })

        async function submit() {
            console.log("submit");
            entry.value.text = text.value;
            console.log(entry.value);
            const res = postEdit(entry);
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
            text, submit
        }
    }
}
</script>

<style scoped>
.edit-content {
    margin: 100px 100px 0 100px;
    height: calc(100vh - 150px)
}
</style>