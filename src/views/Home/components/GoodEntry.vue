<!-- 优质词条 -->
<template>
    <a-card title="优质词条" :bordered="false" style="width: 100%">
        <a-button v-for="entry in good_entries"
                  type="link" style="width: 100%; text-align: initial"
                  @click="onEntryClicked(entry)">
            {{entry.title.slice(0, 20)}}
        </a-button>
    </a-card>
</template>

<script>
import {onMounted, ref} from "vue";
import router from "@/router";
import {fetchGoodEntry} from "@/api/home";

export default {
    name: "GoodEntry",
    setup() {
        const good_entries = ref([]);

        function onEntryClicked(entry) {
            let new_page = router.resolve({
                path:'/entry/' ,
                query: {
                    id: entry.id
                }
            });
            window.open(new_page.href, '_blank');
        }

        onMounted(async () => {
            good_entries.value = await fetchGoodEntry();
            console.log(good_entries.value)
        })

        return {
            good_entries,
            onEntryClicked
        }
    }
}
</script>

<style scoped>

</style>