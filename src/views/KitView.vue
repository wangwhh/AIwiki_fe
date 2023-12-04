<template>
    <a-layout>
        <a-layout-sider class="kit-sider">
            <ToolsMenu/>
        </a-layout-sider>
        <a-layout>
            <a-layout-content>
                <KitContent class="kit-content"/>
            </a-layout-content>
            <a-layout-sider class="kit-right-sider">
                <RecTools/>
            </a-layout-sider>
        </a-layout>
    </a-layout>

</template>

<script>
import router from "@/router";
import {onMounted, ref, watchEffect} from "vue";
import KitContent from "@/components/Kit/KitContent.vue";
import ToolsMenu from "@/components/Tools/ToolsMenu.vue";
import KitAnchor from "@/components/Kit/KitAnchor.vue";
import RecTools from "@/components/Home/RecTools.vue";
import KitRelations from "@/components/Kit/KitRelations.vue";
export default {
    name: "EntryView",
    components: {KitRelations, KitContent, KitAnchor, ToolsMenu, RecTools},
    setup() {
        // 这个是临时的，之后使用get request获取
        const tmp_kit_data = ref([{
            id: 1,
            title: 'ChatGPT',
          },{
            id: 2,
            title: 'RLHF',
          },{
            id: 3,
            title: 'CNN',
        }
        ]);
        //let kit_id = ref(router.currentRoute.value.query.id);
        const kitData = ref(null);

        onMounted(async () => {
            const kitId = router.currentRoute.value.kit.id;
            if (kitId) {
                // kitData.value = await fetchEntryData(kitId);
                kitData.value = tmp_kit_data.value.find(e => e.id.toString() === kitId);
                document.title = 'AIWiki - ' + kitData.value.title;
            }
        });
        return {
            tmp_kit_data,
            //kit_id
        }
    },
}
</script>

<style scoped>
.kit-content {
    margin: 100px 340px 16px 270px;
    overflow: initial;
}
.kit-sider {
    height: 100%;
    width: 230px !important;
    max-width: 300px !important;
    margin: 100px 0 10px 20px;
    border-radius: 10px;
    background-color: white;
    position: fixed;
}

.kit-right-sider {
    min-width: 300px !important;
    max-width: 300px !important;
    width: 300px !important;
    position: fixed;
    right: 0;
    margin: 100px 20px 16px 0;
    background: white;
    border-radius: 10px;
}
</style>