<template>
    <a-flex wrap="wrap" gap="large" justify="space-around">
        <div v-for="entry_cell in entries_all" style="width: 100%">
            <a-divider orientation="left">
                {{ entry_cell.category }}
            </a-divider>

            <a-button v-for="entry in entry_cell.entries"
                      type="link"
                      style="width: 150px; margin-top: 10px"
                      @click="onEntryClicked(entry)"
            >
                {{ entry.title }}
            </a-button>


        </div>
    </a-flex>
</template>

<script>
import {ref} from "vue";
import router from "@/router";

export default {
    name: "Entries",
    setup() {
        let entries_all = ref([]);
        function tmp_generate_entry() {
            for(let i = 1; i <= 5; i++) {
                let category = '模块' + i;
                let entries = [];
                for (let i = 1; i <= 8; i++) {
                    entries.push({
                        title: '词条' + i,
                        id: i
                    });
                }
                entries_all.value.push({
                    category,
                    entries
                });
            }
        }

        function onEntryClicked(entry) {
            let new_page = router.resolve({
                path:'/entry/' ,
                query: {
                    id: entry.id
                }

            });
            window.open(new_page.href, '_blank');
        }
        tmp_generate_entry();
        //console.log(entries_all.value)
        return {
            entries_all,
            onEntryClicked
        };
    }
}
</script>

<style scoped>

</style>