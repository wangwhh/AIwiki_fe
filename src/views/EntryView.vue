<template>
    <a-layout>
        <a-layout-sider class="entry-sider">
            <Anchor/>
        </a-layout-sider>
        <a-layout>
            <a-layout-content>
                <EntryContent class="entry-content" @content-loaded="setContentLoaded"/>
            </a-layout-content>
            <a-layout-sider class="entry-right-sider">
                <Relations/>
            </a-layout-sider>
        </a-layout>
    </a-layout>


</template>

<script>
import router from "@/router";
import {onMounted, provide, ref, watchEffect} from "vue";
import EntryContent from "@/components/Detail/EntryContent.vue";
import Anchor from "@/components/Detail/Anchor.vue";
import Relations from "@/components/Detail/Relations.vue";
import entries from "@/assets/entries_all";

export default {
    name: "EntryView",
    components: {Relations, EntryContent, Anchor},
    setup() {
        //let entry_id = ref(router.currentRoute.value.query.id);
        const entryData = ref(null);
        const contentLoaded = ref(false); // 新增状态
        onMounted(async () => {
            const entryId = router.currentRoute.value.query.id;
            if (entryId) {
                // entryData.value = await fetchEntryData(entryId);
                entryData.value = entries.value[entryId - 1];
                document.title = 'AIWiki - ' + entryData.value.title;
            }
        });
        const setContentLoaded = () => {
            contentLoaded.value = true;
            console.log('content loaded');
        };
        provide('contentLoaded', contentLoaded); // 向子组件提供状态
        return {
            contentLoaded,
            setContentLoaded,
            //entry_id
        }
    },
}
</script>

<style scoped>
.entry-content {
    margin: 100px 300px 20px 320px;
    overflow: initial;
}
.entry-sider {
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

.entry-right-sider {
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