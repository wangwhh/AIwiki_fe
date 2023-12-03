<!--词条内容-->
<template>
    <v-md-preview :text="content_text" class="vuepress-markdown-body"></v-md-preview>
</template>

<script>
import router from "@/router";
import {ref} from "vue";
import text from "@/assets/docs/1.js";
export default {
    name: "EntryContent",
    setup() {
        const content_text = ref("");
        const id = router.currentRoute.value.query.id;
        content_text.value = text;


        console.log(text);
        return {
            content_text
        }
    }
}
</script>

<style scoped>
.vuepress-markdown-body {
    border-radius: 10px;
}
</style>