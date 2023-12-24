<!--Topics.vue-->
<template>
    <a-card v-for="topic in selectedTopic" class="cardStyle" :body-style="{ padding: 0, overflow: 'initial' }">
        <a-flex justify="space-between">
            <img
                alt="avatar"
                :src=topic.image
                class="imgStyle"
            />
            <a-flex vertical align="flex-end" justify="space-between" :style="{ padding: '32px' }">
                <a-typography style="display: contents">
                    <a-typography-title :level="2">
                        {{topic.title}}
                    </a-typography-title>
                    <a-typography-title :level="4">
                        {{topic.description}}
                    </a-typography-title>
                </a-typography>

                <a-button type="primary" @click="onEntryClicked(topic)" target="_blank">了解更多</a-button>
            </a-flex>
        </a-flex>
    </a-card>
</template>

<script>
import {inject, onMounted, ref, watch} from "vue";
import router from "@/router";
import {fetchTopics} from "@/api/home";

export default {
    name: "Topics",
    setup() {
        const selectedKeys = inject('selectedKeys');
        const topics = ref([]);
        const selectedTopic = ref([]);
        function selectTopics() {
            selectedTopic.value = topics.value.filter(entry => entry.category === selectedKeys.value[0]);
        }
        watch(selectedKeys, (newKey) => {
            selectTopics();
            console.log(selectedTopic.value)
        });
        function onEntryClicked(topic) {
            let new_page = router.resolve({
                path:'/entry' ,
                query: {
                    id: topic.id
                }
            });
            window.open(new_page.href, '_blank');
        }

        onMounted(async () => {
            topics.value = await fetchTopics();
            console.log("topics.value ", topics.value);
            selectTopics();
        })

        return {
            selectedTopic,
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