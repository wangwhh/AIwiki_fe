<template>
    <EntryContent class="entry-content"/>
    <Anchor/>
</template>

<script>
import router from "@/router";
import {onMounted, ref, watchEffect} from "vue";
import EntryContent from "@/components/Detail/EntryContent.vue";
import Anchor from "@/components/Detail/Anchor.vue";
export default {
    name: "EntryView",
    components: {EntryContent, Anchor},
    setup() {
        // 这个是临时的，之后使用get request获取
        const tmp_entry_data = ref([{
              id: 1,
              title: '词条1',
          },{
              id: 2,
              title: '词条2',
          }
        ]);
        //let entry_id = ref(router.currentRoute.value.query.id);
        const entryData = ref(null);

        onMounted(async () => {
            const entryId = router.currentRoute.value.query.id;
            if (entryId) {
                // entryData.value = await fetchEntryData(entryId);
                entryData.value = tmp_entry_data.value.find(e => e.id.toString() === entryId);
                document.title = 'AIWiki - ' + entryData.value.title;
            }
        });
        return {
            tmp_entry_data,
            //entry_id
        }
    },
}
</script>

<style scoped>
.entry-content {
    margin: 100px 300px 0 300px;

}

</style>