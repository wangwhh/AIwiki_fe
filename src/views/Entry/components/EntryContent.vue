<!--词条内容-->
<template>
    <v-md-preview :text="content_text" class="vuepress-markdown-body"></v-md-preview>
</template>

<script>
import router from "@/router";
import {ref} from "vue";
import axios from "axios";
export default {
    name: "EntryContent",
    setup(props, { emit }) {
        const content_text = ref("");
        const id = router.currentRoute.value.query.id;
        axios.get(`../../../docs/${id}.md`).then(res => {
            content_text.value = res.data;
            emit('content-loaded'); // 发射事件
        })
        return {
            content_text,
        }
    }
}
</script>

<style scoped>
.vuepress-markdown-body {
    border-radius: 10px;
}
</style>