<template>
    <a-card v-for="topic in topics" class="cardStyle" :body-style="{ padding: 0, overflow: 'initial' }">
        <a-flex justify="space-between">
            <img
                alt="avatar"
                :src=topic.img_src
                class="imgStyle"
            />
            <a-flex vertical align="flex-end" justify="space-between" :style="{ padding: '32px' }">
                <a-typography>
                    <a-typography-title :level="3">
                        {{topic.title}}
                    </a-typography-title>
                </a-typography>
                <a-button type="primary" @click="onEntryClicked(topic)" target="_blank">了解更多</a-button>
            </a-flex>
        </a-flex>
    </a-card>
</template>

<script>
import {ref} from "vue";
import router from "@/router";
import entries from "@/assets/entries_all";

export default {
    name: "Topics",
    setup() {
        const topics_id = ref([1, 2, 3, 4, 5]);
        let topics = ref([]);
        topics_id.value.forEach((id) => {
            topics.value.push(entries.value[id - 1]);
        });
        function onEntryClicked(topic) {
            let new_page = router.resolve({
                path:'/entry/' ,
                query: {
                    id: topic.id
                }
            });
            window.open(new_page.href, '_blank');
        }


        return {
            topics,
            onEntryClicked
        };
    }
}
</script>

<style scoped>
.cardStyle  {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 10px;
}
.imgStyle {
    display: block;
    height: 250px;
}
</style>