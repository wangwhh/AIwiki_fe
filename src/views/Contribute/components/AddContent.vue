<template>
    <v-md-editor v-model="text" height="90%"></v-md-editor>
</template>

<script>
import {ref} from "vue";

export default {
    name: "AddContent",
    setup() {
        const text= ref("");
        return {
            text,
        }
    }
}
</script>

<style scoped>

</style>