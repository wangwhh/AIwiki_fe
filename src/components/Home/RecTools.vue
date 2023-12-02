<!-- 推荐工具 -->
<template>
    <a-card title="推荐工具" :bordered="false" style="width: 100%">
        <a-button v-for="entry in good_entries" type="link" style="width: 100%; text-align: initial">{{entry.title}}</a-button>
    </a-card>
</template>

<script>
import {ref} from "vue";

export default {
    name: "RecTools",
    setup() {
        const good_entries = ref([{
            title: "ChatGPT",
            id: 1
        },{
            title: "Stable Diffusion",
            id: 2
        },{
            title: "文心一言",
            id: 3
        },{
            title: "AI绘画xxxx",
            id: 4
        },{
            title: "AI写作xxx",
            id: 5
        }])
        return {
            good_entries
        }
    }
}
</script>

<style scoped>

</style>