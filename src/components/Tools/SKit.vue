<template>
    <a-card v-for="kit in SKit" class="cardStyle" :body-style="{ padding: 0, overflow: 'initial' }">
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
    name: "SKit",
    setup() {
        let SKit = ref([
            {
                img_src: "src/assets/pics/toolpics/chatgpt.png",
                title: "OpenAI",
                id: 2
            }, {
                img_src: "src/assets/pics/toolpics/openai.png",
                title: "GPT-4",
                id: 5
            }, {
                img_src: "src/assets/pics/toolpics/gpt.png",
                title: "快剪辑",
                id: 8
            }, {
                img_src: "src/assets/pics/toolpics/gpt.png",
                title: "Bing Image Creator",
                id: 11
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
            SKit,
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