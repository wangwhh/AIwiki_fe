<template>
    <div v-for="tool_set in ToolsEntries">
        <a-divider orientation="left" style="font-size: 20px">{{ tool_set[0].category}}</a-divider>
        <a-flex wrap="wrap" gap="large">
            <a-card v-for="kit in tool_set" hoverable class="cardStyle" :body-style="{ padding: 0, overflow: 'initial' }">
                <a-popover>
                    {{ kit.description }}
                </a-popover>
                <a-flex justify="space-between">
                    <img alt="avatar" :src=kit.url class="imgStyle" />
                    <a-flex vertical align="flex-end" justify="space-between" :style="{ padding: '10px' }">
                        <a-typography>
                            <a-typography-title align="center" :level="4">
                                {{ kit.title }}
                            </a-typography-title>
                        </a-typography>
                        <a-button type="primary" @click="onEntryClicked(kit)" target="_blank">跳转</a-button>
                    </a-flex>
                </a-flex>
            </a-card>
        </a-flex>
    </div>
</template>

<script>
import router from "@/router";
import { fetchTools } from "@/api/tools";
import {inject, onMounted, ref, watch} from "vue";

export default {
    name: "ToolsEntries",
    setup() {
        let ToolsEntries = ref([]);
        let tool_set = ref([])
        const selectedKeys2 = inject('selectedKeys2');
        function selectTools() {
            console.log("selectedKeys2.value[0] ", selectedKeys2.value[0])
            tool_set.value = ToolsEntries.value[selectedKeys2.value[0]];
            console.log("tool_set.value ", tool_set.value)
        }
        watch(selectedKeys2, (newKey) => {
            selectTools();
            console.log("tool_set.value ",tool_set.value)
        });

        function onEntryClicked(kit) {
            let new_page = router.resolve({
                path: '/kit/',
                query: {
                    id: kit.id
                }

            });
            // window.open(new_page.href, '_blank');
            window.open(kit.href, '_blank');
        }

        onMounted(async () => {
            const tools = await fetchTools();
            console.log("tools ", tools)
            const groups = {};
            tools.forEach(entry => {
                let category = entry.category;
                if (!groups[category]) {
                    groups[category] = [];
                }
                groups[category].push(entry);
            });
            ToolsEntries.value = groups;
            tool_set.value = ToolsEntries.value[selectedKeys2.value[0]]
            console.log("tool_set.value ", tool_set.value)
            console.log("ToolsEntries ",ToolsEntries.value)
            // for (var tool_set in ToolsEntries.value){
            //     console.log("tool_set ", tool_set)
            //     console.log("ToolsEntries.value[tool_set]", ToolsEntries.value[tool_set])
            //     console.log("ToolsEntries.value[tool_set][0]", ToolsEntries.value[tool_set][0])
            // }
        });

        return {
            ToolsEntries,
            onEntryClicked
        };
    }
}
</script>

<style scoped>
.cardStyle {
    width: calc(33% - 20px);
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 10px;
}

.imgStyle {
    display: block;
    height: 100px;
}
</style>