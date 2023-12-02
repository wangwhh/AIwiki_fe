<template>
    <a-flex wrap="wrap" gap="large" justify="space-around">
        <div v-for="entry_cell in entries_all" style="width: 100%">
            <a-divider orientation="left">
                {{ entry_cell.category }}
            </a-divider>

            <a-button v-for="entry in entry_cell.entries" type="link" style="width: 150px; margin-top: 10px">
                {{ entry }}
            </a-button>

        </div>
    </a-flex>
</template>

<script>
import {ref} from "vue";

export default {
    name: "ToolsEntries",
    setup() {
        let entries_all = ref([]);
        function tmp_generate_entry() {
            for(let i = 0; i < 5; i++) {
                let category = 'AI工具箱' + i;
                let entries = [];
                for (let i = 0; i < 8; i++) {
                    entries.push('工具' + i);
                }
                entries_all.value.push({
                    category,
                    entries
                });
            }
        }
        tmp_generate_entry();
        //console.log(entries_all.value)
        return {
            entries_all,
        };
    }
}
</script>

<style scoped>

</style>