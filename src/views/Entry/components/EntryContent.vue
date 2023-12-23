<!--词条内容-->
<template>
    <v-md-preview :text="content_text" class="vuepress-markdown-body"></v-md-preview>
</template>

<script>
import router from "@/router";
import {onMounted, ref} from "vue";
import axios from "axios";
import {fetchEntry} from "@/api/entry";
export default {
    name: "EntryContent",
    setup(props, { emit }) {
        const content_text = ref("");
        const id = router.currentRoute.value.query.id;
        // axios.get(`../../../docs/${id}.md`).then(res => {
        //     content_text.value = res.data;
        //     emit('content-loaded'); // 发射事件
        // })
        onMounted(async () => {
            const entry = await fetchEntry(id);
            console.log(entry);
            content_text.value = entry.text;
            emit('content-loaded'); // 发射事件

            document.title = 'AIWiki - ' + entry.title;
        });
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