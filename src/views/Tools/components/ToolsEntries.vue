<template>
    <div v-for="tool_set in ToolsEntries">
        <a-divider orientation="left" style="font-size: 20px">{{tool_set.type}}</a-divider>
        <a-flex wrap="wrap" gap="large">
<!--            TODO: 在这里加一个popover显示工具的 description-->
            <a-card v-for="kit in tool_set.tools" hoverable class="cardStyle" :body-style="{ padding: 0, overflow: 'initial' }">
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
        </a-flex>
    </div>

</template>

<script>
import {onMounted, ref} from "vue";
import router from "@/router";
import {fetchTools} from "@/api/tools";

export default {
    name: "ToolsEntries",
    setup() {
        let ToolsEntries = ref([]);


        function onEntryClicked(kit) {
            let new_page = router.resolve({
                path:'/kit/' ,
                query: {
                    id: kit.id
                }

            });
            // window.open(new_page.href, '_blank');
            window.open(kit.href, '_blank');
        }

        onMounted(async () => {
            const tools = await fetchTools();
            console.log(tools)
            const groups = {};
            tools.forEach(entry => {
                let category = entry.category;
                if (!groups[category]) {
                    groups[category] = [];
                }
                groups[category].push(entry);
            });
            ToolsEntries.value = groups;

            console.log(ToolsEntries.value)
        });

        return {
            ToolsEntries,
            onEntryClicked
        };
    }
}
</script>

<style scoped>
.cardStyle  {
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