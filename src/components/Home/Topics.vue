<!--Topics.vue-->
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
import {inject, ref, watch} from "vue";
import router from "@/router";
import topics_all from "@/assets/topics_all";

export default {
    name: "Topics",
    setup() {
        const selectedKeys = inject('selectedKeys');
        let topics = ref([]);
        function getTopics() {
            topics.value = topics_all.value.filter(entry => entry.category === selectedKeys.value[0]);
        }
        getTopics();
        watch(selectedKeys, (newKey) => {
            getTopics();
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