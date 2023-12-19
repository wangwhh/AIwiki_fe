<!-- 优质词条 -->
<template>
    <a-card title="优质词条" :bordered="false" style="width: 100%">
        <a-button v-for="entry in good_entries"
                  type="link" style="width: 100%; text-align: initial"
                  @click="onEntryClicked(entry)">
            {{entry.title}}
        </a-button>
    </a-card>
</template>

<script>
import {ref} from "vue";
import topics_all from "@/assets/topics_all";
import router from "@/router";

export default {
    name: "GoodEntry",
    setup() {
        const good_entries_id = ref([2, 5, 8, 10, 12])
        let good_entries = ref([]);
        good_entries_id.value.forEach((id) => {
            good_entries.value.push(topics_all.value[id - 1]);
        });
        function onEntryClicked(entry) {
            let new_page = router.resolve({
                path:'/entry/' ,
                query: {
                    id: entry.id
                }
            });
            window.open(new_page.href, '_blank');
        }
        return {
            good_entries,
            onEntryClicked
        }
    }
}
</script>

<style scoped>

</style>