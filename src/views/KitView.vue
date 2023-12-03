<template>
    <a-layout>
        <a-layout-sider class="kit-sider">
            <KitAnchor/>
        </a-layout-sider>
        <a-layout>
            <a-layout-content>
                <KitContent class="kit-content"/>
            </a-layout-content>
            <a-layout-sider class="kit-right-sider">
                <KitRelations/>
            </a-layout-sider>
        </a-layout>
    </a-layout>


</template>

<script>
import router from "@/router";
import {onMounted, ref, watchEffect} from "vue";
import KitContent from "@/components/Kit/KitContent.vue";
import KitAnchor from "@/components/Kit/KitAnchor.vue";
import KitRelations from "@/components/Kit/KitRelations.vue";
export default {
    name: "EntryView",
    components: {KitRelations, KitContent, KitAnchor},
    setup() {
        // 这个是临时的，之后使用get request获取
        const tmp_kit_data = ref([{
            id: 1,
            title: 'LoRA',
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
    margin: 100px 300px 20px 320px;
    overflow: initial;
}
.kit-sider {
    max-width: 270px !important;
    width : 270px !important;
    margin: 100px 0 10px 20px;
    background: white;
    border-radius: 10px;
    padding: 20px 20px 20px 10px;
    position: fixed;
    overflow: auto ;
    height: calc(100vh - 120px);
}

.kit-right-sider {
    min-width: 270px !important;
    max-width: 300px !important;
    width: 270px !important;
    position: fixed;
    right: 0;
    margin: 100px 10px 16px 0;
    background: white;
    border-radius: 10px;
}
</style>