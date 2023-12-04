<!-- 推荐工具 -->
<template>
    <a-card title="推荐工具" :bordered="false" style="width: 100%">
        <a-button v-for="entry in good_entries"
                  type="link" style="width: 100%; text-align: initial"
                  @click="
                      openTools(entry)
                  ">
            {{entry.title}}
        </a-button>
    </a-card>
</template>

<script>
import {ref} from "vue";

export default {
    name: "RecTools",
    setup() {
        const good_entries = ref([{
            title: "ChatGPT",
            id: 1,
            href: 'https://chat.openai.com/'
        },{
            title: "Stable Diffusion XL",
            id: 2,
            href: 'https://clipdrop.co/stable-diffusion'
        },{
            title: "文心一言",
            id: 3,
            href: 'https://yiyan.baidu.com/'
        },{
            title: "Notion AI",
            id: 4,
            href: 'https://www.notion.so/Notion-AI'
        },{
            title: "Bing Image Creator",
            id: 5,
            href: 'https://cn.bing.com/images/create'
        }])

        function openTools(entry) {
            window.open(entry.href, '_blank');
        }

        return {
            good_entries,
            openTools
        }
    }
}
</script>

<style scoped>

</style>