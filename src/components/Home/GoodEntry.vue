<!-- 优质词条 -->
<template>
    <a-card title="优质词条" :bordered="false" style="width: 100%">
        <a-button v-for="entry in good_entries" type="link" style="width: 100%; text-align: initial">{{entry.title}}</a-button>
    </a-card>
</template>

<script>
import {ref} from "vue";

export default {
    name: "GoodEntry",
    setup() {
        const good_entries = ref([{
            title: "ChatGPT",
            id: 1
        },{
            title: "LLM",
            id: 2
        },{
            title: "CNN",
            id: 3
        },{
            title: "PyTorch",
            id: 4
        },{
            title: "BackProps",
            id: 3
        }])
        return {
            good_entries
        }
    }
}
</script>

<style scoped>

</style>