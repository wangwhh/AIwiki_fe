<template>
  <HomeView/>
</template>

<script>
import { ref } from 'vue';
import Menu from "@/components/Menu.vue";
import {defineComponent} from "vue";
import HomeView from "@/views/HomeView.vue";

export default defineComponent({
    components: {HomeView, Menu}
})

</script>

<style scoped>

</style>