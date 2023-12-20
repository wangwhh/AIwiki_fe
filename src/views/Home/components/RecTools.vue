<!-- 推荐工具 -->
<template>
    <a-card title="推荐工具" :bordered="false" style="width: 100%">
        <a-button v-for="entry in rec_tools"
                  type="link" style="width: 100%; text-align: initial"
                  @click="
                      openTools(entry)
                  ">
            {{entry.title}}
        </a-button>
    </a-card>
</template>

<script>
import {onMounted, ref} from "vue";
import {fetchRecTools} from "@/api/home";

export default {
    name: "RecTools",
    setup() {
        const rec_tools = ref([])

        function openTools(entry) {
            window.open(entry.href, '_blank');
        }


        onMounted(async () => {
            rec_tools.value = await fetchRecTools();
        })

        return {
            rec_tools,
            openTools
        }
    }
}
</script>

<style scoped>

</style>