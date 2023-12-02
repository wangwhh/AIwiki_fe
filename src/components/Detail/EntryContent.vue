<!--词条内容-->
<!-- TODO: 引入MarkDown -->
<template>
    <v-md-preview :include-level="[3, 4]" :text="text" class="vuepress-markdown-body"></v-md-preview>
</template>

<script>
import test_text from '@/assets/test.js'

export default {
    name: "EntryContent",
    setup() {
        const text = test_text;
        return {
            text
        }
    }
}
</script>

<style scoped>
.vuepress-markdown-body {
    border-radius: 10px;
}
</style>