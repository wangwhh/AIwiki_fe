<template>
    <a-card v-for="kit in ToolsEntries" class="cardStyle" :body-style="{ padding: 0, overflow: 'initial' }">
        <a-flex justify="space-between">
            <img
                alt="avatar"
                :src=kit.img_src
                class="imgStyle"
            />
            <a-flex vertical align="flex-end" justify="space-between" :style="{ padding: '10px' }">
                <a-typography>
                    <a-typography-title align="center" :level="4">
                        {{kit.title}}
                    </a-typography-title>
                </a-typography>
                <a-button type="primary" @click="onEntryClicked(kit)" target="_blank">跳转</a-button>
            </a-flex>
        </a-flex>
    </a-card>
</template>

<script>
import {ref} from "vue";
import router from "@/router";

export default {
    name: "ToolsEntries",
    setup() {
        let ToolsEntries = ref([
            {
                img_src: "src/assets/pics/toolpics/chatgpt.png",
                title: "ChatGPT",
                id: 1
            }, {
                img_src: "src/assets/pics/toolpics/openai.png",
                title: "Copy.ai",
                id: 4
            }, {
                img_src: "src/assets/pics/toolpics/gpt.png",
                title: "Midjourney",
                id: 7
            }, {
                img_src: "src/assets/pics/toolpics/openai.png",
                title: "阿里云智能logo设计",
                id: 13
            }
        ]);


        function onEntryClicked(kit) {
            let new_page = router.resolve({
                path:'/kit/' ,
                query: {
                    id: kit.id
                }

            });
            window.open(new_page.href, '_blank');
        }


        return {
            ToolsEntries,
            onEntryClicked
        };
    }
}
</script>

<style scoped>
.cardStyle  {
    width: 260px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 10px;
}
.imgStyle {
    display: block;
    height: 100px;
}

</style>