<!--词条内容-->
<template>
    <v-md-preview :text="entry.text" class="vuepress-markdown-body"></v-md-preview>
</template>

<script>
import router from "@/router";
import {onMounted, ref} from "vue";
import axios from "axios";
import {fetchEntry} from "@/api/entry";
import {CheckCircleOutlined} from "@ant-design/icons-vue";
import {postEdit} from "@/api/contribute";
export default {
    name: "EntryContent",
    components: {CheckCircleOutlined},
    setup(props, { emit }) {
        const entry = ref({})
        const id = router.currentRoute.value.query.id;
        onMounted(async () => {
            entry.value = await fetchEntry(id);
            emit('content-loaded'); // 发射事件
            document.title = 'AIWiki - ' + entry.value.title;
        });

        return {
            entry
        }
    }
}
</script>

<style scoped>
.vuepress-markdown-body {
    border-radius: 10px;
}
</style>