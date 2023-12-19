<template>
    <v-md-editor v-model="text" height="100%"></v-md-editor>
</template>

<script>
import {onMounted, ref} from "vue";
import router from "@/router";
import axios from "axios";
export default {
    name: "EditContent",
    setup() {
        const text = ref("");
        const id = router.currentRoute.value.query.id;
        async function fetchText() {
            await axios.get(`../../../docs/${id}.md`).then(res => {
                text.value = res.data;
            })
        }
        onMounted(() => {
            fetchText();
        })

        return {
            text,
        }
    }
}
</script>

<style scoped>
.edit-content {
    margin: 100px 100px 0 100px;
    height: calc(100vh - 150px)
}
</style>